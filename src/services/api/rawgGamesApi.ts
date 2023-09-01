import { RawgGameResponse } from "@/types/rawg.types";
import axios, { AxiosRequestConfig } from "axios";

export async function getGameList(): Promise<RawgGameResponse> {
  try {
    const axiosOptions = {
      method: "GET",
      url: `http://localhost:3000/`,
    } as AxiosRequestConfig;

    const result = await axios.request(axiosOptions);

    return result.data;
  } catch (error) {
    console.log("error in gamelist request", error);
    Promise.reject(error);
    return {
      results: [],
    };
  }
}

export async function getGameListFromSearch(
  searchValue: string
): Promise<RawgGameResponse> {
  try {
    const axiosOptions = {
      method: "GET",
      url: `http://localhost:3000/search/${searchValue}`,
    } as AxiosRequestConfig;

    const result = await axios.request(axiosOptions);

    console.log("search result", result.data);

    return result.data;
  } catch (error) {
    console.log("error in search request", error);
    Promise.reject(error);
    return {
      results: [],
    };
  }
}
