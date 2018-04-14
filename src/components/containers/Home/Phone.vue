<template>
    <div>
        <header class="titleCom">
            <h1>手机</h1>
        </header>
        <section class="phonesBox">
            <BoxWThree 
                v-for = " phone in phones " 
                :key = "phone.id" 
                :phone = " phone "
            ></BoxWThree>
        </section>
        
    </div>
  
</template>

<script>
import BoxWThree from './BoxWThree'

export default {
  name: "AppPhone",
  data(){
      return {
          phones:[]
      }
  },
  components: {
     BoxWThree 
  },
  methods: {
    getPhones(){
        //https://m.maizuo.com/v4/api/film/now-playing?page=2&count=7
        this.$http.get('/dy/v4/api/film/now-playing',{
            params: {
                page:2,
                count:7
            }
        }).then((res)=>{
            //console.log( res.data.data.films)
            this.phones = res.data.data.films;
        });
        
    }
  },
  created(){
    this.getPhones()
    
  }

 
  
}
</script>

<style lang="scss" scoped>
    .phonesBox{
        display:flex;
        flex-wrap:wrap;
    }
</style>


