import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const LiveStreamPane = () => {
  return (
    <div className="lg:w-1/3 md:w-1/2 sm:w-full p-3.5">
      <div className={"h-fit recent-sermon-pane overflow-hidden"}>
        {/* 
        style="width: 100%; height: 100%; margin-right: -16px; margin-left: 0px; margin-top: 0px; margin-bottom: 5px; -webkit-border-top-right-radius: 6px;-webkit-border-top-left-radius: 6px; -moz-border-topright-radius: 6px; -moz-border-topleft-radius: 6px; border-top-right-radius: 6px; border-bottom-right-radius: 0px;"
        */}
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
            During times of services live streaming is available for those
            unable to attend.
          </span>
        </p>

        {/* <!-- Index Button Entry --> */}

        <p
          className={classNames("direction-pane-text", "mr-8, ml-8 text-right")}
        >
          <span className="text-xs">
            <Link className="direction-pane-text" href="Stream.html">
              View Live Stream&nbsp;
            </Link>
          </span>
          <Link className="direction-pane-text" href="Stream.html">
            <span className="text-xl">&#8811;</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LiveStreamPane;
