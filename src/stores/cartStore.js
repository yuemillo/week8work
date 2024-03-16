import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_URL, VITE_NAME } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    final_total: 0,
    total: 0
  }),
  actions: {
    getCart () {
      axios.get(`${VITE_URL}/v2/api/${VITE_NAME}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
          console.log('pinia cart', this.cart)
        })
    },
    addToCart (id) {
      const order = {
        product_id: id,
        qty: 1
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/cart`, { data: order })
        .then(res => {
          alert('已加入購物車')
          // this.status.addCartLoading = ''
          this.getCart()
        })
    },
    removeAllCartItem (id) {
      axios.delete(`${VITE_URL}/api/${VITE_NAME}/carts`)
        .then(res => {
          alert('已清空購物車')
          this.getCart()
        })
    }
  }
})

// if (id === res.data.data.product_id) {
//   return alert('已有相同英雄')
// } else {
//   alert('已加入購物車')
//   // this.status.addCartLoading = ''
//   this.getCart()
// }
