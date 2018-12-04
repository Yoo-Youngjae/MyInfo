<template>
  <div >
    <div v-if="showMenu" class="background-clicker" @click="closeMenu"></div>
    <div class="header-wrapper">
      <v-layout align-center row fill-height>
        <img v-if="iswedding" src="../../assets/logo.png" class="logo" >
        <img v-else src="../../assets/logo_developers.png" class="logo_develop" >
        <v-spacer></v-spacer>
        <v-icon class="menu-drawer" @click="onMenu">menu</v-icon>
      </v-layout>
    </div>
    <div class="dummy-header"></div>
    <transition name="header-menu">
      <div v-if="showMenu" class="menu">
        <div v-if="iswedding" @click="goMyInfo">내 프로필로 가기</div>
        <div v-else @click="goWedding">청첩장 예시로 가기</div>
      </div>
    </transition>
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
            this.$router.push("/");
          },
          goWedding(){
            this.iswedding = true;
            this.$router.push("/wedding");
          },
          closeMenu(){
            this.showMenu = !this.showMenu;
          }
        }
    }
</script>

<style scoped>
  /*web 일때*/
  @media only screen and (min-width: 960px) {
    .menu {
      z-index: 2;
      width: 100%;
      position: fixed;
      top: 60px;
      background-color: #FFA4D0;
      border-top: 1px solid #FDE8F7;
      padding: 8px;
      padding-left: 24px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    .menu-drawer{
      color: white;
      margin-right: 16px;
      font-size: 36px;
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
      cursor: pointer;
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
  .logo_develop{
    width: 60px;
    margin-left: 20px;
    opacity: 0.85;
  }
  .menu-drawer{
    color: white;
    margin-right: 16px;
    font-size: 36px;
  }
  .menu:hover{
    color: #3e2723;
  }
  .background-clicker{
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .header-menu-enter-active, .header-menu-leave-active{
    transition: all .3s ease-out;
  }

  .header-menu-enter, .header-menu-leave-to{
    transform: translateY(-10px) scaleY(0.8);
    opacity: 0;
  }

  .test{
    color: white;
  }
</style>
