// Importing necessary libraries and tools for testing.
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";
import { addToCart, removeFromCart } from "../../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

// Mocking the useDispatch and useSelector functions
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

// Test suite for the Cart component
describe("Cart Component Tests", () => {
    // Test 1: Renders the component and checks if the heading is present.
    test("renders Cart heading", () => {
        // Mocking the useSelector function to return an empty cart array.
        useSelector.mockReturnValue([]);

        // Render the Cart component to the virtual DOM.
        render(<Cart />);

        // Find the heading element by text, and expect it to be in the document.
        const headingElement = screen.getByRole("heading", { name: /Cart\b/i });
        expect(headingElement).toBeInTheDocument();
    });

    // Test 2: Checks if the cart is empty and displays the empty cart message.
    test("displays empty cart message", () => {
        // Mocking the useSelector function to return an empty cart array.
        useSelector.mockReturnValue([]);

        // Render the Cart component to the virtual DOM.
        render(<Cart />);

        // Find the empty cart message element by text, and expect it to be in the document.
        const emptyCartElement = screen.getByText(/Cart is empty/i);
        expect(emptyCartElement).toBeInTheDocument();
    });

    // Test 3: Checks if the cart items are rendered correctly.
    test("renders cart items", () => {
        // Mocking the useSelector function to return a cart array with two items.
        useSelector.mockReturnValue([
            { name: "Item 1", price: 10, amount: 2 },
            { name: "Item 2", price: 20, amount: 1 },
        ]);

        // Render the Cart component to the virtual DOM.
        render(<Cart />);

        // Find the cart item elements by their text, and expect them to be in the document.
        const item1Element = screen.getByText(/Item 1/i);
        const item2Element = screen.getByText(/Item 2/i);
        expect(item1Element).toBeInTheDocument();
        expect(item2Element).toBeInTheDocument();
    });

    // Test 4: Checks if the handleAddItem function is called correctly.
    test("calls handleAddItem function", () => {
        // Mocking the useDispatch function.
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        // Mocking the useSelector function to return a cart array with one item.
        useSelector.mockReturnValue([{ name: "Item 1", price: 10, amount: 1 }]);

        // Render the Cart component to the virtual DOM.
        render(<Cart />);

        // Find the add button element and click it.
        const addButton = screen.getByRole("button", { name: /Add item/i });
        fireEvent.click(addButton);

        // Expect the handleAddItem function to be called with the correct arguments.
        expect(dispatch).toHaveBeenCalledWith(addToCart({ name: "Item 1", price: 10, amount: 1 }));
    });

    // Test 5: Checks if the handleRemoveItem function is called correctly when item amount is greater than 1.
    test("calls handleRemoveItem function with amount > 1", () => {
        // Mocking the useDispatch function.
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        // Mocking the useSelector function to return a cart array with one item.
        useSelector.mockReturnValue([{ name: "Item 1", price: 10, amount: 2 }]);

        // Render the Cart component to the virtual DOM.
        render(<Cart />);

        // Find the remove button element and click it.
        const removeButton = screen.getByRole("button", { name: /Remove item/i });
        fireEvent.click(removeButton);

        // Expect the handleRemoveItem function to be called with the correct arguments.
        expect(dispatch).toHaveBeenCalledWith(addToCart({ name: "Item 1", price: 10, amount: -1 }));
    });

    // Test 6: Checks if the handleRemoveItem function is called correctly when item amount is 1.
    test("calls handleRemoveItem function with amount = 1", () => {
        // Mocking the useDispatch function.
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        // Mocking the useSelector function to return a cart array with one item.
        useSelector.mockReturnValue([{ name: "Item 1", price: 10, amount: 1 }]);

        // Render the Cart component to the virtual DOM.
        render(<Cart />);

        // Find the remove button element and click it.
        const removeButton = screen.getByRole("button", { name: /Remove item/i });
        fireEvent.click(removeButton);

        // Expect the handleRemoveItem function to be called with the correct arguments.
        expect(dispatch).toHaveBeenCalledWith(removeFromCart({ name: "Item 1" }));
    });
});
