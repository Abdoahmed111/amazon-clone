import React, { useEffect, useState } from "react";
import axios from "axios";
import { Body, Product } from "../components";

export default function BodyContainer({ children, ...restProps }) {
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const result = await axios("https://fakestoreapi.com/products");
    setProducts(result.data);
  }, []);

  return (
    <Body>
      <Body.Background src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

      <Body.Row>
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            src={product.image}
            price={product.price}
            rating={Math.floor(Math.random() * (5 - 3 + 1)) + 3}
          />
        ))}
      </Body.Row>
    </Body>
  );
}
