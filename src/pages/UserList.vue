<template>
  <div class="list-container">
    <ul>
      <li class="list" v-for="user in userList" :key="user.email">
        <p>이름 : {{ user.name }}</p>
        <p>이메일 : {{ user.email }}</p>
        <p>가입 날짜 : {{ user.regDate }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const userList = ref([]);
const getUserList = async () => {
  try {
    const res = await axios.get("http://222.117.237.119:8111/users/list");
    if (res.data) {
      userList.value = res.data;
    } else {
      alert("조회 실패");
    }
  } catch (err) {
    console.log(userInfo);
    console.error(err);
    alert("가입 실패! 서버 오류 발생");
  }
};

onMounted(() => {
  getUserList();
});
</script>

<style scoped>
.list-container {
  display: flex;
  /* width: 100vw; */
  flex-direction: column;
  background-color: red;
  justify-content: center;
  align-items: center;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.list {
  display: flex;
  color: black;
  list-style: none;
  margin: 10px;
  /* background-color: black; */
}
</style>
