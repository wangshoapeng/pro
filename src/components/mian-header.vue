<template>
  <div class="mian-header">
    <span @click="$router.go(-1)" class="goback-icon" v-if="back">
      <i class="iconfont x-fanhui"></i>
      返回</span>
    <span class="header-more">
      <i class="iconfont x-gengduo"></i></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    back: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss">
.mian-header {
  position: relative;
  text-align: center;
  display: block;
  color: white;
  text-decoration: none;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
  background-color: #464c5b;
  margin-bottom: 0.24rem;
  border-radius: 0.05rem;
}
.goback-icon {
  float: left;
  color: white;
  font-weight: 300;
  padding: 0 0.1rem;
}
.header-more {
  float: right;
  color: white;
  font-size: 0.48rem;
  padding: 0 0.4rem;
}
</style>
