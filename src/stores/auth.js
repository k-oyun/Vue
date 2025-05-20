import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLogin: false,
    username: "오윤",
  }),
  actions: {
    setIsLogin(loginState) {
      this.isLogin = loginState;
    },
    setUsername(name) {
      this.username = name;
    },
  },
  persist: true,
});
