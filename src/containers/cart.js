import React from "react";
import { CheckoutProduct } from "../components";
import { useStateValue } from "../stateProvider/stateProvider";

export default function CartContainer() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      {basket.map((item) => (
        <CheckoutProduct>
          <CheckoutProduct.Image src={item.src} />
          <CheckoutProduct.Info>
            <CheckoutProduct.Title>{item.title}</CheckoutProduct.Title>
            <CheckoutProduct.Price>
              <small>$</small>
              <strong>{item.price}</strong>
            </CheckoutProduct.Price>
            <CheckoutProduct.Rating rating={item.rating} />
            <CheckoutProduct.Button id={item.id}>
              Remove from Basket
            </CheckoutProduct.Button>
          </CheckoutProduct.Info>
        </CheckoutProduct>
      ))}
    </React.Fragment>
  );
}
