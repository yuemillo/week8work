<template>
    <h2>產品列表</h2>
    <div class="container">
        <div class="text-end mt-4">
          <button class="btn btn-primary"  @click="openModal('new')">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.category }}</td>
              <td>{{ product.title }}</td>
              <td class="text-end">
                {{ product.origin_price }}
              </td>
              <td class="text-end">
                {{ product.price }}
              </td>
              <td>
                <span  class="text-success" v-if="product.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit',product)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm"  @click="openModal('delete',product)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <PagintionComponent :pages="pages" :get-products="getProducts"></PagintionComponent>
      </div>
      <!-- Modal -->
      <ProductModalComponent :temp-product="tempProduct" :update-Product="updateProduct" :is-new="isNew" ref="controlModal"></ProductModalComponent>
      <DelProductModalComponent :temp-product="tempProduct" :delete-Product="deleteProduct" ref="controlDelModal"></DelProductModalComponent>
</template>

<script>
import axios from 'axios'
import PagintionComponent from '../../components/PagintionComponent.vue'
import ProductModalComponent from '../../components/ProductModalComponent.vue'
import DelProductModalComponent from '../../components/DelProductModalComponent.vue'
const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      products: [],
      pages: {},
      tempProduct: {
        imageUrl: ''
      }, // Modal代入資料
      isNew: false // Modal新增或編輯API時判斷
    }
  },
  methods: {
    checkAdmin () {
      // 登入驗證
      const url = `${VITE_URL}/api/user/check`
      axios.post(url)
        .then((response) => {
        })
    },
    getProducts (page = 1) {
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/admin/products?page=${page}`
      axios.get(api)
        .then((res) => {
          this.products = res.data.products
          this.pages = res.data.pagination
        })
    },
    openModal (status, product) {
      // status判斷當前點擊是新增/編輯/刪除按鈕
      // product為當前點擊資料
      if (status === 'new') {
        this.tempProduct = {
          imageUrl: []
        }
        this.isNew = true
        // productModal.show();
        // 用外層的ref控制內層的methods
        this.$refs.controlModal.openModal()
      } else if (status === 'edit') {
        this.tempProduct = { ...product }
        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = []
        }
        this.isNew = false
        // productModal.show();
        this.$refs.controlModal.openModal()
      } else if (status === 'delete') {
        this.tempProduct = { ...product }
        this.$refs.controlDelModal.openModal()
        // delProductModal.show();
      }
    },
    updateProduct () {
      // 新增
      let api = `${VITE_URL}/v2/api/${VITE_NAME}/admin/product`

      let method = 'post'
      // 更新
      if (!this.isNew) {
        api = `${VITE_URL}/v2/api/${VITE_NAME}/admin/product/${this.tempProduct.id}`
        method = 'put'
      }
      axios[method](api, { data: this.tempProduct })
        .then(res => {
          console.log(res)
          this.getProducts()
          //    productModal.hide();
          this.$refs.controlModal.closeModal()
          this.tempProduct = {}
        }).catch(err => {
          alert(err.data.message)
        })
    },
    deleteProduct () {
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/admin/product/${this.tempProduct.id}`
      axios.delete(api)
        .then(res => {
          console.log(res)
          this.getProducts()
          this.$refs.controlDelModal.closeModal()
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1')
    axios.defaults.headers.common.Authorization = token
    // 儲存token避免重複登入
    this.checkAdmin()
    this.getProducts()
  },
  // 區域註冊,注意要加S
  components: {
    PagintionComponent,
    ProductModalComponent,
    DelProductModalComponent
    // pagintion,
    // ProductModal,
    // DelProductModal
  }
}
</script>
