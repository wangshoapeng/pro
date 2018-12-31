<template>
  <div class="prop-father">
    <t-header>prop-传值</t-header>
    <div class="scroll-wrap">
      <p>文档</p>
      <!-- 父元素数据{{userName}} -->
      <input type="text" v-model="userName">
      <t-child :msg=userName></t-child>
    </div>
  </div>
</template>

<script>
import Child from './prop-son'
export default {
  data () {
    return { userName: '原始数据' }
  },
  components: { 't-child': Child },
  watch: {
    userName (newvalue, oldvalue) {
      console.log('改之后：', newvalue)
      console.log('改之前 :', oldvalue)
    }
  }
}
</script>

<style lang='scss'>
.prop-father {
  border: 1px solid gray;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
