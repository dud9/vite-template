import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500 })

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
