import React from "react";
import AccordionPane from "../AccordionPane/AccordionPane";
import HomeAccordion from "./HomeAccordion";
import LiveStreamPane from "../LiveStreamPane/LiveStreamPane";
import PodcastPane from "../PodcastPane/PodcastPane";

const Home = () => {
  return (
    <div className="flex flex-wrap">
      <HomeAccordion />
      <LiveStreamPane />
      <PodcastPane />
    </div>
  );
};

export default Home;
