<template>
  <div class="propaarray">
    <t-header>props array</t-header>
    <i-button size="small"></i-button>
    <i class="iconfont x-fenxiang"></i>
    <img src="~@/assets/images/wifi.png" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  components: {
    'i-button': () => import('../components/button/Ibutton.vue')
  }
}
</script>
<style>
</style>
