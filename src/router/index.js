import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/page/layout'
// import Main from '@/page/main'
// import User from '@/page/user'
import menus from '@/config/menu'

Vue.use(Router)

let routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}/index`)
    })
  })
})

export default new Router({
  routes: routes
})
