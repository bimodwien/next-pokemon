import axios, { AxiosInstance } from "axios";

export function axiosInstance(): AxiosInstance {
  return axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });
}
