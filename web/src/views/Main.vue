<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <a class="logo-icon" href="#"></a>
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-gary-1 fs-xxs pt-1">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse jc-around pb-1">
        <router-link tag="div" to="/home" class="nav-item">
          <div class="nav-link">首页</div>
        </router-link>
        <router-link tag="div" to="/gonglue" class="nav-item">
          <div class="nav-link">攻略中心</div>
        </router-link>
        <router-link tag="div" to="/saishi" class="nav-item">
          <div class="nav-link" tag="div" to="/saishi">赛事中心</div>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>



