import Vue from 'vue'
import Router from 'vue-router'
import WeddingExample from '@/view/home/weddingExample/WeddingExample.vue'
import MyInfo from '@/view/home/myInfo/MyInfo.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WeddingExample',
      component: WeddingExample
    },
    {
      path: '/myInfo',
      name: 'MyInfo',
      component: MyInfo
    }
  ]
})
