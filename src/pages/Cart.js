import "../assets/styles/Cart.css";

import { AuthContext } from "../context/authContext";
import React from "react";
import { useContext } from "react";

function Cart() {
  const { user } = useContext(AuthContext);

  return <div className="cart-container">{user?.orders || "No items"}</div>;
}

export default Cart;
