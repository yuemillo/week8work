<template>
    <h2>這是後台</h2>
    <nav>
        <RouterLink to="/admin/products">產品列表</RouterLink> |
        <RouterLink to="/admin/order">訂單列表</RouterLink> |
        <RouterLink to="/">回到前台</RouterLink>
    </nav>
    <router-view></router-view>
</template>
<script>
import axios from 'axios'
const { VITE_URL } = import.meta.env

export default {
  methods: {
    checkUser () {
      const api = `${VITE_URL}/v2/api/user/check`
      axios.post(api).then((response) => {
        // const { token, expired } = response.data
        // 寫入 cookie token
        // expires 設置有效時間
        console.log('成功', response.data.success)
        // document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`
        // window.location = 'products.html'
      }).catch(() => {
        this.$router.push('/login')
        // 未登入,強制踼到前到
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
