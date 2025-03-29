interface ContainerProps {
  children: React.ReactNode;
  width?: string;
}

export default function Container({
  children,
  width = " w-[calc(100%-64px)]",
}: ContainerProps) {
  return (
    <main
      className={`h-full ${width} max-sm:w-[calc(100%-32px)] absolute top-[-80px] bg-[#1B1D1F] rounded-xl outline-2 outline-[#282B30] shadow-lg flex p-6 text-[#D2D5DA]`}
    >
      {children}
    </main>
  );
}
