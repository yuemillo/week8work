<template>
  <VueLoading :active="isLoading"/>
    <div id="app">

        <div class="container">

          <div class="mt-4">

            <!-- 購物車列表 -->
            <div class="text-end">
              <button class="btn btn-outline-danger" type="button" @click="removeAllCartItem">清空購物車</button>
            </div>
            <table class="table align-middle">
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
                          <button type="button" class="btn btn-outline-primary" :disabled="cart.qty === 1"
                          v-if="cart.qty > 1"
                          @click="cart.qty--; changeCartQty(cart, cart.qty)">-</button>
                          <button type="button" class="btn btn-outline-danger" v-else
                          @click="removeCartItem(cart.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                          </svg>
                          </button>
                          <input
                               min="1" type="number" class="form-control" v-model="cart.qty"
                               :disabled="cart.id === status.cartQtyLoading" readonly />
                          <button type="button" class="btn btn-outline-primary" @click="cart.qty++;
                          changeCartQty(cart, cart.qty)">+</button>
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

          <div class="my-5 row justify-content-center">
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

              <div class="mb-3">
                <label for="message" class="form-label" >留言</label>
                <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-danger"
                :disabled="carts.total === 0">送出訂單</button>
              </div>
            </v-form>
          </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'

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
          console.log(res)
          this.status.cartQtyLoading = ''
          this.getCart()
        })
    },
    removeCartItem (id) {
      this.status.cartQtyLoading = id
      axios.delete(`${VITE_URL}/api/${VITE_NAME}/cart/${id}`)
        .then(res => {
          this.status.cartQtyLoading = ''
          alert('已刪除產品')
          this.getCart()
        })
    },
    ...mapActions(cartStore, ['removeAllCartItem', 'getCart']),
    createOrder () {
      const url = `${VITE_URL}/api/${VITE_NAME}/order`
      const order = this.form
      axios.post(url, { data: order }).then((res) => {
        alert(res.data.message)
        this.$refs.form.resetForm()
        this.getCart()
        this.$router.push(`/order/${res.data.orderId}`)
      }).catch((err) => {
        alert(err.response.data.message)
      })
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'final_total'])
  },
  mounted () {
    this.getCart()
    console.log(this.carts)
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }
}

</script>
