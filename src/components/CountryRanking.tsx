import CountriesTable from "./CountriesTable";
import axios from "axios";
import Container from "./Container";
import { Countries } from "@/lib/types";
import SearchInput from "./SearchInput";
import SelectSort from "./SelectSort";
import RegionFilter from "./RegionFilter";
import StatusFilter from "./StatusFilter";

export default async function CountryRanking() {
  const { data }: { data: Countries[] } = await axios.get(
    "https://restcountries.com/v3.1/all"
  );

  return (
    <Container>
      <aside className="w-1/4 flex flex-col gap-8">
        <pre>Found {data.length} countries</pre>
        <fieldset>
          <legend className="mb-2 text-sm">Sort by</legend>
          <SelectSort />
        </fieldset>
        <fieldset className="flex flex-wrap gap-2 w-3/4">
          <legend className="mb-2 text-sm">Region</legend>
          <RegionFilter/>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm">Status</legend>
          <StatusFilter/>
        </fieldset>
      </aside>
      <div className="w-3/4">
        <div className="flex justify-end items-center pb-6">
          <SearchInput />
        </div>
        <CountriesTable countries={data} />
      </div>
    </Container>
  );
}
