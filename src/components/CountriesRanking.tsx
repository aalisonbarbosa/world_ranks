"use client";

import CountriesTable from "./CountriesTable";
import axios from "axios";
import Container from "./Container";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import SortOrderSelect from "./SortOrderSelect";
import RegionFilter from "./RegionFilter";
import StatusFilter from "./StatusFilter";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Countries } from "@/lib/types";

export default function CountriesRanking() {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sortedCountries = response.data.sort(
          (a: Countries, b: Countries) => b.population - a.population
        );

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Erro ao buscar países:", error);
      }
    };

    fetchCountries();
  }, []);

  // Função para alternar continentes selecionados
  const toggleContinent = (continent: string) => {
    setSelectedContinents((prev) =>
      prev.includes(continent)
        ? prev.filter((c) => c !== continent)
        : [...prev, continent]
    );
    setCurrentPage(1);
  };

  // Filtra países com base nos continentes selecionados
  const filteredCountries =
    selectedContinents.length > 0
      ? countries.filter((country) =>
          selectedContinents.includes(country.region)
        )
      : countries;

  // Paginação
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // orderna países com base na escolha selecionada
  const sortCountries = (sort: string) => {
    const sortedCountries = [...countries];

    if (sort === "area") {
      sortedCountries.sort((a, b) => b.area - a.area);
    } else if (sort === "population") {
      sortedCountries.sort((a, b) => b.population - a.population);
    } else {
      sortedCountries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
    }

    setCountries(sortedCountries);
  };

  return (
    <Container>
      <aside className="w-1/4 flex flex-col gap-8">
        <pre>Found {filteredCountries.length} countries</pre>
        <fieldset>
          <legend className="mb-2 text-sm">Sort by</legend>
          <SortOrderSelect sortCountries={sortCountries} />
        </fieldset>
        <fieldset className="flex flex-wrap gap-2 w-3/4">
          <legend className="mb-2 text-sm">Region</legend>
          <RegionFilter toggleContinent={toggleContinent} />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm">Status</legend>
          <StatusFilter />
        </fieldset>
      </aside>
      <div className="w-3/4 flex flex-col justify-between">
        <div className="flex justify-end items-center">
          <SearchInput />
        </div>
        <div className="h-[632px]">
          <CountriesTable countries={currentCountries} />
        </div>
        <div className="flex justify-center gap-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-32 bg-[#282B30] rounded disabled:opacity-50"
          >
            <ArrowLeft />
            previous
          </Button>
          <span className="w-12 flex items-center justify-center bg-[#282B30]">
            {currentPage}
          </span>
          <Button
            onClick={() =>
              setCurrentPage((prev) =>
                indexOfLastCountry < filteredCountries.length ? prev + 1 : prev
              )
            }
            disabled={indexOfLastCountry >= filteredCountries.length}
            className="w-32 bg-[#282B30] rounded disabled:opacity-50"
          >
            next
            <ArrowRight />
          </Button>
        </div>
      </div>
    </Container>
  );
}
