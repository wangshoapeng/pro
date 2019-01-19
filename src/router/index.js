import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/view/Home.vue')
    },

    {
      path: '/studynav',
      name: 'studynav',
      component: () => import('@/view/study-nav.vue')
    },
    {
      path: '/shoping-car',
      name: 'shopcar',
      component: () => import('@/view/ShopingCar.vue')
    },
    {
      path: '/prop-pass-value',
      name: 'emit',
      component: () => import('@/view/PropPage.vue')
    },
    {
      path: '/emit',
      name: 'emit',
      component: () => import('@/components/emit/EmitA.vue')
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('@/view/AlertPage.vue')
    },
    {
      path: '/alertMin',
      name: 'alertMIn',
      component: () => import('@/view/AlertPageMin.vue')
    },
    {
      path: '/propsarray',
      name: 'propsarray',
      component: () => import('@/xiaoce/propsarray.vue')
    },
    {
      path: '/transfrom',
      name: 'transfrom',
      component: () => import('../view/Transfrom.vue')
    },
    {
      path: '/iviewA',
      name: 'iviewA',
      component: () => import('../view/IviewA.vue')
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('../view/tab.vue')
    }
  ]
})
