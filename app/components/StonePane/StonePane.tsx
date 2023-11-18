import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type StonePaneProps = {
  className?: string;
};

const StonePane = ({
  className,
  children,
}: PropsWithChildren<StonePaneProps>) => {
  return (
    <div
      className={twMerge(
        "lg:col-span-2 md:col-span-2 sm:col-span-1 p-3.5",
        className
      )}
    >
      <div className="lg:w-full md:w-full sm:w-full border-[#888478] bg-[#989386] hoverShadow rounded-md pt-1.5 px-4 pb-4">
        {children}
      </div>
    </div>
  );
};

export default StonePane;
