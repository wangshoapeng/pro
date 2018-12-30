<template>
  <div class="propaarray">
    <t-header>props array</t-header>
    <i-button size="small"></i-button>
    <i class="iconfont x-fenxiang"></i>
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
