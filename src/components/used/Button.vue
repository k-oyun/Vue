<template>
  <button
    class="register-btn flex justify-center items-center text-white bg-black w-[430px] h-[55px] mt-[30px] cursor-pointer font-[800]"
  >
    {{ Btn_explain }}
  </button>
</template>

<script setup>
const props = defineProps({ Btn_explain: String });
</script>
