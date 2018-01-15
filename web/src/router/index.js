import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
import List from '@/views/List'
import Login from '@/views/Login'
import Project from '@/views/Project'
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
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
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
