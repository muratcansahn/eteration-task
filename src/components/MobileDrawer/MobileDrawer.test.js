import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Jest DOM eklerini kullanmak için
import MobileDrawer from "./MobileDrawer";

describe("MobileDrawer component", () => {
    test('opens drawer when "Sort And Filter" button is clicked', () => {
        const { getByText, getByRole } = render(<MobileDrawer />);
        const sortAndFilterButton = screen.getByRole("button", { name: /Sort And Filter/i });

        fireEvent.click(sortAndFilterButton);

        expect(screen.getByText("Sort or Filter Products")).toBeInTheDocument();
    });

    test("closes drawer when onClose is called", () => {
        const { getByText, queryByRole } = render(<MobileDrawer />);
        const sortAndFilterButton = getByText("Sort And Filter");

        fireEvent.click(sortAndFilterButton);
        //find close button with aria label
        const closeButton = screen.getByRole("button", { name: "Close" });

        fireEvent.click(closeButton);

        expect(queryByRole("drawer")).toBeNull();
    });
});
