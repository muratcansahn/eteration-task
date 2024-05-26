// ProductCard.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { toast } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from "./ProductCard";
import { addToCart } from "../../redux/cartSlice";

jest.mock("react-toastify", () => ({
    toast: {
        success: jest.fn(),
    },
}));

const mockStore = configureStore([]);
const product = {
    id: 1,
    name: "Test Product",
    price: 100,
    image: "test-image-url",
};

describe("ProductCard", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            cart: [],
        });

        store.dispatch = jest.fn();
    });

    test("renders product details", () => {
        render(
            <Provider store={store}>
                <Router>
                    <ProductCard product={product} />
                </Router>
            </Provider>
        );

        expect(screen.getByText(`${product.price}₺`)).toBeInTheDocument();
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByRole("img", { name: product.name })).toHaveAttribute("src", product.image);
    });

    test("adds product to cart when button is clicked", () => {
        render(
            <Provider store={store}>
                <Router>
                    <ProductCard product={product} />
                </Router>
            </Provider>
        );

        fireEvent.click(screen.getByText("Add to Cart"));

        expect(store.dispatch).toHaveBeenCalledWith(addToCart({ name: product.name, price: product.price, amount: 1 }));
        expect(toast.success).toHaveBeenCalledWith("Product added to cart");
    });

    test("navigates to product page when product name is clicked", () => {
        render(
            <Provider store={store}>
                <Router>
                    <ProductCard product={product} />
                </Router>
            </Provider>
        );

        const productNameLink = screen.getByText(product.name).closest("a");
        expect(productNameLink).toHaveAttribute("href", `/product/${product.id}`);
    });
});
