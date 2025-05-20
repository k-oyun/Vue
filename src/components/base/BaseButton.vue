<template>
  <button
    @click="onClick"
    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
  >
    <!-- slot을 넣으면 html, component 전부 다 들어감 -->
    <slot>기본 버튼</slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
const onClick = (e) => {
  emit("click", e);
};
</script>
