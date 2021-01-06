import React from "react";
import { render } from "@testing-library/react";
import Beyond from "./Beyond";

describe("Beyond tests", () => {
  it("should render", () => {
    expect(render(<Beyond />)).toBeTruthy();
  });
});
