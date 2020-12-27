import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
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

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
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

Header.OptText = function HeaderOptText({ children, to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <OptText {...restProps}>{children}</OptText>
    </ReactRouterLink>
  );
};

Header.TextSmall = function HeaderTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Header.BasketContainer = function HeaderBasketContainer({
  children,
  to,
  ...restProps
}) {
  return (
    <ReactRouterLink to={to}>
      <BasketContainer {...restProps}>
        <ShoppingBasketIcon />
        {children}
      </BasketContainer>
    </ReactRouterLink>
  );
};
