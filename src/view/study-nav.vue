<template>
  <div id="study-nav">
    <t-header>Demo-List</t-header>
    <div class="scroll-wrap"
         ref='scroll'>
      <router-link v-for="(item,index) in studyNavList"
                   class="base-link"
                   :to="item.link"
                   :key="index">{{item.content}}
        <i class="iconfont"
           :class="item.iconClass || 'x-jiantouyou'"></i>
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
        { link: '/propsarray', content: 'propsArray ', iconClass: '' },
        { link: '/emit', content: '$emit-事件', iconClass: '' },
        { link: '/alert', content: 'alert Min', iconClass: '' },
        { link: '/alertMin', content: '$emit-事件', iconClass: '' },
        { link: '/transfrom', content: 'Trans From', iconClass: '' },
        { link: '/propsarray', content: 'propsArray ', iconClass: '' },
        { link: '/emit', content: '$emit-事件', iconClass: '' },
        { link: '/alert', content: 'alert Min', iconClass: '' },
        { link: '/alertMin', content: '$emit-事件', iconClass: '' },
        { link: '/shoping-car', content: 'Shop Car', iconClass: '' },
        { link: '/tab', content: 'tab ', iconClass: '' }
      ]
    }
  }
}
</script>
<style lang='scss'>
</style>
