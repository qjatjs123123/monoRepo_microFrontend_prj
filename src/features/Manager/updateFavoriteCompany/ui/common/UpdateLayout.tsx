interface LayoutProps {
  children: React.ReactNode;
}

export function UpdateLayout({ children }: LayoutProps) {
  return (
    <div
      className="w-full md:w-1/2 h-screen bg-white flex flex-col flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
