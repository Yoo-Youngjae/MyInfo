<template>
  <div style="height: 120px">
    <div class="header-wrapper">
      <v-layout align-center row fill-height>
        <!--<img v-else src="../../assets/logo_developers.png" class="logo_develop" >-->
        <div class="logo_develop">
          <div class="logo-myname">Youngjae Yoo</div>
          <div class="logo-developer">Developer</div>
        </div>
        <v-spacer></v-spacer>
        <div v-if="iswedding" class="web-menu" @click="goMyInfo">
          My Profile
        </div>
        <img v-else src="../../assets/logo.png" class="web-menu logo" @click="goWedding">
        <v-icon class="mobile-menu" @click="onMenu">menu</v-icon>
      </v-layout>
    </div>
    <div class="dummy-header"></div>
    <div v-if="showMenu" class="menu">
      <div v-if="iswedding" @click="goMyInfo">내 프로필로 가기</div>
      <div v-else @click="goWedding">청첩장 예시로 가기</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
      data: function () {
        return {
          showMenu: false,
          iswedding: false,
        }
      },
      computed:{

      },
      created(){
        if(this.$router.currentRoute.name === 'wedding'){
          this.iswedding = true;
        }
      },
        methods:{
          onMenu(){
            this.showMenu = !this.showMenu;
          },
          goMyInfo(){
            this.iswedding = false;
            this.showMenu = false;
            this.$router.push("/");
          },
          goWedding(){
            this.iswedding = true;
            this.showMenu = false;
            this.$router.push("/wedding");
          },
        }
    }
</script>

<style scoped>
  /*web 일때*/
  @media only screen and (min-width: 960px) {
    .menu{
      display: none;
    }
    .mobile-menu{
      display: none;
    }
    .web-menu{
      /*color: white;*/
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      margin-right: 24px;
    }
    .web-menu:hover{
      color: #3e2723;
    }
  }
  /*mobile 일때*/
  @media only screen and (max-width: 959px) {
    .web-menu{
      display: none;
    }
    .menu{
      z-index: 2;
      width: 100%;
      height: 60px;
      position: fixed;
      top: 120px;
      background-color: #ffffff;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding: 18px;
      /*color: white;*/
      font-size: 16px;
      cursor: pointer;
    }
    .menu:hover{
      color: #3e2723;
    }
  }
  .header-wrapper{
    height: 120px;
    background-color: #ffffff;
    border-bottom: 1px solid #263238;
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  .dummy-header{
    height: 60px;
  }
  .logo{
    width: 60px;
    margin-left: 20px;
    cursor: pointer;
  }
  .logo_develop{
    margin-left: 40px;
    text-align: center;
  }
  .logo-myname{
    font-weight: bold;
    font-size: 24px;

  }
  .logo-developer{
    font-size: 18px;

  }
  .mobile-menu{
    /*color: white;*/
    margin-right: 16px;
    margin-top: -20px;
    font-size: 36px;
  }

</style>
