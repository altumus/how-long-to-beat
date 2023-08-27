import * as pinia from "pinia";
import * as rawgApi from "@/services/api/rawgGamesApi.ts";

export const useGameListStore = pinia.defineStore("gameList", {
  state: () => ({
    gameList: [],
  }),
  actions: {
    async getGameList() {
      this.gameList = await rawgApi.getGameList();
    },
  },
});
