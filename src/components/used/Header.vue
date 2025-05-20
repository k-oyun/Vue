<template>
  <header class="bg-gray-800 text-white p-2 shadow-lg fixed w-[100%]">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">My App</h1>
      <div class="space-x-4">
        <router-link to="/">
          <button
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition"
          >
            로그인
          </button>
        </router-link>
        <router-link to="/register">
          <button
            class="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition"
          >
            회원가입
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  background-color: #2d3748;
}
</style>
