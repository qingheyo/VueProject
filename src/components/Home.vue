 <template>
     <div id="home"> 
         <!-- 轮播图 -->
         <mt-swipe :auto="4000" style="height:200px" class="swiper">
            <mt-swipe-item> 
            <img src="../images/6.jpg" alt=""/>  
            </mt-swipe-item> 
            <mt-swipe-item>
                <img src="../images/7.jpg" alt=""/> 
                </mt-swipe-item> 
                 <mt-swipe-item>
                     <img src="../images/8.jpg" alt=""/>  
                </mt-swipe-item> 
         </mt-swipe>
         <!-- 九宫格 -->
         <div class="list">
             <ul>
                 <li v-for='item in grids' :key="item.id">
                     <router-link :to="item.router" >
                         <img :src="item.src" alt="">
                     </router-link>
                     <p>{{item.title}}</p>
                 </li>
             </ul>
         </div>
        
     </div>
 </template>
 
 <script>
 import src1 from '../images/10.jpg'
 export default {
     name:'Home',
     data(){
     return{
      grids:[
 {id:1,src:src1,title:'古风',router:{name:'music.gufeng'}},
 {id:2,src:src1,title:'流行',router:{name:'music.liuxing'}},
 {id:3,src:src1,title:'治愈',router:{name:'music.zhiyu'}},
 {id:4,src:src1,title:'经典',router:{name:'music.jingdian'}},
 {id:5,src:src1,title:'热门',router:{name:'music.remen'}},
 {id:6,src:src1,title:'英文',router:{name:'music.yingwen'}},
 {id:7,src:src1,title:'纯音',router:{name:'music.chunyin'}},
 {id:8,src:src1,title:'电音',router:{name:'music.dianyin'}},
 {id:9,src:src1,title:'民谣',router:{name:'music.mingyao'}}
 ]
     }
 },

 };
 </script>

 <style lang="css" scoped>
     .swiper img{
         height: 100%;
         width: 100%;
         
     }
     .list{
         width: 100%;
         height: 372px;
     }
     .list ul{
         display: flex;
         flex-wrap: wrap;
     }
     .list ul li{
         width: 33%;
         height: 100px;
         margin-top:15px; 
         text-align: center;
         font-size: 16px;
         cursor:pointer; 
     }
     .list ul li a{
         display: inline-block;
         width: 50px;
         height: 50px;
         margin: 0 auto;
     }
     .list ul li a img{
         width: 50px;
     } 
 </style>