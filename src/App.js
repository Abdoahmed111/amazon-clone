import React from "react";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import HeaderContainer from "./containers/header";
import FooterContainer from "./containers/footer";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <HeaderContainer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
