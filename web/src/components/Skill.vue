<template>
  <div class="skill">
    <div class="">
      <p class="fs-lg pb-2">{{skill.name}}</p>
      <p class="fs-m pb-2">{{skill.description}}</p>
      <p clss="fs-sm">小提示：{{skill.tips}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {type: Object}
  }
}
</script>

