<template>
  <div>
    <t-header>Alert Page Min</t-header>
    <button class="base-btn" @click="alertOpen = true">弹出框</button>
    <br>
    状态{{state}}
    <transition enter-active-class="animated shake">
      <t-alert v-if="alertOpen" v-on:upChioce="Choice($event)"></t-alert>
    </transition>
  </div>
</template>
<script>
import tAlert from '../components/AlertMin'
export default {
  data () {
    return {
      state: 'close',
      alertOpen: false
    }
  },
  methods: {
    Choice: function (e) {
      if (e) {
        this.state = '确定'
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
