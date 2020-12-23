import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import HeaderContainer from "./containers/header";
import FooterContainer from "./containers/footer";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <HeaderContainer />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
