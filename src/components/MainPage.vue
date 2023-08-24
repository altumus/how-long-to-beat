<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="w-full flex bg-[#FAF0E6] flex-col items-center justify-evenly h-[500px]"
    >
      <SearchBar />
      <p class="text-center text-[30px] font-bold">
        Game Tracker,
        <br />
        сколько нужно времени, <br />
        чтобы пройти
        <span>
          <vueTyperNext
            :data="labels"
            :back="true"
            :back-speed="80"
            :handler-num="100"
            :type-speed="80"
            cursor-char="|"
          />
        </span>
        ?
      </p>
    </div>
    <div class="w-full h-full bg-[#5C5470] py-[20px]">
      <div class="w-full h-full flex flex-wrap mx-[100px] gap-[20px]">
        <GameCard v-for="label in labels" :key="label" :label="label" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/common/SearchBar.vue";
import GameCard from "@/components/common/GameCard.vue";
import { vueTyperNext } from "vue-typer-next";

const labels = [
  "The Witcher 3",
  "Baldurs Gate 3",
  "Read Dead Redemption 2",
  "Resident Evil Village",
  "Metal Gear Solid Phantom Pain",
];
</script>

<style scoped>
:deep(.result) {
  font-size: 30px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

:deep(.content) {
  justify-content: center;
}
</style>
