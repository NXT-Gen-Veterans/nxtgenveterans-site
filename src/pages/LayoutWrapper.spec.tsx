import { render, screen } from "@testing-library/react";
import LayoutWrapper from "./LayoutWrapper";
import Home from "./Home/Home";

describe("Layout", () => {
    test("renders layout", async () => {
        render(<LayoutWrapper ComponentPage={Home} />);
        expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
    });
})