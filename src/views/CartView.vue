<template>
  <VueLoading :active="isLoading"/>
  <div id="app">
    <div class="container mt90">
      <div class="process d-flex flex-column justify-content-center align-items-center mt-5" v-if="this.carts.length !== 0">
        <div class="process-container mt-5">
          <div class="strip bg-primary"></div>
          <div class="d-flex justify-content-between">
            <div class="process01 d-flex justify-content-center align-items-center bg-primary"><p class="text-white fs-3 m-0">1</p></div>
            <div class="process01 d-flex justify-content-center align-items-center border border-3 border-primary bg-white"><p class="text-black fs-3 m-0">2</p></div>
            <div class="process01 d-flex justify-content-center align-items-center border border-3 border-primary bg-white"><p class="text-black fs-3 m-0">3</p></div>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-1" style="width:340px">
          <p>填寫訂單</p>
          <p>確認訂單</p>
          <p>完成訂購</p>
        </div>
      </div>
      <div class="mt-4">
        <!-- 購物車列表 -->
        <div class="text-end">
          <button class="btn btn-outline-danger" type="button" @click="handleremoveAllCartItem"
          v-if="this.carts.length !== 0">清空購物車</button>
        </div>
        <div v-if="this.carts.length === 0" class="d-flex flex-column align-items-center">
          <h2 class="fs-1 text-center mt-5">購物車是空的</h2>
          <img src="/no-d2d1ae91-fee6-432e-a183-b785f3c2ab31.png" width="500px" alt="購物車是空的" class="mx-auto img-fluid">
          <RouterLink class="text-black text-decoration-none mb-5 fs-3 btn btn-outline-primary" to="/products">快去選隻喵喵吧!</RouterLink>
        </div>
        <table class="table align-middle" v-show="this.carts.length !== 0">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th class="text-end">單價</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="cart in this.carts" :key="cart.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(cart.id)"
                :disabled="status.cartQtyLoading === cart.id">
                <!-- <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                v-if="status.cartQtyLoading === cart.id"></span> loading會出現異常,在加減數量時會一直loading-->
                  x
                </button>
              </td>
              <td>
                {{ cart.product.title }}
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <button type="button" class="btn btn-outline-primary" :disabled="cart.qty === 1  || cart.id === status.cartQtyLoading"
                    v-if="cart.qty > 1"
                    @click="cart.qty--; changeCartQty(cart, cart.qty)">-</button>
                    <button type="button" class="btn btn-outline-danger" v-else
                    @click="removeCartItem(cart.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                    </button>
                    <input
                          min="1" type="number" class="form-control" v-model="cart.qty" readonly />
                    <button type="button" class="btn btn-outline-primary" @click="cart.qty++;
                    changeCartQty(cart, cart.qty)" :disabled="cart.id === status.cartQtyLoading">+</button>
                  </div>
                </div>
              </td>
              <td class="text-end">
                  {{ cart.total }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ final_total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="my-5 row justify-content-center" v-show="carts.length !== 0">
        <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field id="email"
                      name="email"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors['email'] }"
                      placeholder="請輸入 Email"
                      rules="email|required"
                      v-model="form.user.email"
                    ></v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field id="name"
                      name="姓名"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['姓名'] }"
                      placeholder="請輸入姓名"
                      rules="required"
                      v-model="form.user.name"
            ></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field id="tel"
                      name="電話"
                      type="tel"
                      class="form-control"
                      :class="{ 'is-invalid': errors['電話'] }"
                      placeholder="請輸入電話"
                      rules="required|min:8|max:10"
                      v-model="form.user.tel"
                      ></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field id="address"
                      name="地址"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['地址'] }"
                      placeholder="請輸入地址"
                      rules="required"
                      v-model="form.user.address"></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>
          <div class="my-3">
            <label for="message" class="form-label" >留言<span class="text-muted">(選填)</span></label>
            <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger"
            :disabled="carts.total === 0 || isSubmitDisabled">送出訂單</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import Swal from 'sweetalert2'

import cartStore from '@/stores/cartStore'

const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      products: [],
      tempProduct: {},
      orderId: this.$route.params.id,
      status: {
        addCartLoading: '',
        cartQtyLoading: ''
      },
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    changeCartQty (item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty
      }
      this.status.cartQtyLoading = item.id
      axios.put(`${VITE_URL}/api/${VITE_NAME}/cart/${item.id}`, { data: order })
        .then(res => {
          this.status.cartQtyLoading = ''
          this.getCart()
        })
    },
    removeCartItem (id) {
      this.status.cartQtyLoading = id
      axios.delete(`${VITE_URL}/api/${VITE_NAME}/cart/${id}`)
        .then(res => {
          this.status.cartQtyLoading = ''
          Swal.fire({
            title: '已刪除產品',
            position: 'top-end',
            showCancelButton: false,
            timer: 1500
          })
          this.getCart()
        })
    },
    ...mapActions(cartStore, ['removeAllCartItem', 'getCart']),
    handleremoveAllCartItem () {
      this.removeAllCartItem()
    },
    createOrder () {
      const url = `${VITE_URL}/api/${VITE_NAME}/order`
      const order = this.form
      axios.post(url, { data: order }).then((res) => {
        this.$refs.form.resetForm()
        this.getCart()
        this.$router.push(`/order/${res.data.orderId}`)
        Swal.fire({
          title: '訂單已送出',
          position: 'top-end',
          showCancelButton: false,
          timer: 1500
        })
      }).catch((err) => {
        alert(err.response.data.message)
      })
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'final_total']),
    isSubmitDisabled () {
    // 检查表单字段是否有任何一个为空
      return !this.form.user.email || !this.form.user.name || !this.form.user.tel || !this.form.user.address
    }
  },
  mounted () {
    this.getCart()
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }
}
</script>

<style scoped>
.process-container {
  position: relative;
  width: 320px;
}
.strip {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 90%;
  height: 6px;
  z-index: -10;
}
.process01 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
