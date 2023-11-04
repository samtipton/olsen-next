"use client";

import React from "react";
import { Zoom } from "react-slideshow-image";

const Slideshow = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <div>
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
