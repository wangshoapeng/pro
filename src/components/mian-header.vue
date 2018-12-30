<template>
  <div class="mian-header">
    <span v-if="back" @click="$router.go(-1)" class="header-left-icon">
      <i class="iconfont x-fanhui"> Back</i>
    </span>
    <span v-else @click="$router.go(0)" class="header-left-icon" style="marginLeft:0.3rem">
      <i class="iconfont x-shuaxin"></i>
    </span>
    <span class="header-more-icon" @click="showOutLink = !showOutLink">
      <i class="iconfont" :class="showOutLink?'x-xian':'x-gengduo'"></i></span>
    <slot></slot>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
      <div class="header-more-wrap" v-if="showOutLink">
        <a v-for=" item in outLinkList" :key="item.url" :href="item.url" target="_black" :style="{color:item.iconColor}">
          <i :class="item.iconClass"></i>
        </a>
      </div>
    </transition>
    <div v-if="showOutLink" class="mask" @click="showOutLink=!showOutLink"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showOutLink: false,
      outLinkList: [
        {
          url: 'https://www.baidu.com/',
          iconClass: 'iconfont x-baidu',
          iconColor: 'blue'
        },
        {
          url: 'https:/cn.vuejs.org/v2/guide/',
          iconClass: 'iconfont x-vuejs',
          iconColor: 'green'
        },
        {
          url: 'http://es6.ruanyifeng.com/',
          iconClass: 'iconfont x-js',
          iconColor: 'red'
        },
        {
          url: `https://juejin.im/`,
          iconClass: 'iconfont x-wentijieda',
          iconColor: '#F2981C'
        },
        {
          url: `https://fanyi.baidu.com/?aldtype=16047#auto/zh`,
          iconClass: 'iconfont x-zhongwen',
          iconColor: 'black'
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
  color: #fff;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.35rem;
  background-color: #464c5b;
  margin-bottom: 0.24rem;
}
.header-left-icon {
  position: absolute;
  left: 0.1rem;
  font-weight: 300;
}
.header-more-icon {
  position: absolute;
  right: 0.2rem;
  font-size: 0.8rem;
}
.header-more-wrap {
  position: absolute;
  right: 0.1rem;
  font-size: 0.6rem;
  top: 100%;
  z-index: 2;
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
