<template>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- v-bind控制disabled的clss動態屬性 -->
      <li class="page-item" :class="{disabled: !pages.has_pre}">
        <a class="page-link" aria-label="Previous" @click="getProducts(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page + 123"
      :class="{active: page === pages.current_page}">
        <a class="page-link" @click="getProducts(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{disabled: !pages.has_next}">
        <a class="page-link" aria-label="Next" @click="getProducts(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages', 'getProducts'],
  methods: {
    updatePage (page) {
      this.$emit('emitPages', page)
    }
  }
}
</script>
