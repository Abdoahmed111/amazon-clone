import React from "react";
import { Container, Image, Left, Right, Title } from "./styles/checkout";

export default function Checkout({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Checkout.Title = function CheckoutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Checkout.Image = function CheckoutImage({ src }) {
  return <Image src={src} />;
};

Checkout.Left = function CheckoutLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

Checkout.Right = function CheckoutRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};
