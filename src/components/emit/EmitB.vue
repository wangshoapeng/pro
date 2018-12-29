<template>
  <div class="child">
    <!-- propsData：{{msg}} -->
    <label>
      <textarea type="text"
                :value='getdata'
                @blur="abc($event)"></textarea>
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    getdata () {
      return this.msg
    }
  },
  props: {
    msg: {
      type: String,
      default: '未传值'
    }
  },
  methods: {
    abc (e) {
      this.$emit('updata', e.target.value)
    }
  },
  components: {}
}
</script>

<style lang='scss' scoped>
.child {
  width: 50%;
  height: 200px;
  margin: 20px auto;
  border: 1px solid pink;
}
</style>
