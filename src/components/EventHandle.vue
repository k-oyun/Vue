<template>
  <div><button @click="onClickEnter">입장</button></div>
  <div><button @click="onClickLeave">퇴장</button></div>
  <h1 :style="{ color: val }">{{ message }}</h1>
  <button @click="setColor('red')">빨간색</button>
  <button @click="setColor('green')">초록색</button>
  <button @click="setColor('blue')">파란색</button>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
const val = ref("black");

const onClickEnter = () => {
  message.value = "안녕하세요";
};

const onClickLeave = () => {
  message.value = "안녕히가세요.";
};

const setColor = (p) => {
  val.value = p;
};
</script>

<style scoped>
button {
  background-color: white;
  border: 1px solid black;
}
</style>
