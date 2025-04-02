"use client";

import Header from "@/components/Header";
import CountryDetails from "@/components/CountryDetails";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { Countries } from "@/lib/types";

interface paramsProps {
  params: Promise<{ id: string }>;
}

export default function Country_Details({ params }: paramsProps) {
  const { id } = use(params);

  const [country, setCountry] = useState<Countries | null>(null);

  useEffect(() => {
    const fecthCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${id}`
        );
        setCountry(response.data[0]);
      } catch (error) {
        console.error("Erro ao buscar países:", error);
      }
    };

    fecthCountry();
  }, [id]);

  return (
    <>
      <Header />
      <div className="relative min-h-[828px] flex justify-center bg-[#1B1D1F]">
        <CountryDetails country={country} />
      </div>
    </>
  );
}
