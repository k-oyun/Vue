<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<template>
  <div>
    <input v-model="user.name" placeholder="이름 입력" @input="updateName" />
    <input v-model="user.age" placeholder="나이 입력" />
    <p>이름 : {{ user.name }}</p>
    <p>나이 : {{ user.age }}</p>
    <p>{{ isAdult }}</p>
    <p>{{ txt }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from "vue";
const user = reactive({ name: "", age: 0 });
const displayedName = ref("");
const txt = ref("");

// 상ㅐ 변경이 일어나면, 리렌더링이 일어나고, 이후 동작을 정의
watch(
  () => user.age,
  () => {
    console.log("나이 변경");
  }
);

const updateName = (event) => {
  user.name = event.target.value;
};
let text = "";

// 불필요한 함수의 호출 방지,
// 리렌더링 시 함수 호출이 일어나지 않는 경우는 이전 값 유지
const isAdult = computed(() => {
  if (user.age >= 20) {
    text = "어른입니다.";
  } else {
    text = "청소년입니다.";
  }
  return text;
});

onMounted(() => {
  //   txt.value = "안녕하세요";
  //   alert("ㅎㅇ");
});
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
input {
  margin-top: 20px;
  height: 30px;
  border: 1px solid blue;
}
</style>
