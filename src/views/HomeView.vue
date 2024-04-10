<template>
  <VueLoading :active="isLoading" class="bg-dark">
    <div class="fw-black text-danger neon"><i class="fa-solid fa-triangle-exclamation"></i>前方高能 非戰鬥人員迅速撤離<i class="fa-solid fa-triangle-exclamation"></i></div>
  </VueLoading>
  <div class="banner container-fluid position-relative">
    <div class="banner-overlay"></div>
    <div class="carouselTitle position-absolute d-none d-xl-block">
      <div class="carouselTitleBig display-1 fw-black text-white">最貓的遊戲內容</div>
      <div class="carouselTitleSmall fs-1 fw-black bg-warning text-dark text-center mt-5 cursor"><RouterLink class="text-black text-decoration-none" to="/products">等您來加入</RouterLink></div>
    </div>
    <div class="carouselTitle position-absolute d-block d-xl-none">
      <div class="carouselTitleBig fs-2 fw-black text-white text-nowrap">最貓的遊戲內容</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="fs-5 fw-black bg-warning text-dark btn btn-waring"><RouterLink class="text-black text-decoration-none" to="/products">等您來加入</RouterLink></div>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-primary pb-3 pt-5 d-none d-xl-block">
    <div class="game-feature-bg d-flex position-relative">
      <img src="/cbcc5ef9-8e33-4006-a889-13c92d6f7275L.png" class="me-auto" alt="埃及石像喵喵">
      <img src="/cbcc5ef9-8e33-4006-a889-13c92d6f7275R.png" class="ms-auto" alt="埃及石像喵喵">
      <div class="container position-absolute top-50 start-50 translate-middle">
      <h3 class="display-1 fw-black text-black text-center pt-5 mb-3">遊戲特色</h3>
      <div>
      <swiper :slides-per-view="1" :space-between="50"
        :modules="modules"
        navigation
        :pagination="{ clickable: true }">
        <swiper-slide class="position-relative">
          <div class="fs-1 fw-black  text-warning position-absolute text-shadow" style="bottom: 30px; right: 30px; ">可愛的貓咪英雄</div>
          <img src="/7a1ce4f6-c3f9-45d2-a3b7-94d83cd263da.jpg" alt="可愛的貓咪英雄">
        </swiper-slide>
        <swiper-slide>
          <div class="fs-1 fw-black text-warning position-absolute text-shadow" style="bottom: 30px; right: 30px; ">美麗的遊戲場景</div>
          <img src="/bde13a38-0362-432e-b74f-b1b9d509c873.jpg" alt="美麗的遊戲場景">
        </swiper-slide>
        <swiper-slide>
          <div class="fs-1 fw-black text-warning position-absolute text-shadow" style="bottom: 30px; right: 30px; ">豐富的技能和策略選擇</div>
          <img src="/c4e786da-8f41-4929-816f-39ee7b5ac64d.jpg" alt="豐富的技能和策略選擇">
        </swiper-slide>
      </swiper>
      </div>
      </div>
    </div>
  </div>

  <div class="container-fluid bg-primary pb-3 d-xl-none">
    <div class="container d-flex flex-column align-items-center">
      <h3 class="display-3 fw-black text-black text-center pt-5 mb-3">遊戲特色</h3>
      <div class="position-relative">
        <div class="fs-3 fw-black text-warning position-absolute text-shadow" style="bottom: 5px; right: 10px; ">可愛的貓咪英雄</div>
        <img src="/7a1ce4f6-c3f9-45d2-a3b7-94d83cd263da.jpg" alt="可愛的貓咪英雄" width="100%" class="rounded-3 border border-5 border-warning">
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <h3 class="display-1 fw-black text-black pt-5">三大遊戲角色類型</h3>
    <div class="d-none d-lg-block">
      <div class="d-flex align-items-center">
        <div class="w-50">
          <div class="h1 fw-black text-black">近戰</div>
          <div class="fs-3 text-black mt-3">擅長在距離敵人較近的位置進行攻擊的角色。他們通常使用各種近戰武器或技能，例如劍、斧、拳、腳等，來對敵人造成物理或魔法傷害。</div>
        </div>
        <img src="/OIG2465454646546.jpg" class="ms-auto w-50" alt="近戰喵喵">
      </div>
    </div>
    <div class="d-block d-lg-none">
      <img src="/OIG2465454646546.jpg" class="img-fluid" alt="近戰喵喵">
      <div>
        <div class="h1 fw-black text-black">近戰</div>
        <div class="fs-6 text-black mt-3">擅長在距離敵人較近的位置進行攻擊的角色。他們通常使用各種近戰武器或技能，例如劍、斧、拳、腳等，來對敵人造成物理或魔法傷害。</div>
      </div>
    </div>
    <hr>
    <div class="d-none d-lg-block">
      <div class="d-flex align-items-center">
        <img src="/OIG4.4BEoVZmcT.jpg" class="me-auto w-50" alt="遠程喵喵">
        <div class="w-50">
          <div class="h1 fw-black text-black">遠程</div>
          <div class="fs-3 text-black mt-3">擅長在距離敵人較遠的位置進行攻擊的角色。他們通常使用各種遠程武器或法術，例如弓箭、槍械、魔杖、法杖等，來對敵人造成物理或魔法傷害。</div>
        </div>
      </div>
    </div>
    <div class="d-block d-lg-none">
      <img src="/OIG4.4BEoVZmcT.jpg" class="img-fluid" alt="遠程喵喵">
      <div>
        <div class="h1 fw-black text-black">遠程</div>
        <div class="fs-6 text-black mt-3">擅長在距離敵人較遠的位置進行攻擊的角色。他們通常使用各種遠程武器或法術，例如弓箭、槍械、魔杖、法杖等，來對敵人造成物理或魔法傷害。</div>
      </div>
    </div>
    <hr>
    <div class="d-none d-lg-block mb-5">
      <div class="d-flex align-items-center">
        <div class="w-50">
          <div class="h1 fw-black text-black">輔助</div>
          <div class="fs-3 text-black mt-3">擅長在戰鬥中提供各種增益、治療或控制的角色。他們通常使用各種法術、樂器、神聖武器等，來幫助隊友或干擾敵人。</div>
        </div>
        <img src="/OIG1 54564646.jpg" class="ms-auto w-50" alt="輔助喵喵">
      </div>
    </div>
    <div class="d-block d-lg-none mb-5">
      <img src="/OIG1 54564646.jpg" class="img-fluid" alt="輔助喵喵">
      <div>
        <div class="h1 fw-black text-black">輔助</div>
        <div class="fs-6 text-black mt-3">>擅長在戰鬥中提供各種增益、治療或控制的角色。他們通常使用各種法術、樂器、神聖武器等，來幫助隊友或干擾敵人。</div>
      </div>
    </div>
  </div>

  <div class="game-hero bg-warning pb-5 pt-5">
    <div class="container">
    <h3 class="display-3 fw-black text-black text-center pt-5 mb-3">喵喵英雄</h3>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card bg-transparent border-0 cursor" @click="openModal(product)" :disabled="product === status.openModal">
            <img :src="product.imageUrl" class="card-img-top rounded-circle border-bold card-hover" :alt="product.title">
            <div class="card-body">
              <h5 class="fs-1 card-title text-content text-center">{{ product.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductCardModalComponent :temp-product="tempProduct" ref="userModal" />
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import ProductCardModalComponent from '../components/ProductCardModalComponent.vue'

const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      products: [],
      modules: [Navigation, Pagination],
      tempProduct: {},
      carts: {},
      status: {
        addCartLoading: '',
        openModal: ''
      }
    }
  },
  methods: {
    getProducts () {
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/products/all`
      axios.get(api)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch((error) => {
          console.error('Error fetching products:', error)
          this.isLoading = false
        })
    },
    openModal (product) {
      this.tempProduct = product
      this.$refs.userModal.open()
    },
    getCart () {
      axios.get(`${VITE_URL}/api/${VITE_NAME}/cart`)
        .then(res => {
          this.carts = res.data.data
        })
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ProductCardModalComponent
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.neon {
  font-size: 90px;
  text-shadow: 0 0 50px #fff;
  animation: neon 1.5s ease-in-out infinite alternate;
}
@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 20px #fff, 0 0 100px #fff, 0 0 20px #fff;
  }
  50% {
    text-shadow: 0 0 50px #fff, 0 0 150px #fff, 0 0 50px #fff;
  }
}
.fw-black{
  font-family: 'Noto Sans TC, sans-serif';
  font-weight: normal;
}
.text-shadow{
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue; ;
}
.border-bold{
  border: 9px solid #9747FF;
}
.banner{
  background-image: url('/OIG24564565.jpg');
  height: 100vh;
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .carouselTitle{
    position: absolute;
    z-index: 3;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 30px;
    .carouselTitleBig{
      text-shadow: 4px 4px 7px black;
    }
    .carouselTitleSmall{
      width: 45%;
      border-radius: 25px;
      transform: translate(50%, 0px);
      background-color: rgb(255, 193, 8);
      :hover {
        border-radius: 25px;
        background-color: #9747FF;
        padding: 4px 12px;
      }
    }
  }
}

.banner-overlay {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
  transform: translateY(-10%);
}
.carousel{
  .carousel-indicators{
    z-index: 30;
    transform: translateY(-60px);
  }
}
  .game-feature-bg{
    .game-feature{
      z-index: 0;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

.swiper {
  width: 900px;
  height: 600px;
  border: 12px solid rgb(255, 193, 8);
  border-radius: 25px;
  margin-top: 40px;
  --swiper-navigation-color: #9747ff;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-hover:hover{
  opacity: .3;
}
</style>
