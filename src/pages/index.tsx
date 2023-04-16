import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button, Checkbox, Link, Switch, TextField } from "nerdux-ui-system";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, OneColumn, OneRow } from "../components/";
import { Error } from "../icons/Error";
import { Arrow } from "../icons/Arrow";

import * as styles from "./index.module.scss";

const secretToken = "secret_token";

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

  const [showInContainer, setContainer] = useState("showForm");
  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

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
    setErrorMessage("");
    setUserName(() => data.name);
    setUserEmail(() => data.email);
    fetch("http://139.59.154.199:49160/api/v1/leads", {
      method: "POST",
      headers: {
        Authorization: secretToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
        } else if (response.status >= 400 && response.status < 500) {
          setContainer("showError");
        }
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  const getFirstTheme = switchActive
    ? styles.firstActive
    : styles.firstInactive;

  const getSecondTheme = switchActive
    ? styles.secondActive
    : styles.secondInactive;

  const isDisabled = !switchActive;

  const nameError = switchActive ? errors.name?.message : "";

  const emailError = switchActive ? errors.email?.message : "";

  const checkboxError = switchActive ? errors.checkbox?.message : "";

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
      {showInContainer === "showForm" && (
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
              <Switch onChange={switchHandle} id="switch" />
            </div>
            {errorMessage !== "" && (
              <div className={styles.errorMessage}>
                <Error />
                <p>{errorMessage}</p>
              </div>
            )}
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
                      error={nameError}
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
                      error={emailError}
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
                      label={
                        <span className={styles.policyText}>
                          I have read and accept the&nbsp;
                          <Link
                            to={
                              "https://nerdux.nerdbord.io/?path=/story/inputs-button--button"
                            }
                            target={"_blank"}
                            disabled={isDisabled}
                          >
                            privacy policy
                          </Link>
                        </span>
                      }
                      checked={false}
                      disabled={isDisabled}
                      error={checkboxError}
                    />
                  )}
                />
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
      )}
      {showInContainer === "formSubmitted" && (
        <Container>
          <div className={styles.thankYouWrapper}>
            <h3>Thank you {userName}, for signing up!</h3>
            <p>
              On the provided email [{userEmail}], you will receive a message
              when the Gameboy launches!
            </p>
          </div>
        </Container>
      )}
      {showInContainer === "showError" && (
        <Container>
          <div className={styles.thankYouWrapper}>
            <h3>Something went wrong.</h3>
            <div>
              <Button
                disabled={false}
                type={"button"}
                icon={<Arrow />}
                variant={"primary"}
                isLoading={false}
                onClick={() => {
                  setContainer("showForm");
                }}
              >
                Try again
              </Button>
            </div>
          </div>
        </Container>
      )}

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
