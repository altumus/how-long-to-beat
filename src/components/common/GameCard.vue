<template>
  <div
    class="h-[200px] cursor-pointer w-[300px] bg-black rounded-[8px] bg-cover bg-center"
    :style="`background-image: url(${props.game.background_image || noImage})`"
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
        class="flex items-center w-full min-h-[20%] py-[2px] px-[5px] justify-center bg-black text-white font-bold rounded-b-[8px]"
      >
        {{ props.game.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import { PropType } from "vue";

//images
import noImage from "@/assets/no-image.jpeg";

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
