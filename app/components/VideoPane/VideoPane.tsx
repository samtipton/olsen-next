"use client";

import { extractVimeoIdFromRegularLink } from "@/lib/vimeoUtil";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const VideoPane = () => {
  const queryParams = useSearchParams();
  const videoLink = queryParams.get("v") || "";
  const id = extractVimeoIdFromRegularLink(videoLink);
  const title = (id && queryParams.get("title")) || "Select a title";

  return (
    <div className="w-full h-full">
      <div className="w-full hoverShadow bg-gradient-to-b from-[#556057]  to-black md:rounded-md w-fit h-fit px-4 py-8">
        {title && (
          <div className="text-white text-center text-xl font-bold mb-6">
            {title}
          </div>
        )}
        <div className="separator-bar opacity-50 mb-4" />
        <div className="flex justify-center items-center h-72">
          {id && (
            <iframe
              className="h-full w-full aspect-video"
              src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479`}
              allow="autoplay; fullscreen; picture-in-picture"
              title={title}
            />
          )}
          {!id && (
            <Image
              src={"/images/sermons2.png"}
              width={400}
              height={300}
              alt="Open Bible"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPane;
