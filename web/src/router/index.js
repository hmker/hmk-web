import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
import Box from '@/views/Box'
import Login from '@/views/Login'
import Object from '@/views/Object'
import Search from '@/views/Search'
import Publish from '@/views/Publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/box',
      name: 'Box',
      component: Box
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/object',
      name: 'Object',
      component: Object
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
