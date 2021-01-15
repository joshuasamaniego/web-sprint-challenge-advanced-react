import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", async () => {
    //Assign:
    render(<CheckoutForm />)

    //Act:
    //  1. Get our firstName, lastName, address, city, state, and zip input fields.
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button');

    //  2. Type values into our input fields.
    userEvent.type(firstNameInput, "Joe");
    userEvent.type(lastNameInput, "Smith");
    userEvent.type(addressInput, "123 Main Street");
    userEvent.type(cityInput, "Winnemucca");
    userEvent.type(stateInput, "NV");
    userEvent.type(zipInput, "89445");
    //  3. Push the submit button.
    userEvent.click(button);
    
    //Assert:
    // Form input is on the screen.
    const newFirstNameInput = await screen.findByText(/joe/i);
    const newLastNameInput = await screen.findByText(/smith/i);
    const newAddressInput = await screen.findByText(/123 main street/i);
    const newCityInput = await screen.findByText(/winnemucca/i);
    const newStateInput = await screen.findByText(/nv/i);
    const newZipInput = await screen.findByText(/89445/i);
    expect(newFirstNameInput).toBeInTheDocument();
    expect(newLastNameInput).toBeInTheDocument();
    expect(newAddressInput).toBeInTheDocument();
    expect(newCityInput).toBeInTheDocument();
    expect(newStateInput).toBeInTheDocument();
    expect(newZipInput).toBeInTheDocument();
});
