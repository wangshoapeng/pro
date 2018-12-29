<template>
  <div class="fu">
    <t-header></t-header>
    <h1>父级组件</h1>
    <input type="text"
           v-model="userName">
    <t-child :msg=userName
             v-on:updata="updata($event)"></t-child>
  </div>
</template>

<script>
import Child from './EmitB'
export default {
  data () {
    return { userName: '父组件原始值' }
  },
  methods: {
    updata (e) {
      this.userName = e
    }
  },
  components: { 't-child': Child }
}
</script>

<style lang='scss'>
.fu {
  border: 1px solid gray;
}
</style>
