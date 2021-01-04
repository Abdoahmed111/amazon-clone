/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link } from "react-router-dom";
import { CheckoutProduct, Payment } from "../components";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { useStateValue } from "../stateProvider/stateProvider";

export default function PaymentPage() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <HeaderContainer />
      <Payment>
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items)</Link>
        </h1>

        <Payment.Section>
          <Payment.Title>Delivery Address</Payment.Title>
          <Payment.Address>
            <p>{user && user.email}</p>
            <p>123 React Lane</p>
            <p>Giza, Egypt</p>
          </Payment.Address>
        </Payment.Section>

        <Payment.Section>
          <Payment.Title>Review items and delivery</Payment.Title>
          <Payment.Items>
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
          </Payment.Items>
        </Payment.Section>

        <Payment.Section>
          <Payment.Title>Payment Method</Payment.Title>
          <Payment.Details></Payment.Details>
        </Payment.Section>
      </Payment>
      <FooterContainer />
    </React.Fragment>
  );
}
