import "../../assets/styles/Cart.css";

import {
  REMOVE_ORDER_MUTATION,
  UPDATE_ORDER_MUTATION,
} from "../../graphql/order";
import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { AuthContext } from "../../context/authContext";
import DeliveryOptions from "./DeliveryOptions";
import { GET_SINGLE_FOOD_QUERY } from "../../graphql/food";
import { GET_USER_ORDERS_QUERY } from "../../graphql/user";
import OrderItem from "./OrderItem";
import PaymentStatus from "./PaymentStatus";
import { REMOVE_ORDER_ITEM_MUTATION } from "../../graphql/orderItem";

function Cart() {
  const { user } = useContext(AuthContext);
  const [removedOrderIds, setRemovedOrderIds] = useState([]);
  const [removedOrderItemIds, setRemovedOrderItemIds] = useState([]);
  const [orderErrors, setOrderErrors] = useState({});

  const {
    data: userOrders = { getUserOrders: [] },
    refetch: refetchUserOrders,
  } = useQuery(GET_USER_ORDERS_QUERY, {
    variables: { userId: user?.id },
    skip: user?.id === undefined,
  });

  const { refetch: refetchFood } = useQuery(GET_SINGLE_FOOD_QUERY, {
    skip: true,
  });

  const [updateOrder] = useMutation(UPDATE_ORDER_MUTATION, {
    onCompleted: () => {
      refetchUserOrders();
    },
  });

  const [removeOrderItem] = useMutation(REMOVE_ORDER_ITEM_MUTATION, {
    onCompleted: (data) => {
      setRemovedOrderItemIds((prevIds) => [
        ...prevIds,
        data.removeOrderItem.id,
      ]);
      setTimeout(() => {
        refetchFood({
          foodId: data.removeOrderItem.food.id,
        });
        refetchUserOrders();
      }, 300);
    },
  });

  const [removeOrder] = useMutation(REMOVE_ORDER_MUTATION, {
    onCompleted: (data) => {
      setRemovedOrderIds((prevIds) => [...prevIds, data.removeOrder.orderId]);
      setTimeout(() => {
        data.removeOrder.deletedFoodIds.forEach((foodId) => {
          refetchFood({
            foodId: foodId,
          });
        });
        refetchUserOrders();
      }, 300);
    },
  });

  return (
    <div className="cart-container">
      <h1 className="form-slogan user-slogan">
        {!user || !userOrders.getUserOrders.length ? "No orders" : "My orders"}
      </h1>
      <div className="cart-listing">
        {userOrders.getUserOrders.map((order) => (
          <div
            key={order.id}
            className={`order-container ${
              removedOrderIds.includes(order.id) ? "removed" : ""
            }`}
          >
            <p>
              Order nr {order.id}{" "}
              {order.status === "DRAFT"
                ? ""
                : "upd. on " +
                  new Date(parseInt(order.updatedAt, 10)).toLocaleString()}
            </p>
            {order.orderItems.map((orderItem, idx) => (
              <OrderItem
                className={`order-item ${
                  removedOrderItemIds.includes(orderItem.id) ? "removed" : ""
                }`}
                index={idx}
                key={orderItem.id}
                orderItem={orderItem}
                orderId={order.id}
                orderStatus={order.status}
                onRemoveOrderItem={removeOrderItem}
                setOrderErrors={setOrderErrors}
              />
            ))}
            <DeliveryOptions
              order={order}
              onUpdateOrder={updateOrder}
              setOrderErrors={setOrderErrors}
            />
            <PaymentStatus
              order={order}
              orderErrors={orderErrors}
              onUpdateOrder={updateOrder}
              onRemoveOrder={removeOrder}
              setOrderErrors={setOrderErrors}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
