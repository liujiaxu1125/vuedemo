<template>
  <section class="footerBox">
      <div>
          <main>
              <p>登录</p>
              <p>反馈</p>
          </main>
          
      </div>
      <div>
          
          <ul>
              <li><i class="fa fa-user"></i></li>
              <li>客户端</li>
          </ul>
          <ul>
              <li><i class="fa fa-mobile"></i></li>
              <li>触屏版</li>
          </ul>
          <ul>
              <li><i class="fa fa-television"></i></li>
              <li>电脑版</li>
          </ul>
      </div>
      <footer>
          <p>隐私政策 用户协议 苏ICP备17040376号-6</p>
          <p>苏公网安备32011402010009号  Copyright © 2012-2018</p>
          <p>VMALL.COM版权所有</p>
      </footer>
  </section>
</template>

<script>
export default {
  name: "AppFooter",
  data(){
      return {
          titles:[]
      }
  }
}
</script>

<style lang="scss" scoped>
   .footerBox{
       border-top:7px solid #eaeaea;
       height:210px;
       background:#fff;
       display:flex;
       flex-direction:column;
       align-items:center;
       >div{
           width:329.19px;
       }
       >div:first-of-type{
            flex:1;
            display:flex;
            justify-content:center;
            align-items:center;
            >main{
                width:148px;
                height:31.23px;
                display:flex;
                >p{
                    width:74px;
                    height:31.23px;
                    line-height:31.23px;
                    text-align:center;
                }
                >p:first-child{
                    border-right:1px solid #eaeaea;
                }
                >p:last-child{
                    border-left:1px solid #eaeaea;
                }
            }     
       }
       >div:last-of-type{
           height:86.34px;
           border-top:1px solid #eaeaea;
           display:flex;
           justify-content:space-around;
           align-items:center;
           >ul{
               width:40px;
               height: 40px;
               text-align:center;
               >li{
                   font-size:12px;
                   >i{
                       font-size:20px;
                   }
               }
           }
       }
       >footer{
           border-top:1px solid #eaeaea;
           width:329.19px;
           height: 67.77px;
           text-align:center;
           >p{
               font-size:12px;
           }
       }
   }
</style>


