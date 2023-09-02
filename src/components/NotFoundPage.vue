<template>
  <div class="h-screen bg-black w-full flex items-center justify-center">
    <div
      class="flex text-white items-center gap-y-[20px] justify-center flex-col"
    >
      <NotFoundIcon class="w-[60px] h-[60px]" />
      <span> Страница не найдена </span>
      <router-link class="underline" to="/">На главную</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
//components
import NotFoundIcon from "./common/icons/NotFoundIcon.vue";
</script>
