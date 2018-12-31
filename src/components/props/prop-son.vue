<template>
  <div class="child">
    <!-- 接受过来的数据：{{msg}} -->
    <label>
      <textarea type="text" :value="msg"></textarea>
    </label>
    <button @click="bus.$emit('getson','change')">up father</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  // props: ['msg'],
  props: {
    msg: {
      type: String,
      default: '未传值'
    }
  },
  components: {}
}
</script>

<style lang='scss' scoped>
.child {
  width: 50%;
  margin: 20px auto;
  border: 1px solid pink;
}
</style>
