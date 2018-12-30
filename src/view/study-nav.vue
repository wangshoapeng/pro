<template>
  <div>
    <t-header>Demo-List</t-header>
    <div class="scroll-wrap" ref='scroll'>
      <router-link v-for="item in studyNavList" class="base-link" :to="item.link" :key="item.link">{{item.content}}
        <i class="iconfont" :class="item.iconClass?item.iconClass:'x-jiantouyou'"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      studyNavList: [
        { link: '/prop', content: 'Prop-传值', iconClass: '' },
        { link: '/emit', content: '$emit-事件', iconClass: '' },
        { link: '/alert', content: 'alert Min', iconClass: '' },
        { link: '/alertMin', content: '$emit-事件', iconClass: '' },
        { link: '/transfrom', content: 'Trans From', iconClass: '' },
        { link: '/propsarray', content: 'propsArray ', iconClass: '' }
      ]
    }
  }
}
</script>
<style lang='scss'>
</style>
