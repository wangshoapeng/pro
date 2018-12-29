<template>
  <div class="alert" v-if="open">
    <h2>提示</h2>
    <p>提示捏？</p>
    <button @click="$emit('getChoice',true)">确定</button>
    <button @click="$emit('getChoice',false)">取消</button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['open'],
  methods: {}
}
</script>
<style>
.alert {
  position: fixed;
  color: white;
  width: 200px;
  height: 100px;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgba(218, 31, 31, 0.5);
  box-shadow: 9px 2px 39px pink;
}
.alert h2 {
  margin-top: 5px;
}
.alert p {
  margin-top: 8px;
  border-bottom: 1px solid;
  height: 33px;
}
.alert button {
  margin-top: 5px;
}
</style>
