import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/register.vue'

import Classification from '@/components/menuComponents/classification.vue'
// import Select from '@/components/menuComponents/selection.vue'
import Health from '@/components/menuComponents/health.vue'
import Menu from '@/components/menuComponents/menu.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path : '/',
      redirect : '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name : 'Register',
      component: Register
    },
    {
      path: '/login',
      name : 'Login',
      component: Login
    },
    {
      path: '/classification',
      name : 'classification',
      component : Classification
    },
    {
      path: '/menu',
      name : 'menu',
      component : Menu
    },
    // {
    //   path: '/select',
    //   name : 'select',
    //   component : Select
    // },
    {
      path: '/health',
      name : 'health',
      component : Health
    }
  ]
})
