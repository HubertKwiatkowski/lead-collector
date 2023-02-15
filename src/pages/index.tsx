import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container/Container";
import { Button, Checkbox, Link, Switch, TextField } from "nerdux-ui-system";

import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  const switchHandle = () => {};

  const textboxHandle = () => {};

  const checkboxHandle = () => {};

  const buttonHandle = () => {};

  return (
    <main>
      <Container>
        <aside></aside>

        <header className={styles.titleHeader}>
          <h1>
            Join the Gameboy <br />
            <span>waiting list</span>
          </h1>
        </header>
        <section>
          <div>
            <p>I swear, I’m a classic gameboy fan</p>
            <Switch onChange={switchHandle} id={"switch"}></Switch>
          </div>

          <form action="">
            <TextField
              id={"name"}
              name={"name"}
              onChange={textboxHandle}
              value={""}
              type={"text"}
              label={"Name"}
              placeholder={"e.g. Richard Parker"}
            ></TextField>
            <TextField
              id={"email"}
              name={"email"}
              onChange={textboxHandle}
              value={""}
              type={"text"}
              label={"Email"}
              placeholder={"e.g. richard@gmail.com"}
            ></TextField>
            <div>
              <Checkbox
                id={"checbox"}
                name={"checbox"}
                checked={false}
                onChange={checkboxHandle}
              ></Checkbox>
              <p>I have read and accept the</p>
              <Link
                to={
                  "https://nerdux.nerdbord.io/?path=/story/inputs-button--button"
                }
                target={"_blank"}
              >
                privacy policy
              </Link>
            </div>
            <Button onClick={buttonHandle}>Sign me up!</Button>
          </form>
        </section>

        <aside></aside>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gameboy Classic</title>;
