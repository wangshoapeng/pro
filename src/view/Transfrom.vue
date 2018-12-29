<template>
  <div class="scorll">
    <t-header>Trans From Group</t-header>
    <div>
      <transition-group name="group-move" class="wrap">
        <div class="box" v-for="item in list" :key="item.index">{{item.id}}</div>
      </transition-group>
    </div>
    <div>
      <button @click="reset()">click for to reset</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: Array.apply(null, { length: 81 }).map((i, index) => {
        return {
          id: (index % 9) + 1,
          index: index
        }
      })
    }
  },
  methods: {
    reset () {
      window.listT = this.list
      this.list.sort((a, b) => {
        // return Math.random() > 0.5 ? 1 : -1;
        // return 1;
        return -1
      })
    }
  },
  components: {}
}
</script>
<style>
.wrap {
  display: flex;
  width: 375px;
  margin: 0 auto;
  flex-wrap: wrap;
}
.box {
  width: 36px;
  height: 36px;
  border: 1px solid black;
  margin: 0px 5px 5px 0px;
  text-align: center;
  line-height: 36px;
}
.scorll {
  overflow: auto;
}
.group-move-move {
  transition: 1s;
}
</style>
