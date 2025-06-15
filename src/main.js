import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import vueScrollTo from 'vue-scrollto'
import VueMask from 'vue-the-mask'

createApp(App)
  .use(router)
  .use(vueScrollTo, {
  duration: 800,
  easing: 'ease-in-out',
  offset: 0,
  force: true,
  cancelOnUserScroll: true,
  })
  .use(VueMask)
  .mount('#app')
