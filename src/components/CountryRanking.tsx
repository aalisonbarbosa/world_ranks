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

export default function CountryRanking() {
  return (
    <main className="h-full w-[calc(100%-64px)] max-sm:w-[calc(100%-32px)] absolute top-[-80px] bg-[#1B1D1F] rounded-xl outline-2 outline-[#282B30] shadow-lg flex p-6 text-[#D2D5DA]">
      <aside className="w-1/4 flex flex-col gap-8 pl-6">
        <pre></pre>
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
        <fieldset className="flex flex-wrap gap-2">
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
          <div className="relative w-[380px] flex items-center justify-items-start">
            <Search className="absolute ml-2" />
            <Input
              placeholder="Search by Name, Region, Subregion"
              type="text"
              className="pl-10 placeholder:font-bold"
            />
          </div>
        </div>
        <CountriesTable />
      </div>
    </main>
  );
}
