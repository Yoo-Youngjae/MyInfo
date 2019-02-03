<template>
  <div class="main-wrapper">
    <img class="main-back" src="../../../assets/main-back.jpg">
    <div class="main-sub-wrapper">
      <div class="about-me">
        <div class="main-absolute-title">The key to success is never to give up</div>
        <h1 class="about-me-text">
          ABOUT ME
        </h1>
      </div>
      <v-layout row wrap class="top-profile">
        <v-flex md6 xs12>
          <img class="myPhoto" src="../../../assets/my-image.jpg">
        </v-flex>
        <v-flex md6 xs12 class="myinfo-detail">
          <div  class="myname">
            <div class="korean-name">유영재</div>
            <div>(Yoo Youngjae)</div>
          </div>
          <div class="myinfo-detail-text mt-5">
            서울대학교 컴퓨터공학부 재학중 <br/>(응용생물학 복수전공)
          </div>
          <div class="myinfo-detail-text mt-3">
            네이버 인턴 (Naver corp.)
          </div>
          <div class="myinfo-detail-target">
            꾸준한 성장을 위해 항상 새로움을 습득하고자 한다. <br/>
            배우는 것을 활용해 가치를 창출하기를 희망한다. <br/>
            실력을 끌어 올리고, 이를 사회에서 확인 하고 싶다. <br/>
            나의 만족과 함께 선순환을 일으키는 기버(Giver)를 희망 한다. <br/>
            성공과 실패 모두를 돌이켜 봄으로 써 올바른 피드백으로 방향을<br/>
            찾아 나가며 성장하길 지향한다.
          </div>
          <div class="about-me-right">
            <div class="">
              <div class="email-text">Email</div>
              <div>dudwo235@naver.com</div>
            </div>
            <div>
              <div class=" github">GitHub</div>
              <a target="_blank" href="https://github.com/Yoo-Youngjae">
                https://github.com/Yoo-Youngjae
              </a>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <div class="mt-4">
        <v-layout mt-3>
          <h1 class="sub-title">CAREER</h1>
        </v-layout>
        <v-layout row wrap class="p-relative">
          <div class="career-line"></div>
          <div class="chainno-round">*</div>
          <v-flex xs12 offset-md6 md6 class="mb-2 career-chainno">
            <div class="career-firstdate">
              <v-layout row wrap >
                <v-flex xs6 class="bold web-period">18.06 ~ 18.10</v-flex>
                <v-flex xs6>
                  <img class="chainno-img" src="../../../assets/myinfo-chainno.jpg">
                </v-flex>
              </v-layout>
            </div>
            <div>
              <div class="bold mb-2 web-period">● Chainnovation 에서 근무</div>
              <div class="web-period"> Web frontend developer |<br>
                - 가상화폐 OTC 거래소 개발</div>
            </div>
          </v-flex>
          <div class="naver-round">*</div>
          <v-flex xs12 md6  class="career-naver mb-5">
            <v-layout row wrap class="career-seconddate">
              <v-flex order-md2 xs6 class="bold web-period">19.01 ~ 19.02</v-flex>
              <v-flex order-md1 xs6>
                <img class="naver-img" src="../../../assets/myinfo-naver.jpg">
              </v-flex>
            </v-layout>
            <div>
              <div class="bold mb-2 web-period">● Naver 에서 근무</div>
              <div class="web-period"> Internship |<br>
                - 네이버쇼핑 상품컨텐츠 개발</div>
            </div>
          </v-flex>
        </v-layout>
        <v-layout fill-height align-center mt-3 mb-2 class="b-top">
          <h1 class="sub-title">
            LANGUAGE
          </h1>
        </v-layout>
        <v-layout row wrap class="ml-5 mr-5 mb-5">
          <v-flex md3 xs6><img class="vue-img" src="../../../assets/myinfo-vuejs.png"></v-flex>
          <v-flex md3 xs6><img class="python-img" src="../../../assets/myinfo-python.png"></v-flex>
          <v-flex md3 xs6><img class="vue-img" src="../../../assets/myinfo-c.jpeg"></v-flex>
          <v-flex md3 xs6><img class="java-img" src="../../../assets/myinfo-java.jpg"></v-flex>
        </v-layout>
        <v-layout  fill-height align-center mt-3 class="b-top">
          <h1 class="sub-title">
            ACTIVITY
          </h1>
        </v-layout>
        <v-layout row wrap class="ml-3 mr-3 activity">
          <v-flex xs4 md3 text-xs-center>
            <v-icon class="fsize-50">school</v-icon>
            <div class="bold mt-2">교내 딥러닝 수업</div>
            <div class="h6 mt-2 fsize-20"> 텐서플로를 이용한 DNN, CNN, RNN 짜보기</div>
          </v-flex>
          <v-flex xs4 md3 text-xs-center>
            <v-icon class="fsize-50">grade</v-icon>
            <div class="bold mt-2">삼성 SW 역량 테스트</div>
            <div class="h6 mt-2 fsize-20"> A형 인증 취득</div>
          </v-flex>
          <v-flex xs4 md3 text-xs-center>
            <v-icon class="fsize-50">class</v-icon>
            <div class="bold mt-2">교내 딥러닝 세미나</div>
            <div class="h6 mt-2 fsize-20"> 개념 이해 ('밑바닥부터 시작하는 딥러닝'을 이용)</div>
          </v-flex>
          <v-flex xs4 md3 text-xs-center>
            <v-icon class="fsize-50">build</v-icon>
            <div class="bold mt-2">개발동아리</div>
            <div class="h6 mt-2 fsize-20"> Waffle Studio - 기획 및 기초 개발</div>
          </v-flex>
          <v-flex xs4 md3 text-xs-center>
            <v-icon class="fsize-50">description</v-icon>
            <div class="bold mt-2">페이스북 페이지 운영</div>
            <div class="h6 mt-2 fsize-20">'영재의 책장'</div>
          </v-flex>
          <v-flex xs4 md3 text-xs-center>
            <v-icon class="fsize-50">perm_identity</v-icon>
            <div class="bold mt-2">중, 고등 수학과외</div>
            <div class="h6 mt-2 fsize-20">4년차</div>
          </v-flex>
          <v-flex xs4 md3 text-xs-center>
            <v-icon class="fsize-50">code</v-icon>
            <div class="mt-2 bold">중, 고등 코딩과외</div>
            <div class="h6 mt-2 fsize-20">1년차</div>
          </v-flex>
          <v-flex xs4 md3 text-xs-center>
            <v-icon class="fsize-50">domain</v-icon>
            <div class="mt-2 bold">공군병장 만기전역</div>
          </v-flex>
        </v-layout>
        <v-layout fill-height align-center mt-3 class="b-top">
          <h1 class="sub-title">
            INTEREST
          </h1>
        </v-layout>
        <v-layout row wrap class="ml-3 mr-3 mb-5">
        <v-flex md4 xs6>
          <img class="blockchain-img mt-2" src="../../../assets/myinfo-tensorflow.jpg">
        </v-flex>
        <v-flex md4 xs6>
          <img class="react-img" src="../../../assets/myinfo-react.jpg">
        </v-flex>
        <v-flex md4 xs6>
          <img class="blockchain-img mt-2" src="../../../assets/myinfo-blockchain.png">
        </v-flex>
      </v-layout>
        <my-footer/>
      </div>
    </div>
  </div>
</template>

<script>
  import MyFooter from '../Footer'

  export default {
    name: "MyInfo",
    components:{
      MyFooter
    },
  }
</script>

<style scoped>
  .main-wrapper{
    /*border: solid 2px darkorange;*/
    width: 100%;
    margin-bottom: 50px;
    /*padding: 0px 0px 50px 0px*/
  }

  .main-back{
    width: 100%;
    position: fixed;
    z-index: 0;
    top: 120px;
  }
  .icon-size{
    width: 14px;
    height: 10px;
  }
  .email-text{
    font-size: 18px;
  }
  .github{
    font-size: 18px;
    margin-top: 40px;
    color: #5889C5;
  }

  /*web 일때*/
  @media only screen and (min-width: 960px) {
    .main-sub-wrapper{
      width: 100%;
      margin-top: 580px;
      position: absolute;
      background-color: white;
    }

    .main-absolute-title{
      margin-top: -410px;
      width: 100%;
      font-size: 45px;
      font-weight: 700;
      color: white;

    }
    .about-me{
      margin-top: 80px;
      margin-left: 80px;
    }
    .top-profile {
      border-top:0.5px solid #8d8d8d;
      margin-top: 80px;
      display: flex;
      border-bottom: 0.5px solid #8d8d8d;
    }
    .myPhoto{
      width: 100%;
      /*border-radius: 50px;*/
    }
    .myinfo-detail-target{
      margin: 60px 30px;
      font-size: 18px;
    }
    .sub-title{
      margin: 80px;
      border-bottom: 3px solid black;
      border-top: 3px solid black;
    }

    .career-line{
      position: absolute;
      top: 25px;
      bottom: 0;
      left: 50%;
      width: 2px;
      background-color: black;
    }

    .chainno-round{
      position: absolute;
      top: 20px;
      width: 20px;
      background-color: black;
      border-radius: 100%;
      left: calc(50% - 8px);
    }

    .naver-round{
      position: absolute;
      top: 270px;
      width: 20px;
      background-color: black;
      border-radius: 100%;
      left: calc(50% - 8px);
    }

    .activity > div{
      margin-top: 8px;
      height: 200px;
      padding: 10px;
    }

    .b-top{
      border-top: 0.5px solid #8d8d8d;
    }

    .career-chainno{
      padding-top: 20px;
      padding-left: 36px;
    }
    .career-naver{
      padding-right: 36px;
      text-align: right;
    }
    .activity{
      font-size: 24px;
    }
    .web-period{
      font-size: 24px;
    }

    .fsize-20{
      font-size: 20px;
    }
    .fsize-50{
      font-size: 50px;
    }

  }
  /*mobile 일때*/
  @media only screen and (max-width: 959px) {
    .main-sub-wrapper{
      width: 100%;
      margin-top: 230px;
      position: absolute;
      background-color: white;
    }

    .main-absolute-title{
      margin-top: -215px;
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      color: white;
    }

    .about-me{
      margin-top: 80px;
      width: 100%;
      text-align: center;
    }
    .top-profile {
      margin-top: 80px;
      border-bottom: 0.5px solid #8d8d8d;
      border-top:0.5px solid #8d8d8d;
    }
    .myPhoto{
      width: 80%;
      /*border-radius: 100%;*/
      margin: 40px 40px 0px;
    }
    .myinfo-detail-target{
      margin: 60px 30px;
      font-size: 14px;
    }
    .sub-title{
      margin: 80px;
      width:100%;
      border-bottom: 3px solid black;
      border-top: 3px solid black;
      text-align: center;
    }
    .career-line{
      position: absolute;
      top: 25px;
      bottom: 0;
      left: 16px;
      width: 2px;
      background-color: black;
    }
    .career-chainno{
      margin-left: 36px;
    }
    .career-naver{
      margin-left: 36px;
    }
    .chainno-round{
      position: absolute;
      top: 20px;
      width: 20px;
      background-color: black;
      border-radius: 100%;
      left: 6.5px;
    }
    .career-firstdate{
      margin-top: 20px;
      margin-left: 20px;
    }
    .chainno-img{
      height: 60px;
    }

    .naver-img{
      height: 60px;
    }
    .naver-round{
      position: absolute;
      top: 215px;
      width: 20px;
      background-color: black;
      border-radius: 100%;
      left: 6.5px;
    }
    .career-seconddate{
      margin-left: 20px;
      margin-top: 50px;
    }
    .b-top{
      border-top: 0.5px solid #8d8d8d;
    }

    .activity > div{
      margin-top: 8px;
      height: 150px;
      padding: 10px;
    }

  }
  .myname{
    font-weight: 700;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .korean-name{
    margin-top: 40px;
    font-size : 40px;

  }
  .myinfo-detail{
    /*display: flex;*/
  }
  .top-right-wrapper{
    margin-right: 40px;
    text-align: right;
  }
  .top-right-wrapper >div {
    margin-bottom: 8px;

  }
  .job{
    margin-top: 36px;
  }
  .about-me-right{
    margin-top:32px;
    margin-right: 60px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  .vue-img{
    width: 100%;
    margin-top: 16px;
  }
  .blockchain-img{
    width: 100%;
    padding: 10px;
  }
  .python-img{
    margin-left : 16px;
    margin-right : 16px;
    margin-top: 16px;
    width: 100%;
    max-height: 100px;
  }
  .java-img{
    width: 100%;
  }

  .react-img{

    width: 100%;
  }
  .about-me-text{
    border-bottom: 3px solid black;
    border-top: 3px solid black;
    display: inline-block;
  }
  .main-absolute-title{
    position: absolute;
    text-align: center;
    left: 0;
  }
  .myinfo-detail-text{
    margin-left: 30px;
    font-size: 20px;
  }
  .p-relative{
    position: relative;
  }


</style>
