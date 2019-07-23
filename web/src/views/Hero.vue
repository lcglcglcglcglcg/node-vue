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
    <!-- end of top -->
    <div>
      <div class="px-3 bg-white">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item" :class="{active:currentContentIndex === 0}"
          @click="$refs.contentList.swiper.slideTo(0)"
          >
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item" :class="{active:currentContentIndex === 1}"
          @click="$refs.contentList.swiper.slideTo(1)"
          >
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper ref="contentList" 
        :options="{autoHeight: true}"
        @slide-change="() => currentContentIndex = $refs.contentList.swiper.realIndex">
        <swiper-slide>
          <div>
            <div class="p-3 bg-white border-bottom">
              <!-- button -->
              <div class="d-flex">
                <router-link tag="button" class="btn btn-lg flex-1" to="/">
                  <i class='iconfont icon-caidan1'></i>
                  英雄介绍视频
                </router-link>
                <router-link tag="button" class="btn btn-lg flex-1 ml-2" to="/">
                  <i class='iconfont icon-caidan1'></i>
                  英雄介绍视频
                </router-link>
              </div>
              <!-- skills -->
              <div class="skills mt-4">
                <div class="d-flex jc-around">
                  <img
                  class="icon"
                  :class="{active: currentSkillIndex === i}"
                  @click="$refs.skillList.swiper.slideTo(i)"
                  :src="item.icon"
                  v-for="(item, i) in model.skills"
                  :key="item.name"
                  >
                </div>
                <!-- 加滑屏效果：利用滑屏事件slide-change 和 方法slideTo()做对应关联 -->
                <swiper ref="skillList" 
                :options="{autoHeight: true}"
                @slide-change="() => currentSkillIndex = $refs.skillList.swiper.realIndex">
                  <swiper-slide v-for='(item, i) in model.skills' :key="i">
                    <div v-if="item">
                      <div class="d-flex pt-4 pb-3">
                        <h3>{{item.name}}</h3>
                        <span class="text-gary-1 ml-4">
                          (冷却值：{{item.delay}}
                          消耗：{{item.cost}})
                        </span>
                      </div>
                      <p>{{item.description}}</p>
                      <div class="border-bottom mt-2"></div>
                      <p class="text-gary-1 mt-2">小提示：{{item.tips}}</p>
                    </div>
                  </swiper-slide>
                </swiper>
                <!-- 不加滑屏效果建议做法：计算属性计算出一个对应的渲染对象 -->
                <!-- <div v-if="currentSkill">
                  <div class="d-flex pt-4 pb-3">
                    <h3>{{currentSkill.name}}</h3>
                    <span class="text-gary-1 ml-4">
                      (冷却值：{{currentSkill.delay}}
                      消耗：{{currentSkill.cost}})
                    </span>
                  </div>
                  <p>{{currentSkill.description}}</p>
                  <div class="border-bottom mt-2"></div>
                  <p class="text-gary-1 mt-2">小提示：{{currentSkill.tips}}</p>
                </div> -->
              </div>
            </div>
            <m-card plain icon="caidan1" title="出装推荐">
              <div class="fs-lg">顺风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div class="hero-items" v-for="item in model.items1" :key="item.id">
                  <img class='icon' :src="item.icon" alt="">
                  <p class="fs-xs">{{item.name}}</p>
                </div>
              </div>
              <div class='border-bottom mt-3'></div>
              <div class="fs-lg mt-3">逆风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div class="hero-items" v-for="item in model.items2" :key="item.id">
                  <img class='icon' :src="item.icon" alt="">
                  <p class="fs-xs">{{item.name}}</p>
                </div>
              </div>
            </m-card>
            <m-card plain icon="caidan1" title="使用技巧">
              <p>{{model.usageTips}}</p>
            </m-card>
            <m-card plain icon="caidan1" title="对抗技巧">
              <p>{{model.battleTips}}</p>
            </m-card>
            <m-card plain icon="caidan1" title="团战思路">
              <p>{{model.teamTips}}</p>
            </m-card>
            <m-card plain icon="caidan1" title="英雄关系">
              <div class="fs-xl">最佳搭档</div>
              <div v-for="item in model.partners" :key="item.id" class="d-flex pt-3">
                <img :src="item.hero.avatar" alt="" height="50">
                <p class="felx-1 ml-3 mt-1">{{item.description}}</p>
              </div>
              <div class="border-bottom mt-3"></div>
            </m-card>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="px-3 bg-white">
            <div v-for="item in model.strategies" :key="item.id">
              <div class="d-flex py-3">
                <img :src="item.icon" width="128" height="71" style="border-radius: 0.5rem">
                <div class="ml-3 flex-1 d-flex flex-column">
                  <p class="flex-1 fs-lg">{{item.name}}</p>
                  <div class="d-flex">
                    <div class="flex-1 d-flex ai-center">
                      <i class="iconfont icon-caidan1 text-gary"></i>
                      <span class="text-gary fs-xs ml-1">{{item.play}}</span>
                    </div>
                    <span class="text-gary fs-xs">{{item.date}}</span>
                  </div>
                </div>
              </div>
              <div class='border-bottom'></div>
            </div>
          </div>
          <div class="bg-light-1 py-1">
            <p class="fs-md text-center text-gary">全部加载完成</p>
          </div>
        </swiper-slide>
      </swiper>
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
      currentSkillIndex: 0,
      currentContentIndex: 0,
    }
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex]
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
@import '../assets/scss/_variables.scss';
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
  .skills {
    img.icon {
      width: 70px;
      height: 70px;
      border: 3px solid map-get($colors, 'white');
      border-radius: 50%;
      &.active {
        border-color: map-get($colors, 'primary')
      }
    } 
  }
  .hero-items {
    img.icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}

</style>

