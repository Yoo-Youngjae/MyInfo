<template>
  <div>
    <div class="top-data">
      <div class="date">
        OCT 13rd 2018<br>
        01:00 PM
      </div>
      <div class="place">
        신림로 17길 77<br>
        한가람 / 영재네
      </div>
    </div>
    <v-divider></v-divider>
    <div>
      <img  src="../../assets/marry-main.jpg" class="marry-main">
      <div class="cheer-me">
        저희의 만남을 응원해 주세요.
      </div>
    </div>
    <v-divider></v-divider>
    <v-layout justify-center fill-height mt-5 mb-3>
      <v-flex xs5 text-xs-center class="middle-text1">
        울아빠<br>
        울엄마
      </v-flex >
      <v-flex xs3 class="middle-text2">
        의 둘째
      </v-flex>
      <v-flex xs4 class="middle-text3">
        영재
      </v-flex>
    </v-layout>
      <v-layout mt-2>
        <v-flex xs5 text-xs-center class="middle-text1">
          아버님<br>
          어머님
        </v-flex >
        <v-flex xs3 class="middle-text2">
          의 첫째
        </v-flex>
        <v-flex xs4 class="middle-text3">
          혜림
        </v-flex>
    </v-layout>
    <h3 class="bold mt-5 ml-3">
      Photos
    </h3>
    <v-parallax class="carousel" style="height: 400px;">
      <v-carousel delimiter-icon="remove" lazy style="height: 600px;">
        <v-carousel-item>
          <img src="../../assets/ourPhoto1.jpg" style="width:100%">
        </v-carousel-item>
        <v-carousel-item>
          <img src="../../assets/ourPhoto2.jpg" style="width:100%">
        </v-carousel-item>
        <v-carousel-item>
          <img src="../../assets/ourPhoto3.jpg" style="width:100%">
        </v-carousel-item>
      </v-carousel>
    </v-parallax>
    <div class="bottom mt-4 mb-4">
      <v-divider></v-divider>
      <div class="mt-4 direction-map">
        오시는길<br>
      </div>
      <div class="mt-3 direction-map">

        알아서~<br>
        오늘은 여기까지~
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
  .top-data{
    display: flex;
  }
.date{
  font-weight: 500;
  font-size: 16px;
  width: 50%;
}
  .place{
    text-align: right;
    font-weight: 500;
    font-size: 16px;
    width: 50%
  }
  .marry-main{
    margin-top: 24px;
    margin-bottom: 24px;
    opacity: 0.8;
    width:100%;
  }
  .cheer-me{
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #F473CD;
    margin-bottom: 24px;
  }

  .middle-text1{
    font-weight: 600;
    font-size: 16px;
    text-align: center;
  }
  .middle-text2{
    padding-top: 10px;
    font-weight: 500;
  }
  .middle-text3{
    font-weight: 600;
    font-size: 16px;
    padding-top: 8px;
  }
  .carousel{
    margin-top: 16px;
  }
  .direction-map{
    font-weight: 600;
    font-size: 16px;
  }
</style>
