import CountriesRanking from "@/components/CountriesRanking";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative flex justify-center min-h-screen max-md:min-h-[1124px] max-sm:min-h-[1168px] bg-[#1B1D1F]">
        <CountriesRanking />
      </div>
    </>
  );
}
