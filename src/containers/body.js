import React from "react";
import { Body, Product } from "../components";

export default function BodyContainer({ children, ...restProps }) {
  return (
    <Body>
      <Body.Background src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

      <Body.Row>
        <Product>
          <Product.Info>
            <p>The Lean startup</p>
            <Product.Price>
              <small>$</small>
              <strong>19.99</strong>
            </Product.Price>
            <Product.Rating>
              <p>⭐</p>
            </Product.Rating>
          </Product.Info>
          <Product.Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <Product.Button>Add to Basket</Product.Button>
        </Product>

        <Product>
          <Product.Info>
            <p>The Lean startup</p>
            <Product.Price>
              <small>$</small>
              <strong>19.99</strong>
            </Product.Price>
            <Product.Rating>
              <p>⭐</p>
            </Product.Rating>
          </Product.Info>
          <Product.Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <Product.Button>Add to Basket</Product.Button>
        </Product>
      </Body.Row>

      <Body.Row>
        <Product>
          <Product.Info>
            <p>The Lean startup</p>
            <Product.Price>
              <small>$</small>
              <strong>19.99</strong>
            </Product.Price>
            <Product.Rating>
              <p>⭐</p>
            </Product.Rating>
          </Product.Info>
          <Product.Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <Product.Button>Add to Basket</Product.Button>
        </Product>

        <Product>
          <Product.Info>
            <p>The Lean startup</p>
            <Product.Price>
              <small>$</small>
              <strong>19.99</strong>
            </Product.Price>
            <Product.Rating>
              <p>⭐</p>
            </Product.Rating>
          </Product.Info>
          <Product.Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <Product.Button>Add to Basket</Product.Button>
        </Product>
        <Product>
          <Product.Info>
            <p>The Lean startup</p>
            <Product.Price>
              <small>$</small>
              <strong>19.99</strong>
            </Product.Price>
            <Product.Rating>
              <p>⭐</p>
            </Product.Rating>
          </Product.Info>
          <Product.Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <Product.Button>Add to Basket</Product.Button>
        </Product>
      </Body.Row>

      <Body.Row>
        <Product>
          <Product.Info>
            <p>The Lean startup</p>
            <Product.Price>
              <small>$</small>
              <strong>19.99</strong>
            </Product.Price>
            <Product.Rating>
              <p>⭐</p>
            </Product.Rating>
          </Product.Info>
          <Product.Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <Product.Button>Add to Basket</Product.Button>
        </Product>
      </Body.Row>
    </Body>
  );
}
