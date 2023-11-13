import React, { useState } from "react";
import styles from "./TopNav.module.css";
import classNames from "classnames";
import Link from "next/link";
import {
  IconDefinition,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  return (
    <>
      <nav className={styles.navigationBar}>
        <label
          htmlFor="show-menu"
          className={classNames(styles.showMenuLabel, "disable-selection")}
        >
          Menu <i className="fa fa-bars" aria-hidden="true"></i>
        </label>
        <input
          className={styles.showMenuInput}
          type="checkbox"
          id="show-menu"
          role="button"
        />
        <div className="w-full grid grid-rows-1 grid-cols-8 justify-items-stretch items-center">
          {navItems.map(({ href, text, title, beforeIcon, afterIcon }) => {
            return (
              <Link
                key={title}
                className={classNames(
                  styles.navLink,
                  "whitespace-nowrap hover:bg-neutral"
                )}
                href={href}
                title={title}
              >
                {beforeIcon && (
                  <FontAwesomeIcon className="mr-2" icon={beforeIcon} />
                )}
                {text}
                {afterIcon && (
                  <FontAwesomeIcon className="ml-2" icon={afterIcon} />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default TopNav;
