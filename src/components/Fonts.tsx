import { Global } from "@emotion/react";
import React from "react";

export default function Fonts() {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'Luckybones';
          src: url('fonts/Luckybones-Bold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Shlomo Stam';
          src: url('fonts/ShlomoStam.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Shlomo Light Bold';
          src: url('fonts/ShlomoLightBold.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
    `}
    />
  );
}
