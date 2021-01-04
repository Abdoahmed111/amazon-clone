import React from "react";
import BodyContainer from "../containers/body";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";

export default function Home() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <BodyContainer />
      <FooterContainer />
    </React.Fragment>
  );
}
