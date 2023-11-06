import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Pane.module.css";
import classNames from "classnames";

export type PaneProps = {
  href?: string;
  target?: string;
  caption?: string;
  className?: string;
};

const Pane = ({
  href,
  target,
  caption,
  className,
  children,
}: PropsWithChildren<PaneProps>) => {
  return (
    <div className={twMerge("lg:w-1/3 md:w-1/2 sm:w-full p-3.5", className)}>
      {href && (
        <Link
          href={href}
          target={target}
          className="h-fit w-full pane overflow-hidden"
        >
          {children}
        </Link>
      )}
      {!href && (
        <div className={"h-fit w-fit pane overflow-hidden"}>{children}</div>
      )}
      {href && caption && <LinkPaneCaption text={caption} />}
      {!href && caption && <PaneCaption text={caption} />}
    </div>
  );
};

const LinkPaneCaption = ({ text }: { text: string }) => {
  return (
    <div
      className={classNames(
        "inline-block absolute mb: 0 -ml-3 -mt-8 bg-secondary text-white text-base py-2 px-6",
        styles.captionShadow
      )}
    >
      {text}
    </div>
  );
};

const PaneCaption = ({ text }: { text: string }) => {
  return (
    <div
      className={classNames(
        "inline-block absolute mb: 0 -ml-2 -mt-2 bg-base-200 text-white text-base py-2 px-6",
        styles.captionShadow
      )}
    >
      {text}
    </div>
  );
};

export default Pane;
