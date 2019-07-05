<template>
  <div class="hero-card">
    <div class="card-header d-flex py-3 ai-center pb-3">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl ml-2 flex-1 text-dark-1">{{title}}</div>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true}
  }

}
</script>

<style>

</style>

