<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, i) of swiperImg" :key="i">
        <img class="w-100" style="height:200px" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2"  slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="bg-white mt-2">
      <m-card plain icon="shipin" title="热门视频">
        <div class="d-flex ai-center border-top py-3">
          <img class="w-100" style="width:30%; border-radius:1rem" src="../assets/images/1.jpg" alt="">
          <div class="ml-3">
            <p class="fs-lg text-dark-1 pb-3 fs-md">1.【零度王者视角】第四十一期：天崩局全解析，劣势永不投降</p>
            <div class="d-flex ai-center">
              <div>
                <i class="iconfont icon-caidan1 fs-xs text-gary"></i>
                <span class="fs-xs text-gary ml-1">61万</span>
              </div>
              <div class='ml-2'>
                <i class="iconfont icon-caidan1 fs-xs text-gary"></i>
                <span class="fs-xs text-gary ml-1">12:50</span>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex border-top py-3">
          <p class="flex-1 text-ellipsis">2.【上分拍档】第88期：兰陵王+姜子牙  心魔断罪 以攻代守</p>
          <i class="iconfont icon-shipin ml-3 text-gary"></i>
          <span class="fs-xs text-gary">1.6万</span>
        </div>
         <div class="d-flex border-top py-3">
          <p class="flex-1 text-ellipsis">3.【上分拍档】第88期：兰陵王+姜子牙  心魔断罪 以攻代守</p>
          <i class="iconfont icon-shipin ml-3 text-gary"></i>
          <span class="fs-xs text-gary">1.6万</span>
        </div>
        <div class="bg-light py-2 fs-sm text-center">
          <span class="">收起</span>
          <i class="sprite sprite-arrow ml-2"></i>
        </div>
      </m-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperImg: [
        {imgUrl: require('../assets/images/1.jpg')},
        {imgUrl: require('../assets/images/2.jpg')},
        {imgUrl: require('../assets/images/3.jpg')},
        {imgUrl: require('../assets/images/4.jpg')},
      ],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.pagination-home'
        }
      },
    }
  }
}
</script>

