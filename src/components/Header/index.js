import React from "react";
import {
  Container,
  Logo,
  Search,
  SearchInput,
  Nav,
  NavOpt,
  OptText,
  TextSmall,
  BasketContainer,
} from "./styles/header";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./styles/header.css";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ src, ...restProps }) {
  return <Logo src={src} {...restProps} />;
};

Header.Search = function HeaderSearch({ ...restProps }) {
  return (
    <Search {...restProps}>
      <SearchInput type="text" placeholder="Search" />
      <SearchIcon className="header__searchIcon" />
    </Search>
  );
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.NavOpt = function HeaderNavOpt({ children, ...restProps }) {
  return <NavOpt {...restProps}>{children}</NavOpt>;
};

Header.OptText = function HeaderOptText({ children, ...restProps }) {
  return <OptText {...restProps}>{children}</OptText>;
};

Header.TextSmall = function HeaderTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Header.BasketContainer = function HeaderBasketContainer({
  children,
  ...restProps
}) {
  return (
    <BasketContainer {...restProps}>
      <ShoppingBasketIcon />
      {children}
    </BasketContainer>
  );
};
