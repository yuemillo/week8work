<template>
  <div class="banner container-fluid mt90">
    <div class="container d-flex flex-column align-items-center">
      <div class="container">
        <div class="row justify-content-center py-5">
          <div class="col-md-6">
            <div class="border p-4 mb-4 bg-white border border-primary border-5 rounded-3">
              <div class="process d-flex flex-column justify-content-center align-items-center mt-5">
                <div class="process-container">
                  <div class="strip bg-primary"></div>
                  <div class="d-flex justify-content-between">
                    <div class="process01 d-flex justify-content-center align-items-center bg-primary"><p class="text-white fs-3 m-0">1</p></div>
                    <div class="process01 d-flex justify-content-center align-items-center bg-primary"><p class="text-white fs-3 m-0">2</p></div>
                    <div class="process01 d-flex justify-content-center align-items-center bg-primary"><p class="text-white fs-3 m-0">3</p></div>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-1" style="width:260px">
                  <p>填寫訂單</p>
                  <p>確認訂單</p>
                  <p>完成訂購</p>
                </div>
              </div>
              <h2 class="text-center mt-5">訂單已成立</h2>
              <table class="table mt-4 border-top border-bottom text-muted border-primary">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 pb-4 font-weight-normal text-nowrap table-primary">訂單編號</th>
                    <td class="border-0 px-0 pt-4 table-secondary">{{ order.id }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal table-primary">收件人姓名</th>
                    <td class="border-0 px-0 pt-0 pb-4 table-secondary">{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal table-primary">收件人手機</th>
                    <td class="border-0 px-0 pt-0 pb-4 table-secondary">{{ order.user.tel}}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal table-primary">收件人Email</th>
                    <td class="border-0 px-0 pt-0 pb-4 table-secondary">{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal table-primary">收件人地址</th>
                    <td class="border-0 px-0 pt-0 pb-4 table-secondary">{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal table-primary">備註</th>
                    <td class="border-0 px-0 pt-0 pb-4 table-secondary">{{ order.message }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-center">
                <RouterLink class="text-black text-decoration-none my-3 fs-5 btn btn-outline-primary" to="/products">喵喵那麼可愛繼續買</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
  height: 100vh;
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
}
.process-container {
  position: relative;
  width: 260px;
}
.strip {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 90%;
  height: 6px;
  z-index: 10;
}
.process01 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 100;
}
</style>
