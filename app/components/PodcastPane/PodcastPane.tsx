import Image from "next/image";
import Link from "next/link";
import React from "react";

const PodcastPane = () => {
  return (
    <div className="lg:w-1/3 md:w-1/2 sm:w-full p-3.5">
      <div className="h-fit recent-sermon-pane">
        <Link
          className="direction-pane-text"
          href="https://faithfulsayingspodcast.buzzsprout.com"
          target="_blank"
        >
          <Image
            width={600}
            height={600}
            alt="faithful sayings podcast"
            src="/faithful-sayings-podcast.jpg"
          />
        </Link>
      </div>
    </div>
  );
};

export default PodcastPane;
