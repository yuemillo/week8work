<template>
  <div class="home">
    <div class="banner container-fluid">
      <div class="carouselTitle d-flex flex-column align-items-center">
        <div class="display-1 fw-black text-black">最貓的遊戲內容</div>
        <div class="carouselTitleSmall fs-1 fw-black bg-warning text-dark text-center mt-5">等您來加入</div>
      </div>
    </div>

    <div class="game-feature bg-primary">
      <div class="container">
        <h3 class="display-1 fw-black text-black text-center pt-5">遊戲特色</h3>
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

  </div>
</template>

<style scoped>
.fw-black{
  font-family: 'Noto Sans TC';
  font-weight: normal;
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
</style>
