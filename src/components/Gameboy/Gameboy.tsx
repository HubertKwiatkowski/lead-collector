import * as React from "react";
import { PropsWithChildren } from "react";
import * as styles from "./Gameboy.module.scss";
import { Gameboys } from "../../images";

interface OneColumnProps {
  dataMove?: "up" | "down";
}

export const OneColumn = ({
  dataMove = "up",
}: PropsWithChildren<OneColumnProps>) => {
  const columnMvement = dataMove === "up" ? styles.startUp : styles.startDown;

  const gameboyDynamicClasses = [styles.gameboy, columnMvement].join(" ");

  return (
    <div className={gameboyDynamicClasses}>
      <Gameboys />
      <Gameboys />
    </div>
  );
};
