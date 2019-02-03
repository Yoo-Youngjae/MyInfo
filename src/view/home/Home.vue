<template>
  <v-app>
    <my-header></my-header>
    <div class="mainView">
      <router-view/>
    </div>
    <!--<my-footer></my-footer>-->
  </v-app>
</template>

<script>
  import MyHeader from './Header'
  import MyFooter from './Footer'
    export default {
      name: "Home",
      components:{
        MyHeader, MyFooter
      },
      data: function () {
        return {
          counter: 0,
        }
      }
    }
</script>

<style scoped>


  /*web 일때*/
  @media only screen and (min-width: 960px) {
    .mainView{
      min-height: 700px;
      /*max-width: 960px;*/
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      /*margin-top: 64px;*/
    }
  }
  /*mobile 일때*/
  @media only screen and (max-width: 959px) {
    .mainView{
      min-height: 700px;
      /*margin-left: 16px;*/
      /*margin-right: 16px;*/
      /*margin-top: 64px;*/
    }
  }
</style>
