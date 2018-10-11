<template>
  <div >
    <div class="header-wrapper">
      <v-layout align-center row fill-height>
        <img src="../../assets/logo.png" class="logo" >

        <v-spacer></v-spacer>
        <h4 class="color-white cp mr-3">언어변경</h4>
      </v-layout>
    </div>
    <div class="dummy-header">

    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
        methods:{

        }
    }
</script>

<style scoped>
  .header-wrapper{
    height: 60px;
    background-color: #3CD070;
    position: fixed;
    width: 100%;
  }
  .dummy-header{
    height: 60px;
  }
  .logo{
    width: 60px;
    margin-left: 20px;
    cursor: pointer;
  }
</style>
