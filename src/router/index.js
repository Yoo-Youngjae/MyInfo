import Vue from 'vue'
import Router from 'vue-router'
import WeddingExample from '@/view/home/weddingExample/WeddingExample.vue'
import MyInfo from '@/view/home/myInfo/MyInfo.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/wedding',
      name: 'wedding',
      component: WeddingExample
    },
    {
      path: '/',
      name: 'MyInfo',
      component: MyInfo
    }
  ]
})
