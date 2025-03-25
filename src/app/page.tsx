import CountryRanking from "@/components/CountryRanking";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[#1B1D1F] relative min-h-screen flex justify-center">
        <CountryRanking />
      </div>
    </>
  );
}
