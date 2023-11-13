"use client";

import { extractVimeoIdFromRegularLink } from "@/lib/vimeoUtil";
import { useSearchParams } from "next/navigation";
import React from "react";

const VideoPane = () => {
  const queryParams = useSearchParams();
  const videoLink = queryParams.get("v") || "";
  const title = queryParams.get("title") || "";
  const id = extractVimeoIdFromRegularLink(videoLink);
  if (!id) return <div className="w-full h-full"></div>;
  return (
    <div className="w-full h-full">
      <div className="w-full hoverShadow bg-gradient-to-b from-[#556057]  to-black rounded-md w-fit h-fit px-4 py-8">
        {title && (
          <div className="text-white text-center text-lg mb-4">{title}</div>
        )}
        <div className="separator-bar opacity-50 mb-8" />
        <div className="flex justify-center">
          <iframe
            className="h-52 w-96"
            src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPane;
