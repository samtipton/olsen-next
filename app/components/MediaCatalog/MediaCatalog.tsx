import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faFilePowerpoint } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import IndexTabs from "./IndexTabs";

// todo better name
export type MediaType = "video" | "audio" | "ppt" | "outline" | "link" | "pdf";

export type MediaEntry = {
  title: string;
  author: string;
  date: string;
  primaryContentType: MediaType;
  content: string;
  extraContent: Partial<Record<MediaType, string>>;
};

export type MediaCatalogProps = {
  catalogTitle: string;
  catalogEntries: MediaEntry[];
  catalogYearStart: number;
  catalogYearEnd: number;
  helpText: string;
  indexLinkPrefix: string;
};

const MediaCatalog = ({
  catalogTitle,
  catalogEntries,
  catalogYearStart,
  catalogYearEnd,
  indexLinkPrefix,
  helpText,
}: PropsWithChildren<MediaCatalogProps>) => {
  const yearRange = Array.from(
    { length: catalogYearEnd - catalogYearStart + 1 },
    (v, k) => k + catalogYearStart + 0
  )
    .reverse()
    .map((num) => {
      return `${num}`;
    });

  return (
    <div className="w-full h-[36rem] border-[#888478] bg-[#989386] hoverShadow md:rounded-md pt-1.5 px-4 pb-4">
      <div className="text-xl text-center font-bold shadowText text-white mb-1.5">
        {catalogTitle}
      </div>
      <div className="separator-bar opacity-50 mb-3" />
      <IndexTabs indices={yearRange} indexLinkPrefix={indexLinkPrefix} />
      <p className="text-center leading-5 whitespace-nowrap color-[#3c3a35] mb-1.5">
        {helpText}
        <br />
        Click on an icon to download files.
        <FontAwesomeIcon className="pl-2" icon={faDownload} />
      </p>

      <div className="w-full h-[25rem] overflow-y-scroll mb-16">
        {catalogEntries.map((entry) => {
          return (
            <div key={`${entry.title}-${entry.date}`}>
              <div className="w-full bg-[#79756b] min-h-min p-4">
                <div className="flex text-sm text-white shadowText w-full">
                  {/* <!-- Player Entry --> */}
                  <div className="grow text-start">
                    <Link
                      className="font-bold hover:opacity-50"
                      href={entry.content}
                      title={entry.title}
                      style={{ textDecoration: "none" }}
                    >
                      {entry.title}
                    </Link>
                  </div>
                  <ContentButtons content={entry.extraContent} />
                </div>
              </div>
              {/* Author and Date/time */}
              <div className="bg-[#a29d92] text-[#3c3a35] px-4 py-2">
                <p className="text-start text-sm">{entry.author}</p>
                <p className="text-right text-sm">{entry.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

type ContentButtonsProps = {
  content: Partial<Record<MediaType, string>>;
};
const ContentButtons = ({ content }: ContentButtonsProps) => {
  return (
    <div className="flex gap-4">
      {/* Fullscreen Video Entry */}
      {content?.video && (
        <Link href={content.video} title="Open video in new window">
          <FontAwesomeIcon icon={faFilm} className="hover:scale-125" />
        </Link>
      )}

      {/* Audio Entry */}
      {content?.audio && (
        <Link href={content.audio} title="Download audio file">
          <FontAwesomeIcon icon={faHeadphones} className="hover:scale-125" />
        </Link>
      )}

      {/* {Pdf Entry} */}
      {content?.pdf && (
        <Link href={content.pdf} title="Download pdf file">
          <FontAwesomeIcon icon={faFilePdf} className="hover:scale-125" />
        </Link>
      )}

      {/* Powerpoint Entry */}
      {content?.ppt && (
        <Link href={content.ppt} title="Download PPTX file">
          <FontAwesomeIcon
            icon={faFilePowerpoint}
            className="hover:scale-125"
          />
        </Link>
      )}

      {/* Sermon Outline Entry */}
      {content.outline && (
        <Link href={content.outline} title="View sermon outline">
          <FontAwesomeIcon icon={faFileLines} className="hover:scale-125" />
        </Link>
      )}
    </div>
  );
};

export default MediaCatalog;
