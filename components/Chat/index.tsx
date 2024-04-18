import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className=" fixed bottom-8 right-8 w-20 h-20 bg-green-900 rounded-full flex justify-center items-center">
      <Image src="./chat.png" alt="chat" width={80} height={80} />
    </div>
  );
};

export default index;
