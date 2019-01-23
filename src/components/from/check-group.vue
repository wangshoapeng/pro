<template>
  <div id="t-check-group">
    <h1>check components</h1>
    <div v-for=" (check,index) in checkList" :key="index">
      <input :id="'check-group'+index" :type="single ? 'radio' :'checkbox'" :value="check.value" v-model="checkedList">
      <label :for="'check-group'+index">
        <span>{{check.value}}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkList: {
      type: Array,
      default: function () {
        return []
      }
    },
    single: {
      type: Boolean,
      default: true
    },
    checked: {}
  },
  data () {
    return {
      checkedList: this.checked
    }
  },
  created () {},
  mounted () {},
  watch: {
    checkedList (val) {
      this.$emit('up', val)
    }
  },
  methods: {},
  components: {}
}
</script>

<style lang="scss">
#t-check-group {
  text-align: left;
}
.check-row-fade-enter,
.check-row-fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
.check-row-fade-enter-active,
.check-row-fade-leave-actice {
  transition: all 0.5s;
}
</style>
