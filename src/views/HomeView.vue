<template>
  <div class="home">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner" style="height: 100vh">
        <div class="carouselTitle">
      <div class="display-1 fw-black text-black">最貓的遊戲內容</div>
      <div class="carouselTitleSmall fs-1 fw-black text-white">等您來加入</div>
    </div>
        <div class="carousel-item active">
          <img src="/public/_7a1ce4f6-c3f9-45d2-a3b7-94d83cd263da.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/public/OIG2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/public/OIG2111.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>
</template>

<style scoped>
.fw-black{
  font-family: 'Noto Sans TC';
  font-weight: normal;
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
