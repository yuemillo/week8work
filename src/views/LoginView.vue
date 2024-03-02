<template>
    <h2>登入</h2>
    <div class="container">
          <div class="row justify-content-center">
            <h1 class="h3 mb-3 font-weight-normal">
              請先登入
            </h1>
            <div class="col-8">
              <form id="form" class="form-signin" @submit.prevent="login">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="username" v-model="user.username"
                    placeholder="name@example.com" required autofocus>
                  <label for="username">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="password" v-model="user.password"
                    placeholder="Password" required>
                  <label for="password">Password</label>
                </div>
                <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                  登入
                </button>
              </form>
            </div>
          </div>
          <p class="mt-5 mb-3 text-muted">
            &copy; 2021~∞ - 六角學院
          </p>
        </div>
  </template>

<script>
import axios from 'axios'

const { VITE_URL } = import.meta.env
// 環境變數

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${VITE_URL}/v2/admin/signin`
      axios.post(url, this.user)
        .then((response) => {
          const { token, expired } = response.data
          // 寫入cookie
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`
          this.$router.push('/admin/products')
          // 用router登入完成切換頁面
        })
        .catch((err) => {
          alert(err.data.message)
          this.$router.push('/login')
        })
    }
  }
}
</script>
