<template>
  <VueLoading :active="isLoading"/>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in orders" :key="item.id">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{$filters.date(item.create_at)}}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in item.products" :key="product.id">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openModal(item)">
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelOrderModal(item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal
    :order="tempOrder"
    ref="orderModal"
    @update-paid="updatePaid"/>
  <DelModal
    :item="tempOrder"
    ref="delModal"
    @del-item="delOrder"
  />
  <PagintionComponent
    :pages="pagination" @emitPages="getOrders"
  />
</template>

<script>
import axios from 'axios'
import { mapActions } from 'pinia'
import { useToastMessageStore } from '@/stores/toastMessage'

import OrderModal from '../../components/OrderModal.vue'
import DelModal from '../../components/DelModal.vue'
import PagintionComponent from '../../components/PagintionComponent.vue'

const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      isNew: false,
      orders: {},
      tempOrder: {},
      pagination: {},
      currentPage: 1
    }
  },
  components: {
    OrderModal,
    DelModal,
    PagintionComponent
  },
  methods: {
    checkAdmin () {
      // 登入驗證
      const url = `${VITE_URL}/api/user/check`
      axios.post(url)
        .then((response) => {
        })
    },
    ...mapActions(useToastMessageStore, ['pushMessage']),
    getOrders (currentPage = 1) {
      // 取得訂單
      this.currentPage = currentPage
      const url = `${VITE_URL}/v2/api/${VITE_NAME}/admin/orders?page=${currentPage}`
      // this.isLoading = true
      axios.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders
        this.pagination = response.data.pagination
        // this.isLoading = false
      }).catch((error) => {
        // this.isLoading = false
        this.pushMessage({
          style: 'danger',
          title: '錯誤訊息',
          content: error.response.data.message
        })
      })
    },
    openModal (item) {
      // 檢視按鈕
      this.tempOrder = { ...item }
      this.isNew = false
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
    },
    openDelOrderModal (item) {
      // 刪除
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.openModal()
    },
    updatePaid (item) {
      // this.isLoading = true;
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      axios.put(api, { data: paid })
        .then((response) => {
        // this.isLoading = false;
          const orderComponent = this.$refs.orderModal
          orderComponent.hideModal()

          this.pushMessage({
            style: 'success',
            title: '更新付款狀態',
            content: response.data.message
          })

          this.getOrders(this.currentPage)
        }).catch((error) => {
          this.isLoading = false

          this.pushMessage({
            style: 'danger',
            title: '錯誤訊息',
            content: error.response.data.message
          })
        })
    },
    delOrder () {
      const url = `${VITE_URL}/v2/api/${VITE_NAME}/admin/order/${this.tempOrder.id}`
      // this.isLoading = true
      axios.delete(url).then(() => {
        // this.isLoading = false

        const delComponent = this.$refs.delModal
        delComponent.hideModal()

        this.getOrders(this.currentPage)
      }).catch((error) => {
        this.isLoading = false
        this.pushMessage({
          style: 'danger',
          title: '錯誤訊息',
          content: error.response.data.message
        })
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
    this.getOrders()
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>
