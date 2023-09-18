import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import videoBg from '../../assets/videoBg.mp4'

export function Shop () {
  return (
    <div className="shop">
       <video id="background-video" src={videoBg} autoPlay loop muted />
      <div className="shopTitle">
        <h1>Pubg Clan Shop</h1>
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