import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import "bootstrap/dist/css/bootstrap.min.css";



export function Shop() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h1 className="text-center text-white">PUBG SHOP</h1>
        </div>
      </div>

      <div className="row">
        {PRODUCTS.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
