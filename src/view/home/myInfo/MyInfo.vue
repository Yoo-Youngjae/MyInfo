<template>
  <div class="main-wrapper">
    <v-layout row wrap class="top-profile">
      <v-flex md2 xs6 offset-md1>
        <img class="myPhoto" src="../../../assets/myinfo-myphoto.jpg">
      </v-flex>
      <v-flex md3 xs5 offset-xs1>
        <div  class="myname">
          <div class="korean-name">유영재</div>
          <div>(Yoo Youngjae)</div>
        </div>
      </v-flex>
      <v-flex md4 xs10>
        <div class="top-right-wrapper">
          <!--div class="job">Job : Front-end Developer</div-->
          <div class="job"></div>
          <div>
            서울시 관악구 신림동 신림로<br>
            17길 77 401호
          </div>
          <div>
            010-4337-1634
          </div>
          <div>
            dudwo325@naver.com
          </div>
          <div>
            https://github.com/Yoo-Youngjae
          </div>
        </div>
      </v-flex>
      <v-flex md1 xs2 class="myinfo-detail">
        <div class="top-img">
          <img class="icon-size mt-2" src="../../../assets/myinfo-address.png">
          <img class="icon-size margin-phone" src="../../../assets/myinfo-phone.png">
          <img class="icon-size mt-3" src="../../../assets/myinfo-email.png">
          <div class=" github">GitHub</div>
        </div>

      </v-flex>
      <v-flex xs1></v-flex>
    </v-layout>
    <div class="mt-4">
      <v-layout fill-height align-center>
        <img src="../../../assets/myinfo-target.png">
        <div class="bold h4a ml-2">목표</div>
      </v-layout>
      <div class="ml-5 mr-5 t-left">
        꾸준한 성장을 위해 항상 새로움을 습득하고자 한다. 배우는 것에 그치지 않고
        이를 활용해 가치를 창출하기를 희망한다. 실력을 끌어 올리고, 이를 사회에서
        확인 하고 싶다. 나의 만족과 더불어 사회의 선순환을 일으키는 기버(Giver)로
        성장하고 싶다. 성공과 실패 모두를 돌이켜 봄으로 써 올바른 피드백으로 방향을
        찾아 나가며 성장하길 지향한다.
      </div>
      <v-layout fill-height align-center mt-3>
        <img src="../../../assets/myinfo-education.png">
        <div class=" h4abold ml-2">학력</div>
      </v-layout>
      <div class="ml-5 mr-5 t-left">
        <span class="color-purple ">대학 |</span>
        <span> 서울대학교 컴퓨터공학부(복수전공 응용생물학)</span>
        <div>- 2013.03 ~ . 현재 4학년 2학기 휴학중</div>
      </div>
      <v-layout fill-height align-center mt-3>
        <img src="../../../assets/myinfo-technic.png">
        <div class="h4a bold ml-2">경력</div>
      </v-layout>
      <div class="ml-5 mr-5 t-left d-inlineflex">
        ● Web frontend developer - Chainnovation 에서 근무(18.06~ 10.)
      </div>
      <v-layout row wrap class="ml-5 mb-2 t-left">
        <div class=" color-purple medium mt-3">언어 |</div>
        <img class="vue-img" src="../../../assets/myinfo-vuejs.png">
        <img class="python-img" src="../../../assets/myinfo-python.png">
        <img class="vue-img" src="../../../assets/myinfo-c.png">
        <img class="java-img" src="../../../assets/myinfo-java.png">
      </v-layout>
      <v-layout  fill-height align-center mt-3>
        <img src="../../../assets/myinfo-target.png">
        <div class="h4a bold ml-2">활동</div>
      </v-layout>
      <div class="ml-5 mr-5 t-left activity">
        <div>
          <span class="color-purple">● 교내 딥러닝 세미나 |</span>
          <span class="h6"> 개념 이해('밑바닥부터 시작하는 딥러닝'을 이용)</span>
        </div>
        <div>
          <span class="color-purple medium">● 개발동아리 |</span>
          <span> Waffle Studio - 기획 및 기초 개발</span>
        </div>

        <div>
          <span class="color-purple medium">● LG CNS 기업체 멘토링 - 회사의 문화란</span>
        </div>
        <div>
          <span class="color-purple medium">● 페이스북 페이지 운영 |</span>
          <span>'영재의 책장'</span>
        </div>
        <div>
          <span class="color-purple medium">● 중, 고등 수학과외 3년차</span>
        </div>
        <div>
          <span class="color-purple medium">● 공군병장 만기전역</span>
        </div>
      </div>
      <v-layout fill-height align-center mt-3 mb-2>
        <img src="../../../assets/myinfo-technic.png">
        <div class="h4a bold ml-3">최근 관심 분야</div>
      </v-layout>
      <v-layout row wrap class="ml-5  t-left d-inlineflex">
        <img class="blockchain-img mt-2" src="../../../assets/myinfo-blockchain.png">
        <img class="blockchain-img mt-2" src="../../../assets/myinfo-deeplearning.png">
        <img class="react-img mt-2" src="../../../assets/myinfo-react.png">
      </v-layout>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyInfo"
  }
</script>

<style scoped>
  .main-wrapper{
    border: solid 2px darkorange;
    width: 100%;
    margin-bottom: 50px;
    padding: 50px 30px 50px 30px
  }
  .icon-size{
    width: 14px;
    height: 10px;
  }
  .github{
    font-size: 10px;
    margin-top: 22px;
    color: #5889C5;
  }

  /*web 일때*/
  @media only screen and (min-width: 960px) {
    .top-profile {
      display: flex;
      border-bottom: 0.5px solid #8d8d8d;
    }
    .myPhoto{
      margin-left: 40px;
      width: 100%;
    }
  }
  /*mobile 일때*/
  @media only screen and (max-width: 959px) {
    .top-profile {
      border-bottom: 0.5px solid #8d8d8d;
    }
    .myPhoto{
      width: 100%;
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
    font-size : 30px;

  }
  .myinfo-detail{
    display: flex;
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
  .top-img{
    padding-top:32px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
  }
  .margin-phone{
    margin-top: 40px;
  }
  .vue-img{
    width: 85px;
    height: 30px;
    margin-left : 16px;
    margin-top: 16px;
  }
  .blockchain-img{
    width: 100px;
    height: 60px;
    margin-left : 16px;
  }
  .python-img{
    margin-left : 16px;
    margin-right : 16px;
    margin-top: 16px;
    width: 40px;
    height: 30px;
  }
  .java-img{
    margin-left : 16px;
    margin-right : 16px;
    margin-top: 16px;
    width: 25px;
    height: 40px;
  }
  .activity > div{
    margin-top: 8px;
  }
  .react-img{
    margin-left: 16px;
    width: 80px;
    height: 60px;
  }
</style>
