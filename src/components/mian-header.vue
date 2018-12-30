<template>
  <div class="mian-header">
    <span @click="$router.go(-1)" class="header-left-icon" v-if="back">
      <i class="iconfont x-fanhui"></i>
      返回</span>
    <span @click="$router.go(0)" class="header-left-icon" style="marginLeft:0.2rem" v-else>
      <i class="iconfont x-shuaxin"></i>
    </span>
    <span class="header-more-icon" @click="showMore = !showMore">
      <i class="iconfont" :class="showMore?'x-xian':'x-gengduo'"></i></span>
    <slot></slot>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
      <div class="header-more-wrap" v-if="showMore">
        <a v-for=" item in moreList" :key="item.url" :href="item.url" target="_black" :style="{color:item.color}">
          <i :class="item.iconClass"></i>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMore: false,
      moreList: [
        {
          url: 'https://www.baidu.com/',
          iconClass: 'iconfont x-baidu',
          color: 'blue'
        },
        {
          url: 'https://cn.vuejs.org/v2/guide/',
          iconClass: 'iconfont x-vuejs',
          color: 'green'
        },
        {
          url: 'http://es6.ruanyifeng.com/',
          iconClass: 'iconfont x- x-js',
          color: 'red'
        }
      ]
    }
  },
  props: {
    back: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss">
.mian-header {
  position: relative;
  text-align: center;
  display: block;
  color: white;
  text-decoration: none;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
  background-color: #464c5b;
  margin-bottom: 0.24rem;
  border-radius: 0.05rem;
}
.header-left-icon {
  position: absolute;
  left: 0;
  color: white;
  font-weight: 300;
  padding: 0 0.1rem;
}
.header-more-icon {
  position: absolute;
  right: 0;
  color: white;
  font-size: 0.5rem;
  padding: 0 0.2rem;
}
.header-more-wrap {
  position: absolute;
  right: 0;
  font-size: 0.6rem;
  color: #657180;
  top: 100%;
  padding: 0 0.1rem;
  z-index: 1;
  a {
    display: block;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    background-color: white;
    border-radius: 50%;
  }
}
</style>
