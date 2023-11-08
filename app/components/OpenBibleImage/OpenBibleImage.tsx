import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const OpenBibleImage = ({ className = "" }: { className?: string }) => {
  return (
    <Image
      className={twMerge("ml-auto -mb-3.5 -mr-3.5", className)}
      src="/images/open-bible3.png"
      alt="open bible"
      width={120}
      height={77}
      style={{
        marginLeft: "auto",
        marginBottom: "-14px",
        marginRight: "-14px",
      }}
    />
  );
};

export default OpenBibleImage;
