import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemDetails from '@/components/itemDetails/ItemDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/filme',
    name: 'filme',
    // route level code-splitting
    // this generates a separate chunk (filme.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "filme" */ '../views/FilmeView.vue')
  },
  {
    path: '/filme/:itemId',
    name: 'ItemFilmeDetails',
    component: ItemDetails,
    props: true,
  },
  {
    path: '/charaktere',
    name: 'charaktere',
    // route level code-splitting
    // this generates a separate chunk (charaktere.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "charaktere" */ '../views/CharaktereView.vue')
  },
  {
    path: '/charaktere/:itemId',
    name: 'ItemCharakterDetails',
    component: ItemDetails,
    props: true,
  },
  {
    path: '/planeten',
    name: 'planeten',
    // route level code-splitting
    // this generates a separate chunk (planeten.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Planeten" */ '../views/PlanetenView.vue')
  },
  {
    path: '/planeten/:itemId',
    name: 'ItemPlanetenDetails',
    component: ItemDetails,
    props: true,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
