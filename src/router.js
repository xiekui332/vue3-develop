import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router =  new Router({
  mode: '',
  base: process.env.BASE_URL, 
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/masterClass',
      name: 'masterClass',
      component: () => import('./views/MasterClass.vue'),
      meta:{
        title:'大师讲堂'
      }
    },
    {
      path: '/prayForBlessing',
      name: 'prayForBlessing',
      component: () => import('./views/PrayForBlessing.vue'),
      meta:{
        title:'祈福许愿'
      }
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: () => import('./views/PersonalCenter.vue'),
      meta:{
        title:'个人中心'
      }
    }
  ],

})


//动态修改项目标题
router.beforeEach(function(to,from,next){
    if(to.meta.title){
        document.title = to.meta.title
    }else{
        document.title = 'vue'
    }
    next()
})

export default router;