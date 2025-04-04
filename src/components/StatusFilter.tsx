import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type StatusFilterProps = {
  filters: { member: boolean; independent: boolean };
  handleCheckboxChange: (key: "member" | "independent") => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function StatusFilter({
  filters,
  handleCheckboxChange,
  setCurrentPage
}: StatusFilterProps) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Checkbox
          id="member"
          className="w-6 h-6"
          checked={filters.member}
          onCheckedChange={() => {handleCheckboxChange("member"); setCurrentPage(1)}}
        />
        <Label htmlFor="member">Member of the United Nations</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox
          id="independent"
          className="w-6 h-6"
          checked={filters.independent}
          onCheckedChange={() => {handleCheckboxChange("independent"); setCurrentPage(1)}}
        />
        <Label htmlFor="independent">Independent</Label>
      </div>
    </>
  );
}
