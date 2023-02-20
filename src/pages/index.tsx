import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container, OneColumn } from "../components/";
import { Button, Checkbox, Link, Switch, TextField } from "nerdux-ui-system";
import { PatternColumn } from "../images/PatternColumn";

import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  const switchHandle = () => {};

  const textboxHandle = () => {};

  const checkboxHandle = () => {};

  const buttonHandle = () => {};

  const leftSideDynamicClasses = [
    styles.leftSide,
    styles.leftSideActive,
    // styles.leftSideInactive,
  ].join(" ");

  const rightSideDynamicClasses = [
    styles.rightSide,
    styles.rightSideActive,
    // styles.rightSideInactive,
  ].join(" ");

  return (
    <main className={styles.mainWrapper}>
      <aside className={leftSideDynamicClasses}>
        <div>
          <OneColumn dataMove={"down"}></OneColumn>
        </div>
      </aside>
      <Container>
        <header className={styles.titleHeader}>
          <h1>
            Join the Gameboy <br />
            <span>waiting list</span>
          </h1>
        </header>
        <section>
          <div className={styles.switchStyling}>
            <p>I swear, I’m a classic gameboy fan&nbsp;</p>
            <Switch onChange={switchHandle} id={"switch"} />
          </div>

          <form className={styles.formWrapper} action="">
            <div className={styles.inputWrapper}>
              <TextField
                id={"name"}
                name={"name"}
                onChange={textboxHandle}
                value={""}
                type={"text"}
                label={"Name"}
                placeholder={"e.g. Richard Parker"}
                disabled={true}
              />
              <TextField
                id={"email"}
                name={"email"}
                onChange={textboxHandle}
                value={""}
                type={"text"}
                label={"Email"}
                placeholder={"e.g. richard@gmail.com"}
                disabled={true}
              />
            </div>
            <div className={styles.policyWrapper}>
              <Checkbox
                id={"checbox"}
                name={"checbox"}
                checked={true}
                onChange={checkboxHandle}
                disabled={true}
              />
              <p>I have read and accept the &nbsp;</p>
              <Link
                to={
                  "https://nerdux.nerdbord.io/?path=/story/inputs-button--button"
                }
                target={"_blank"}
              >
                privacy policy
              </Link>
            </div>
            <div className={styles.buttonWrapper}>
              <Button onClick={buttonHandle} disabled={true}>
                Sign me up!
              </Button>
            </div>
          </form>
        </section>
      </Container>
      <aside className={rightSideDynamicClasses}>
        <div>
          <OneColumn dataMove={"down"}></OneColumn>
          <OneColumn dataMove={"up"}></OneColumn>
          <OneColumn dataMove={"down"}></OneColumn>
          <OneColumn dataMove={"up"}></OneColumn>
        </div>
      </aside>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gameboy Classic</title>;
