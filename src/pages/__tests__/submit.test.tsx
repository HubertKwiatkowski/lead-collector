import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
// import IndexPage from "../index";
const IndexPage = require("../index");

test("first test", () => {
  render(<IndexPage />);
  const inputNameElement = screen.getByPlaceholderText("e.g. Richard Parker");
  const inputEmailElement = screen.getByPlaceholderText(
    "e.g. richard@gmail.com"
  );
  const submitButton = screen.getByText("Sign me up!");
  fireEvent.change(inputNameElement, { target: { value: "John Wick" } });
  fireEvent.change(inputEmailElement, {
    target: { value: "johnwick@revenge.com" },
  });
  fireEvent.click(submitButton);
});
