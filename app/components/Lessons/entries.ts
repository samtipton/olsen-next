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
    href: "sermons/2024",
    title: "An archive of sermons preached at Olsen Park church of Christ.",
  },
  {
    caption: "Bulletins",
    src: "/images/bulletins5.png",
    href: "bulletins/2023",
    title: "An archive of bulletins published by Olsen Park church of Christ.",
  },
  {
    caption: "Gospel Meetings",
    src: "/images/meetings2.png",
    href: "meetings/2023",
    title: "An archive of Gospel Meetings of the Olsen Park church of Christ.",
  },
  {
    caption: "Summer Bible Studies",
    src: "/images/sbs2.png",
    href: "sbs/2023",
    title:
      "An archive of Summer Bible Studies conducted by the Olsen Park church of Christ.",
  },
  {
    caption: "Bible Classes",
    src: "/images/bible-classes2.png",
    href: "classes",
    title: "An archive of Bible classes of the Olsen Park church of Christ.",
  },
  {
    caption: "Annual Singings",
    src: "/images/annual-singing4.png",
    href: "singing/2023",
    title:
      "An archive of annual singings conducted by the Olsen Park church of Christ.",
  },
  {
    caption: "Special Studies",
    src: "/images/special-studies2.png",
    href: "studies",
    title:
      "An archive of special studies conducted by the Olsen Park church of Christ.",
  },
];
