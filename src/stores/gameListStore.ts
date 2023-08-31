import * as pinia from "pinia";
import * as rawgApi from "@/services/api/rawgGamesApi.ts";
import { RawgGameType } from "@/types/rawg.types";

export const useGameListStore = pinia.defineStore("gameList", {
  state: () => ({
    gameList: [] as Array<RawgGameType>,
  }),
  actions: {
    async getGameList() {
      const result = await rawgApi.getGameList();
      this.gameList = result.results;
    },
  },
});
