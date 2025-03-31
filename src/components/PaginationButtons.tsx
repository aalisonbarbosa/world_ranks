import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Countries } from "@/lib/types";

interface PaginationButtonsProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  indexOfLastCountry: number;
  filteredCountries: Countries[];
}

export default function PaginationButtons({
  currentPage,
  setCurrentPage,
  indexOfLastCountry,
  filteredCountries,
}: PaginationButtonsProps) {
  return (
    <div className="flex justify-center gap-2">
      <Button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="w-32 bg-[#282B30] rounded disabled:opacity-50"
      >
        <ArrowLeft />
        previous
      </Button>
      <span className="w-12 flex items-center justify-center bg-[#282B30]">
        {currentPage}
      </span>
      <Button
        onClick={() =>
          setCurrentPage((prev) =>
            indexOfLastCountry < filteredCountries.length ? prev + 1 : prev
          )
        }
        disabled={indexOfLastCountry >= filteredCountries.length}
        className="w-32 bg-[#282B30] rounded disabled:opacity-50"
      >
        next
        <ArrowRight />
      </Button>
    </div>
  );
}
