import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders hello world heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /hello world/i });
    expect(heading).toBeInTheDocument();
  });
});
