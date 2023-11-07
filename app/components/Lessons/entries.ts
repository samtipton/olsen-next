export type LessonPane = {
  caption: string;
  src: string;
  href: string;
  title?: string;
};

export const lessons: LessonPane[] = [
  {
    caption: "Sermons",
    src: "/images/sermons5.png",
    href: "Sermons23.1.html#sermons",
    title: "An archive of sermons preached at Olsen Park church of Christ.",
  },
  {
    caption: "Bulletins",
    src: "/images/bulletins5.png",
    href: "Bulletins23.1.html#bulletins",
    title: "An archive of bulletins published by Olsen Park church of Christ.",
  },
  {
    caption: "Gospel Meetings",
    src: "/images/meetings2.png",
    href: "Meetings.html#meetings",
    title: "An archive of Gospel Meetings of the Olsen Park church of Christ.",
  },
  {
    caption: "Summer Bible Studies",
    src: "/images/sbs2.png",
    href: "sbs/sbs23.html#sbs",
    title:
      "An archive of Summer Bible Studies conducted by the Olsen Park church of Christ.",
  },
  {
    caption: "Bible Classes",
    src: "/images/bible-classes2.png",
    href: "Classes.html#bible-classes",
    title: "An archive of Bible classes of the Olsen Park church of Christ.",
  },
  {
    caption: "Annual Singings",
    src: "/images/annual-singing4.png",
    href: "Singing23.html#annual-singing",
    title:
      "An archive of annual singings conducted by the Olsen Park church of Christ.",
  },
  {
    caption: "Special Studies",
    src: "/images/special-studies2.png",
    href: "SpecialStudies.html#special-studies",
    title:
      "An archive of special studies conducted by the Olsen Park church of Christ.",
  },
];
