import React, { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="flex items-center h-full justify-center">{children}</main>
  );
};

export default AuthLayout;
