<script setup>
// import DataBinding from "./components/components_unused/DataBinding.vue";
// import ConditionRender from "./components/components_unused/ConditionRender.vue";
// import Iterable from "./components/components_unused/Iterable.vue";
// import ClassBinding from "./components/components_unused/ClassBinding.vue";
// import Reactive from "./components/components_unused/Reactive.vue";
// import Computed from "./components/components_unused/Computed.vue";
// import Watch from "./components/components_unused/Watch.vue";
// import Test from "./components/components_unused/test.vue";
// import Practice1 from "./components/components_unused/Practice1.vue";
// import UserCard from "./pages/UserCard.vue";
// import ChildComponent from "./components/components_unused/ChildComponent.vue";
// import News from "./pages/News.vue";
// import EventRef from "./components/components_unused/EventRef.vue";
// import Login from "./pages/Login.vue";
// import EventHandle from "./components/components_unused/EventHandle.vue";
// import SelectBox from "./components/components_unused/SelectBox.vue";
// import ArrayRender from "./components/components_unused/ArrayRender.vue";
// import UserList from "./pages/UserList.vue";
import HelloWorld from "./components/components_unused/HelloWorld.vue";

import { ref, reactive } from "vue";
// const message = ref("");
// const handleMessage = (payload) => {
//   message.value = payload;
// };
const users = reactive([
  {
    name: "유승현",
    age: 10,
    address: "대구광역시 영등포구 가락거리 (영수백읍)",
    isAdult: false,
    job: "판사 및 검사",
  },
  {
    name: "김영숙",
    age: 35,
    address: "전라북도 강릉시 개포95가",
    isAdult: true,
    job: "기타 식품가공관련 종사원",
  },
  {
    name: "한도현",
    age: 32,
    address: "세종특별자치시 영등포구 역삼로 (승민정면)",
    isAdult: true,
    job: "세탁관련 기계조작원",
  },
  {
    name: "이영희",
    age: 21,
    address: "광주광역시 금천구 가락6가 (명숙강박읍)",
    isAdult: true,
    job: "패턴사",
  },
  {
    name: "안보람",
    age: 47,
    address: "제주특별자치도 김포시 서초대길 (현우윤읍)",
    isAdult: true,
    job: "상/하수도 처리장치 조작원",
  },
  {
    name: "김미영",
    age: 35,
    address: "강원도 음성군 압구정가",
    isAdult: true,
    job: "화학제품 생산기 조작원",
  },
  {
    name: "안현정",
    age: 82,
    address: "서울특별시 동대문구 개포길 (지혜김김마을)",
    isAdult: true,
    job: "건축 목공",
  },
  {
    name: "이예은",
    age: 63,
    address: "대구광역시 은평구 잠실길",
    isAdult: true,
    job: "병무행정 사무원",
  },
  {
    name: "황순자",
    age: 78,
    address: "강원도 안양시 만안구 봉은사7로 (채원이리)",
    isAdult: true,
    job: "측량 및 지리정보 전문가",
  },
  {
    name: "김승현",
    age: 93,
    address: "대구광역시 관악구 학동13거리",
    isAdult: true,
    job: "가축 사육 종사원",
  },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6 text-center">
    <h1 class="text-3xl font-bold text-blue-600">
      Vue 3 + Tailwind CSS Starter
    </h1>
    <HelloWorld msg="안녕하세요! Tailwind와 함께하는 Vue 3입니다." />
  </div>
</template>

<style scoped>
h1 {
  font-size: 24px;
  color: royalblue;
}
input {
  padding: 8px;
  font-size: 18px;
  margin-top: 10px;
}
</style>
