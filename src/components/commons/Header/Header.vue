<template>
  <header class='header'>
    <nav>
      <section class='logo'>
        <a href="">
          <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/logo/logo_hw.png" alt="">
        </a>
      </section>
      <section class='search'></section>
      <section class='shortCart'></section>
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
    background:rgba(255,255,255,0.92);
    

    >nav{
      height:100%;
      display:flex;
      >section{
        height:100%; 
      }
      .logo{
        width:83.31px;
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
        background:pink;
      }
      .shortCart{
        width:85.33px;
        background:green;
      }
    }
  }
</style>


