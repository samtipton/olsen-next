import React from "react";
import HomeAccordion from "./HomeAccordion";
import LiveStreamPane from "../LiveStreamPane/LiveStreamPane";
import PodcastPane from "../PodcastPane/PodcastPane";

const Home = () => {
  return (
    <div className="flex flex-wrap p-2.5">
      <HomeAccordion />
      <LiveStreamPane />
      <PodcastPane />
    </div>
  );
};

export default Home;
