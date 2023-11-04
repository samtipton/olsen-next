import React, { useState } from "react";
import styles from "./TopNav.module.css";
import classNames from "classnames";
import Link from "next/link";

type TopNavItem = {
  text: string;
  href: string;
  title: string;
};

const navItems: TopNavItem[] = [
  {
    text: "Home",
    href: "/",
    title: "Home Page",
  },
  {
    text: "Directions",
    href: "directions#directions",
    title: "Directions to our building and times of services.",
  },
  {
    text: "Elders",
    href: "elders#elders",
    title: "The elders of Olsen Park.",
  },
  {
    text: "Deacons",
    href: "deacons#deacons",
    title: "The deacons of Olsen Park.",
  },
  {
    text: "Preachers",
    href: "preachers#preachers",
    title: "The preachers of Olsen Park.",
  },
  {
    text: "Lessons",
    href: "lessons#lessons",
    title: "Index of sermons, articles, Bible classes, and other materials.",
  },
  {
    text: "Members",
    href: "https://www.olsenpark.com/members-section/",
    title: "Resources for our members.",
  },
  {
    text: "Contact Us",
    href: "contact#contact",
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
          {navItems.map(({ href, text, title }) => {
            return (
              // <li key={title}>
              <Link
                key={title}
                className={classNames(
                  styles.navLink,
                  "whitespace-nowrap hover:bg-neutral"
                )}
                href={href}
                title={title}
              >
                {text}
              </Link>
              // </li>
            );
          })}
          {/* <li>
              <Link
                className={classNames(
                  styles.navLink,
                  "hover:rounded-none focus:rounded-none"
                )}
                href="/"
                title="Home Page"
                style={{ outline: "none" }}
              >
                <span style={{ fontSize: 24 }}>
                  <i className="fa fa-home" aria-hidden="true"></i>
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  styles.navLink,
                  "hover:rounded-none focus:rounded-none"
                )}
                href="directions"
                title="Directions to our building and times of services."
                style={{ outline: "none" }}
              >
                Directions
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  styles.navLink,
                  "hover:rounded-none focus:rounded-none"
                )}
                href="elders#elders"
                title="The elders of Olsen Park."
                style={{ outline: "none" }}
              >
                Elders
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  styles.navLink,
                  "hover:rounded-none focus:rounded-none"
                )}
                href="deacons#deacons"
                title="The deacons of Olsen Park."
                style={{ outline: "none" }}
              >
                Deacons
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  styles.navLink,
                  "hover:rounded-none focus:rounded-none"
                )}
                href="preachers#preachers"
                title="The preachers of Olsen Park."
                style={{ outline: "none" }}
              >
                Preachers
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  styles.navLink,
                  "hover:rounded-none focus:rounded-none"
                )}
                href="lessons#lessons"
                title="Index of sermons, articles, Bible classes, and other materials."
                style={{ outline: "none" }}
              >
                Lessons
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  styles.navLink,
                  "hover:rounded-none focus:rounded-none"
                )}
                href="https://www.olsenpark.com/members-section/"
                title="Resources for our members."
                style={{ outline: "none" }}
              >
                <span style={{ fontSize: "24" }}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
                Members
              </Link>
            </li>
            <li>
              <Link
                className={classNames(
                  styles.navLink,
                  "hover:rounded-none focus:rounded-none"
                )}
                href="contact#contact"
                title="Contact page."
                style={{ outline: "none" }}
              >
                Contact Us
              </Link>
            </li> */}
          {/* </ul> */}
        </div>
      </nav>
    </>
  );
};

export default TopNav;
