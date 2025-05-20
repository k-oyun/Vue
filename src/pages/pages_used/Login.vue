<template>
  <div class="flex items-center flex-col w-full h-screen">
    <div class="flex items-center flex-col w-1/2 h-screen mt-[100px]">
      <img src="../../assets/nexon_logo.png" class="mt-12 w-52" />

      <!-- 이메일 입력 -->
      <Input
        class="mt-[60px]"
        v-model="email"
        id="email-input"
        placeholder="넥슨ID (아이디 또는 이메일)"
      />

      <!-- 비밀번호 입력 -->
      <Input
        class="mt-[20px]"
        v-model="pwd"
        placeholder="비밀번호"
        type="password"
      />

      <!-- 로그인 요청 버튼 -->
      <Button @click="LoginBtn" -btn_explain="로그인"></Button>
    </div>
  </div>
</template>

<script setup>
import Input from "../../components/used/Input.vue";
import Button from "../../components/used/Button.vue";
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import { useModalStore } from "../../stores/modal";
import Modal from "../../components/used/Modal.vue";
const router = useRouter();
const email = ref("");
const pwd = ref("");
const RegisteredEmail = localStorage.getItem("email");
const RegisteredPwd = localStorage.getItem("pwd");
const authStore = useAuthStore();
const modalStore = useModalStore();
const LoginBtn = () => {
  if (RegisteredEmail === email.value && RegisteredPwd === pwd.value) {
    alert("로그인 되었습니다.");
    authStore.setIsLogin(true);
    console.log(authStore.isLogin);
    authStore.setUsername(email);
    router.push("/Home");
  } else {
    modalStore.open({
      title: "로그인 실패",
      message: "이메일 비밀번호를 확인하세요.",
      isOpen: true,
    });
    console.log(modalStore.isOpen);
    console.log(modalStore.title);
    console.log(modalStore.message);
  }
};

onMounted(() => {
  console.log(modalStore.isOpen);
});
</script>
