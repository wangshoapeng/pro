<template>
  <div class="mian-header">
    <span @click="$router.go(-1)" class="goback-icon" v-if="back">
      <i class="iconfont x-fanhui"></i>
      返回</span>
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
  font-size: 0.24rem;
  background-color: #464c5b;
  margin-bottom: 0.24rem;
  border-radius: 0.05rem;
}
.goback-icon {
  position: absolute;
  left: 0;
  color: white;
  font-weight: 300;
  padding: 0 10px;
}
</style>
