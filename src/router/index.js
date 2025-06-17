import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import AppointmentView from "@/views/AppointmentView.vue";
import TestView from "@/views/TestView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'CAIB | Pagina principala'
    }
  },
  {
    path: '/programare',
    name: 'appointment',
    component: AppointmentView,
    meta: {
      title: 'CAIB | Programare'
    }
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
    meta: {
      title: 'CAIB | Test'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Cabinetul Avocatului Ina Bostan'
  next()
})

export default router
