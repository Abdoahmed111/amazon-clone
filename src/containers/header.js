import React from "react";
import { Header } from "../components";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Logo src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      <Header.Search />
      <Header.Nav>
        <Header.NavOpt>
          <Header.TextSmall>Hello Guest</Header.TextSmall>
          <Header.OptText>Sign In</Header.OptText>
        </Header.NavOpt>
        <Header.NavOpt>
          <Header.TextSmall>Returns</Header.TextSmall>
          <Header.OptText>& Orders</Header.OptText>
        </Header.NavOpt>
        <Header.NavOpt>
          <Header.TextSmall>Your</Header.TextSmall>
          <Header.OptText>Prime</Header.OptText>
        </Header.NavOpt>
        <Header.BasketContainer>
          <Header.OptText lastItem>0</Header.OptText>
        </Header.BasketContainer>
      </Header.Nav>
    </Header>
  );
}
