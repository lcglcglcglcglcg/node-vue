<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" v-for="(category,i) in catigories" :key="i" :class="{active: active===i}" @click="$refs.list.swiper.slideTo(i)">
        <div class="nav-link text-center">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list" :options="{autoHeight: true}" @slide-change="() => active = $refs.list.swiper.realIndex">
        <swiper-slide v-for="(category,i) in catigories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: {type: String, required: true},
    title: {type: String, required: true},
    catigories: {type: Array, required: true}
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
