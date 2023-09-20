import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";


export function Shop () {
  return (
    <div className="shop text-white">
    
      <div className="shopTitle">
        <h1>PUBG SHOP</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;