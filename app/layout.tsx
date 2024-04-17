import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Loader } from "lucide-react";
import "./globals.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dera",
  description:
    "Discover your ideal rental property with ease. Explore a diverse range of rooms, apartments, and houses tailored to your needs. Start your search now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={font.className}>
          <ClerkLoading>
            <div className="h-full w-full flex items-center justify-center">
              <Loader className="h-6 w-6 animate-spin" />
            </div>
          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </ClerkProvider>
    </html>
  );
}
