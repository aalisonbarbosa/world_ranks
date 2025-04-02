"use client";

import CountriesTable from "./CountriesTable";
import axios from "axios";
import Container from "./Container";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import SortOrderSelect from "./SortOrderSelect";
import RegionFilterToggle from "./RegionFilterToggle";
import StatusFilter from "./StatusFilter";
import { Countries } from "@/lib/types";
import PaginationButtons from "./PaginationButtons";

export default function CountriesRanking() {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [search, setSearch] = useState("");
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [filters, setFilters] = useState<{
    member: boolean;
    independent: boolean;
  }>({
    member: false,
    independent: false,
  });
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

  // Ordena os países com base na ordem selecionada
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

  // Alterna continentes selecionados
  const toggleContinent = (continent: string) => {
    setSelectedContinents((prev) =>
      prev.includes(continent)
        ? prev.filter((c) => c !== continent)
        : [...prev, continent]
    );
    setCurrentPage(1);
  };

  // Atualiza os filtros de status
  const handleCheckboxChange = (key: "member" | "independent") => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Filtra países com base no input de pesquisa, continentes e status selecionado
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesContinent =
      selectedContinents.length === 0 ||
      selectedContinents.includes(country.region);
    const matchesStatus =
      (!filters.member || country.unMember) &&
      (!filters.independent || country.independent);

    return matchesSearch && matchesContinent && matchesStatus;
  });

  // Paginação
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <Container customClass="w-[calc(100%-64px)] h-min">
      <div className="flex gap-2 w-full max-md:flex-col max-md:py-6">
        <aside className="min-md:w-1/4 flex flex-col min-md:gap-8 gap-4 max-md:px-6">
          <pre>Found {filteredCountries.length} countries</pre>
          <div className="flex justify-end items-center min-md:hidden">
            <SearchInput setSearch={setSearch} customClass="w-full" />
          </div>
          <fieldset>
            <legend className="mb-2 text-sm">Sort by</legend>
            <SortOrderSelect sortCountries={sortCountries} />
          </fieldset>
          <fieldset className="flex flex-wrap gap-2 w-3/4">
            <legend className="mb-2 text-sm">Region</legend>
            <RegionFilterToggle toggleContinent={toggleContinent} />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 text-sm">Status</legend>
            <StatusFilter
              filters={filters}
              handleCheckboxChange={handleCheckboxChange}
            />
          </fieldset>
        </aside>
        <div className="min-md:w-3/4 flex flex-col justify-between max-md:pt-2 gap-2 min-md:h-[728px]">
          <div className="flex justify-end items-center max-md:hidden">
            <SearchInput setSearch={setSearch} />
          </div>
          <div className="h-[632px]">
            <CountriesTable countries={currentCountries} />
          </div>
          <PaginationButtons
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            indexOfLastCountry={indexOfLastCountry}
            filteredCountries={filteredCountries}
          />
        </div>
      </div>
    </Container>
  );
}
