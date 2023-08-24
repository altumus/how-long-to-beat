<template>
  <MainHeader />
  <div class="flex grow">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import MainHeader from "@/components/common/MainHeader.vue";
</script>
