<template>
  <div >
    <div class="header-wrapper">
      <v-layout align-center row fill-height>
        <img src="../../assets/logo.png" class="logo" >

        <v-spacer></v-spacer>
        <v-icon class="mobile-menu" @click="onMenu">menu</v-icon>

      </v-layout>
    </div>
    <div class="dummy-header"></div>
    <div v-if="showMenu" class="menu">
      없지롱~
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
        }
    }
</script>

<style scoped>
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
