<template>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/products">產品列表</RouterLink> |
        <RouterLink to="/cart">購物車</RouterLink> |
        <RouterLink to="/admin/products">後台 購物車列表</RouterLink> |
        <RouterLink to="/login">登入</RouterLink> |
    </nav>
    <h2>這是前台</h2>
    <router-view></router-view>
</template>
