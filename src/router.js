import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Comments from './components/Comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Comments',
      name: 'Comments',
      component: Comments,
      props(route) {
        return {  activePost: route.query.activePost }
      }
    }
  ]
})
