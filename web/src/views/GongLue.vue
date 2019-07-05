<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, i) of swiperImg" :key="i">
        <img class="w-100" style="height:190px" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2"  slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="mt-3 bg-white p-2">
      <m-hero-card icon="shipin" title="热门视频">
        <div class="d-flex ai-center border-top py-1">
          <img class="w-100" style="width:30%; border-radius:1rem" src="../assets/images/1.jpg" alt="">
          <div class="ml-2">
            <p class="fs-lg text-dark-1 pb-3">1.【零度王者视角】第四十一期：天崩局全解析，劣势永不投降</p>
            <div>
              <span><i class="iconfont icon-caidan1"></i>61万</span>
              <span><i class="iconfont icon-caidan1"></i>12:50</span>
            </div>
          </div>
        </div>
        <div class="d-flex border-top py-2">
          <p class="flex-1 text-ellipsis">2.【上分拍档】第88期：兰陵王+姜子牙  心魔断罪 以攻代守</p>
          <i class="iconfont icon-shipin ml-3"></i>
        </div>
         <div class="d-flex border-top py-2">
          <p class="flex-1 text-ellipsis">3.【上分拍档】第88期：兰陵王+姜子牙  心魔断罪 以攻代守</p>
          <i class="iconfont icon-shipin ml-3"></i>
        </div>
         <div class="d-flex border-top py-2">
          <p class="flex-1 text-ellipsis">4.【上分拍档】第88期：兰陵王+姜子牙  心魔断罪 以攻代守</p>
          <i class="iconfont icon-shipin ml-3"></i>
        </div>
        <div class="border-top py-2 text-center">
          <span class="text-ellipsis text-gary pt-2">完整表单</span>
          <i class="iconfont icon-shipin fs-sm ml-1"></i>
        </div>
      </m-hero-card>
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

