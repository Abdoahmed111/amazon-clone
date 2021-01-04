import React from "react";
import CheckoutContainer from "../containers/checkout";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";

export default function Checkout() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <CheckoutContainer />
      <FooterContainer />
    </React.Fragment>
  );
}
