import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Vip from '../components/Vip'
import Cart from '../components/Cart'
import Search from '../components/Search'
import GuFeng from '../components/pages/GuFeng'
import DianYin from '../components/pages/DianYin'
import ChunYin from '../components/pages/ChunYin'
import JingDian from '../components/pages/JingDian'
import LiuXing from '../components/pages/LiuXing'
import MingYao from '../components/pages/MingYao'
import ReMen from '../components/pages/ReMen'
import YingWen from '../components/pages/YingWen'
import ZhiYu from '../components/pages/ZhiYu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '/',
      component: Home
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path:'/pages/gufeng',
      name:'music.gufeng',
      component: GuFeng
    },
    {
      path:'/pages/dianyin',
      name:'music.dianyin',
      component: DianYin
    },
    {
      path:'/pages/chunyin',
      name:'music.chunyin',
      component: ChunYin
    },
    {
      path:'./pages/jingdian',
      name:'music.jingdian',
      component: JingDian
    },
    {
      path:'/pages/liuxing',
      name:'music.liuxing',
      component: LiuXing
    },
    {
      path:'/pages/mingyao',
      name:'music.mingyao',
      component: MingYao
    },
    {
      path:'/pages/remen',
      name:'music.remen',
      component: ReMen
    },
    {
      path:'/pages/yingwen',
      name:'music.yingwen',
      component: YingWen
    },
    {
      path:'/pages/zhiyu',
      name:'music.zhiyu',
      component: ZhiYu
    }
  ]
})
