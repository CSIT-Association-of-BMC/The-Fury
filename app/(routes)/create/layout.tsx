import React, { FC, ReactNode } from "react";
import { EdgeStoreProvider } from "@/lib/edgestore";

interface CreateLayoutProps {
  children: ReactNode;
}

const CreateLayout: FC<CreateLayoutProps> = ({ children }) => {
  return <EdgeStoreProvider>{children}</EdgeStoreProvider>;
};

export default CreateLayout;
