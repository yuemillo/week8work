<template>
  <div class="banner container-fluid position-relative">
    <div class="container d-flex flex-column align-items-center">
      <div class="container mt-3">
        <div class="row justify-content-center py-5">
        <div class="col-md-6">
          <div class="border p-4 mb-4 bg-warning border border-primary border-5 rounded-3">
            <h2 class="text-center">訂單已成立</h2>
            <table class="table mt-4 border-top border-bottom text-muted border-primary">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 pb-4 font-weight-normal">訂單編號</th>
                  <td class="border-0 px-0 pt-4">{{ order.id }}
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">收件人姓名</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">收件人手機</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.user.tel}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">收件人Email</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">收件人地址</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">備註</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.message }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
// import Swal from 'sweetalert2'
import cartStore from '@/stores/cartStore'
import { mapActions, mapState } from 'pinia'
const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      order: {
        user: {},
        product: {}
      },
      orderProduct: [],
      orderId: this.$route.params.id
    }
  },
  methods: {
    getOrder (id) {
      axios.get(`${VITE_URL}/v2/api/${VITE_NAME}/order/${id}`)
        .then((res) => {
          this.order = res.data.order
          console.log(res)
          this.orderProducts = Object.keys(this.order.products).map((i) => this.order.products[i])
        })
    },
    ...mapActions(cartStore, ['getCart'])
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted () {
    this.getOrder(this.orderId)
  }
}
</script>

<style scoped>
.banner{
  background-image: url('/7a1ce4f6-c3f9-45d2-a3b7-94d83cd263da.jpg');
  height: 600px;
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
