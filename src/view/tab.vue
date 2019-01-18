<template>
  <div>
    <t-header>
      Table-test
    </t-header>
    <div class="tab-wrap">
      <transition-group class="tab-title"
                        name="tab-title"
                        appear
                        appear-class="tab-title-apper-class"
                        appear-to-class="tab-title-apper-to-class"
                        appear-active-class="tab-title-apper-active-class">
        <div class="tab-btn"
             :class="{activeClass:actived === index}"
             @click="actived = index"
             v-for="(tab,index) in tabs"
             :key="tab.title">{{tab.title}}</div>
      </transition-group>
      <div class="tab-content"
           v-if="actived === index"
           v-for="(tab,index) in tabs"
           :key="tab.content">
        {{tab.content}}
      </div>
    </div>
    <input type="text"
           v-model="one">
    <br>
    <input type="text"
           v-model="tow">
    <br>
    <input type="text"
           v-model="three">
    <br>
    <input type="text"
           v-model="four">
    <br>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      tabs: [
        { title: '新闻1', content: '新闻++++++++1' },
        { title: '新闻2', content: '新闻++++++++2' },
        { title: '新闻3', content: '新闻++++++++3' }
      ],
      actived: 0,
      one: 1,
      tow: 2,
      three: 3
    }
  },
  computed: {
    four () {
      if (this.one) {
        console.log(this.one)
      }
      return this.one
    }
  },
  created () {
    window.test = this.tabs
  }
}
</script>

<style lang="scss">
.tab-title-apper-active-class {
  transition: all 1s;
}
.tab-title-apper-class {
  opacity: 0;
  transform: translateY(-50%);
}
.activeClass {
  background-color: cadetblue;
}
.tab-wrap {
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  .tab-title {
    display: flex;
    justify-content: center;
    height: 0.5rem;
    .tab-btn {
      line-height: 0.5rem;
      margin-right: 0.1rem;
    }
    .tab-btn:active {
      background-color: steelblue;
    }
  }
  .tab-pro {
    height: 0.1rem;
    background-color: blue;
    width: 0.65rem;
    transition: all 0.3s;
  }
  .tab-content {
    background-color: gray;
    height: 2rem;
  }
}
</style>
