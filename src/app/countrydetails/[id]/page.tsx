import Header from "@/components/Header";
import CountryDetails from "@/components/CountryDetails";

interface paramsProps {
  params: {
    id: string;
  };
}

export default function Country_Details({ params }: paramsProps) {
  const { id } = params;

  console.log(id);

  return (
    <>
      <Header />
      <div className="bg-[#1B1D1F] relative min-h-screen flex justify-center">
        <CountryDetails />
      </div>
    </>
  );
}
