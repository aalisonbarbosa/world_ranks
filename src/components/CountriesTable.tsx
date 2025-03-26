import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import type { Countries } from "@/lib/types";
import Link from "next/link";


export default function CountriesTable({
  countries,
}: {
  countries: Countries[];
}) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="border-[#6C727F]">
            <TableHead>Flag</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Population</TableHead>
            <TableHead>Area(km²)</TableHead>
            <TableHead>Region</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.cca3}>
              <TableCell>
                <Link href={`/countrydetails/${country.cca3}`}>
                  <Image
                    src={country.flags.svg}
                    alt={country.name.common}
                    width={70}
                    height={30}
                    className="rounded-sm"
                  />
                </Link>
              </TableCell>
              <TableCell>{country.name.common}</TableCell>
              <TableCell>{country.population.toLocaleString()}</TableCell>
              <TableCell>{country.area.toLocaleString()}</TableCell>
              <TableCell>{country.region}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
