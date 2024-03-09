<template>
  <div class="home">
    <div class="banner container-fluid">
      <div class="carouselTitle d-flex flex-column align-items-center">
        <div class="display-1 fw-black text-black">最貓的遊戲內容</div>
        <div class="carouselTitleSmall fs-1 fw-black bg-warning text-dark text-center mt-5">等您來加入</div>
      </div>
    </div>

    <div class="game-feature-bg d-flex bg-primary">
      <img src="/public/_cbcc5ef9-8e33-4006-a889-13c92d6f7275L.png" class="me-auto" alt="">
      <img src="/public/_cbcc5ef9-8e33-4006-a889-13c92d6f7275R.png" class="ms-auto" alt="">
      <div class="game-feature pb-5">
        <div class="container">
        <h3 class="display-1 fw-black text-black text-center pt-5 mb-3">遊戲特色</h3>
        <div>
        <swiper :slides-per-view="1" :space-between="50"
          :modules="modules"
          navigation
          :pagination="{ clickable: true }">
          <swiper-slide class="position-relative">
            <div class="fs-1 fw-black  text-warning position-absolute text-shadow" style="bottom: 30px; right: 30px; ">可愛的貓咪英雄</div>
            <img src="/public/_7a1ce4f6-c3f9-45d2-a3b7-94d83cd263da.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <div class="fs-1 fw-black text-warning position-absolute text-shadow" style="bottom: 30px; right: 30px; ">美麗的遊戲場景</div>
            <img src="/public/_bde13a38-0362-432e-b74f-b1b9d509c873.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <div class="fs-1 fw-black text-warning position-absolute text-shadow" style="bottom: 30px; right: 30px; ">豐富的技能和策略選擇</div>
            <img src="/public/_c4e786da-8f41-4929-816f-39ee7b5ac64d.jpg" alt="">
          </swiper-slide>
        </swiper>
        </div>
      </div>
      </div>
    </div>

    <div class="container mt-5">
      <h3 class="display-1 fw-black text-black">三大遊戲角色類型</h3>
      <div class="d-flex align-items-center">
          <div class="w-50">
            <div class="h1 fw-black text-black">近戰</div>
            <div class="fs-3 text-black mt-3">擅長在距離敵人較近的位置進行攻擊的角色。他們通常使用各種近戰武器或技能，例如劍、斧、拳、腳等，來對敵人造成物理或魔法傷害。</div>
          </div>
          <img src="/public/OIG2465454646546.jpg" class="ms-auto w-50" alt="...">
      </div>
      <div class="d-flex align-items-center flex-row-reverse">
          <div class="w-50">
            <div class="h1 fw-black text-black">遠程</div>
            <div class="fs-3 text-black mt-3">擅長在距離敵人較遠的位置進行攻擊的角色。他們通常使用各種遠程武器或法術，例如弓箭、槍械、魔杖、法杖等，來對敵人造成物理或魔法傷害。</div>
          </div>
          <img src="/public/OIG4.4BEoVZmcT.jpg" class="me-auto w-50" alt="...">
      </div>
      <div class="d-flex align-items-center">
          <div class="w-50">
            <div class="h1 fw-black text-black">輔助</div>
            <div class="fs-3 text-black mt-3">擅長在戰鬥中提供各種增益、治療或控制的角色。他們通常使用各種法術、樂器、神聖武器等，來幫助隊友或干擾敵人。</div>
          </div>
          <img src="/public/OIG1 54564646.jpg" class="ms-auto w-50" alt="...">
      </div>
    </div>

    <div class="game-hero bg-warning pb-5">
      <div class="container">
      <h3 class="display-1 fw-black text-black text-center pt-5 mb-3">喵喵英雄</h3>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col" v-for="product in products" :key="product.id">
            <div class="card bg-transparent">
              <img :src="product.imageUrl
" class="card-img-top rounded-circle border-bold" alt="...">
              <div class="card-body">
                <h5 class="fs-1 card-title text-content text-center">{{ product.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const { VITE_URL, VITE_NAME } = import.meta.env

export default {
  data () {
    return {
      products: [],
      modules: [Navigation, Pagination]
    }
  },
  methods: {
    getProducts () {
      const api = `${VITE_URL}/v2/api/${VITE_NAME}/products/all`
      axios.get(api)
        .then((res) => {
          this.products = res.data.products
        })
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.fw-black{
  font-family: 'Noto Sans TC';
  font-weight: normal;
}
.text-shadow{
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue; ;
}
.border-bold{
  border: 9px solid #9747FF;
}
.banner{
  background-image: url('/public/OIG24564565.jpg');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .carouselTitle{
    position: absolute;
    z-index: 3;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 30px;
    text-shadow: 4px 4px 3px white;
    .carouselTitleSmall{
      width: 45%;
      border-radius: 25px;
    }
  }
}
.carousel{
  position: relative;
  .carousel-indicators{
    z-index: 30;
    transform: translateY(-60px);
  }
  .carouselTitle{
    position: absolute;
    z-index: 3;
    left: 312px;
    bottom: 200px;
    text-shadow: 4px 4px 0px white;
    .carouselTitleSmall{
      text-shadow: 3px 3px 0px black;
    }
  }
  .carouselDecorate{
    position: absolute;
    bottom: 0;
    z-index: 3;
  }
}
.game-feature-bg{
  position: relative;
  .game-feature{
    position: absolute;
    z-index: 3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.swiper {
  width: 900px;
  height: 600px;
  border: 12px solid #FFC107;
  border-radius: 25px;
  margin-top: 40px;
  --swiper-navigation-color: #9747FF;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
