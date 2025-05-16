<template>
  <div class="container">
    <h2>회원 정보</h2>
    <UserItem v-for="user in users" :key="user.name" :user="user"></UserItem>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import UserItem from "../components/UserItem.vue";
const users = reactive([]);

const fetchedData = [
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
];

// 화면이 처음 나타난 시점
onMounted(() => {
  // 전개 연산자
  // 데이터를 풀어서 user에 넣음
  // 서버로 데이터를 요청 후 데이터가 전달되면 아래의 동작 수행
  users.push(...fetchedData);
});
</script>

<style scoped>
.container {
  width: 500px;
  margin: 40px auto;
  text-align: center;
}
</style>
