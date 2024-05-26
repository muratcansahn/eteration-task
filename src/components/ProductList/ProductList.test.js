import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductList from "./ProductList";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
// Mock data for testing
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
];

// Mock useIsMobile hook
jest.mock("../../hooks/useIsMobile", () => () => false);

// Test suite for the ProductList component
describe("ProductList Component Tests", () => {
    // Test 1: Renders the component and checks if the product cards are present.
    test("renders product cards", () => {
        // Render the ProductList component with mock products and a mock store.
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/"]}>
                    <ProductList products={products} />
                </MemoryRouter>
            </Provider>
        );

        // Find the product card elements by their text, and expect them to be in the document.
        const product1Element = screen.getByText(/Product 1/i);
        const product2Element = screen.getByText(/Product 2/i);
        const product3Element = screen.getByText(/Product 3/i);
        expect(product1Element).toBeInTheDocument();
        expect(product2Element).toBeInTheDocument();
        expect(product3Element).toBeInTheDocument();
    });
});
