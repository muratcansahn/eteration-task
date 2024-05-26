// Importing necessary libraries and tools for testing.
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector, useDispatch } from "react-redux";
import Checkout from "./Checkout";
import { selectCart, removeAllFromCart } from "../../../redux/cartSlice";
import { calcTotalPrice } from "../../../utils";
// Mocking the useSelector and useDispatch hooks
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

// Test suite for the Checkout component
describe("Checkout Component Tests", () => {
    // Test 1: Renders the component and checks if the heading is present.
    test("renders Checkout heading", () => {
        // Mocking the useSelector hook to return an empty cart
        useSelector.mockReturnValue([]);

        // Render the Checkout component to the virtual DOM.
        render(<Checkout />);

        // Find the heading element by text, and expect it to be in the document.
        const headingElement = screen.getByRole("heading", { name: /Checkout/i });

        expect(headingElement).toBeInTheDocument();
    });

    // Test 2: Checks if the total price is displayed correctly.
    test("displays correct total price", () => {
        // Mocking the useSelector hook to return a cart with items
        useSelector.mockReturnValue([
            { id: 1, name: "Item 1", price: 10 },
            { id: 2, name: "Item 2", price: 20 },
        ]);

        // Mocking the calcTotalPrice function to return a fixed value
        jest.spyOn(require("../../../utils"), "calcTotalPrice").mockReturnValue(30);

        // Render the Checkout component to the virtual DOM.
        render(<Checkout />);

        // Find the element containing the "Total Price" text
        const totalPriceElement = screen.getByText(/Total Price/i);

        // Expect the totalPriceElement to be in the document
        expect(totalPriceElement).toBeInTheDocument();

        // Find the element containing the price value
        const priceValueElement = screen.getByText(/30₺/i);

        // Expect the priceValueElement to contain the expected price value
        expect(priceValueElement.textContent).toEqual("30₺");
    });

    // Test 3: Checks if the handleEmptyCart function is called on button click.
    test("calls handleEmptyCart on button click", () => {
        // Mocking the useSelector hook to return an empty cart
        useSelector.mockReturnValue([]);

        // Mocking the useDispatch hook to return a dispatch function
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        // Render the Checkout component to the virtual DOM.
        render(<Checkout />);

        // Find the checkout button element by text.
        const checkoutButton = screen.getByRole("button", { name: /Checkout/i });

        // Simulate a button click event.
        fireEvent.click(checkoutButton);

        // Expect the handleEmptyCart function to be called.
        expect(dispatch).toHaveBeenCalledWith(removeAllFromCart());
    });
});
