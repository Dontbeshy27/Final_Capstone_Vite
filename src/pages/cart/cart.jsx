import React, { useContext } from "react";
import { ShopContext } from "../../contexts/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h1 className="text-center text-white">Your Cart Items</h1>
        </div>
      </div>
      <div className="row">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div className="col-md-4 mb-4" key={product.id}>
                <CartItem data={product} />
              </div>
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="row">
          <div className="col-md-6 text-white">
            <p>Subtotal: ${totalAmount}</p>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/pages/shop/shop")}
            >
              Continue Shopping
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                checkout();
                window.alert("You bought the newest keychain! Congratulations!");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-white">Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
