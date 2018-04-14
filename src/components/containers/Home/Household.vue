<template>
  <section>
    <header class="titleCom">
            <h1>智能家居</h1>
    </header>
    <div class="pcsBox">
        <Box-two 
            v-for="pc in pcs" 
            :key = "pc.id" 
            :pc = "pc"
        ></box-two>
    </div>
    
   </section>
</template>

<script>
import BoxTwo from './BoxWTwo'

export default {
    name: "AppHousehold",
    data(){
        return {
            pcs: []
        }
    },
    components: {
        BoxTwo
    },
    methods: {
        getPcs(){
            this.$http.get('/dy/v4/api/film/now-playing',{
                params:{
                    page: 6,
                    count: 7
                }  
            }).then((res)=>{
                this.pcs = res.data.data.films;
                console.log(this.pcs);
            })
        }
    },
    created(){
        this.getPcs();
    }
}
</script>

<style lang="scss" scoped>

</style>


