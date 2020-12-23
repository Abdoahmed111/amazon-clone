import React from "react";
import BodyContainer from "./containers/body";
import HeaderContainer from "./containers/header";
import { GlobalStyles } from "./global-styles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <HeaderContainer />
      <BodyContainer />
    </React.Fragment>
  );
}

export default App;
