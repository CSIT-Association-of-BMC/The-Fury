"use client";
import React, { FC } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

import Logo from "../Logo";
import User from "./User";
import { Button } from "../ui/button";
import Search from "./Search";

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: FC<NavbarProps> = ({ isLoggedIn }) => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav className="px-6 bg-[#fff] py-3 flex items-center justify-between mb-4 border-b">
      <Logo />
      {pathName !== "/" ? null : (
        <ul className="flex items-center flex-1 justify-evenly max-w-[540px] px-4 text-[14px] text-textColor mt-1">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About us</Link>
          </li>
          <li>
            <Link href="#">How it&rsquo;s work</Link>
          </li>
        </ul>
      )}
      <div className="flex items-center gap-4 text-[14px] font-medium">
        <Search />
        {isLoggedIn ? (
          <>
            <Button
              variant="ghost"
              className="text-primary font-medium hover:text-primary gap-2"
              onClick={() => router.push("/create")}
            >
              <Plus className="w-5 h-5" />
              List Your Property
            </Button>

            <User />
          </>
        ) : (
          <>
            <SignUpButton>
              <Button className="px-7 text-textColor" variant="outline">
                Sign up
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button variant="primary" className="px-7">
                Login
              </Button>
            </SignInButton>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
