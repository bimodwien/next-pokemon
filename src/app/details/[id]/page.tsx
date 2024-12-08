import React from "react";
import { axiosInstance } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IAbility, IType, IStat } from "@/models/pokemon";

async function getPokemonDetails(id: string) {
  const axios = axiosInstance();
  try {
    const response = await axios.get(`/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching Details: ", error);
    return null;
  }
}

async function Details({ params }: { params: { id: string } }) {
  const pokemon = await getPokemonDetails(params.id);

  if (!pokemon) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <Link href="/">
          <Button className="mb-4" variant={"outline"}>
            &larr; Back to Home
          </Button>
        </Link>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={300}
              height={300}
              className="rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2 capitalize">
                {pokemon.name}
              </h1>
              <p className="text-gray-600 mb-4">
                #{pokemon.id.toString().padStart(3, "0")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Types</h2>
                  <div className="flex flex-wrap gap-2">
                    {pokemon.types.map((type: IType) => {
                      return (
                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                          {type.type.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                  <ul className="list-disc list-inside">
                    {pokemon.abilities.map((ability: IAbility) => {
                      return (
                        <li className="capitalize">{ability.ability.name}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  {pokemon.stats.map((stat: IStat) => {
                    return (
                      <div key={stat.stat.name}>
                        <p className="capitalize">
                          {stat.stat.name}: {stat.base_stat}
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{
                              width: `${(stat.base_stat / 255) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
