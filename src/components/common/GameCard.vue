<template>
  <div class="h-[200px] w-[300px] bg-red-200 rounded-[8px]">
    {{ props.label }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "none label",
  },
});
</script>
