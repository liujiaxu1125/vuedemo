<template>
  <div class='home page'>
    <app-header></app-header>
    <app-banner></app-banner>
    <app-nav></app-nav>
    <app-phone></app-phone>
    <app-pc></app-pc>
    <AppHousehold></AppHousehold>
    <app-footer></app-footer>
    home
  </div>
</template>

<script>
import AppHeader from './Header';
import AppBanner from './Banner';
import AppNav from './Nav'
import AppPhone from './Phone'
import AppFooter from './Footer'
import AppPc from './PC' 
import AppHousehold from './Household'

export default {
  name: 'Home',
  components:{
    AppHeader,AppBanner,AppNav,AppPhone,AppFooter,AppPc,AppHousehold
  }
}

</script>

<style lang='scss'>


</style>


