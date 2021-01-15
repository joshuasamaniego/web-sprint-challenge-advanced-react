import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    //  2. Type values into our input fields.
    userEvent.type(firstNameInput, "Joe");
    userEvent.type(lastNameInput, "Smith");
    userEvent.type(emailInput, "joesmith@gmail.com");
    userEvent.type(messageInput, "I am awesome!");

    //  3. Push the submit button.
    const buttonInput = screen.getByRole('button');
    userEvent.click(buttonInput);
    
    //Assert:
    // Form input is on the screen.
    const newFirstNameInput = await screen.findByText(/joe/i);
    const newLastNameInput = await screen.findByText(/smith/i);
    expect(newFirstNameInput).toBeInTheDocument();
    expect(newLastNameInput).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {});
