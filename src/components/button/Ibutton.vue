<template>
  <button :class="'i-button-size' + size" :disabled="disabled">傻丫头</button>
</template>
<script>
// 判断参数是否是其中之一
export default {
  props: {
    size: {
      validator (value) {
        return ['small', 'large', 'default'].includes(value)
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.i-button-sizedefault {
  font-size: inherit;
}
.i-button-sizesmall {
  font-size: small;
}
.i-button-sizelarge {
  font-size: large;
}
</style>
