import React from "react";
import {
  Container,
  Info,
  Price,
  Rating,
  Image,
  Button,
} from "./styles/product";

export default function Product({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Product.Info = function ProductInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Product.Price = function ProductPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

Product.Rating = function ProductRating({ children, ...restProps }) {
  return <Rating {...restProps}>{children}</Rating>;
};

Product.Image = function ProductImage({ src, ...restProps }) {
  return <Image src={src} />;
};

Product.Button = function ProductButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
