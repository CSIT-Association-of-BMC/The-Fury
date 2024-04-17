import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const Clients = () => {
  return (
    <section className="relative py-4">
      <div
        className="overflow-hidden container
        flex
        after:content['']
        after:dark:from-brand-dark
        after:to-transparent
        after:from-background
        after:bg-gradient-to-l
        after:right-0
        after:bottom-0
        after:top-0
        after:w-40
        after:z-10
        after:absolute

        before:content['']
        before:dark:from-brand-dark
        before:to-transparent
        before:from-background
        before:bg-gradient-to-r
        before:left-0
        before:top-0
        before:bottom-0
        before:w-30
        before:z-10
        before:absolute
    "
      >
        {[...Array(2)].map((arr) => (
          <div
            key={uuidv4()}
            className="flex
            flex-nowrap
           animate-slide

      "
          >
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={uuidv4()}
                className=" relative
                w-[120px]
                m-1
                shrink-0
                flex
                items-center
                h-[60px]
              "
              >
                <Image
                  src={`/client${i + 1}.png`}
                  alt="client"
                  fill
                  className="object-contain max-w-none  
                   no-repeat"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
