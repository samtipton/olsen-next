import React from "react";
import AccordionPane, {
  AccordionPaneProps,
  AccordionPaneSegment,
} from "../AccordionPane/AccordionPane";
import ImagePane from "../ImagePane/ImagePane";
import { deacons } from "./entries";
import Image from "next/image";

const Deacons = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <DeaconsAccordion className="lg:w-full md:w-full sm:w-full" />
      {deacons.map(({ src, name }) => {
        return (
          <div
            key={name}
            className="flex justify-center justify-items-stretch items-center"
          >
            <ImagePane
              className="lg:w-full md:w-full sm:w-full p-8"
              width={750}
              height={650}
              src={src}
              alt={name}
              title={name}
              caption={name}
            />
          </div>
        );
      })}
    </div>
  );
};

const DeaconsAccordion = ({ className }: AccordionPaneProps) => {
  return (
    <AccordionPane className={className}>
      <AccordionPaneSegment
        heading="Our Deacons"
        defaultOpen={true}
        inputType="checkbox"
      >
        <span className="dropCap">T</span>he New Testament teaches that in
        addition to elders, congregations of the Lord&apos;s people, appointed
        servants referred to as <b>&quot;deacons&quot;</b> (Philippians 1:1).
        Like elders, these men are to be appointed based upon qualifications
        that are spelled out in Scripture (1 Timothy 3:8-13). These men carry
        out various works of service to the church. The men appointed to this
        work at Olsen Park have met the qualifications of Scripture and serve
        the congregation faithfully in this work.
        <Image
          src="/images/open-bible3.png"
          alt="open bible"
          width={120}
          height={77}
          style={{
            maxWidth: "100%",
            float: "right",
            marginLeft: "auto",
            marginBottom: "-14px",
            marginRight: "-14px",
          }}
        />
      </AccordionPaneSegment>
    </AccordionPane>
  );
};

export default Deacons;
