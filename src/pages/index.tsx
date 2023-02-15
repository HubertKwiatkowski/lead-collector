import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container/Container";
import { Button, Checkbox, Link, Switch, TextField } from "nerdux-ui-system";

import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Container>
        <header className={styles.titleHeader}>
          <h1>
            Join the Gameboy <br />
            <span>waiting list</span>
          </h1>
          <div>
            <p>I swear, I’m a classic gameboy fan</p>
            <Switch></Switch>
          </div>

          <form action="">
            <TextField
              type={"text"}
              label={"Name"}
              placeholder={"e.g. Richard Parker"}
            ></TextField>
            <TextField
              type={"text"}
              label={"Email"}
              placeholder={"e.g. richard@gmail.com"}
            ></TextField>
            <div>
              <Checkbox></Checkbox>
              <p>I have read and accept the a</p>
              <Link
                to={
                  "https://nerdux.nerdbord.io/?path=/story/inputs-button--button"
                }
                target={"_blank"}
              >
                privacy policy
              </Link>
            </div>
            <Button>Sign me up!</Button>
          </form>
        </header>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gameboy Classic</title>;
