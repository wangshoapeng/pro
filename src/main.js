// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'

import '@/assets/js/rem.js'

import 'iview/dist/styles/iview.css'
import '@/assets/icon/iconfont.css'

import Header from '@/components/mian-header.vue'

Vue.use(iView)

Vue.component('tHeader', Header)

Vue.config.productionTip = false

Vue.prototype.bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
