<template>
  <VueLoading :active="isLoading"/>
  <div class="bg-primary py-5 mt90">
    <div class="container">
      <div class="d-flex py-3 px-3 bg-warning rounded-3 row">
        <img :src="product.imageUrl" class="card-img-top col-12 col-xl-6" :alt="product.title" style="width: 550px;">
        <div class="hero-text ms-3 d-flex flex-column justify-content-between col-12 col-xl-6">
          <div class="hero-text-head">
            <h3 class="display-2 fw-black text-black mb-1">{{ product.title }}</h3>
            <span class="badge bg-primary rounded-pill fs-5 mb-1">{{ product.category }}</span>
            <p class="fs-3 text-black pb-3">{{ product.description }}</p>
            <p class="fs-5 text-black pb-3">{{ product.content }}</p>
          </div>
          <div class="hero-text-footer align-items-end">
            <select name="" id="" class="form-select mb-3"  style="width: 300px;" v-model="selectedQty">
                  <option :value="i" v-for="i in 20" :key="i">{{i}}</option>
           </select>
                <!-- 使用下拉式選單,避免客戶亂填 -->
            <div class="d-flex">
              <div class="price-text">
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <div class="h5">現在只要 {{ product.price }} 元</div>
              </div>
              <button type="button" class="btn btn-primary ms-auto" @click.prevent="addProuctToCart(product.id, selectedQty)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
      <div class="h3 my-3">推薦喵喵</div>
      <div class="d-flex flex-wrap">
        <div class="col" v-for="product in filteredProducts" :key="product.id">
          <RouterLink :to="`/product/${product.id}`" class="text-decoration-none card-hover">
            <div class="d-flex flex-column align-items-center my-3">
              <img :src="product.imageUrl" class="card-img-top" :alt="product.title" style="width: 150px;">
              <h5 class="text-black card-title mt-2">{{ product.title }}</h5>
            </div>
          </RouterLink>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

import cartStore from '@/stores/cartStore'

const { VITE_URL, VITE_NAME } = import.meta.env
export default {
  data () {
    return {
      isLoading: true,
      product: {},
      products: [],
      selectedQty: 1,
      category: '',
      categories: ['近戰', '遠程', '輔助']
    }
  },
  computed: {
    filteredProducts () {
      const filtered = this.products.filter(product => product.category === this.category && product.id !== this.product.id)
      return filtered.slice(0, 5)
    }
  },
  methods: {
    getProducts () {
      const { id } = this.$route.params
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/product/${id}`
      axios.get(api)
        .then((res) => {
          this.product = res.data.product
          this.category = res.data.product.category
          this.isLoading = false
        })
        .catch((error) => {
          console.error('Error fetching products:', error)
          this.isLoading = false
        })
    },
    getProductsAll () {
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/products/all`
      axios.get(api)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch((error) => {
          console.error('Error fetching products:', error)
          this.isLoading = false
        })
    },
    async addProuctToCart (productId, qty) {
      const store = cartStore()
      await store.addProuctToCart(productId, qty)
    },
    getCart () {
      axios.get(`${VITE_URL}/api/${VITE_NAME}/cart`)
        .then(res => {
          this.carts = res.data.data
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    const { id } = to.params
    const api = `${VITE_URL}/v2/api/${VITE_NAME}/product/${id}`
    axios.get(api)
      .then((res) => {
        next(vm => {
          vm.product = res.data.product
          vm.category = res.data.product.category
          vm.isLoading = false
          window.scrollTo(0, 0) // 滚动到页面顶部
        })
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
        next(false)
      })
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    const api = `${VITE_URL}/v2/api/${VITE_NAME}/product/${id}`
    axios.get(api)
      .then((res) => {
        this.product = res.data.product
        this.category = res.data.product.category
        this.isLoading = false
        window.scrollTo(0, 0) // 滚动到页面顶部
        next()
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
        next(false)
      })
  },
  mounted () {
    this.getProducts()
    this.getProductsAll()
  }
}
</script>

<style scoped>
.fw-black{
  font-family: 'Noto Sans TC, sans-serif';
  font-weight: normal;
}
</style>
