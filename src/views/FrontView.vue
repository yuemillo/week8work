<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <RouterLink class="navbar-brand" to="/"><img src="/public/catcatlogo.svg" style="width: 80px;height: auto"></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/about">遊戲介紹</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/products">商城</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/cart">購物車</RouterLink>
        </li>
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
</template>
