import React from "react";
import { Container, Frame, Background, Row } from "./styles/body";

export default function Body({ children, ...restProps }) {
  return (
    <Frame>
      <Container {...restProps}>{children}</Container>
    </Frame>
  );
}

Body.Background = function BodyBackground({ src, ...restProps }) {
  return <Background src={src} {...restProps} />;
};

Body.Row = function BodyRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
