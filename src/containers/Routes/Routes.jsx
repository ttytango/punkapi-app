import React from "react";
import { Router } from "@reach/router";
import Home from "../Home";
import Beers from "../Beers";

const Routes = () => {
  return (
        <Router>
            <Home path="/" >Home</Home>
            <Beers path="/beers">Beers</Beers>
        </Router>
  );
};

export default Routes;
