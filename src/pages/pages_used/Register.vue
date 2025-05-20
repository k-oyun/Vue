<template>
  <div class="register-wrapper w-full h-screen flex flex-col items-center">
    <div
      class="register-container flex flex-col items-center w-full h-screen mt-[100px]"
    >
      <img src="../../assets/nexon_logo.png" class="logo mt-[50px] w-[200px]" />
      <Input
        class="mt-[50px]"
        id="email-input"
        placeholder="넥슨ID (아이디 또는 이메일)"
        v-model="userInfo.email"
      />

      <div id="email-txt"></div>
      <Input
        id="pwd-input"
        placeholder="비밀번호"
        type="password"
        v-model="userInfo.pwd"
      />

      <div id="pwd-txt"></div>
      <Input
        id="pwdCheck-input"
        placeholder="비밀번호 확인"
        type="password"
        v-model="userInfo.pwdCheck"
      />

      <div id="pwdCheck-txt "></div>
      <Input id="nickname" placeholder="닉네임" v-model="userInfo.nickname" />

      <Button @click="handleSubmit" -btn_explain="가입 요청"></Button>
      <div
        class="txt-btn-container flex items-center w-[448px] h-[30px] mt-[7px]"
      ></div>
      <!-- <input
        v-model="name"
        @keyup.enter="goToProfile"
        placeholder="프로필 보기"
        class="w-[100px] border px-3 py-2 rounded max-v-md mb-4"
      />
      <button
        @click="goToProfile"
        class="bg-blue-500 w-[100px] h-[50px] text-white"
      >
        프로필 이동 -->
      <!-- </button> -->
    </div>
  </div>
</template>

<script setup>
import Input from "../../components/used/Input.vue";
import Button from "../../components/used/Button.vue";
import axios from "axios";

const handleSubmit = async () => {
  try {
    const payload = {
      email: userInfo.email,
      pwd: userInfo.pwd,
      name: userInfo.nickname,
    };
    const res = await axios.post(
      "http://222.117.237.119:8111/auth/signup",
      payload
    );
    if (res.data) {
      localStorage.setItem("email", userInfo.email);
      localStorage.setItem("pwd", userInfo.pwd);
      alert("회원 가입 성공");
      router.push("/");
    } else {
      alert("회원 가입 실패");
    }
  } catch (err) {
    console.log(userInfo);
    console.error(err);
    alert("가입 실패! 서버 오류 발생");
  }
};

import { reactive, watch, ref } from "vue";
const userInfo = reactive({
  email: "",
  pwd: "",
  pwdCheck: "",
  nickname: "",
});
watch(
  () => userInfo.email,
  () => {
    console.log(userInfo);
  }
);
// import { useRoute, useRouter } from "vue-router";
// const name = ref("");
// const router = useRouter();
// const goToProfile = () => {
//   router.push(`/profile/${name.value}`);
// };
</script>
