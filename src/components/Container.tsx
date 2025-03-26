export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full w-[calc(100%-64px)] max-sm:w-[calc(100%-32px)] absolute top-[-80px] bg-[#1B1D1F] rounded-xl outline-2 outline-[#282B30] shadow-lg flex p-8 text-[#D2D5DA]">
      {children}
    </main>
  );
}
