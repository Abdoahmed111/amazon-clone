import React, { useEffect } from "react";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import HeaderContainer from "./containers/header";
import FooterContainer from "./containers/footer";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Payment from "./pages/payment";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./stateProvider/stateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          // the user is logged out
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <HeaderContainer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/payment" exact component={Payment} />
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
