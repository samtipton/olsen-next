import React from "react";
import styles from "./AccordionPane.module.css";
import classNames from "classnames";

export interface AccordionSegmentProps {
  heading: string;
  content?: string;
  defaultOpen?: boolean;
}

const AccordionContent = ({ children }: React.PropsWithChildren<{}>) => {
  return <p className={classNames(styles.accordionText, "pt-4")}>{children}</p>;
};

export const AccordionPaneSegment = ({
  heading,
  defaultOpen,
  children,
}: React.PropsWithChildren<AccordionSegmentProps>) => {
  return (
    <div
      className="h-auto collapse rounded-none"
      style={{
        boxShadow:
          "0px 3px 3px 0 rgba(0,0,0,0.2), 0px 5px 3px 0 rgba(0,0,0,0.16)",
      }}
    >
      <input
        className="h-full min-h-min"
        type="radio"
        name="my-accordion-1"
        defaultChecked={defaultOpen}
      />
      <div className="flex items-center h-9 min-h-min collapse-title text-sm whitespace-nowrap font-bold align-middle bg-primary text-white shadow">
        {heading}
      </div>
      <div className="h-auto collapse-content">
        <AccordionContent>{children}</AccordionContent>
      </div>
    </div>
  );
};

export interface AccordionPaneProps {
  children?: React.ReactElement<
    React.ComponentProps<typeof AccordionPaneSegment>
  >[];
}

const AccordionPane = ({ children }: AccordionPaneProps) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 sm:w-full p-3.5">
      <div
        className="flex flex-col gap-2 rounded-none bg-primary-content"
        style={{ padding: "0.55px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionPane;
