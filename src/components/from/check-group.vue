<template>
  <div id="t-check-group">
    <h1>check components</h1>
    <div v-for=" (check,index) in checkGroup" :key="index">
      <label :class="{checked:checked.indexOf(check.value) === -1}">
        <input type="checkbox" :value="check.value" v-model="checkList">
        <span class="checkText">{{check.value}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkGroup: {
      type: Array,
      default: function () {
        return []
      }
    },
    checked: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      checkList: this.checked
    }
  },
  created () {},
  mounted () {},
  watch: {},
  methods: {
    console1 () {
      console.log(1)
    }
  },
  components: {}
}
</script>

<style lang="scss">
</style>
