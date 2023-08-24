<template>
  <MainHeader />
  <div class="w-full h-full">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/common/MainHeader.vue'
</script>
