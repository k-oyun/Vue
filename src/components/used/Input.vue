<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
    class="input-txt w-[430px] h-[50px] border border-solid border-gray-300 p-[1px] mt-[13px] text-[16px] pl-[15px] plcaeholder-#c7c8cc focus: border border-solid border-#1977f2"
  />
</template>

<script setup>
const prorps = defineProps({ modelValue: String });
const emit = defineEmits(["update:modelValue"]);
</script>
