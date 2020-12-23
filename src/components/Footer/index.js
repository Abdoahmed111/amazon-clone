import React from "react";
import {
  Frame,
  Container,
  Row,
  Column,
  Link,
  Break,
  Logo,
} from "./styles/footer";

function Footer({ children, ...restProps }) {
  return (
    <Frame>
      <Container {...restProps}>{children}</Container>
    </Frame>
  );
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Logo = function FooterLogo({ src }) {
  return <Logo src={src} />;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

export default Footer;
