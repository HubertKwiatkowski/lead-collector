import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button, Checkbox, Link, Switch, TextField } from "nerdux-ui-system";
import { useForm } from "react-hook-form";
import { Container, OneColumn, OneRow } from "../components/";

import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  const [switchActive, setSwitchActive] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const { register, handleSubmit } = useForm();

  const getFirstTheme = switchActive
    ? styles.firstActive
    : styles.firstInactive;

  const getSecondTheme = switchActive
    ? styles.secondActive
    : styles.secondInactive;

  const isDisabled = !switchActive;

  const switchHandle = () => {
    setSwitchActive((prev) => !prev);
  };

  const nameHandle = (e) => {
    setNameValue(e.target.nameValue);
    console.log(e.target.nameValue);
  };

  const emailHandle = (e) => setEmailValue(e.target.emailValue);

  const checkboxHandle = () => {};

  const buttonHandle = () => {};

  const firstDynamicClasses = [styles.first, getFirstTheme].join(" ");

  const secondDynamicClasses = [styles.second, getSecondTheme].join(" ");

  return (
    <main className={styles.mainWrapper}>
      <aside className={firstDynamicClasses}>
        <div className={styles.gameboyColumn}>
          <OneColumn dataMove={"down"}></OneColumn>
        </div>
        <div className={styles.gameboyRow}>
          <OneRow dataMove={"left"}></OneRow>
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
          <div className={styles.switchWrapper}>
            <p>I swear, I’m a classic gameboy fan&nbsp;</p>
            <Switch onChange={switchHandle} id={"switch"} />
          </div>

          <form
            className={styles.formWrapper}
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className={styles.inputWrapper}>
              <TextField
                id={"name"}
                // {...register("name", {required: true, minLength: 4 })}
                {...register("name")}
                onChange={nameHandle}
                value={nameValue}
                type={"text"}
                label={"Name"}
                placeholder={"e.g. Richard Parker"}
                disabled={isDisabled}
              />
              <TextField
                id={"email"}
                // {...register("emailValue", {required: true })}
                {...register("email")}
                onChange={emailHandle}
                value={emailValue}
                type={"text"}
                label={"Email"}
                placeholder={"e.g. richard@gmail.com"}
                disabled={isDisabled}
              />
            </div>
            <div className={styles.policyWrapper}>
              <Checkbox
                id={"checbox"}
                {...register("checbox")}
                checked={true}
                onChange={checkboxHandle}
                disabled={isDisabled}
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
              <Button
                type="submit"
                onClick={buttonHandle}
                disabled={isDisabled}
              >
                Sign me up!
              </Button>
            </div>
          </form>
        </section>
      </Container>
      <aside className={secondDynamicClasses}>
        <div className={styles.gameboyColumn}>
          <OneColumn dataMove={"down"}></OneColumn>
          <OneColumn dataMove={"up"}></OneColumn>
          <OneColumn dataMove={"down"}></OneColumn>
          <OneColumn dataMove={"up"}></OneColumn>
        </div>
        <div className={styles.gameboyRow}>
          <OneRow dataMove={"right"}></OneRow>
        </div>
      </aside>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gameboy Classic</title>;
