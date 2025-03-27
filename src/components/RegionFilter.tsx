import { Toggle } from "./ui/toggle";

const regions = [
  "Americas",
  "Antarctic",
  "Africa",
  "Asia",
  "Europe",
  "Oceania",
];

export default function RegionFilter() {
  return (
    <>
      {regions.map((region) => (
        <Toggle key={region}>{region}</Toggle>
      ))}
    </>
  );
}
