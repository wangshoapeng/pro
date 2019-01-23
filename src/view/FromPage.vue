<template>
  <div>
    <t-header>From Deoms</t-header>
    <t-check-group :checkGroup="checkList" :checked="checked"></t-check-group>
  </div>
</template>
<script>
import tCheckGroup from '../components/from/check-group'
export default {
  data () {
    return {
      checkList: [{ value: 123 }, { value: 1 }, { value: 123 }],
      checked: ['5']
    }
  },
  components: {
    tCheckGroup
  }
}
</script>
<style>
</style>
