<template>
  <div class="header">
    <button class="btn" @click="send('전체')">전체</button>
    <button class="btn" @click="send('정치')">정치</button>
    <button class="btn" @click="send('경제')">경제</button>
    <button class="btn" @click="send('사회')">사회</button>
    <button class="btn" @click="send('문화')">문화</button>
    <button class="btn" @click="send('과학')">과학</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["send-msg"]);
const send = (txt) => {
  emit("send-msg", txt);
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.btn {
  margin-top: 10px;
  width: 160px;
  height: 50px;
  color: black;
  border: 1px solid gray;
  background-color: whitesmoke;
}
</style>
