import React from "react";
import { Header } from "../components";
import { auth } from "../firebase/firebase";
import { useStateValue } from "../stateProvider/stateProvider";

export default function HeaderContainer() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Header>
      <Header.Logo
        to="/"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <Header.Search />
      <Header.Nav>
        <Header.NavOpt onClick={handleAuthentication}>
          <Header.TextSmall>
            {user ? user.displayName : `Hello Guest`}
          </Header.TextSmall>
          <Header.OptText to={!user && "/login"}>
            {user ? `Sign Out` : `Sign In`}
          </Header.OptText>
        </Header.NavOpt>
        <Header.NavOpt>
          <Header.TextSmall>Returns</Header.TextSmall>
          <Header.OptText>& Orders</Header.OptText>
        </Header.NavOpt>
        <Header.NavOpt>
          <Header.TextSmall>Your</Header.TextSmall>
          <Header.OptText>Prime</Header.OptText>
        </Header.NavOpt>
        <Header.BasketContainer to="/checkout">
          <Header.OptText lastItem>{basket.length}</Header.OptText>
        </Header.BasketContainer>
      </Header.Nav>
    </Header>
  );
}
