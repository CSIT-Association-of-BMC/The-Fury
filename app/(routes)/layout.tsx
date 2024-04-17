import React, { FC, ReactNode } from "react";
import Footer from "@/components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <main className="h-full">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
