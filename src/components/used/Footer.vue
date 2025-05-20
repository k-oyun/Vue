<template>
  <footer class="bg-gray-800 text-white py-2 mt-auto fixed bottom-0 w-[100%]">
    <div class="container mx-auto flex flex-col items-center">
      <p class="text-sm">© 2025 My App. All Rights Reserved.</p>
      <div class="flex space-x-4 mt-2">
        <router-link to="/login" class="hover:underline">로그인</router-link>
        <router-link to="/register" class="hover:underline"
          >회원가입</router-link
        >
        <a href="https://github.com" target="_blank" class="hover:underline"
          >GitHub</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  background-color: #2d3748;
}
</style>
