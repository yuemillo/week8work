<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0 fixed-top">
    <div class="container">
      <RouterLink class="navbar-brand" to="/"><img src="/public/catcatlogo.svg" style="width: 80px;height: auto"></RouterLink>
      <button class="navbar-toggler" type="button" @click="toggleMenu" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': isMenuOpen }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mb-3 mb-lg-0">
            <RouterLink class="nav-link active" aria-current="page" :to="{ path: '/about' }" @click="closeMenu">遊戲介紹</RouterLink>
          </li>
          <li class="nav-item mb-3 mb-lg-0">
            <RouterLink class="nav-link" :to="{ path: '/products' }" @click="closeMenu">喵喵商城</RouterLink>
          </li>
          <RouterLink class="btn btn-outline-primary position-relative ms-3 mb-3 mb-lg-0" :to="{ path: '/cart' }" @click="closeMenu"><i class="bi bi-cart4"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ this.carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </RouterLink>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
  <div class="footer bg-dark">
    <div class="footerhead text-center pt-3">
      <RouterLink class="navbar-brand" to="/"><img src="/public/catcatlogo.svg" style="width: 120px;height: auto"></RouterLink>
    </div>
    <ul class="footerword d-flex flex-column flex-lg-row justify-content-center mt-4 list-unstyled text-center">
      <li class="fs-5 fs-700 text-light px-3 py-2"><RouterLink class="nav-link active" aria-current="page" to="/about">遊戲介紹</RouterLink></li>
      <li class="fs-5 fs-700 text-light px-3 py-2"><RouterLink class="nav-link" to="/products" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">喵喵商城</RouterLink></li>
      <li class="fs-5 fs-700 text-light px-3 py-2"><RouterLink class="nav-link" to="/cart">購物車</RouterLink></li>
      <li class="fs-5 fs-700 text-light px-3 py-2"><RouterLink class="nav-link" to="/login">登入</RouterLink></li>
    </ul>
    <div class="icon d-flex justify-content-center mt-4">
      <i class="fa-brands fa-facebook text-light fs-1 px-5"></i>
      <i class="fa-brands fa-instagram text-light fs-1 px-5"></i>
      <i class="fa-brands fa-youtube text-light fs-1 px-5"></i>
    </div>
    <div class="footerbottom text-center mt-3 pb-5">
      <p class="fs-6 text-gray text-nowrap">此專題僅供面試作品所用，非商業營利性質</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'

import cartStore from '../stores/cartStore'

export default {
  data () {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu () {
      this.isMenuOpen = false
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
