import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
    test("renders layout", async () => {
        render(<Layout />);
        expect(screen.getByRole("heading", { name: "Layout" })).toBeInTheDocument();
    });
})