<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<!--  -->
<template>
  <h2>고정 클래스</h2>
  <div class="box">항상 적용되는 클래스</div>

  <h2>조건부 클래스 (객체 방식)</h2>
  <div :class="{ active: isActive, error: hasError }" class="box">
    {{ isActive ? "active" : "" }}{{ hasError ? "error" : "" }}
  </div>

  <h3>배열 클래스 (동적 조합)</h3>
  <div
    :class="['box', isActive ? 'active' : '', hasError ? 'error' : '']"
  ></div>

  <div style="margin-top: 20px">
    <button @click="isActive = !isActive">Toggle Active</button
    ><button @click="hasError = !hasError">Toggle Error</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(true);
const hasError = ref(false);
</script>

<style scoped>
.box {
  padding: 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}
.active {
  background-color: #d1fae5;
  border-color: #10b981;
}
.error {
  background-color: #fee2e2;
  border-color: #ef4444;
}
button {
  margin-right: 10px;
  padding: 6px 12px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
