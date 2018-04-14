<template>
  <div class="BoxWThree">
    <p>
      <img width="75px" height="75px" :src="phone.cover.origin" alt="" />
    </p>
    <p>{{phone.name}}</p>
    <p>{{phone.intro}}</p>
    <p>￥{{phone.watchCount}}</p>
  </div>
</template>

<script>
export default {
  name: "BoxWThree",
  props: ['phone']
}
</script>

<style lang="scss" scoped>
    .BoxWThree{
      width:33%;
      height:165.31px;
      background:#fff;
      border-right:1px solid #eaeaea;
      border-bottom:1px solid #eaeaea;
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


