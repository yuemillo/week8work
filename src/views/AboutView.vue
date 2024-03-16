<template>
      <div class="game-feature-bg bg-primary pb-5">
          <div class="container">
            <div class="row">
              <div class="col col-m-7 d-none d-xl-block">
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
              <div class="container-fluid bg-primary pb-3 d-xl-none">
                <div class="container d-flex flex-column align-items-center">
                  <h3 class="display-1 fw-black text-black text-center pt-5 mb-3">遊戲特色</h3>
                  <div class="position-relative">
                    <div class="fs-1 fw-black text-warning position-absolute text-shadow" style="bottom: 5px; right: 5px; ">可愛的貓咪英雄</div>
                    <img src="/public/_7a1ce4f6-c3f9-45d2-a3b7-94d83cd263da.jpg" alt="" width="360px">
                  </div>
                </div>
              </div>
              <div class="col col-m-5">
                <h3 class="fs-1 fw-black text-black text-center pt-5 mb-3">遊戲介紹</h3>
                <h5 class="fs-3">如果您喜歡英雄聯盟風格的遊戲，並且喜愛可愛的貓咪角色，那麼《喵喵大亂鬥》可能是您感興趣的遊戲</h5>
                <ul class="mt-3 fs-4">
                  <li><p>遊戲類型：多人線上競技遊戲（MOBA）</p></li>
                  <li><p>遊戲風格：可愛、卡通、英雄技能</p></li>
                  <li><p>遊戲玩法：</p>
                      <p class="fs-5">每個英雄都有獨特的技能和特點。</p>
                      <p class="fs-5">團隊對戰，目標是摧毀對方的基地。</p>
                      <p class="fs-5">地圖上有不同的路徑、野怪和塔。</p>
                      <p class="fs-5">玩家可以升級技能、購買裝備，並與隊友合作。</p>
                  </li>
                  <li><p>遊戲特色：</p>
                      <p class="fs-5">可愛的貓咪英雄，每個都有自己的故事和個性。</p>
                      <p class="fs-5">美麗的遊戲場景，包括花園、森林、城堡等。</p>
                      <p class="fs-5">豐富的技能和策略選擇。</p>
                  </li>
                </ul>
              </div>
            </div>
          <div>
        </div>
      </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  data () {
    return {
      modules: [Navigation, Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}

</script>

<style scoped>
.text-shadow{
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue; ;
}
.swiper {
  width: 650px;
  height: 450px;
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
</style>
