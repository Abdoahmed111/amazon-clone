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
import { useStateValue } from "../../stateProvider/stateProvider";

export default function Product({
  id,
  title,
  src,
  price,
  rating,
  ...restProps
}) {
  const ratings = renderRatingStars(rating).map((star) => <p>{star}</p>);

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        src: src,
        price: price,
        rating: rating,
      },
    });
  };

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
      <Button onClick={addToBasket}>Add to Basket</Button>
    </Container>
  );
}
