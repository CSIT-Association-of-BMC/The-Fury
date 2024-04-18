import React from "react";
import { Search } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { MapPinned } from "lucide-react";
import { BaggageClaim } from "lucide-react";
import { Handshake } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { Landmark } from "lucide-react";

import Card from "./Card";

const HowItWorks = () => {
  return (
    <section className="flex flex-col bg-green-50/60 items-center py-[88px] mt-20 ">
      <h2 className="text-green-900 font-bold text-3xl">How it works</h2>
      <div className="pt-3 flex flex-col items-center ">
        <p className="font-semibold text-md pb-4">
          For room/ apartment/ house seeker
        </p>
        <div className="flex flex-wrap items-start gap-28 pt-10 justify-between">
          <Card
            icon={Search}
            title={"Search"}
            desc={"search a place where you wanna live"}
          />
          <Card
            icon={LockKeyhole}
            title={"Book"}
            desc={"Book your desired place"}
          />
          <Card
            icon={MapPinned}
            title={"Visit"}
            desc={"Visit your booked place"}
          />
          <Card
            icon={BaggageClaim}
            title={"Shift"}
            desc={"Shift to your booked place"}
          />
        </div>
      </div>
      <div className="pt-24 flex flex-col items-center">
        <p className="font-semibold text-lg pb-6">
          For room/ apartment/ house owner
        </p>
        <div className="flex flex-wrap items-start gap-28 pt-6 justify-between">
          <Card
            icon={NotebookPen}
            title={"Form fillup"}
            desc={"fill up your property details"}
          />
          <Card
            icon={MessageCircleMore}
            title={"Chat (optional)"}
            desc={"chat with customer"}
          />
          <Card
            icon={Landmark}
            title={"Transaction"}
            desc={"make agreement and payment"}
          />
          <Card
            icon={Handshake}
            title={"Welcome "}
            desc={"welcome the new memeber"}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
