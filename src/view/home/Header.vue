<template>
  <div >
    <div class="header-wrapper">
      <v-layout align-center row fill-height>
        <img src="../../assets/logo.png" class="logo" >
        <v-spacer></v-spacer>
        <div class="web-menu" @click="goMyInfo">
          내 프로필로 가기
        </div>
        <v-icon class="mobile-menu" @click="onMenu">menu</v-icon>
      </v-layout>
    </div>
    <div class="dummy-header"></div>
    <div v-if="showMenu" class="menu" @click="goMyInfo">
      내 프로필로 가기
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
      data: function () {
        return {
          showMenu: false,
        }
      },
        methods:{
          onMenu(){
            this.showMenu = !this.showMenu;
          },
          goMyInfo(){
            this.$router.push("MyInfo");
          }
        }
    }
</script>

<style scoped>
  /*web 일때*/
  @media only screen and (min-width: 960px) {
    .mobile-menu{
      display: none;
    }
    .web-menu{
      color: white;
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
  }
  .header-wrapper{
    height: 60px;
    background-color: #FFA4D0;
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
  .mobile-menu{
    color: white;
    margin-right: 16px;
    font-size: 36px;
  }
  .menu{
    z-index: 2;
    width: 100%;
    position: fixed;
    top: 60px;
    background-color: #FFA4D0;
    border-top: 1px solid #FDE8F7;
    padding: 8px;
    color: white;
    font-size: 16px;
  }
</style>
