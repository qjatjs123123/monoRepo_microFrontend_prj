import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Layout({ children }: ContainerProps) {
  return (
    <div
      className="w-full mx-auto px-4
            sm:max-w-[640px] sm:px-6
            md:max-w-[768px] md:px-8
            lg:max-w-[1024px] lg:px-10
            xl:max-w-[1280px] xl:px-12
            2xl:max-w-[1536px] 2xl:px-16"
    >
      {children}
    </div>
  );
}
