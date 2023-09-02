<template>
  <div
    :style="`background-image: url(${dishonored_2})`"
    class="w-full grow min-h-screen flex flex-col bg-cover bg-fixed"
  >
    <div
      class="w-full h-full gap-y-[20px] items-center flex flex-col backdrop-blur-sm"
    >
      <h1 class="text-center text-white mt-[20px] text-[20px] font-bold">
        Результаты поиска по запросу: "{{ searchValue }}"
      </h1>
      <SearchBar
        class="w-[80%] sm:w-[50%]"
        @submit="onSearch"
        :value="searchValue"
        :loading="gameListLoading"
      />
      <div
        class="flex justify-center my-[30px] items-center flex-wrap gap-[12px]"
        v-if="gameListLoading"
      >
        <GameCardSkeleton v-for="i in 10" :key="i" />
      </div>

      <div
        class="flex justify-center my-[30px] items-center flex-wrap gap-[12px]"
        v-if="!gameListLoading"
      >
        <GameCard v-for="game in gameList" :key="game.id" :game="game" />
      </div>

      <div
        v-if="!gameListLoading && gameList.length < 1"
        class="flex flex-col items-center justify-center gap-[12px]"
      >
        <NotFoundIcon class="h-[60px] w-[60px]" />
        <span class="text-white text-[20px] font-bold">
          Мы не смогли найти игры по Вашему запросу ;(
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import { useGameListStore } from "@/stores/gameListStore";

//components
import GameCard from "@/components/common/GameCard.vue";
import SearchBar from "@/components/common/SearchBar.vue";
import GameCardSkeleton from "@/components/skeletons/GameCardSkeleton.vue";
import NotFoundIcon from "@/components/common/icons/NotFoundIcon.vue";

//images
import dishonored_2 from "@/assets/dishonored_2.jpeg";

//stores
const gameListStore = useGameListStore();

//router
const route = useRoute();
const router = useRouter();

//computed
const searchValue = computed(() => {
  return String(route.query?.searchValue || "");
});

const gameList = computed(() => {
  return gameListStore.gameList;
});

//hooks
onMounted(async () => {
  gameListLoading.value = true;
  await gameListStore.getGameListFromSearch(searchValue.value);
  gameListLoading.value = false;
});

//watch
watch(searchValue, async (newValue) => {
  gameListLoading.value = true;
  await gameListStore.getGameListFromSearch(newValue);
  gameListLoading.value = false;
});

//vars
const gameListLoading = ref(false);

//funcs
function onSearch(searchValue: string) {
  router.push(`/search?searchValue=${searchValue}`);
}
</script>
