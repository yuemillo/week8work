<template>
    <div class="bg-primary py-5">
        <div class="container">
            <div class="d-flex py-3 px-3 bg-warning rounded-3 row">
              <img :src="product.imageUrl" class="card-img-top col-12 col-xl-6" alt="..." style="width: 550px;">
              <div class="hero-text ms-3 d-flex flex-column justify-content-between col-12 col-xl-6">
                <div class="hero-text-head">
                  <h3 class="display-2 fw-black text-black mb-3">{{ product.title }}</h3>
                  <p class="fs-3 text-black pb-3">{{ product.description }}</p>
                  <p class="fs-5 text-black pb-3">{{ product.content }}</p>
                </div>
                <div class="hero-text-footer d-flex align-items-end">
                  <div class="price-text">
                    <del class="h6">原價 {{ product.origin_price }} 元</del>
                    <div class="h5">現在只要 {{ product.price }} 元</div>
                  </div>
                  <button type="button" class="btn btn-primary ms-auto" @click.prevent="addToCart(product.id)">加入購物車</button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'pinia'

import cartStore from '@/stores/cartStore' // @=src

const { VITE_URL, VITE_NAME } = import.meta.env
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProducts () {
      const { id } = this.$route.params
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/product/${id}`
      axios.get(api)
        .then((res) => {
          this.product = res.data.product
        })
    },
    ...mapActions(cartStore, ['addToCart']),
    getCart () {
      axios.get(`${VITE_URL}/api/${VITE_NAME}/cart`)
        .then(res => {
          this.carts = res.data.data
          console.log(this.carts)
        })
    }
  },
  components: {
  },
  mounted () {
    this.getProducts()
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
<style scoped>
.fw-black{
  font-family: 'Noto Sans TC';
  font-weight: normal;
}
</style>
