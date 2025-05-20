import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    title: "",
    message: "",
    isOpen: false,
  }),
  actions: {
    open({ title, message, isOpen }) {
      this.title = title;
      this.message = message;
      this.isOpen = isOpen;
    },
  },
  persist: true,
});
