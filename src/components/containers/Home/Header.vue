<template>
  <header class='header'>
    <nav>
      <section class='logo'>
        <a href="">
          <img src="/static/images/logo_hw.png" alt="">
        </a>
      </section>
      <section class='search'>
        <div class='searchBtn'>
          <i class='fa fa-search' aria-hidden="true"></i>
        </div>
        <div class='searchIpt'>HUAWEI P20 荣耀V10</div>
      </section>
      <section class='shortCart'>
        <div class='indexShoppingCart'>
          <i class="fa fa-shopping-cart"></i>
        </div>
        <a href="javascript:;">登录</a>
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang='scss' scoped>
  .header{
    width:100%;
    height:41.66px;
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index:10000;
    background:rgba(255,255,255,0.92);
    >nav{
      height:100%;
      display:flex;
      align-items:center;
      .logo{
        width:83.31px;
        height:100%; 
        >a{
          height:100%;
          >img{
            width:100%;
            height:100%;
          }
        }
        
      }
      .search{
        flex:1;
        background-color: rgba(234,234,234,0.8);
        margin-left:18.86px;
        border-radius:15px;
        height:29.16px;
        display:flex;
        .searchBtn{
          border-radius:15px 0 0 15px;
          width:40px;
          height:29.16px;
          text-align:center;
          line-height:29.16px;
          >i{
            line-height:100%;
            font-size:1rem;
            color:gray;
          }
        }
        .searchIpt{
          font-size:0.65rem;
          color:gray;
          height: 29.16px;
          line-height:29.16px;
        }
      }
      .shortCart{
        width:85.33px;
        height:29.16px;
        display:flex;
        align-items:center;
        justify-content:space-around;
        >div{
          height:100%;
        }
        >div:first-child{
          width:24.97px;
          height:24.97px;
          >i{
            font-size:24.97px;
            line-height:24.97px;
            color:gray;
          }
        }
        >a{
          font-size:14px;
          color:#000;
        }
      }
    }
  }
</style>


