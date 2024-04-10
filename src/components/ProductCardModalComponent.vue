<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ tempProduct.title }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{ tempProduct.category }}</span>
              <p>商品描述：{{ tempProduct.description }}</p>
              <p>商品內容：{{ tempProduct.content }}</p>
              <div class="h5" v-if="tempProduct.origin_price === tempProduct.price">{{ tempProduct.price }} 元</div>
              <div v-else>
                <del class="h6">原價 {{ tempProduct.origin_price }} 元</del>
                <div class="h5">現在只要 {{ tempProduct.price }} 元</div>
              </div>
              <div class="input-group">
                <button type="button" class="btn btn-primary ms-auto" @click="handleAddToCart(tempProduct.id, qty)">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import { mapActions } from 'pinia'

import cartStore from '@/stores/cartStore'
export default {
  props: ['tempProduct'],
  data () {
    return {
      productModal: null,
      qty: 1,
      addToCartSuccess: false
    }
  },
  methods: {
    open () {
      this.productModal.show()
    },
    close () {
      this.productModal.hide()
    },
    ...mapActions(cartStore, ['addToCart']),
    handleAddToCart () {
      // 调用 addToCart 方法添加商品到购物车
      this.addToCart(this.tempProduct.id, this.qty)
      this.productModal.hide()
    }
  },
  watch: {
    tempProduct () {
      this.qty = 1
    }
  },
  template: '#userProductModal',

  mounted () {
    this.productModal = new Modal(this.$refs.modal)
  }
}
</script>
