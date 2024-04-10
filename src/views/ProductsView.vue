<template>
  <VueLoading :active="isLoading"/>
  <div class="bg-primary mt90">
    <div class="container">
      <h3 class="display-2 fw-black text-black text-center pt-5 mb-3">喵喵商城</h3>
      <p class="fs-3 text-black text-center pb-3">選擇您的喵喵英雄，你可以專攻一位，或是挑戰駕馭所有英雄。</p>
      <ul class="d-flex list-unstyled flex-wrap">
        <li>
          <RouterLink class="fs-4 btn btn-info px-4 mb-1 me-3 rounded-pill text-nowrap mb-3" to="/products">全部</RouterLink>
        </li>
        <li v-for="item in categories" :key="item">
          <RouterLink class="fs-4 btn btn-info px-4 mb-1 me-3 rounded-pill text-nowrap" :to="`/products?category=${item}`">{{ item }}</RouterLink>
        </li>
      </ul>
      <div class="row row-cols-1 row-cols-md-4 g-4 pb-5">
        <div class="col" v-for="product in products" :key="product.id">
          <RouterLink :to="`/product/${product.id}`" class="text-decoration-none card-hover">
              <div class="card bg-warning">
              <img :src="product.imageUrl" class="card-img-top" :alt="product.title">
              <div class="card-body">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <p class="card-text">{{ product.description }}</p>
              </div>
              </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL, VITE_NAME } = import.meta.env
export default {
  data () {
    return {
      isLoading: true,
      products: [],
      categories: ['近戰', '遠程', '輔助'],
      carts: {},
      status: {
        addCartLoading: ''
      }
    }
  },
  watch: {
    '$route.query': {
      handler () {
        if (Object.keys(this.$route.query).length > 0) {
          this.getProducts()
        } else {
          this.getProductsAll()
        }
      },
      deep: true
    }
  },
  methods: {
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
    getProducts () {
      const { category = '' } = this.$route.query
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/products?category=${category}`
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
    addToCart (productID, qty = 1) {
      const order = {
        productID,
        qty
      }
      this.status.addCartLoading = productID
      axios.post(`${VITE_URL}/api/${VITE_NAME}/cart`, { data: order })
        .then(res => {
          this.getCart()
          this.$refs.userModal.close()
        })
    },
    getCart () {
      axios.get(`${VITE_URL}/api/${VITE_NAME}/cart`)
        .then(res => {
          this.carts = res.data.data
        })
    }
  },
  mounted () {
    this.getProductsAll()
  }
}
</script>

<style>
.fw-black{
  font-family: 'Noto Sans TC,  sans-serif';
  font-weight: normal;
}
.card-hover:hover{
  opacity: .3;
}
</style>
