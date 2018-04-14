<template>
  <div class="BoxWtwo">
    <p><img width="100px" height="100px" :src="pc.cover.origin" alt=""/></p>
    <p>{{pc.name}}</p>
    <p>{{pc.intro}}</p>
    <p>￥{{pc.watchCount}}</p>
  </div>
</template>

<script>
export default {
  name: "BoxWTwo",
  props:['pc']
}
</script>

<style lang="scss" scoped>
    .BoxWtwo{
      width:50%;
      height:188px;
      border-right:1px solid #eaeaea;
      border-bottom:1px solid #eaeaea;
      background:#fff;
      >p{
        width:100%;
        text-align:center;
      }
      >p:nth-of-type(1){
        >img{
          display:inline-block;
        }
      }
      >p:nth-of-type(2){
        font-size:12px;
      }
    }
 
</style>


