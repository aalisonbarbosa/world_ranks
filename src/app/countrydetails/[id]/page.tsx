import Header from "@/components/Header";
import CountryDetail from "@/components/CountryDetail";

interface paramsProps {
  params: {
    id: string;
  };
}

export default function CountryDetails({ params }: paramsProps) {
  const { id } = params;

  console.log(id);

  return (
    <>
      <Header />
      <div className="bg-[#1B1D1F] relative min-h-screen flex justify-center">
        <CountryDetail />
      </div>
    </>
  );
}
