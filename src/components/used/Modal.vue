<template>
  <div
    v-if="modalStore.isOpen"
    :class="`inset-0 flex bg-black/50 items-center justify-center fixed `"
  ></div>

  <div
    v-if="modalStore.isOpen"
    :class="`w-[400px] h-[200px] flex bg-white  flex-col items-center absolute top-[35%] left-[35%] z-50`"
  >
    <span class="color: font-black mt-[20px]">{{ modalStore.title }} </span>
    <span class="color: font-black mt-[13px]">{{ modalStore.message }} </span>
    <button
      @click="handleModal"
      class="w-[100px] h-[40px] bg-blue-500 mt-[30px] text-amber-50 cursor-pointer z-60"
    >
      확인
    </button>
  </div>
</template>

<script setup>
import { useModalStore } from "../../stores/modal";

const modalStore = useModalStore();

const handleModal = () => {
  modalStore.isOpen = false;
  console.log(modalStore.isOpen);
};
</script>
