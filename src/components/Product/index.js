import React from "react";
import {
  Container,
  Info,
  Price,
  Rating,
  Image,
  Button,
} from "./styles/product";
import { renderRatingStars } from "../../helpers/rating_star";

export default function Product({ title, src, price, rating, ...restProps }) {
  const ratings = renderRatingStars(rating).map((star) => <p>{star}</p>);
  return (
    <Container>
      <Info>
        <p>{title}</p>
        <Price>
          <small>$</small>
          <strong>{price}</strong>
        </Price>
        <Rating>{ratings}</Rating>
      </Info>
      <Image src={src} />
      <Button>Add to Basket</Button>
    </Container>
  );
}
