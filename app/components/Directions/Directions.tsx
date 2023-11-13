import React from "react";
import AccordionPane, {
  AccordionPaneSegment,
} from "../AccordionPane/AccordionPane";
import OpenBibleImage from "../OpenBibleImage/OpenBibleImage";
import Link from "next/link";

const Directions = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <DirectionsAccordion />
      <DirectionsMapPane />
    </div>
  );
};

const DirectionsAccordion = () => {
  return (
    <AccordionPane className="lg:row-span-2 lg:w-full md:w-full sm:w-full">
      <AccordionPaneSegment heading="Times of Services" defaultOpen={true}>
        <span className="dropCap">W</span>e have classes for all ages on Sunday
        and Wednesday and we assemble as a church for worship twice on Sunday
        and for a brief invitation Wednesday night.
        <div className="relative pl-9 pt-4">
          {/* clock icon */}
          Service Times:
          <div className="pl-1 font-bold italic">Sunday</div>
          <div className="pl-3">
            Worship &ndash; <span className="font-bold">9:00 a.m.*</span>
          </div>
          <div className="pl-3">
            Bible Class &ndash; <span className="font-bold">9:30 a.m.</span>
          </div>
          <div className="pl-3">
            Worship &ndash; <span className="font-bold">10:30 a.m.</span>
          </div>
          <div className="pl-1  font-bold italic">Wednesday</div>
          <div className="pl-3">
            Bible Class &ndash; <span className="font-bold">7:00 p.m.</span>
          </div>
          <br />
          <br />
          <div>* No Lord&apos;s Supper</div>
        </div>
        <OpenBibleImage />
      </AccordionPaneSegment>
    </AccordionPane>
  );
};

const DirectionsMapPane = () => {
  return (
    <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 p-3.5">
      <div className="text-xl text-center font-bold lg:w-full md:w-full sm:w-full border-[#888478] bg-[#989386] hoverShadow rounded-md pt-1.5 px-4 pb-4">
        <div className="direction-pane-text text-white mb-3.5">
          Come Worship With Us
        </div>
        <div className="separator-bar opacity-50 mb-3" />
        <div className="direction-pane-text text-sm font-normal whitespace-nowrap mb-3">
          <span className="font-bold">
            We assemble for worship and Bible study at:
          </span>
          <br />
          4700 Andrews Ave. Amarillo, TX 79106
          <br />
          <Link href="tel:1-806-352-2809" title="Call Olsen Park.">
            {/* <i className="fa fa-mobile" aria-hidden="true"></i> */}
            Phone: (806) 352-2809
          </Link>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.1844958592496!2d-101.8908853730888!3d35.18092447643472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87015020ac6504b1%3A0x83b74c82c4c4e6f0!2sOlsen%20Park%20Church%20of%20Christ!5e0!3m2!1sen!2sus!4v1699416354273!5m2!1sen!2sus"
          width="100%"
          height="325"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
export default Directions;
