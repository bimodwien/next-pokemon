import { axiosInstance } from "@/lib/axios";
import React from "react";

export async function fetchPokemon(
  setPokemon: React.Dispatch<React.SetStateAction<any>>
) {
  const axios = axiosInstance();
  try {
    const response = await axios.get("/pokemon?limit=1000");
    setPokemon(response.data.results);
  } catch (error) {
    console.log(error);
  }
}
