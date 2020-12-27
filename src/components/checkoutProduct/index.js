import React from "react";
import { renderRatingStars } from "../../helpers/rating_star";
import { useStateValue } from "../../stateProvider/stateProvider";
import {
  Container,
  Info,
  Image,
  Title,
  Price,
  Rating,
  Button,
} from "./styles/checkoutProduct";

export default function CheckoutProduct({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

CheckoutProduct.Image = function CheckoutProductImage({ src }) {
  return <Image src={src} />;
};

CheckoutProduct.Info = function CheckoutProductInfo({
  children,
  ...restProps
}) {
  return <Info {...restProps}>{children}</Info>;
};

CheckoutProduct.Title = function CheckoutProductTitle({ children }) {
  return <Title>{children}</Title>;
};

CheckoutProduct.Price = function CheckoutProductPrice({
  children,
  price,
  ...restProps
}) {
  return <Price {...restProps}>{children}</Price>;
};

CheckoutProduct.Rating = function CheckoutProductRating({ rating }) {
  const stars = renderRatingStars(rating).map((star) => <p>{star}</p>);
  return <Rating>{stars}</Rating>;
};

CheckoutProduct.Button = function CheckoutProductButton({ children, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //   Remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return <Button onClick={removeFromBasket}>{children}</Button>;
};
