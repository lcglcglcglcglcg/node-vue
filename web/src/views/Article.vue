<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <i class="iconfont icon-back mr-2 text-blue" @click="$router.back()"></i>
      <strong class="flex-1 text-blue">{{model.title}}</strong>
      <div class="text-gary fs-xs">
        2018-9-9
      </div>
    </div>
    <div v-html="model.body" class="px-3 pt-2 article-body fs-lg"></div>
    <div class="px-3 py-3 border-top">
      <div class="d-flex ai-center">
        <i class="iconfont icon-caidan1"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link class="py-1" tag="div" :to="`/articles/${item._id}`" v-for="item in model.related" :key="item._id">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {required: true},
  },
  data() {
    return {
      model: null
    }
  },
  watch: {
    id() {
      this.fetch()
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  .icon-back {
    font-size: 1.5rem;
  }
  .article-body {
    img {
      max-width: 100%;
      height: auto
    }
  }
}
</style>


