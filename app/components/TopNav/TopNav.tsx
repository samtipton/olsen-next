"use client";

import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import {
  IconDefinition,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type TopNavItem = {
  text: string;
  href: string;
  title: string;
  beforeIcon?: IconDefinition;
  afterIcon?: IconDefinition;
};

const navItems: TopNavItem[] = [
  {
    text: "Home",
    href: "/",
    title: "Home Page",
    beforeIcon: faHome,
  },
  {
    text: "Directions",
    href: "/directions#directions",
    title: "Directions to our building and times of services.",
  },
  {
    text: "Elders",
    href: "/elders#elders",
    title: "The elders of Olsen Park.",
  },
  {
    text: "Deacons",
    href: "/deacons#deacons",
    title: "The deacons of Olsen Park.",
  },
  {
    text: "Preachers",
    href: "/preachers#preachers",
    title: "The preachers of Olsen Park.",
  },
  {
    text: "Lessons",
    href: "/lessons#lessons",
    title: "Index of sermons, articles, Bible classes, and other materials.",
  },
  {
    text: "Members",
    href: "https://www.olsenpark.com/members-section/",
    title: "Resources for our members.",
    beforeIcon: faUser,
  },
  {
    text: "Contact Us",
    href: "/contact#contact",
    title: "Contact Page.",
  },
];
const TopNav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const navComponents = navItems.map(
    ({ href, text, title, beforeIcon, afterIcon }) => {
      return (
        <Link
          key={title}
          className={classNames(
            "h-[50px] whitespace-nowrap bg-primary hover:bg-neutral text-white font-bold leading-[50px] text-center shadowText",
            menuVisible && "border-t-2 border-white lg:border-0"
          )}
          onClick={() => setMenuVisible(false)}
          href={href}
          title={title}
        >
          {beforeIcon && <FontAwesomeIcon className="mr-2" icon={beforeIcon} />}
          {text}
          {afterIcon && <FontAwesomeIcon className="ml-2" icon={afterIcon} />}
        </Link>
      );
    }
  );

  return (
    <>
      <nav>
        <label
          htmlFor="show-menu"
          className="block lg:hidden h-[50px] leading-[50px] bg-primary text-white font-bold text-center md:text-right px-8 shadowText select-none"
        >
          Menu <FontAwesomeIcon icon={faBars} />
        </label>
        <input
          onClick={() => {
            setMenuVisible((prev) => !prev);
          }}
          className="hidden"
          type="checkbox"
          id="show-menu"
          role="button"
        />
        {/* horizontal menu */}
        <div className="w-full hidden lg:grid grid-rows-1 grid-cols-8 justify-items-stretch items-center">
          {...navComponents}
        </div>
        {/* vertical menu */}
        <div
          className={`w-full ${
            menuVisible ? "grid" : "hidden"
          } lg:hidden grid-rows-8 grid-cols-1 justify-items-stretch items-center`}
        >
          {...navComponents}
        </div>
      </nav>
    </>
  );
};

export default TopNav;
