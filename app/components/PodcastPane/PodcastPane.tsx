import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pane from "../Pane.tsx/Pane";

const PodcastPane = () => {
  return (
    <Pane href="https://faithfulsayingspodcast.buzzsprout.com" target="_blank">
      <Image
        width={600}
        height={600}
        alt="faithful sayings podcast"
        src="/images/faithful-sayings-podcast.jpg"
      />
    </Pane>
  );
};

export default PodcastPane;
