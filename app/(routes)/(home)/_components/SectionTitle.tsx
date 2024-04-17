import React, { FC } from "react";

interface SectionTitleProps {
  title: string;
  subHeading?: string;
  pill: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, subHeading, pill }) => {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-start md:items-center ">
        <article className="rounded-full p-[1px] text-sm bg-gradient-to-r from-primary to-green-500">
          <div className="rounded-full  bg-white text-md px-3 py-1">{pill}</div>
        </article>
        {subHeading ? (
          <>
            <h2 className="text-left text-3xl sm:text-4xl sm:max-w-[750px] md:text-center font-semibold">
              {title}
            </h2>
            <p className="dark:text-washed-purple-700 sm:max-w-[450px] md:text-center">
              {subHeading}
            </p>
          </>
        ) : (
          <h1 className=" text-left  text-4xl sm:text-[56px] leading-[1.06] sm:max-w-[850px] md:text-center font-semibold">
            {title}
          </h1>
        )}
      </section>
    </>
  );
};

export default SectionTitle;
