import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

interface FooterItem {
  text: string;
  href: string;
  colorClass?: string;
  icon?: React.ReactElement;
}
const items: FooterItem[] = [
  {
    text: "Member's Section",
    colorClass: "footerMenu2",
    href: "https://www.olsenpark.com/members-section/",
  },
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Directions",
    href: "directions#directions",
  },
  {
    text: "Elders",
    href: "elders#elders",
  },
  {
    text: "Deacons",
    href: "deacons#deacons",
  },
  {
    text: "Preachers",
    href: "preachers#preachers",
  },
  {
    text: "Lessons",
    href: "lessons#lessons",
  },
  {
    text: "Contact Us",
    href: "contact#contact",
  },
  {
    text: "Facebook Page",
    colorClass: "footerMenu2",
    href: "https://www.facebook.com/olsenparkchurch/",
  },
];
const Footer = () => {
  return (
    <div className="min-h-14 p-3.5 flex flex-wrap justify-center items-center gap-4 bg-base-300 text-white clear-both">
      {items.map(({ href, text, colorClass }) => {
        return (
          <Link
            className={styles[colorClass ?? "footerMenu"]}
            key={text}
            href={href}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
