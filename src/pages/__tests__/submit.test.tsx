import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndexPage from "../index";

describe("IndexPage", () => {
  it("submits the form with valid input", async () => {
    const { getByLabelText, getByText, getByTestId } = render(<App />);
    const nameInput = getByLabelText("Name") as HTMLInputElement;
    const emailInput = getByLabelText("Email") as HTMLInputElement;
    const checkboxInput = getByLabelText(
      "I have read and accept the privacy policy"
    ) as HTMLInputElement;
    const submitButton = getByTestId("submit-button") as HTMLButtonElement;

    // Fill in the form
    userEvent.type(nameInput, "Test User");
    userEvent.type(emailInput, "test@example.com");
    fireEvent.click(checkboxInput);

    // Submit the form
    fireEvent.click(submitButton);

    // Assert that onSubmit function was called with the correct data
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        name: "Test User",
        email: "test@example.com",
        checkbox: true,
      })
    );
  });
});
