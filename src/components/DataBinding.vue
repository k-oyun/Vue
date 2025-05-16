<!-- -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!-- 화면을 그려주는 부분 -->
<template>
  <h2>{{ refName }}</h2>
  <h2>{{ name }}</h2>
  <input :value="name" @input="updateName($event)" />
</template>

<!-- 데이터 및 로직 정의 -->
<script setup>
// 원시 값을 감싸는 반응형 래퍼
// ref도 전부 다 const 사용
import { ref } from "vue"; // 구조 분해, {} 해당 모듈에서 ref만 가져옴
const refName = ref("장원영"); // ref의 경우 변경이 감지되면 재렌더링
// const name = "안유진"; // 변경이 일어나도 재렌더링을 하지 않음

// const updateName = (e) => {
//   name = e.target.value;
// };
</script>
<!-- <style scoped></style> -->
