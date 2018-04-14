<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
                <img :src="banner.picUrl" alt="" width="100%">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
    </div>
  
</template>

<script>
import '../../../../node_modules/swiper/dist/css/swiper.min.css';
import Swiper from 'swiper'
//import axios from 'axios'


//定义输出接口
export default {
  name: 'AppBanner',
  data(){
      return {
          banners: []
      }
  },
  methods: {
      getBanners(){
          //console.log(1);
          //?g_tk=5381
          this.$http.get('/mz/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',{
              params: {
                  g_tk: Date.now()
              }
          }).then((res)=>{
              //console.log(res.data.data.slider);
              this.banners = res.data.data.slider
          })
      }
  },
  created(){
      this.getBanners()
  },
  updated(){
    new Swiper ('.swiper-container', {
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay:true,
        loop: true

    })        
  }

}
</script>

<style>

</style>


