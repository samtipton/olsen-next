import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterItem {
  text: string;
  href: string;
  colorClass?: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
}
const items: FooterItem[] = [
  {
    text: "Member's Section",
    colorClass: "footerMenu2",
    href: "https://www.olsenpark.com/members-section/",
    iconLeft: <FontAwesomeIcon className="mr-2" icon={faUser} />,
  },
  {
    text: "Home",
    href: "/",
    iconLeft: <FontAwesomeIcon className="mr-2" icon={faHome} />,
  },
  {
    text: "Directions",
    href: "/directions#directions",
  },
  {
    text: "Elders",
    href: "/elders#elders",
  },
  {
    text: "Deacons",
    href: "/deacons#deacons",
  },
  {
    text: "Preachers",
    href: "/preachers#preachers",
  },
  {
    text: "Lessons",
    href: "/lessons#lessons",
  },
  {
    text: "Contact Us",
    href: "/contact#contact",
  },
  {
    text: "Facebook Page",
    colorClass: "footerMenu2",
    href: "https://www.facebook.com/olsenparkchurch/",
    iconRight: <FontAwesomeIcon className="ml-2" icon={faFacebookSquare} />,
  },
];
const Footer = () => {
  return (
    <div className="min-h-14 p-3.5 flex flex-wrap justify-center items-center gap-4 bg-base-300 text-white clear-both">
      {items.map(({ href, text, iconLeft, iconRight, colorClass }) => {
        return (
          <Link
            className={styles[colorClass ?? "footerMenu"]}
            key={text}
            href={href}
          >
            {iconLeft && iconLeft}
            {text}
            {iconRight && iconRight}
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
