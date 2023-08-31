<template>
  <div class="w-full grow h-screen flex flex-col">
    <div class="w-full h-full">
      <h1>Результаты поиска по запросу: {{ searchValue }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

//router
const router = useRouter();
const route = useRoute();

//computed
const searchValue = computed(() => {
  return route.query?.searchValue || "";
});
</script>
