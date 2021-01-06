import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter tests", () => {
  it("should render", () => {
    expect(render(<Counter />)).toBeTruthy();
  });
});
