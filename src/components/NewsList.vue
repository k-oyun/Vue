<template>
  <div class="list-container">
    <div v-for="(item, index) in news" :key="index" class="news-item">
      <h1>{{ item.filter }}</h1>
      <h2>{{ item.content }}</h2>
      <p>{{ item.date }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  news: Array,
});
</script>

<style scoped>
div {
  width: auto;
  height: auto;
  margin-top: 40px;
  /* background-color: red; */
  /* color: blue; */
}
.news-item {
  background-color: green;
  height: 100px;
}
</style>
