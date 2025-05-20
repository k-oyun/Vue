<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<template>
  <h1 v-if="isLogin">환영합니다{{ name }}님</h1>
  <h1 v-else="isLogin">로그인 후 사용하세요{{ name }}님</h1>
</template>

<script setup>
const isLogin = true;
const name = "곰돌이";
</script>
