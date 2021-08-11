import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Chart from '../views/Chart.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
    // name: 'Login',
    // component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',    
    component:Login
  },
  {
    path: '/chart',
    name: 'Chart',    
    component:Chart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


