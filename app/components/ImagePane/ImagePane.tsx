import React from "react";
import Pane, { PaneProps } from "../Pane.tsx/Pane";
import Image from "next/image";

export type ImageProps = React.ComponentProps<typeof Image>;
export type ImagePaneProps = PaneProps & ImageProps;

export type SimpleImagePaneItem = {
  src: string;
  alt: string;
  name: string;
};

const ImagePane = ({
  href,
  target,
  caption,
  className,
  ...imageProps
}: ImagePaneProps) => {
  const paneProps = { href, target, caption, className };
  return (
    <Pane {...paneProps}>
      {/* eslint-disable-next-line jsx-a11y/alt-text*/}
      <Image {...imageProps} />
    </Pane>
  );
};

export default ImagePane;
