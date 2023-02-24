import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button, Checkbox, Link, Switch, TextField } from "nerdux-ui-system";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, OneColumn, OneRow } from "../components/";

import * as styles from "./index.module.scss";

interface IFormInputs {
  name: string;
  email: string;
  checkbox: boolean;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name should be at least 2 signs long"),
  email: yup
    .string()
    .required("Email address is required")
    .email("Please, enter a valid email address"),
  checkbox: yup.boolean().oneOf([true], "Please, accept our privacy policy"),
});

const IndexPage: React.FC<PageProps> = () => {
  const [switchActive, setSwitchActive] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      checkbox: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

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
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.inputWrapper}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id={"name"}
                    type={"text"}
                    label={"Name"}
                    placeholder={"e.g. Richard Parker"}
                    disabled={isDisabled}
                    error={errors.name?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id={"email"}
                    type={"text"}
                    label={"Email"}
                    placeholder={"e.g. richard@gmail.com"}
                    disabled={isDisabled}
                    error={errors.email?.message}
                  />
                )}
              />
            </div>
            <div className={styles.policyWrapper}>
              <Controller
                name="checkbox"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    id={"checkbox"}
                    name={"checkbox"}
                    value={""}
                    label={"I have read and accept the"}
                    checked={false}
                    disabled={isDisabled}
                    error={errors.checkbox?.message}
                  />
                )}
              />
              <Link
                to={
                  "https://nerdux.nerdbord.io/?path=/story/inputs-button--button"
                }
                target={"_blank"}
                disabled={isDisabled}
              >
                &nbsp; privacy policy
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
