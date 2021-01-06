import React from "react";
import { Router } from "@reach/router";
import Home from "../Home";
import Beers from "../Beers";
import Beyond from "../Beyond";
import TicketTracker from "../TicketTracker";

import Login from "../Login";
import NotFound from "../../components/NotFound";
import PrivateRoutes from "../PrivateRoutes";

const Routes = () => {
  return (
        <Router>
            <Home path="/" >Home</Home>
            <Beers path="/beers">Beers</Beers>
            <TicketTracker path="/ticket-tracker" />
            <Login path="/login" />
            <PrivateRoutes path="beyond" >
                <Beyond path="beyond" />
            </PrivateRoutes>
            <NotFound default />
        </Router>
  );
};

export default Routes;
