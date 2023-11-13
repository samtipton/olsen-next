"use client";

import React from "react";
import { Zoom } from "react-slideshow-image";

const Slideshow = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <div className="bg-base-100 pb-4 border-b-4 border-base-200">
      <Zoom
        indicators
        nextArrow={<></>}
        prevArrow={<></>}
        duration={1800}
        scale={1.0}
      >
        {children}
      </Zoom>
    </div>
  );
};

export default Slideshow;
