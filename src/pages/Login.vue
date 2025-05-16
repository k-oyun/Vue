<template>
  <div class="register-wrapper">
    <div class="register-container">
      <img src="../assets/nexon_logo.png" class="logo" />
      <input
        class="input-txt"
        id="email-input"
        placeholder="넥슨ID (아이디 또는 이메일)"
        v-model="userInfo.email"
      />
      <div id="email-txt"></div>

      <input
        class="input-txt"
        id="pwd-input"
        placeholder="비밀번호"
        type="password"
        v-model="userInfo.pwd"
      />

      <div id="pwd-txt"></div>
      <input
        class="input-txt"
        id="pwdCheck-input"
        placeholder="비밀번호 확인"
        type="password"
        v-model="userInfo.pwdCheck"
      />

      <div id="pwdCheck-txt"></div>
      <input
        class="input-txt"
        id="nickname"
        placeholder="닉네임"
        v-model="userInfo.nickname"
      />

      <button class="register-btn" @click="handleSubmit">가입 요청</button>
      <div class="txt-btn-container"></div>
    </div>
  </div>
</template>

<script setup>
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
      alert("회원 가입 성공");
    } else {
      alert("회원 가입 실패");
    }
  } catch (err) {
    console.log(userInfo);
    console.error(err);
    alert("가입 실패! 서버 오류 발생");
  }
};

import { reactive, watch } from "vue";
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
</script>

<style scoped>
.register-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.register-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.logo {
  margin-top: 50px;
  width: 200px;
}
.input-txt {
  width: 430px;
  height: 50px;
  border: 0.4px solid lightgray;
  margin-top: 13px;
  font-size: 16px;
  padding-left: 15px;
}
.input-txt:first-of-type {
  margin-top: 50px;
}

.input-txt::placeholder {
  color: #c7c8cc;
}
.input-txt:focus {
  border: 1px solid #1977f2;
}
.register-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  font-size: 18px;
  font-weight: 700;
  width: 448px;
  height: 55px;
  border: none;
  margin-top: 30px;
  cursor: pointer;
}

.register-btn:hover {
  background-color: #1977f2;
  transition: all 0.2s ease-in-out;
}
.register-btn:disabled {
  background-color: rgb(0, 0, 0, 0.2);
  cursor: default;
}
.check-box-container {
  display: flex;
  justify-content: flex-start;
  width: 456px;
  margin-top: 5px;
  align-items: center;
}
.expTxt {
  margin-left: 2px;
  font-size: 12px;
}
.txt-btn-container {
  display: flex;
  align-items: center;
  width: 448px;
  height: 30px;
  margin-top: 7px;
}
.btn-txt {
  color: gray;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  margin-right: 8px;
}
.btn-txt:hover {
  color: #1977f2;
  transition: 0.2s ease-in-out;
}
#email-txt {
  display: flex;
  width: 450px;
  margin-top: 5px;
  justify-content: flex-end;
  height: 20px;
  font-size: 14px;
}
#pwd-txt {
  display: flex;
  width: 450px;
  margin-top: 5px;
  justify-content: flex-end;
  height: 20px;
  font-size: 14px;
}
#pwdCheck-txt {
  display: flex;
  width: 450px;
  margin-top: 5px;
  justify-content: flex-end;
  height: 20px;
  font-size: 14px;
}
</style>
