import React from "react";
import { render } from "@testing-library/react";
import Tickets from "./Tickets";

describe("Tickets tests", () => {
  it("should render", () => {
    expect(render(<Tickets />)).toBeTruthy();
  });
});
