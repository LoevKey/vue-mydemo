import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/content/:id',
      component: () => import('@/page/content')
    },
    {
      path: '/test',
      component: () => import('@/page/test'),
    }
  ]
})

