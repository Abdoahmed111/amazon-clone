import React from "react";
import { Checkout, Subtotal } from "../components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateProvider/stateProvider";
import { getBasketTotal } from "../stateProvider/reducer";
import CartContainer from "./cart";

export default function CheckoutContainer() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log("This is the totalPrice >>> ", getBasketTotal(basket));
  // Total Price of the Basket
  return (
    <Checkout>
      <Checkout.Left>
        <Checkout.Image src="https://s3.envato.com/files/106489822/Big_Sale_Ad_Banners_Images/728x90.jpg" />
        {user && <h2>Hello , {user.displayName}</h2>}
        <Checkout.Title>Your Shopping Basket</Checkout.Title>
        <CartContainer />
      </Checkout.Left>
      <Checkout.Right>
        <Subtotal>
          <CurrencyFormat
            renderText={(value) => (
              <React.Fragment>
                <Subtotal.Title>
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </Subtotal.Title>
                <Subtotal.Gift>
                  <Subtotal.Input type="checkbox" /> This order contains a gift
                </Subtotal.Gift>
              </React.Fragment>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeprator={true}
            prefix={"$"}
          />
          <Subtotal.Button>Porceed to Checkout</Subtotal.Button>
        </Subtotal>
      </Checkout.Right>
    </Checkout>
  );
}
