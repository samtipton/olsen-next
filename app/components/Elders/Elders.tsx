import React from "react";
import ImagePane, { SimpleImagePaneItem } from "../ImagePane/ImagePane";
import Image from "next/image";
import AccordionPane, {
  AccordionPaneProps,
  AccordionPaneSegment,
} from "../AccordionPane/AccordionPane";
import OpenBibleImage from "../OpenBibleImage/OpenBibleImage";

const elders: SimpleImagePaneItem[] = [
  {
    src: "/images/PLedbetter.jpg",
    name: "Patrick Ledbetter",
    alt: "Patrick Ledbetter",
  },
  {
    src: "/images/BrMcAlister.jpg",
    name: "Brady McAlister",
    alt: "Brady McAlister",
  },
  {
    src: "/images/JNunn.jpg",
    name: "Jeff Nunn",
    alt: "Jeff Nunn",
  },
];

const Elders = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <EldersAccordion className="lg:row-span-2 lg:w-full md:w-full sm:w-full" />
      {elders.map(({ src, alt, name }) => {
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
              alt={alt}
              title={name}
              caption={name}
            />
          </div>
        );
      })}
    </div>
  );
};

const EldersAccordion = ({ className }: AccordionPaneProps) => {
  return (
    <AccordionPane className={className}>
      <AccordionPaneSegment
        heading="Our Elders"
        defaultOpen={true}
        inputType="checkbox"
      >
        <span>W</span>hen the Lord established His church He set down the
        organization by which individual congregations were to be led. Every
        church was to select men from within the congregation in accordance with
        qualifications that are set down in Scripture (Acts 14:23; 1 Timothy
        3:1-7; Titus 1:5-9). This group of men is referred to by several names,
        that describe the nature of their work. They are to be{" "}
        <b>quot;bishops&quot;</b> or <b>&quot;overseers&quot;</b> (Gr.{" "}
        <i>episkopos</i>) who watch over the souls of the members of the
        congregation (Acts 20:28; Philippians 1:1; Hebrews 13:17). They are{" "}
        <b>&quot;elders&quot;</b> or <b>&quot;presbyters&quot;</b> (Gr.{" "}
        <i>presbyteros</i>) who are older in the faith, leading by their example
        (1 Peter 5:1-3; 1 Timothy 4:14). They are the{" "}
        <b>&quot;shepherds&quot;</b> or <b>&quot;pastors&quot;</b> (Gr.{" "}
        <i>poimēn</i>) caring for and spiritually feeding the flock (Acts 20:28;
        I Peter 5:2; Ephesians 4:11). The men who serve in this capacity at
        Olsen Park have been appointed in accordance with these qualifications
        and strive to diligently fulfill this work.
        <OpenBibleImage />
      </AccordionPaneSegment>
    </AccordionPane>
  );
};

export default Elders;
