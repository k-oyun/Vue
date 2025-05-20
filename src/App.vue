<template>
  <nav>
    <!-- <div
      :style="{ backgroundColor: themeStore.color }"
      class="min-h-screen transition-all"
    >
      <ThemeSetting />
      <router-view />
    </div> -->
    <!-- <ThemeSetting /> -->

    <!-- <router-view /> -->
    <!-- <Modal /> -->
    <Main></Main>
  </nav>
</template>
<script setup>
// import BaseButton from "./components/base/BaseButton.vue";
// import Header from "./components/used/Header.vue";
// import Footer from "./components/used/Footer.vue";
// import ThemeSetting from "./pages/pages_used/ThemeSetting.vue";
// import Home from "./pages/pages_used/Home.vue";

// 전역상태 관리
// import { useThemeStore } from "./stores/theme";
// const themeStore = useThemeStore();

import { ref, reactive } from "vue";
import Main from "./pages/pages_used/Main.vue";
// const handleClick = (e) => {
//   console.log("부모 컴포넌트: 버튼이 눌렸습니다!", e);
// };
// import Register from "./pages/pages_used/Register.vue";
// import Login from "./pages/pages_used/Login.vue";
// import Modal from "./components/used/Modal.vue";
</script>

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
