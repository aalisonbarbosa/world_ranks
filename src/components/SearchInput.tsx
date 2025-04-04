"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchInputProps {
  setSearch: (value: string) => void;
  customClass?: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function SearchInput({
  setSearch,
  customClass,
  setCurrentPage,
}: SearchInputProps) {
  return (
    <div
      className={`relative ${customClass} h-10 flex items-center justify-items-start`}
    >
      <Search className="absolute ml-2" />
      <Input
        placeholder="Search by Name"
        type="text"
        className="pl-10 min-md:placeholder:font-bold h-full"
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
