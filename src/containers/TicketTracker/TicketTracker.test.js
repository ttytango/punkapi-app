import React from "react";
import { render } from "@testing-library/react";
import TicketTracker from "./TicketTracker";

describe("TicketTracker tests", () => {
  it("should render", () => {
    expect(render(<TicketTracker />)).toBeTruthy();
  });
});
