<template>
  <div id="app">
    <!-- 顶部栏 -->
    <mt-header title="音乐管理" fixed>
      <router-link :to="{name:'/'}" slot="left">
  <mt-button icon="back">返回</mt-button>
  <mt-button icon="more" slot="right"></mt-button>
  </router-link>
</mt-header>
   <!-- 路由组件出口 -->
    <router-view/>
    <!-- 底部栏 -->

  <mt-tabbar v-model="selected" :fixed="fixed">
  <mt-tab-item id="home">
    <img slot="icon" src="../src/images/2.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="vip">
    <img slot="icon" src="../src/images/3.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="cart">
    <img slot="icon" src="../src/images/5.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="../src/images/7.png">
    查找
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
//  import index from './images/2.png'
//  import vip from './images/3.png'
//  import shopcart from './images/5.png'
//  import search from './images/7.png'

// let tabs=[
//   {id:1,title:'首页',imgSrc:index,routerName:{name:'home'}},
//   {id:1,title:'会员',imgSrc:vip,routerName:{name:'vip'}},
//   {id:1,title:'购物车',imgSrc:shopcart,routerName:{name:'cart'}},
//   {id:1,title:'查找',imgSrc:search,routerName:{name:'search'}}

// ]



export default {
  name: 'App',
 
  data() {
    return {
      selected:'',
      fixed:true,
      // tabs:tabs 

    }
  },
  created() {
    this.$router.push({name:'home'})
  },
  watch: {
    selected:function (newV,oldV) {
     this.$router.push({name:this.selected});
    }
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
