<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <RouterLink class="navbar-brand" to="/"><img src="/public/catcatlogo.svg" style="width: 80px;height: auto"></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/about">遊戲介紹</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/products">喵喵商城</RouterLink>
        </li>
        <RouterLink class="btn btn-outline-primary position-relative ms-3" to="/cart"><i class="bi bi-cart4"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ this.carts?.length }}
          <span class="visually-hidden">unread messages</span>
  </span>
        </RouterLink>
      </ul>
    </div>
  </div>
</nav>
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/products">產品列表</RouterLink> |
        <RouterLink to="/cart">購物車</RouterLink> |
        <RouterLink to="/admin/products">後台 購物車列表</RouterLink> |
        <RouterLink to="/login">登入</RouterLink> |
    </nav> -->
    <router-view></router-view>
    <div class="footer bg-dark">
    <div class="footerhead text-center pt-3">
      <RouterLink class="navbar-brand" to="/"><img src="/public/catcatlogo.svg" style="width: 120px;height: auto"></RouterLink>
    </div>
    <ul class="footerword d-flex flex-column flex-lg-row justify-content-center mt-4 list-unstyled text-center">
        <li class="fs-5 fs-700 text-light px-3 py-2"><RouterLink class="nav-link active" aria-current="page" to="/about">遊戲介紹</RouterLink></li>
        <li class="fs-5 fs-700 text-light px-3 py-2"><RouterLink class="nav-link" to="/products">喵喵商城</RouterLink></li>
        <li class="fs-5 fs-700 text-light px-3 py-2"><RouterLink class="nav-link" to="/cart">購物車</RouterLink></li>
        <li class="fs-5 fs-700 text-light px-3 py-2"><RouterLink class="nav-link" to="/login">登入</RouterLink></li>
    </ul>

    <div class="icon d-flex justify-content-center mt-4">
        <i class="fa-brands fa-facebook text-light fs-1 px-5"></i>
        <i class="fa-brands fa-instagram text-light fs-1 px-5"></i>
        <i class="fa-brands fa-youtube text-light fs-1 px-5"></i>
    </div>
    <div class="footerbottom text-center mt-3 pb-5">
        <p class="fs-5 text-primary">此專題僅供面試作品所用，非商業營利性質</p>
    </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'pinia'

import cartStore from '../stores/cartStore'
export default {
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  mounted () {
    this.getCart()
  }
}
</script>
