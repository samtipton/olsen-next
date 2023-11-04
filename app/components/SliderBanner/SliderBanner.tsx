import React from "react";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";
import Slideshow from "./Slideshow";
import styles from "./SliderBanner.module.css";
import classNames from "classnames";

export interface SlideImage {
  href: string;
  title: string;
  src: string;
  alt: string;
}

const slides: SlideImage[] = [
  {
    href: "/",
    title: "Home Page",
    src: "/main01.png",
    alt: "Welcome to Olsen Park church of Christ.",
  },
  {
    href: "/directions",
    title: "Sunday Morning Adult Class",
    src: "/main05.png",
    alt: "Sunday Morning Adult Class",
  },
  {
    href: "/cal/Calendar1#cal",
    title: "Annual Singing",
    src: "/main02.png",
    alt: "Annual Singing",
  },
  {
    href: "/directions",
    title: "Wednesday Night Adult Class",
    src: "/main14.png",
    alt: "Wednesday Night Adult Class",
  },
  {
    href: "/debate",
    title: "Debate on the AD 70 Doctrine",
    src: "/main03.png",
    alt: "Debate on the AD 70 Doctrine",
  },
  {
    href: "/directions",
    title: "Monday Morning Ladies Class",
    src: "/main04.png",
    alt: "Monday Morning Ladies Class",
  },
  {
    href: "specialstudies/Burleson-Pope-Discussion",
    title: "Burleson-Pope Discussion",
    src: "/discussion6.png",
    alt: "Burleson-Pope Discussion",
  },
];

const SliderBanner = () => {
  return (
    <Slideshow>
      {slides.map(({ href, src, alt, title }, index) => (
        <div key={index} className={styles.sliderImage}>
          <Link className="w-full h-full" href={href} title={title}>
            <Image
              priority
              loading="eager"
              width={1024}
              height={310}
              src={src}
              alt={alt}
            />
          </Link>
        </div>
      ))}
    </Slideshow>
  );
};

export default SliderBanner;
