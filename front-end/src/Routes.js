import React from "react";
import { Switch, Route } from "react-router-dom";
import Offers from "./Pages/offers";
import Catalog from "./Pages/catalog";
import Contact from "./Pages/contactUs";
import Home from "./Pages/homePage";
import Auth from "./Components/userAuthentication";
import Signup from "./Components/signup";

const Path = () => (
  <Switch>
    <Route path="/offers">
      <Offers />
    </Route>
    <Route path="/catalog">
      <Catalog />
    </Route>
    <Route path="/contact us">
      <Contact />
    </Route>
    <Route path="/auth">
      <Auth />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
  </Switch>
);

export default Path;
