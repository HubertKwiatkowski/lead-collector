import React from "react";
import { PropsWithChildren } from "react";
import * as styles from "./Gameboy.module.scss";

export const Gameboy = (props: PropsWithChildren<{}>) => (
  <div className={styles.gameboy}>{props.children}</div>
);
