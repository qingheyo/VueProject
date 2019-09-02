<template>
<div>
  <div class="music">
      <p>歌曲名称</p>
      <div class="top">
      <audio controls>
          <source src="../../music/1.mp3">
      </audio>
      </div>
      <div class='bottom'>   
          <img src="../../images/13.png" alt="" @click="handle">
          <span>点赞数:{{count}}</span>
          <span>发表时间:2019-8-20</span>
      </div>
  </div>
   <div class="music">
      <p>歌曲名称</p>
      <div class="top">
      <audio controls>
          <source src="../../music/1.mp3">
      </audio>
      </div>
      <div class='bottom'>   
          <img src="../../images/13.png" alt="" @click="handle1">
          <span>点赞数:{{count1}}</span>
          <span>发表时间:2019-8-20</span>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'DianYin',
    data() {
        return {
            count:0,
            count1:0
        }
    },
    methods: {
        handle(){
            this.count++;
        },
        handle1(){
            this.count1++;
        },
    },

}
</script>

<style>
.music{
    height: 200px;
    margin-top:20px;
    border: 1px solid coral; 
}
.music p{
    text-align: center;
    font-size: 20px;
    margin: 10px;
}
.top{
     height: 50px;
     margin: 10px;
     text-align: center;

}
.bottom{
     margin-top: 20px;
     margin-left: 100px;
     height: 50px;
     /* width: 100%; */
     /* margin: 0 auto; */
}
.bottom img{
    margin-left: 30px;
float: left;
height: 30px;
width: 30px;
}
.bottom span{
float:left;
margin: 5px;
height: 20px;
width: 200px;
}

</style>