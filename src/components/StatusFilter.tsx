import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export default function StatusFilter() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Checkbox id="member" className="w-6 h-6" />
        <Label htmlFor="member">Member of the United Nations</Label>
      </div>
      <div className="flex gap-2 items-center">
        <Checkbox id="independent" className="w-6 h-6" />
        <Label htmlFor="independent">Independent</Label>
      </div>
    </>
  );
}
