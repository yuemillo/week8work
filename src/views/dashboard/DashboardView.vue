<template>
  <h2>這是後台</h2>
  <nav>
    <RouterLink to="/admin/products">產品列表</RouterLink> |
    <RouterLink to="/admin/order">訂單列表</RouterLink> |
    <RouterLink to="/">回到前台</RouterLink> |
    <RouterLink  @click="logout" to="/login">登出</RouterLink>
  </nav>
  <RouterView />
</template>

<script>
import axios from 'axios'
import { mapActions } from 'pinia'
import { useToastMessageStore } from '@/stores/toastMessage'
const { VITE_URL } = import.meta.env

export default {
  methods: {
    ...mapActions(useToastMessageStore, ['pushMessage']),
    checkUser () {
      const api = `${VITE_URL}/v2/api/user/check`
      axios.post(api).then((res) => {
      }).catch(() => {
        this.$router.push('/login')
        // 未登入,強制踼到前到
      })
    },
    logout () {
      const api = `${VITE_URL}/v2/logout`
      this.$http.post(api)
        .then((response) => {
          // 清除 cookie
          document.cookie = 'hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
          this.pushMessage({
            style: 'success',
            title: '登出狀態',
            content: response.data.message
          })
        })
        .catch((error) => {
          this.pushMessage({
            style: 'danger',
            title: '登出狀態',
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
    this.checkUser()
  }
}
</script>
