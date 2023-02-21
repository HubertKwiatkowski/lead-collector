import React from "react";
import { Gameboy } from "./Gameboy";

export const PatternRow = () => (
  <svg width="300vw" height="160px">
    <pattern
      id="pattern-row"
      x="0"
      y="30"
      width="156"
      height="200"
      patternUnits="userSpaceOnUse"
      patternTransform="scale(.70)"
    >
      <Gameboy />
    </pattern>

    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#pattern-row)"
    ></rect>
  </svg>
);
