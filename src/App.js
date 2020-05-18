import React from "react";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
