import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
    test("render a button", () => {
        render(<Button text="Click Me" />);
        const buttonElement = screen.getByText("Click Me");
        expect(buttonElement).toBeInTheDocument();
    });

    test("calls the onClick handler when clicked", () => {
        const handleClick = jest.fn();
        render(<Button text="Click Me" onClick={handleClick} />);
        const buttonElement = screen.getByText("Click Me");
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("does not call onClick handler when no onClick prop is passed", () => {
        const handleClick = jest.fn();
        render(<Button text="Click Me" />);
        const buttonElement = screen.getByText("Click Me");
        fireEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
    });
});
