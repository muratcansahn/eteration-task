import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Layout from "./Layout";
import { screen } from "@testing-library/react";

describe("Layout component", () => {
    test("renders children and sidebar components", () => {
        // Mock children
        const ChildComponent = () => <div>Child Component</div>;

        // Render Layout component with ChildComponent inside Provider with Redux store
        const { getByText } = render(
            <Provider store={store}>
                <Layout>
                    <ChildComponent />
                </Layout>
            </Provider>
        );

        // Check if ChildComponent is rendered
        expect(getByText("Child Component")).toBeInTheDocument();

        // Check if Cart and Checkout components are rendered in the sidebar
        expect(getByText("Cart")).toBeInTheDocument();
        const headingElement = screen.getByRole("heading", { name: /Checkout/i });

        expect(headingElement).toBeInTheDocument();
    });
});
