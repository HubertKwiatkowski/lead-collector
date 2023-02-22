import * as React from "react";
import { PropsWithChildren } from "react";
import * as styles from "./OneRow.module.scss";
import { PatternRow } from "../../images/PatternRow";

interface OneRowProps {
  dataMove?: "left" | "right";
}

export const OneRow = ({
  dataMove = "left",
}: PropsWithChildren<OneRowProps>) => {
  const rowMovement =
    dataMove === "left" ? styles.startLeft : styles.startRight;

  const gameboyDynamicClasses = [styles.gameboy, rowMovement].join(" ");

  return (
    <div className={gameboyDynamicClasses}>
      <PatternRow />
    </div>
  );
};
