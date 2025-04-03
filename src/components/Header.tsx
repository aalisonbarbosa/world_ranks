import Image from "next/image";
import logo from "../../public/Logo.svg";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center h-[400px] bg-hero bg-center bg-cover">
      <Image src={logo} alt="logo" width={250} height={120} />
    </header>
  );
}
