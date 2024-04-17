import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: FC<LogoProps> = ({ width = 64, height = 29 }) => {
  return (
    <Link href="/" className="p-1">
      <Image src="/logo.png" alt="logo" height={height} width={width} />
    </Link>
  );
};

export default Logo;
