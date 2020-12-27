import React from "react";
import { Container, Gift, Title, Input, Button } from "./styles/subtotal";

export default function Subtotal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Subtotal.Title = function SubtotalTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Subtotal.Gift = function SubtotalGift({ children, ...restProps }) {
  return <Gift {...restProps}>{children}</Gift>;
};

Subtotal.Input = function SubtotalInput({ ...restProps }) {
  return <Input {...restProps}></Input>;
};

Subtotal.Button = function SubtotalButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
