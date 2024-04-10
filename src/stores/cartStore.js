import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_NAME } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    final_total: 0,
    total: 0,
    qty: 0
  }),
  actions: {
    getCart () {
      axios.get(`${VITE_URL}/v2/api/${VITE_NAME}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
        })
    },
    async addProuctToCart (id, qty) {
      const order = {
        product_id: id,
        qty
      }
      try {
        await axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/cart`, { data: order })
        this.qty += qty
        this.getCart()
        Swal.fire({
          title: '已加入購物車',
          position: 'top-end',
          showCancelButton: false,
          timer: 1500
        })
      } catch (error) {
        // 处理错误
      }
    },
    addToCart (id, qty) {
      const order = {
        product_id: id,
        qty
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/cart`, { data: order })
        .then(res => {
          this.qty += qty
          this.getCart()
          Swal.fire({
            title: '已加入購物車',
            position: 'top-end',
            showCancelButton: false,
            timer: 1500
          })
        })
    },
    removeAllCartItem (id) {
      axios.delete(`${VITE_URL}/api/${VITE_NAME}/carts`)
        .then(res => {
          Swal.fire({
            title: '已清空購物車',
            position: 'top-end',
            showCancelButton: false,
            timer: 1500
          })
          this.getCart()
        })
    }
  }
})
