<template>
  <div>
    <t-header>From Deoms</t-header>
    <h1>{{checked}}</h1>
    <t-check-group :checkList="checkList" :checked="checked" @up="checked = $event"></t-check-group>
  </div>
</template>
<script>
import tCheckGroup from '../components/from/check-group'
export default {
  data () {
    return {
      checkList: [
        { value: '123' },
        { value: '1234' },
        { value: '12345' },
        { value: '123456' }
      ],
      checked: undefined
    }
  },
  components: {
    tCheckGroup
  },
  methods: {}
}
</script>
<style>
</style>
