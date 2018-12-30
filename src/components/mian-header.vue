<template>
  <div class="mian-header">
    <span @click="$router.go(-1)"
          class="header-left-icon"
          v-if="back">
      <i class="iconfont x-fanhui"></i>
      返回</span>
    <span @click="$router.go(0)"
          class="header-left-icon"
          style="marginLeft:.2rem"
          v-else>
      <i class="iconfont x-shuaxin"></i>
    </span>
    <span class="header-more-icon"
          @click="showMore = !showMore">
      <i class="iconfont x-gengduo"></i></span>
    <slot></slot>
    <transition enter-active-class="animated slideInRight"
                leave-active-class="animated slideOutRight">
      <div class="header-more-wrap"
           v-if="showMore">
        <ul>
          <li v-for="(i,index) in 5"
              :key="index">
            <i class="iconfont x-shuaxin"></i>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMore: false
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
  font-size: 0.28rem;
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
  font-size: 0.48rem;
  padding: 0 0.4rem;
}
.header-more-wrap {
  position: absolute;
  right: 0;
  background-color: white;
  color: #657180;
  top: 100%;
  padding: 0 0.4rem;
  z-index: 1;
}
</style>
