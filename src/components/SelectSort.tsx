import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./ui/select";

export default function SelectSort() {
  return (
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
  );
}
