"use client";
import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

const User = () => {
  const { user } = useUser();

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="w-8 h-8">
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-[140px]" align="end">
        <SignOutButton>
          <Button
            variant="ghost"
            className="w-full text-textColor font-medium flex items-center gap-4"
          >
            <LogOut className="w-4 h-5" /> log out
          </Button>
        </SignOutButton>
      </PopoverContent>
    </Popover>
  );
};

export default User;
