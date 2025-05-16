<template>
  <div>
    <h2>사용자 정보</h2>
    <p>이름 {{ member.name }}</p>
    <p>나이 {{ member.age }}</p>
    <p>주소 {{ member.addr }}</p>
    <p>포지션 {{ member.position }}</p>
    dsadas 양방향 바인딩
    <input v-model="member.name" placeholder="이름 입력" />
    <input v-model="member.age" placeholder="나이 입력" />
    <input v-model="member.addr" placeholder="주소 입력" />
    <input v-model="member.position" placeholder="센터 입력" />
  </div>
</template>

<script setup>
import { reactive } from "vue";

const member = reactive({
  name: "장원영",
  age: 22,
  addr: "서울시 강남구 역삼동",
  position: "센터",
});
</script>
