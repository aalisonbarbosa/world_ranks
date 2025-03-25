"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import CountriesTable from "./CountriesTable";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CountryRanking() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountryData() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Erro ao buscar países:", error);
      }
    }

    getCountryData();
  }, []);

  return (
    <main className="h-full w-[calc(100%-64px)] max-sm:w-[calc(100%-32px)] absolute top-[-80px] bg-[#1B1D1F] rounded-xl outline-2 outline-[#282B30] shadow-lg flex p-8 text-[#D2D5DA]">
      <aside className="w-1/4 flex flex-col gap-8">
        <pre>Found {countries.length} countries</pre>
        <fieldset>
          <legend className="mb-2 text-sm">Sort by</legend>
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="population">Population</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="alphabetical">Alphabetical Order</SelectItem>
                <SelectItem value="area">Área (km²)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </fieldset>
        <fieldset className="flex flex-wrap gap-2 w-3/4">
          <legend className="mb-2 text-sm">Region</legend>
          <Button>Americas</Button>
          <Button>Antarctic</Button>
          <Button>Africa</Button>
          <Button>Asia</Button>
          <Button>Europe</Button>
          <Button>Oceania</Button>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm">Status</legend>
          <div className="flex gap-2 items-center">
            <Checkbox id="member" className="w-6 h-6" />
            <Label htmlFor="member">Member of the United Nations</Label>
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox id="independent" className="w-6 h-6" />
            <Label htmlFor="independent">Independent</Label>
          </div>
        </fieldset>
      </aside>
      <div className="w-3/4">
        <div className="flex justify-end items-center pb-6">
          <div className="relative w-[380px] h-10 flex items-center justify-items-start">
            <Search className="absolute ml-2" />
            <Input
              placeholder="Search by Name, Region, Subregion"
              type="text"
              className="pl-10 placeholder:font-bold h-full"
            />
          </div>
        </div>
        {countries.length > 0 ? (
          <CountriesTable countries={countries} />
        ) : (
          <p>Caregando...</p>
        )}
      </div>
    </main>
  );
}
