import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'
import PalaceView from '@/views/PalaceView'
import EncodeView from '@/views/EncodeView'
import PracticeView from '@/views/PracticeView'
import ApplyView from '@/views/ApplyView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView')
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/palace',
      name: 'PalaceView',
      component: PalaceView
    },
    {
      path: '/encode',
      name: 'EncodeView',
      component: EncodeView
    },
    {
      path: '/practice',
      name: 'PracticeView',
      component: PracticeView
    },
    {
      path: '/apply',
      name: 'ApplyView',
      component: ApplyView
    }
  ]
})