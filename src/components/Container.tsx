interface ContainerProps {
  children: React.ReactNode;
  customClass?: string;
}

export default function Container({ children, customClass }: ContainerProps) {
  return (
    <main
      className={`h-full ${customClass} max-sm:w-[calc(100%-32px)] absolute top-[-80px] bg-[#1B1D1F] rounded-xl outline-2 outline-[#282B30] shadow-lg flex min-md:px-6 py-6 text-[#D2D5DA]`}
    >
      {children}
    </main>
  );
}
