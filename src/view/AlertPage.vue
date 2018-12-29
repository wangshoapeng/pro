<template>
  <div>
    <t-header>Alert Page</t-header>
    <button @click="alertOpen = true;" class="base-btn">弹出框</button>
    <br>
    返回状态{{state}}
    <t-alert :open='alertOpen' v-on:getChoice="choice"></t-alert>
  </div>
</template>
<script>
import tAlert from '../components/Alear'
export default {
  data () {
    return {
      state: 'close',
      alertOpen: false
    }
  },
  methods: {
    choice (e) {
      if (e) {
        this.state = '确定'
      } else {
        this.state = '取消'
      }
      this.alertOpen = false
    }
  },
  components: {
    tAlert
  }
}
</script>
<style>
</style>
