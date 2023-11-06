import React from "react";
import AccordionPane, {
  AccordionPaneProps,
  AccordionPaneSegment,
} from "../AccordionPane/AccordionPane";
import Image from "next/image";
import ImagePane from "../ImagePane/ImagePane";
import Link from "next/link";

type Preacher = {
  src: string;
  name: string;
};

const preachers: Preacher[] = [
  { src: "/austin-byers.jpg", name: "Austin Byers" },
  { src: "/KPope.jpg", name: "Kyle Pope" },
];

export const Preachers = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <PreachersAccordion className="float-left lg:row-span-2 lg:w-full md:w-full sm:w-full" />
      {preachers.map(({ src, name }) => {
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

const PreachersAccordion = ({ className }: AccordionPaneProps) => {
  return (
    <AccordionPane className={className}>
      <AccordionPaneSegment
        heading="Our Preachers"
        defaultOpen={true}
        inputType="radio"
      >
        <span className="drop-cap">I</span>n the New Testament, Paul addresses
        three epistles to men preaching the gospel. These men, called
        <strong>&quot;evangelists&quot;</strong> (one who brings good news) are
        charged to{" "}
        <strong>
          &quot;Preach the word! Be ready in season and out of season. Convince,
          rebuke, exhort, with all longsuffering and teaching&quot;
        </strong>
        (2 Timothy 4:2). Olsen Park supports a man to work with the congregation
        in carrying out this responsibility
        <Image
          src="/open-bible3.png"
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
      <AccordionPaneSegment
        heading="Preacher Training Program"
        defaultOpen={true}
        inputType="radio"
      >
        <span className="drop-cap">I</span>n July of 2008 Olsen Park began a two
        year preacher training program. This program involves an intensive study
        regiment and graduated teaching and preaching opportunities for the
        starting evangelist. The preacher works closely with brother Pope and
        the leadership of the congregation to help prepare himself for full-time
        work with a congregation.{" "}
        <Link
          style={{ color: "blue", fontWeight: "bold" }}
          href="PreacherTrainingProgram3.pdf"
        >
          Read the Syllabus & Curriculum.
        </Link>
        <br />
        <span className="block indent-4">
          Brother Curtis Carwile was our first preacher to work with us in the
          program July 2008-July 2010. From June of 2010 brother Jason Garcia
          became the second young preacher to work with us through June of 2012.
          In June of 2013 brother Andrew Dow began working with us as our third
          young preacher in this program and left to begin full-time work in
          June of 2015.
        </span>
        <Image
          src="/open-bible3.png"
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

export default Preachers;
