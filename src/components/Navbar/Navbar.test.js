import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AutoComplete, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { selectCart } from "../../redux/cartSlice";
import { setSearchQuery } from "../../redux/searchQuerySlice";
import useIsMobile from "../../hooks/useIsMobile";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock("../../hooks/useIsMobile", () => jest.fn());

describe("Navbar Component Tests", () => {
    beforeEach(() => {
        useSelector.mockClear();
        useDispatch.mockClear();
        useIsMobile.mockClear();
    });

    test("renders Navbar component", () => {
        useSelector.mockReturnValue([]);
        useDispatch.mockReturnValue(jest.fn());
        useIsMobile.mockReturnValue(false);

        render(
            <Router>
                <Navbar />
            </Router>
        );

        const navbarElement = screen.getByRole("navigation");
        expect(navbarElement).toBeInTheDocument();
    });

    test("renders company title", () => {
        useSelector.mockReturnValue([]);
        useDispatch.mockReturnValue(jest.fn());
        useIsMobile.mockReturnValue(false);

        render(
            <Router>
                <Navbar />
            </Router>
        );

        const companyTitleElement = screen.getByText(/eteration/i);
        expect(companyTitleElement).toBeInTheDocument();
    });

    test("renders AutoComplete component on desktop", () => {
        useSelector.mockReturnValue([]);
        useDispatch.mockReturnValue(jest.fn());
        useIsMobile.mockReturnValue(false);

        render(
            <Router>
                <Navbar />
            </Router>
        );

        const autoCompleteElement = screen.getByRole("combobox");
        expect(autoCompleteElement).toBeInTheDocument();
    });

    test("does not render AutoComplete component on mobile", () => {
        useSelector.mockReturnValue([]);
        useDispatch.mockReturnValue(jest.fn());
        useIsMobile.mockReturnValue(true);

        render(
            <Router>
                <Navbar />
            </Router>
        );

        const autoCompleteElement = screen.queryByRole("combobox");
        expect(autoCompleteElement).toBeNull();
    });

    test("renders cart icon and total price", () => {
        const mockCart = [
            { id: 1, name: "Product 1", price: 10 },
            { id: 2, name: "Product 2", price: 20 },
        ];
        useSelector.mockReturnValue(mockCart);
        useDispatch.mockReturnValue(jest.fn());
        useIsMobile.mockReturnValue(false);

        render(
            <Router>
                <Navbar />
            </Router>
        );

        const cartIconElement = screen.getByRole("img", { name: /shopping-cart/i });
        const totalPriceElement = screen.getByRole("paragraph", { name: /total-price/i });

        expect(cartIconElement).toBeInTheDocument();
        expect(totalPriceElement).toBeInTheDocument();
    });

    test("renders user icon and name", () => {
        useSelector.mockReturnValue([]);
        useDispatch.mockReturnValue(jest.fn());
        useIsMobile.mockReturnValue(false);

        render(
            <Router>
                <Navbar />
            </Router>
        );

        const userIconElement = screen.getByRole("img", { name: /user/i });
        const userNameElement = screen.getByText(/Murat/i);

        expect(userIconElement).toBeInTheDocument();
        expect(userNameElement).toBeInTheDocument();
    });
});
