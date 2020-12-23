import React from "react";
import {
  Container,
  Info,
  Price,
  Rating,
  Image,
  Button,
} from "./styles/product";

export default function Product({ title, src, price, ...restProps }) {
  return (
    <Container {...restProps}>
      <Info>
        <p>{title}</p>
        <Price>
          <small>$</small>
          <strong>{price}</strong>
        </Price>
        <Rating>
          <p>⭐</p>
        </Rating>
      </Info>
      <Image src={src} />
      <Button>Add to Basket</Button>
    </Container>
  );
}
