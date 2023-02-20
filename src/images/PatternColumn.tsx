import React from "react";
import { Gameboy } from "./Gameboy";

export const PatternColumn = () => (
  <svg width="156px" height="200vh">
    <pattern
      id="pattern-column"
      x="30"
      y="0"
      width="156"
      height="200"
      patternUnits="userSpaceOnUse"
    >
      <Gameboy />
    </pattern>

    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#pattern-column)"
    ></rect>
  </svg>
);
