<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="w-full flex bg-[#030A11] bg-left-top bg-no-repeat bg-fixed flex-col items-center justify-evenly h-[500px]"
      :style="`background-image: url(${dishonored})`"
    >
      <div
        class="flex flex-col items-center bg-gradient-to-r from-black justify-center gap-y-[20px] w-full h-full"
      >
        <SearchBar @submit="onSearch" />
        <article class="text-center text-white text-[30px] font-bold">
          <h1>Game Tracker</h1>
          <p>
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
        </article>
      </div>
    </div>
    <div
      class="bg-[#000201] bg-center bg-no-repeat bg-cover bg-fixed"
      :style="`background-image: url(${karnaca})`"
    >
      <div
        class="w-full backdrop-blur-sm bg-gradient-to-b from-[#262a2c] h-full flex flex-col gap-y-[20px] py-[20px]"
      >
        <h1 class="text-white text-[26px] font-bold text-center">
          Популярные игры
        </h1>
        <div
          v-if="loading"
          class="w-full h-full flex items-center justify-center flex-wrap gap-[20px]"
        >
          <GameCardSkeleton v-for="i in 8" :key="i" />
        </div>
        <div
          v-if="!loading"
          class="w-full h-full flex items-center justify-center flex-wrap gap-[20px]"
        >
          <GameCard v-for="game in gameList" :key="game.id" :game="game" />
        </div>
      </div>
    </div>

    <div class="w-full h-full bg-black bg-top bg-no-repeat bg-cover bg-fixed">
      <div
        class="flex bg-gradient-to-b from-[#262a2c] backdrop-blur-sm h-full w-full py-[20px]"
      >
        <div class="w-full h-full mx-[50px]">
          <h1 class="text-center text-[26px] font-bold text-white">
            О сервисе
          </h1>

          <div class="flex w-full gap-[20px] justify-around mt-[20px]">
            <div class="flex self-start w-[50%] rounded-[6px]">
              <article
                class="text-left font-bold text-white px-[5px] py-[10px]"
              >
                <h1 class="text-[24px]">
                  Game Tracker: Ваш надежный гид в мире игр!
                </h1>
                <p class="mt-[10px] leading-[32px]">
                  Не теряйте время на бесконечные часы игрового прохождения.<br />
                  Независимо от жанра или платформы, сервис точно определит,<br />
                  сколько времени вам потребуется для завершения любой игры.
                </p>
              </article>
            </div>

            <div class="flex w-[50%] rounded-[6px]">
              <article
                class="text-left font-bold text-white px-[5px] py-[10px]"
              >
                <h1 class="text-[24px]">Особенности сервиса Game Tracker:</h1>
                <ol class="list-decimal list-inside space-y-[20px] mt-[10px]">
                  <li>
                    Данные о времени игры: Рассчет времени прохождения строится
                    на основе средних данных, учитывая разные категории
                    прохождения
                  </li>
                  <li>
                    Широкий охват игр: От захватывающих приключений до
                    интригующих головоломок, от шутеров до ролевых игр — наш
                    сервис включает в себя огромную базу данных игр разных
                    жанров и платформ.
                  </li>
                  <li>
                    Сервис находится в разработке, в дальнейшем вы сможете
                    увидеть много новых интересных функций!
                  </li>
                </ol>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

//components
import SearchBar from "@/components/common/SearchBar.vue";
import GameCard from "@/components/common/GameCard.vue";
import GameCardSkeleton from "@/components/skeletons/GameCardSkeleton.vue";
import { vueTyperNext } from "vue-typer-next";

// images
import dishonored from "@/assets/dishonored.jpeg";
import karnaca from "@/assets/karnaca.jpeg";

//other imports
import { useGameListStore } from "@/stores/gameListStore";

//stores
const gameListStore = useGameListStore();

//hooks
onMounted(async () => {
  loading.value = true;
  await gameListStore.getGameList();
  loading.value = false;
});

//router
const router = useRouter();

//computed
const gameList = computed(() => {
  return gameListStore.gameList;
});

//vars
const labels = [
  "Grand Theft Auto 5",
  "Baldurs Gate 3",
  "Read Dead Redemption 2",
  "Cyberpunk 2077",
  "Portal 2",
  "Resident Evil Village",
  "Call of Cthulhu",
  "The Sinking City",
];

const loading = ref(false);

//funcs
function onSearch(searchValue: string) {
  router.push(`/search?searchValue=${searchValue}`);
}
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
