import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pane from "../Pane.tsx/Pane";

const LiveStreamPane = () => {
  return (
    <Pane>
      <Image
        width={600}
        height={250}
        alt="live stream"
        src={"/live-stream.jpg"}
      />

      <p className={classNames("direction-pane-text", "mr-8, ml-8")}>
        <span className="text-base">
          <b>Live Stream Services</b>
        </span>
      </p>

      <p className={classNames("direction-pane-text", "mr-8, ml-8")}>
        <span className="text-base">
          During times of services live streaming is available for those unable
          to attend.
        </span>
      </p>

      {/* <!-- Index Button Entry --> */}

      <p className={classNames("direction-pane-text", "mr-8, ml-8 text-right")}>
        <span className="text-xs">
          <Link className="direction-pane-text" href="Stream.html">
            View Live Stream&nbsp;
          </Link>
        </span>
        <Link className="direction-pane-text" href="Stream.html">
          <span className="text-xl">&#8811;</span>
        </Link>
      </p>
    </Pane>
  );
};

export default LiveStreamPane;
