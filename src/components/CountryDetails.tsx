import { useEffect, useState } from "react";
import { Countries } from "@/lib/types";
import Container from "./Container";
import Image from "next/image";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import Link from "next/link";
import axios from "axios";
import Loading from "./Loading";

export default function CountryDetails({
  country,
}: {
  country: Countries | null;
}) {
  const [neighbours, setNeighbours] = useState<Countries[]>([]);

  useEffect(() => {
    if (!country || !country.borders || country.borders.length === 0) return;

    const fetchNeighbouringCountries = async () => {
      try {
        const { data } = await axios.get<Countries[]>(
          `https://restcountries.com/v3.1/alpha?codes=${country.borders!.join(
            ","
          )}`
        );
        setNeighbours(data);
      } catch (error) {
        console.error("Erro ao buscar países vizinhos", error);
      }
    };

    fetchNeighbouringCountries();
  }, [country]);

  if (!country) {
    return (
      <Container customClass="w-[60%] max-md:top-[-60px] max-lg:min-sm:w-[75%] h-[828px]">
          <Loading />
      </Container>
    );
  }

  return (
    <Container customClass="w-[60%] max-md:top-[-60px] max-lg:min-sm:w-[75%] min-h-[828px]">
      <div className="w-full relative">
        <div className="flex flex-col items-center gap-4 w-full h-full absolute top-[-80px]">
          <Image
            src={country.flags.svg}
            alt={country.name.common}
            width={250}
            height={0}
            className="rounded-lg"
          />
          <div className="w-full">
            <h1 className="font-bold text-2xl text-center mb-4">
              {country.name.common}
            </h1>
            <p className="text-center">{country.name.official}</p>
            <div className="flex flex-wrap justify-around mt-4 gap-2">
              <div className="flex gap-4 bg-[#282B30] p-4 rounded-lg max-md:text-sm">
                <p>Population</p>
                {country.population.toLocaleString()}
              </div>
              <div className="flex gap-4 bg-[#282B30] p-4 rounded-lg max-md:text-sm">
                <p>Área(km²)</p>
                {country.area.toLocaleString()}
              </div>
            </div>
          </div>
          <Table>
            <TableBody className="border-y-2 border-[#282B30]">
              <TableRow className="flex items-center justify-between border-b-2 border-[#282B30] px-2">
                <TableCell>Capital</TableCell>
                <TableCell>{country.capital?.join(", ") || "N/A"}</TableCell>
              </TableRow>
              <TableRow className="flex items-center justify-between border-b-2 border-[#282B30] px-2">
                <TableCell>Subregion</TableCell>
                <TableCell>{country.subregion || "N/A"}</TableCell>
              </TableRow>
              <TableRow className="flex items-center justify-between border-b-2 border-[#282B30] px-2">
                <TableCell>Languages</TableCell>
                <TableCell>
                  {Object.values(country.languages).join(", ")}
                </TableCell>
              </TableRow>
              <TableRow className="flex items-center justify-between border-b-2 border-[#282B30] px-2">
                <TableCell>Currencies</TableCell>
                <TableCell>
                  {Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(", ")}
                </TableCell>
              </TableRow>
              <TableRow className="flex items-center justify-between px-2">
                <TableCell>Continent</TableCell>
                <TableCell>{country.continents.join(", ")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="w-full max-md:px-2">
            <h2 className="text-start mb-4">Neighboring Countries</h2>
            {neighbours.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2">
                {neighbours.map((neighbour) => (
                  <Link
                    key={neighbour.cca3}
                    href={`/countrydetails/${neighbour.cca3}`}
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        src={neighbour.flags.svg}
                        alt={neighbour.name.common}
                        width={0}
                        height={0}
                        className="rounded-md shadow-md w-16 h-12 max-sm:w-12 max-sm:h-8"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p>No neighboring countries found.</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
