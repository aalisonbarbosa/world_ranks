import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    <div className="relative w-[380px] h-10 flex items-center justify-items-start">
      <Search className="absolute ml-2" />
      <Input
        placeholder="Search by Name, Region, Subregion"
        type="text"
        className="pl-10 placeholder:font-bold h-full"
      />
    </div>
  );
}
