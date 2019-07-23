<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex py-1 ai-center"
    :class="{'border-bottom': !plain, 'pb-3':!plain}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl ml-2 flex-1 text-dark-1">
        <strong>{{title}}</strong>
      </div>
      <i class="iconfont icon-gengduo text-dark-1" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true},
    plain: {type: Boolean}
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
.card {
  border-bottom: 1px solid $border-color;
}
</style>
