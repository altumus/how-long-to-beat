import { RawgGameResponse } from "@/types/rawg.types";
import axios from "axios";

export async function getGameList(): Promise<RawgGameResponse> {
  try {
    const axiosOptions = {
      method: "GET",
      url: `http://localhost:3000/`,
    };

    const result = await axios.request(axiosOptions);

    console.log("result", result);

    return result.data;
  } catch (error) {
    console.log("error in gamelist request", error);
    Promise.reject(error);
    return {
      results: [],
    };
  }
}
