import { Toggle } from "./ui/toggle";

const regions: string[] = [
  "Americas",
  "Antarctic",
  "Africa",
  "Asia",
  "Europe",
  "Oceania",
];

type RegionFilterProps = {
  toggleContinent: (region: string) => void;
};

export default function RegionFilter({ toggleContinent }: RegionFilterProps) {
  return (
    <>
      {regions.map((region) => (
        <Toggle key={region} onClick={() => toggleContinent(region)}>
          {region}
        </Toggle>
      ))}
    </>
  );
}
