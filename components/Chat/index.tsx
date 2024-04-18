import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="cursor-pointer fixed bottom-5 right-8 w-16 h-16 bg-green-900 rounded-full flex justify-center items-center">
      <Image src="/chat.png" alt="chat" width={64} height={64} />
    </div>
  );
};

export default index;
