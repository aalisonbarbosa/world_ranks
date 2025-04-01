import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SortCountriesProps = {
  sortCountries: (sort: string) => void;
};

export default function SortOrderSelect({ sortCountries }: SortCountriesProps) {
  return (
    <Select
      onValueChange={(value) => sortCountries(value)}
      defaultValue="population"
    >
      <SelectTrigger className="w-[80%] max-md:w-full">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="population">Population</SelectItem>
          <SelectItem value="alphabetical">Alphabetical Order</SelectItem>
          <SelectItem value="area">Área (km²)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
