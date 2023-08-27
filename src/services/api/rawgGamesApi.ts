import axios from "axios";
import { rawgGamesApiKey } from "@/services/constants/apiKeys.ts";

export async function getGameList() {
  try {
    const axiosOptions = {
      method: "GET",
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=${rawgGamesApiKey}&page=1&page_size=8`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rawgGamesApiKey}`,
      },
    };

    const result = await axios.request(axiosOptions);

    console.log("result", result);

    return result.data;
  } catch (error) {
    console.log("error in gamelist request", error);
  }
}
