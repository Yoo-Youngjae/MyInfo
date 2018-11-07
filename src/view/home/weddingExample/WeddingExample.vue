<template>
  <v-flex md8 xs10 offset-md2 offset-xs1>
    <div class="top-data">
      <div class="date">
        OCT 13rd 2018<br>
        01:00 PM
      </div>
      <div class="place">
        AA로 BB길 CC<br>
        DDD홀 / FFF센터
      </div>
    </div>
    <v-divider></v-divider>
    <v-flex md6 xs10 offset-md3 offset-xs1>
      <img src="../../../assets/marry-main.jpg" class="marry-main-img">
      <div class="cheer-me">
        저희의 만남을 응원해 주세요.
      </div>
    </v-flex>
    <v-divider></v-divider>
    <v-layout justify-center fill-height mt-5 mb-3>
      <v-flex xs5 md6 text-xs-center class="middle-text1">
        아버지<br>
        어머니
      </v-flex >
      <v-flex xs3 md3 class="middle-text2">
        의 둘째
      </v-flex>
      <v-flex xs4 md3 class="middle-text3">
        XY
      </v-flex>
    </v-layout>
      <v-layout mt-2>
        <v-flex xs5 md6 text-xs-center class="middle-text1">
          아버님<br>
          어머님
        </v-flex >
        <v-flex xs3 md3 class="middle-text2">
          의 첫째
        </v-flex>
        <v-flex xs4 md3 class="middle-text3">
          XX
        </v-flex>
    </v-layout>
    <h3 class="bold mt-5 ml-3">
      Photos
    </h3>
      <v-parallax class="carousel" >
        <v-carousel delimiter-icon="remove" lazy >
          <v-carousel-item>
            <img src="../../../assets/slide1.jpeg" style="height:100%">
          </v-carousel-item>
          <v-carousel-item>
            <img src="../../../assets/slide2.jpg" style="height:100%">
          </v-carousel-item>
          <v-carousel-item>
            <img src="../../../assets/slide3.jpg" style="height:100%">
          </v-carousel-item>
        </v-carousel>
      </v-parallax>

    <div class="bottom mt-4 mb-4">
      <v-divider></v-divider>
      <div class="mt-4 direction-map">
        오시는길<br>
      </div>
      <div class="mt-3 direction-map">
        서울특별시 관악구 대학동 관악로 1<br>
        서울대학교 라쿠치나 웨딩홀
      </div>

        <h6 class="mt-3">(구글에 결제를 안해서 에러가 뜰수 있습니다.)</h6>
        <GmapMap
          :center="{lat:37.448560, lng:126.950899}"
          :zoom="15"
          map-type-id="terrain"
          class="google-map"
        >
          <GmapMarker ref="myMarker"
                      :position="google && new google.maps.LatLng(37.448560, 126.950899)" />
        </GmapMap>

    </div>
  </v-flex>
</template>

<script>
  import {gmapApi} from 'vue2-google-maps'
    export default {
        name: "Main",
      data: function () {
        return {
        }
      },
      computed: {
        google: gmapApi
      },
      created(){

      },
      methods: {}
    }
</script>

<style scoped>
  /*web 일때*/
  @media only screen and (min-width: 960px) {
    .top-data{
      display: flex;
    }
    .date{
      font-weight: 500;
      font-size: 20px;
      width: 50%;
    }
    .place{
      text-align: right;
      font-weight: 500;
      font-size: 20px;
      width: 50%;
    }

    .marry-main-img{
      width:100%;
      margin-top: 24px;
      margin-bottom: 24px;
      opacity: 0.8;
    }
    .cheer-me{
      text-align: center;
      font-size: 20px;
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
      width: 100%;
    }
    .direction-map{
      font-weight: 600;
      font-size: 16px;
    }
    .google-map{
      width: 100%;
      height: 400px;
    }
  }
  /*mobile 일때*/
  @media only screen and (max-width: 959px) {
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
    .marry-main-img{
      margin-top: 24px;
      margin-bottom: 24px;
      width:100%;
      opacity: 0.8;
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
      width: 100%;
    }
    .direction-map{
      font-weight: 600;
      font-size: 16px;
    }
    .google-map{
      width: 100%;
      height: 400px;
    }
  }


</style>
