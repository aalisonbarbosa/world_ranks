export type Countries = {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  population: number;
  area: number;
  capital: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  continents: string[];
  borders?: string[];
  flags: {
    svg: string;
  };
};
