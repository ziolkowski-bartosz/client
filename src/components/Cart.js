import "../assets/styles/Cart.css";

import {
  REMOVE_ORDER_ITEM_MUTATION,
  UPDATE_ORDER_ITEM_QUANTITY_MUTATION,
} from "../graphql/orderItem";
import { REMOVE_ORDER_MUTATION, UPDATE_ORDER_MUTATION } from "../graphql/order";
import React, { useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { AuthContext } from "../context/authContext";
import { GET_USER_ORDERS_QUERY } from "../graphql/user";

function Cart() {
  const { user } = useContext(AuthContext);

  const { data, refetch: refetchUserOrders } = useQuery(GET_USER_ORDERS_QUERY, {
    variables: { userId: user?.id },
  });

  const [updateOrder] = useMutation(UPDATE_ORDER_MUTATION);
  const [updateOrderItemQuantity] = useMutation(
    UPDATE_ORDER_ITEM_QUANTITY_MUTATION
  );
  const [removeOrderItem] = useMutation(REMOVE_ORDER_ITEM_MUTATION);
  const [removeOrder] = useMutation(REMOVE_ORDER_MUTATION);

  const handleUpdateOrder = async (orderId, delivery, status) => {
    await updateOrder({
      variables: {
        orderId,
        delivery,
        status,
      },
      onCompleted: () => {
        refetchUserOrders();
      },
    });
  };

  const handleIncreaseCartItemQuantity = async (
    orderId,
    orderItemId,
    toIncreaseQuantity
  ) => {
    await updateOrderItemQuantity({
      variables: {
        orderId,
        orderItemId,
        toIncreaseQuantity,
      },
    });
  };

  const handleRemoveItemFromCart = async (orderId, orderItemId) => {
    await removeOrderItem({
      variables: {
        orderId,
        orderItemId,
      },
      onCompleted: () => {
        refetchUserOrders();
      },
    });
  };

  const handleRemoveOrder = async (orderId) => {
    await removeOrder({
      variables: {
        orderId,
      },
      onCompleted: () => {
        refetchUserOrders();
      },
    });
  };

  const cartSlogan =
    !user || !data || !data.getUserOrders.length ? "No orders" : "My orders";

  return (
    <div className="cart-container">
      <h1>{cartSlogan}</h1>
      {!user || !data ? (
        <></>
      ) : (
        <div className="cart-listing">
          {data.getUserOrders.map((order) => (
            <div key={order.id} className="order-container">
              <p>
                Order nr: {order.id}{" "}
                {order.status === "DRAFT"
                  ? ""
                  : "(updated: " +
                    new Date(parseInt(order.updatedAt, 10)).toLocaleString()}
              </p>
              {order.orderItems.map((orderItem, idx) => (
                <div className="order-item" key={orderItem.id}>
                  <p>
                    {idx + 1}. {orderItem.food.name} - {orderItem.food.price}kr
                    x {orderItem.quantity}{" "}
                  </p>
                  <div
                    className={`inline-flex rounded-md shadow-sm ${
                      order.status === "DRAFT"
                        ? "order-item-buttons"
                        : "order-item-buttons hidden"
                    }`}
                    role="group"
                  >
                    <button
                      className="px-4 rounded-l-lg"
                      onClick={() =>
                        handleIncreaseCartItemQuantity(
                          order.id,
                          orderItem.id,
                          true
                        )
                      }
                      disabled={orderItem.food.quantity === 0}
                    >
                      +
                    </button>
                    <button
                      className="px-4"
                      onClick={() =>
                        handleIncreaseCartItemQuantity(
                          order.id,
                          orderItem.id,
                          false
                        )
                      }
                    >
                      -
                    </button>
                    <button
                      className="px-2 rounded-r-md"
                      onClick={() =>
                        handleRemoveItemFromCart(order.id, orderItem.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-delivery-container">
                <p>Delivery?</p>
                {[true, false].map((deliveryOption) => (
                  <button
                    key={deliveryOption ? "yes" : "no"}
                    className={`bg-gray-300 text-gray-800 font-bold py-2 px-4 ${
                      order.delivery === deliveryOption ? "active-delivery" : ""
                    }`}
                    onClick={() =>
                      handleUpdateOrder(order.id, deliveryOption, order.status)
                    }
                    disabled={order.status !== "DRAFT"}
                  >
                    {deliveryOption ? "Yes" : "No"}
                  </button>
                ))}
              </div>

              <div className="cart-payment-container">
                <p>
                  {order.status === "DRAFT"
                    ? `TO PAY: ${order.amount}kr ${
                        order.delivery ? "(inc. delivery)" : ""
                      }`
                    : `Summary: paid ${order.amount}kr`}
                </p>
                <button
                  className="form-btn buy-btn"
                  onClick={() =>
                    handleUpdateOrder(order.id, order.delivery, "RECEIVED")
                  }
                  disabled={order.status !== "DRAFT"}
                >
                  {order.status === "DRAFT"
                    ? "Purchase order"
                    : "Status: " + order.status}
                </button>
                <button
                  className="form-btn buy-btn"
                  onClick={() => handleRemoveOrder(order.id)}
                  style={{
                    display: order.status === "DRAFT" ? "inline-block" : "none",
                  }}
                >
                  Remove order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
