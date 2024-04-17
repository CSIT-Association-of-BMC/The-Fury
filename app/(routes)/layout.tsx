import React, { FC, ReactNode } from "react";
import { auth } from "@clerk/nextjs";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { userId } = auth();
  return (
    <>
      <Navbar isLoggedIn={!!userId} />
      <main className="h-full">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
