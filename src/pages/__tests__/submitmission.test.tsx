import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndexPage from "../index";
import { act } from "react-dom/test-utils";

describe("IndexPage", () => {
  it("submit button should be disabled when form payload does not pass validation", async () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(
      <IndexPage />
    );
    const inputNameElement = getByPlaceholderText("e.g. Richard Parker");
    const inputEmailElement = getByPlaceholderText("e.g. richard@gmail.com");
    const submitButton = getByText("Sign me up!");

    fireEvent.change(inputNameElement, { target: { value: "" } });
    fireEvent.change(inputEmailElement, { target: { value: "john@wick.com" } });

    expect(submitButton).toBeDisabled();
  });

  it("should submit form when values pass validation", async () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(
      <IndexPage />
    );
    const inputNameElement = getByPlaceholderText("e.g. Richard Parker");
    const inputEmailElement = getByPlaceholderText("e.g. richard@gmail.com");
    const checkbox = getByLabelText("I have read and accept", { exact: false });
    const submitButton = getByText("Sign me up!");

    fireEvent.change(inputNameElement, { target: { value: "John Wick" } });
    fireEvent.change(inputEmailElement, { target: { value: "john@wick.com" } });
    fireEvent.click(checkbox);

    expect(submitButton).not.toBeDisabled();
  });

  it("should display success component when form is submitted", async () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(
      <IndexPage />
    );

    const inputNameElement = getByPlaceholderText("e.g. Richard Parker");
    const inputEmailElement = getByPlaceholderText("e.g. richard@gmail.com");
    const submitButton = getByText("Sign me up!");
    const checkbox = getByLabelText("I have read and accept", { exact: false });

    fireEvent.change(inputNameElement, { target: { value: "John Wick" } });
    fireEvent.change(inputEmailElement, {
      target: { value: "johnwick@revenge.ru" },
    });
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("Thank you", { exact: false })).toBeInTheDocument();
    });
  });

  it("should display error when form submission failed", async () => {
    render(<IndexPage />);
  });
});
