import React from "react";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="flex items-center justify-center mt-20">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[44px] leading-[1.2] text-headingColor font-semibold text-center">
          Discover rooms, apartments,
          <br />
          and houses for rent
        </h1>
        <p className="text-textColor w-[470px] text-center leading-normal">
          There are million of homes out there. Let&apos;s find the one
          that&apos;s is perfect for you.
        </p>

        <div className="flex items-center gap-5 mt-2 ">
          <Link
            href="/properties"
            className={cn(
              buttonVariants({
                variant: "primary",
                className: "flex items-center gap-2 px-5",
              })
            )}
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
          <Button variant="outline" className="px-5 text-textColor ">
            Learn more
          </Button>
        </div>

        <div className="hero-image">
          <div className="gradient" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
