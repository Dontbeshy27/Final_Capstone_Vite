import React, { useContext } from "react";
import { ShopContext } from "../../contexts/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem text-white">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler d-flex ">
          <button className="btn btn-outline-secondary  custom-button"onClick={() => removeFromCart(id)}> - </button>
          <input className="form-control "
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="btn btn-outline-secondary custom-button" onClick={() => addToCart(id)}> + </button>
          
        </div>
      </div>
    </div>
  );
};
