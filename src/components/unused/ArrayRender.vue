<!-- <template>
  <ul>
    <li v-for="user in users" :key="user.id">
      이름 : {{ user.userName }} 이메일 : {{ user.email }}
    </li>
  </ul>
</template>

<script setup>
const users = [
  {
    id: 1,
    userName: "HTML 공부",
    email: "test@email.com",
  },
  { id: 2, userName: "CSS 공부", email: "test@email.com" },
  { id: 2, userName: "JS 공부", email: "test@email.com" },
];
</script> -->

<template>
  <input v-model="inputText" @keydown.enter="addTodo" />
  <button @click="addTodo">추가</button>
  <ul>
    <li v-for="user in users" :key="user.id" @dblclick="removeTodo(user.id)">
      해야할 거 {{ user.toDo }}
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from "vue";
const stored = localStorage.getItem("users");
//user값이 없으면 default 값 불러오기, 있으면 해당 값 불러오기
const users = ref(
  stored
    ? JSON.parse(stored)
    : [
        { id: 1, toDo: "JS 공부" },
        { id: 2, toDo: "CSS 공부" },
      ]
);

const inputText = ref("");
const nextId = ref(users.value.length + 1);

const addTodo = () => {
  // 입력 내용이 없는 경
  if (!inputText.value.trim()) return;
  // Todo 리스트 추가
  users.value.push({ id: nextId.value++, toDo: inputText.value });
  // 입력창 지우기
  inputText.value = "";
};

const removeTodo = (id) => {
  users.value = users.value.filter((user) => user.id !== id);
};

watch(
  users,
  (newVal) => {
    localStorage.setItem("users", JSON.stringify(newVal));
  },
  { deep: true }
);
</script>
