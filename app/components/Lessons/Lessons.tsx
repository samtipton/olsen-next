import React from "react";
import ImagePane from "../ImagePane/ImagePane";
import { lessons } from "./entries";

const Lessons = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-6">
      {lessons.map(({ caption, src, href, title }) => {
        return (
          <ImagePane
            className="lg:w-full md:w-full sm:w-full"
            key={caption}
            title={title ?? caption}
            caption={caption.toUpperCase()}
            src={src}
            alt={caption}
            href={href}
            width={750}
            height={520}
          />
        );
      })}
    </div>
  );
};

export default Lessons;
