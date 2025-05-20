<template>
  <div class="flex justify-center">
    <h1>환영합니다 {{ authStore.username }}님</h1>
  </div>
  <div class="min-h-screen bg-gray-600 flex items-center justify-center p-4">
    <div class="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <button
        class="bg-transparent border border-white text-white font-semibold py-6 rounded-lg"
        @click="navigateTo('/members')"
      >
        회원리스트
      </button>
      <button
        class="bg-transparent border border-white text-white font-semibold py-6 rounded-lg"
        @click="navigateTo('/boards')"
      >
        게시판
      </button>
      <button
        class="bg-transparent border border-white text-white font-semibold py-6 rounded-lg"
        @click="navigateTo('/category')"
      >
        카테고리
      </button>
      <button
        class="bg-transparent border border-white text-white font-semibold py-6 rounded-lg"
        @click="navigateTo('/themesetting')"
      >
        테마 설정
      </button>
      <button
        class="bg-transparent border border-white text-white font-semibold py-6 rounded-lg"
        @click="navigateTo('/category')"
      >
        카테고리 설정
      </button>
      <button
        class="bg-transparent border border-white text-white font-semibold py-6 rounded-lg"
        @click="navigateTo('/Chat')"
      >
        채팅
      </button>
      <button
        class="bg-transparent border border-white text-white font-semibold py-6 rounded-lg"
        @click="navigateTo('/KakaoMap')"
      >
        카카오맵
      </button>
      <button
        class="bg-transparent border border-white text-white font-semibold py-6 rounded-lg"
        @click="navigateTo('/PieChat')"
      >
        파이 챠트
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useAuthStore } from "../../stores/auth";
const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};

const authStore = useAuthStore();

onMounted(() => {
  if (authStore.isLogin === false) {
    alert("로그인 후 이용 가능합니다.");
  }
});
</script>
