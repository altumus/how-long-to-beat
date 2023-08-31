<template>
  <div
    class="h-[200px] w-[300px] bg-red-200 rounded-[8px] bg-cover bg-center"
    :style="`background-image: url(${props.game.background_image})`"
  >
    <div
      class="w-full rounded-[8px] h-full group hover:backdrop-blur-lg transition-[100ms] flex flex-col"
    >
      <div class="w-full h-[80%] flex flex-col justify-center items-center">
        <div
          class="invisible group-hover:visible text-white bg-black text-[13px] bg-opacity-30 px-[5px] py-[2px] rounded-[6px]"
        >
          <div>Рейтинг: {{ props.game.metacritic }}%</div>

          <div>Среднее прохождение: {{ props.game.playtime }}ч</div>
        </div>
      </div>
      <div
        class="flex items-center w-full h-[20%] justify-center bg-black text-white font-bold rounded-b-[8px]"
      >
        {{ props.game.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import { PropType } from "vue";

//imports
import { RawgGameType } from "@/types/rawg.types";

//props
const props = defineProps({
  game: {
    type: Object as PropType<RawgGameType>,
    required: true,
  },
});
</script>
