"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { IPokemon } from "@/models/pokemon";
import { fetchPokemon } from "@/helpers/fetchPokemon";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [displayPokemon, setDisplayPokemon] = useState<IPokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 20;

  useEffect(() => {
    fetchPokemon(setPokemons);
  }, []);

  const updateDisplayPokemon = (pokemons: IPokemon[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayPokemon(pokemons.slice(startIndex, endIndex));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    updateDisplayPokemon(filteredPokemons, page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setTotalPages(Math.ceil(filteredPokemons.length / itemsPerPage));
    setCurrentPage(1);
    updateDisplayPokemon(filteredPokemons, 1);
  }, [pokemons, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />
      <main className="flex-1">
        <div className="max-w-screen-2xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to Pokemon Web</h1>
          <p className="text-lg mb-4">This is Pokemon website with PokeAPI</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
            {displayPokemon.map((pokemon: IPokemon) => {
              const id = pokemon.url.split("/")[6];
              return (
                <div
                  key={pokemon.name}
                  className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
                >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt={pokemon.name}
                    className="h-24 w-24 mb-2"
                  />
                  <p className="text-center capitalize">{pokemon.name}</p>
                </div>
              );
            })}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                />
              </PaginationItem>
              {[...Array(Math.min(5, totalPages))].map((_, index) => {
                const pageNumber = currentPage - 2 + index;
                if (pageNumber > 0 && pageNumber <= totalPages) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(pageNumber)}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                return null;
              })}
              {totalPages > 5 && <PaginationEllipsis />}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  );
}
