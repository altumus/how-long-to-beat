<template>
  <div class="w-full h-full flex flex-col">
    <div
      class="w-full flex bg-[#030A11] bg-left-top bg-no-repeat flex-col items-center justify-evenly h-[500px]"
      :style="`background-image: url(${dishonored})`"
    >
      <div
        class="flex flex-col items-center bg-gradient-to-r from-black/60 justify-center gap-y-[20px] w-full h-full"
      >
        <SearchBar />
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
    <div class="w-full h-full bg-[#000201] flex py-[20px]">
      <div
        class="w-full h-full flex justify-center flex-wrap mx-[100px] gap-[20px]"
      >
        <GameCard v-for="label in labels" :key="label" :label="label" />
      </div>
    </div>
    <div
      class="w-full h-full bg-[#B9B4C7] bg-fixed"
      :style="`background-image: url(${metalgear});`"
    >
      <div class="flex backdrop-blur-sm h-full w-full py-[20px]">
        <div class="w-full h-full mx-[50px]">
          <h1 class="text-center text-[30px] font-bold text-white">
            О сервисе
          </h1>

          <div class="flex w-full gap-[20px] justify-around mt-[20px]">
            <div class="flex self-start w-[50%] bg-black rounded-[6px]">
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

            <div class="flex w-[50%] bg-black rounded-[6px]">
              <article
                class="text-left font-bold text-white px-[5px] py-[10px]"
              >
                <h1 class="text-[24px]">Особенности сервиса Game Tracker:</h1>
                <ol class="list-decimal list-inside space-y-[20px] mt-[10px]">
                  <li>
                    Данные о времени игры: Мы провели глубокий анализ каждой
                    игры, учли все побочные задания, секреты и возможности
                    прохождения. Это позволяет нам предоставить вам наиболее
                    точное предсказание времени, необходимого для завершения
                    игры.
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
//components
import SearchBar from "@/components/common/SearchBar.vue";
import GameCard from "@/components/common/GameCard.vue";
import { vueTyperNext } from "vue-typer-next";

// images
import metalgear from "@/assets/metalgear.jpeg";
import dishonored from "@/assets/dishonored.jpeg";

const labels = [
  "The Witcher 3",
  "Baldurs Gate 3",
  "Read Dead Redemption 2",
  "Resident Evil Village",
  "Metal Gear Solid Phantom Pain",
  "The Witcher 3",
  "Baldurs Gate 3",
  "Read Dead Redemption 2",
  "Resident Evil Village",
  "Metal Gear Solid Phantom Pain",
  "The Witcher 3",
  "Baldurs Gate 3",
  "Read Dead Redemption 2",
  "Resident Evil Village",
  "Metal Gear Solid Phantom Pain",
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
