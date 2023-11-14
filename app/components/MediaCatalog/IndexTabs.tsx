"use client";

import Link from "next/link";
import React from "react";
// @ts-ignore https://github.com/Mood-al/react-tabs-scrollable/issues/19
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

export type IndexTabsProps = {
  indices: string[];
  indexLinkPrefix?: string;
};

const navBtnStyle = {
  color: "white",
  border: "none",
  fontSize: "14px",
  background: "transparent",
  userSelect: "none",
};

const linkStyle = {
  width: "fit-content",
  border: "none",
  color: "white",
  padding: 0,
};

const IndexTabs = ({ indices, indexLinkPrefix }: IndexTabsProps) => {
  const [activeTab, setActiveTab] = React.useState(1);

  // @ts-ignore
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };

  const length = indices.length;

  return (
    <>
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        leftBtnIcon={"\u25C0"}
        rightBtnIcon={"\u25B6"}
        navBtnStyle={navBtnStyle}
        hideNavBtnsOnMobile={false}
      >
        {indices.map((index, i) => (
          <Link
            className="w-fit text-xs px-1 shadowText"
            key={index}
            href={
              indexLinkPrefix ? `/${indexLinkPrefix}/${index}` : `/${index}`
            }
            style={linkStyle}
          >
            {index}
            {i !== length && <>&nbsp;&nbsp;&nbsp;&bull;</>}
          </Link>
        ))}
      </Tabs>
    </>
  );
};

export default IndexTabs;
