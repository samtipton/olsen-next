"use client";

import { extractVimeoIdFromRegularLink } from "@/lib/vimeoUtil";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import ReactPlayer from "react-player";

const AudioPowerpointPane = ({
  audioSrc,
  powerpointSrc,
}: {
  audioSrc: string;
  powerpointSrc: string;
}) => {
  return (
    <div className="w-full h-full">
      {powerpointSrc && (
        <iframe
          height="90%"
          width="100%"
          src={`https://view.officeapps.live.com/op/embed.aspx?height=450px&width=450px&src=${
            "https://olsen-park.s3.us-east-2.amazonaws.com/" + powerpointSrc
          }`}
          allowFullScreen={false}
        />
      )}
      <ReactPlayer
        // id="audio"
        height={50}
        width={"100%"}
        className="block w-full h-2/4"
        style={{ border: "none", borderRadius: "none", background: "black" }}
        url={
          "https://olsen-park.s3.us-east-2.amazonaws.com/" +
          encodeURIComponent(audioSrc)
        }
        controls={true}
      />
    </div>
  );
};

// TODO needs to handle different content params
// if no video (content before 2020), play mp3 and show powerpoint
const ContentPane = () => {
  const queryParams = useSearchParams();
  const videoLink = queryParams.get("v") || "";
  const audioSrc = queryParams.get("a") || "";
  const powerpointSrc = queryParams.get("ppt") || "";
  const vimeoId = extractVimeoIdFromRegularLink(videoLink);
  const title = queryParams.get("title") || "Select a title";

  return (
    <div className="w-full h-full">
      <div className="w-full hoverShadow bg-gradient-to-b from-[#556057]  to-black md:rounded-md w-fit h-fit px-4 py-8">
        {title && (
          <div className="text-white text-center text-xl font-bold mb-6">
            {title}
          </div>
        )}
        <div className="separator-bar opacity-50 mb-4" />
        <div className="flex flex-col justify-center items-center h-72">
          {!vimeoId && !powerpointSrc && (
            <Image
              className="mt-6"
              src={"/images/sermons2.png"}
              width={400}
              height={275}
              alt="Open Bible"
            />
          )}
          {vimeoId && (
            <iframe
              className="h-full w-full aspect-video relative -top-4"
              src={`https://player.vimeo.com/video/${vimeoId}?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479`}
              allow="autoplay; fullscreen; picture-in-picture"
              title={title}
            />
          )}
          {!vimeoId && (audioSrc || powerpointSrc) && (
            <AudioPowerpointPane
              audioSrc={audioSrc}
              powerpointSrc={powerpointSrc}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPane;
