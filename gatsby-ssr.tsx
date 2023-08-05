import { GatsbySSR } from "gatsby";
import React from "react";

import Fonts from "./src/components/Fonts";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Luckybones-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="luckybones"
    />,
    <link
      rel="preload"
      href="/fonts/ShlomoStam.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="shlomostam"
    />,
    <link
      rel="preload"
      href="/fonts/ShlomoLightBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="shlomolightbold"
    />,
  ]);
};

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
  <>
    <Fonts />
    {element}
  </>
);
