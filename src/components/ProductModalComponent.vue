<template>
  <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input type="text" class="form-control" v-model="editProduct.imageUrl"
                          placeholder="請輸入圖片連結">
                  <img class="img-fluid" :src="editProduct.imageUrl" alt="">
                </div>
              </div>
              <div v-if="Array.isArray(editProduct.imagesUrl)">
                <div v-for="(img, key) in editProduct.imagesUrl" :key="key +123">
                  <img :src="img" alt="" class="img-fluid">
                  <input type="text" class="form-control" v-model="editProduct.imagesUrl[key]">
                </div>
                <button type="button" class="btn btn-outline-primary btn-sm d-block w-100"
                v-if="editProduct.imagesUrl.length === 0 || editProduct.imagesUrl[editProduct.imagesUrl.length-1]"
                @click="editProduct.imagesUrl.push('')">
                  新增圖片
                </button>
                <button  type="button" class="btn btn-outline-danger btn-sm d-block w-100" v-else @click="editProduct.imagesUrl.pop()">
                  刪除圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <!-- <pre>
                {{ editProduct }}
              </pre> 可用pre標籤來看資料結構是否一致 -->
              <form ref="form">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input id="title" type="text" class="form-control" placeholder="請輸入標題"
                  v-model="editProduct.title" @blur="validateField('title')">
                  <div v-if="!isFieldValid.title" class="text-danger">
                    標題為必填欄位。
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input id="category" type="text" class="form-control"
                    v-model="editProduct.category" placeholder="請輸入分類" @blur="validateField('category')">
                    <div v-if="!isFieldValid.title" class="text-danger">
                      分類為必填欄位。
                    </div>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <input id="unit" type="text" class="form-control" v-model="editProduct.unit" placeholder="請輸入單位" @blur="validateField('uit')">
                    <div v-if="!isFieldValid.title" class="text-danger">
                      單位為必填欄位。
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input id="origin_price" type="number" min="0" class="form-control" v-model.number="editProduct.origin_price" placeholder="請輸入原價" @blur="validateField('origin_price')">
                    <div v-if="!isFieldValid.title" class="text-danger">
                      原價為必填欄位。
                    </div>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input id="price" type="number" min="0" class="form-control"
                    v-model.number="editProduct.price" placeholder="請輸入售價" @blur="validateField('price')">
                    <div v-if="!isFieldValid.title" class="text-danger">
                      原價為必填欄位。
                    </div>
                  </div>
                </div>
                <hr>
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea id="description" type="text" class="form-control"
                  v-model="editProduct.description" placeholder="請輸入產品描述">
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea id="content" type="text" class="form-control"
                  v-model="editProduct.content" placeholder="請輸入說明內容">
                  </textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input id="is_enabled" v-model="editProduct.is_enabled" class="form-check-input" type="checkbox"
                            :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
  props: ['tempProduct', 'updateProduct', 'isNew'],
  data () {
    return {
      productModal: null,
      editProduct: {},
      isFieldValid: {
        title: true, // 最初将所有字段都设置为有效
        category: true,
        unit: true,
        origin_price: true,
        price: true
      }
    }
  },
  methods: {
    openModal () {
      this.productModal.show()
    },
    closeModal () {
      this.productModal.hide()
    },
    validateField (fieldName) {
      // Perform field validation 执行字段验证
      this.isFieldValid[fieldName] = !!this.editProduct[fieldName]
    }
  },
  watch: {
    tempProduct () {
      this.editProduct = this.tempProduct
    }
  },
  mounted () {
    this.productModal = new Modal(this.$refs.productModal)
    this.editProduct = this.tempProduct
  }
}
</script>
