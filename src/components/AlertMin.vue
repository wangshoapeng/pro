<template>
  <div class="alert">
    <h2>提示</h2>
    <p>提示内容</p>
    <button @click="up(true)">确定</button>
    <button @click="up(false)">取消</button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    up (c) {
      this.$emit('upChioce', c)
    }
  }
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
  transform: translate(-50%, -50%);
  background-color: rgba(218, 31, 31, 0.5);
}
/* @keyframes mymove {
  0% {
    background-color: pink;
    left: 20px;
  }
  25% {
    background-color: red;
    top: 10px;
  }
} */
.alert h2 {
  margin-top: 5px;
}
.alert p {
  margin-top: 15px;
}
.alert button {
  margin-top: 5px;
}
</style>
