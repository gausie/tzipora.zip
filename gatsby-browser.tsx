import { GatsbyBrowser } from "gatsby";
import React from "react";

import Fonts from "./src/components/Fonts";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => (
  <>
    <Fonts />
    {element}
  </>
);
