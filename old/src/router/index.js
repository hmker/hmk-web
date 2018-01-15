import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Register = () => import('@/views/Register')
const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')
const ThingDetail = () => import('@/views/ThingDetail')

const router = new Router({
  mode: 'hash',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/register', name: 'register', component: Register},
    {path: '/login', name: 'login', component: Login},
    {path: '/thing/:id', name: 'thing-detal', component: ThingDetail}//$route.params.id
  ]
})

export default router
