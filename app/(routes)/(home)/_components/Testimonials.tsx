import React from "react";
import { v4 as uuidv4 } from "uuid";

import SectionTitle from "./SectionTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import CustomCard from "./CustomCard";
import { cn } from "@/lib/utils";
import { USERS } from "@/lib/constants";

const Testimonials = () => {
  return (
    <section className="relative py-4">
      <div
        className="w-full
      blur-[120px]
      rounded-full
      h-32
      absolute
      bg-brand-primaryPurple/50
      -z-100
      top-56
    "
      />
      <div
        className="mt-20
      px-4
      sm:px-6 
      flex
      flex-col
      overflow-x-hidden
      overflow-visible
    "
      >
        <SectionTitle
          title="Trusted by all"
          subHeading="Join thousands of satisfied users who rely on our platform for their 
        personal and professional productivity needs."
          pill="Testimonials"
        />
        {[...Array(2)].map((arr, index) => (
          <div
            key={uuidv4()}
            className={cn(
              "mt-12 flex flex-nowrap gap-6 self-start",
              index === 1 && "flex-row-reverse",
              "animate-[slide_250s_linear_infinite]",
              index === 1 && "animate-[slide_250s_linear_infinite_reverse]",
              index == 1 && "ml-[100vw]",
              "hover:paused"
            )}
          >
            {USERS.map((testimonial, index) => (
              <CustomCard
                key={uuidv4()}
                className="w-[500px]
              shrink-0s
              rounded-xl
              dark:bg-gradient-to-t
              dark:from-border dark:to-background
            "
                cardHeader={
                  <div
                    className="flex
                  items-center
                  gap-4
              "
                  >
                    <Avatar>
                      <AvatarImage src={`/avatars/${index + 1}.png`} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center">
                      <CardTitle className="text-foreground text-[18px] leading-tight">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="dark:text-washed-purple-800 leading-tight">
                        {testimonial.name.toLocaleLowerCase()}
                      </CardDescription>
                    </div>
                  </div>
                }
                cardContent={
                  <p className="dark:text-washed-purple-800">
                    {testimonial.message}
                  </p>
                }
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
