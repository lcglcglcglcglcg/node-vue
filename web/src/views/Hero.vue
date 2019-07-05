<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
      <a class="logo-icon" href="#"></a>
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link tag="div" to="/">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{'background-image': `url(${model.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attacks}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link tag="span" class="text-gary fs-sm" to="/">皮肤: 2 &gt;</router-link> 
        </div>
      </div>
    </div>
    <div class="body p-2">
      <div class="nav bg-white d-flex jc-around ai-center fs-lg py-2 border-bottom">
        <div class="nav-item" :class="{active: active===0}" @click="$refs.list.swiper.slideTo(0)">
          <div class="nav-link">英雄初识</div>
        </div>
        <div class="nav-item" :class="{active: active===1}" @click="$refs.list.swiper.slideTo(1)">
          <div class="nav-link">进阶攻略</div>
        </div>
      </div>
      <div class="cantainer">
        <swiper ref="list" @slide-change="() => active = $refs.list.swiper.realIndex">
          <swiper-slide>
            <div class="d-flex jc-between pt-3 bg-white">
              <div class="bottom">
                <i class="iconfont icon-shipin mr-2  text-primary"></i>
                <span class="fs-lg">英雄介绍视频</span>
              </div>
              <div class="bottom">
                <i class="iconfont icon-shipin mr-2  text-primary"></i>
                <span class="fs-lg">一图识别英雄</span>
              </div>
            </div>
            <div class="bg-white pt-1 pb-2">
              <m-list-card icon="caidan1" title="技能介绍" :catigories="model.skills">
                <template #icons='{category}'>
                  <div class="w-100 p-2">
                    <img class="w-100" :src="category.icon" alt="">
                  </div>
                </template>
                <template #items='{category}'>
                  <m-skill :skill='category'></m-skill>
                </template>
              </m-list-card>
            </div>
            <div class="mt-3 bg-white recommend px-2">
              <m-hero-card icon="shipin" title="出装推荐">
                <div>
                  <div class="text-dark pb-2" style="font-size:16px">顺风出装</div>
                  <div class="d-flex ai-center jc-between">
                    <div class="px-1 w-100 text-center text-gary" v-for="(item, i) in model.items1" :key="i">
                      <img class="icon" :src="item.icon">
                      <span class="text-center fs-sm name">{{item.name}}</span>
                    </div>
                  </div>
                  <div class="tips mt-3 pb-3">小提示：xxxxxx</div>
                </div>
                <div class="border-top pt-3">
                  <div class="text-dark pb-2" style="font-size:16px">逆风出装</div>
                  <div class="d-flex ai-center jc-between">
                    <div class="px-1 w-100 text-center text-gary" v-for="(item, i) in model.items2" :key="i">
                      <img class="icon" :src="item.icon">
                      <span class="text-center fs-sm name">{{item.name}}</span>
                    </div>
                  </div>
                  <div class="tips mt-3 pb-3">小提示：xxxxxx</div>
                </div>
              </m-hero-card>
            </div>
            <div class="mt-3 bg-white">
              <m-hero-card icon="shipin" title="使用技巧">
                <p class="fs-lg text-dark-1 pb-3">{{model.usageTips}}</p>
              </m-hero-card>
            </div>
            <div class="mt-3 bg-white">
              <m-hero-card icon="shipin" title="战斗技巧">
                <p class="fs-lg text-dark-1 pb-3">{{model.battleTips}}</p>
              </m-hero-card>
            </div>
            <div class="mt-3 bg-white">
              <m-hero-card icon="shipin" title="团队思路">
                <p class="fs-lg text-dark-1 pb-3">{{model.teamTips}}</p>
              </m-hero-card>
            </div>
            <div class="mt-3 bg-white">
              <m-hero-card icon="shipin" title="英雄关系">
                <p class="fs-lg text-dark-1 pb-3">最佳搭档</p>
                <div class="" v-for="(partner, i) in model.partners" :key="i">
                  <img :src="partner.hero.avatar" alt="">{{partner.hero}}
                  <p>{{partner.description}}</p>
                </div>
              </m-hero-card>
            </div>
          </swiper-slide>
          <swiper-slide class="bg-white">
            <div class="strategy d-flex jc-betwwen py-3 border-bottom" v-for="(strategy, i) in model.strategies" :key="i">
              <img style="width:30%; height:5rem" :src="strategy.icon" alt="">
              <div class="mx-3 d-flex jc-end flex-column w-100">
                <p class="flex-1 text-dark-1">{{strategy.name}}</p>
                <div class="d-flex jc-between w-100 ai-center text-gary">
                  <i class="iconfont icon-shipin pr-1 fs-sm"></i>
                  <span class="fs-sm flex-1">{{strategy.play}}</span>
                  <span class="fs-sm">{{strategy.date}}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {required: true}
  },
  data() {
    return {
      model: null,
      active: 0,
      isClick: 0,
    }
  },
  methods: {
    async fethch() {
      const res = await this.$http.get(`heroes/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fethch()
  }
}
</script>

<style lang="scss">
.page-hero {
  .topbar {
    background: url('../assets/logo.png') no-repeat 0 87.195%;
    background-size: 100% 35rem;
    width: 100%;
    height: 3.4615rem;
    position: sticky;
    top: 0;
    z-index: 999;
    .logo-icon {
      display: block;
      background: url('../assets/logo.png') no-repeat 0 72.588%;
      background-size: 23.4375rem 28.4375rem;
      width: 2.3077rem;
      height: 2.3077rem;
    }
  }
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
    .info {
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
      .scores{
        .badge {
          margin: 0 0.25rem;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          text-align: center;
          line-height: 1rem;
          font-size: 0.75rem;
          border: 1px solid rgba(255, 255, 255,0.2)
        }
      }
    }
  }
  .body{
    .cantainer {
      .bottom {
        width: 49%;
        height: 3.125rem;
        line-height: 3.125rem;
        text-align: center;
        border: 1px solid #eee;
        border-radius: 0.7rem;
      }
      .recommend {
        .icon {
          width: 100%;
          height: auto;
          border-radius: 50%;
        }
      }
    }
  }
}

</style>

