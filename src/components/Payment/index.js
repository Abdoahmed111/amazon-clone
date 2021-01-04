import React from "react";
import {
  Container,
  Section,
  Title,
  Address,
  Items,
  Details,
} from "./styles/payment";

export default function Payment({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Payment.Section = function PaymentSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Payment.Title = function PaymentTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Payment.Address = function PaymentAddress({ children, ...restProps }) {
  return <Address {...restProps}>{children}</Address>;
};

Payment.Items = function PaymentItems({ children, ...restProps }) {
  return <Items {...restProps}>{children}</Items>;
};

Payment.Details = function PaymentDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};
