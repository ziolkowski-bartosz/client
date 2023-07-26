import React from "react";
import { UPDATE_ORDER_ITEM_QUANTITY_MUTATION } from "../../graphql/orderItem";
import { useMutation } from "@apollo/client";

const OrderItem = (props) => {
  
  const [updateOrderItemQuantity] = useMutation(
    UPDATE_ORDER_ITEM_QUANTITY_MUTATION,
    {
      onError: (error) => {
        props.setOrderErrors((prevErrors) => ({
          ...prevErrors,
          [props.order.id]: error.message,
        }));
      },
    }
  );

  return (
    <div className={props.className}>
      <p>
        {props.index + 1}. {props.orderItem.food.name} x{" "}
        {props.orderItem.quantity}
      </p>
      <div
        className={`inline-flex shadow-sm ${
          props.orderStatus === "DRAFT"
            ? "order-item-buttons"
            : "order-item-buttons hidden"
        }`}
      >
        <button
          className="px-4 rounded-l-lg"
          onClick={() =>
            updateOrderItemQuantity({
              variables: {
                orderItemId: props.orderItem.id,
                toIncreaseQuantity: true,
              },
            })
          }
          disabled={props.orderItem.food.quantity === 0}
        >
          +
        </button>
        <button
          className="px-4"
          onClick={() =>
            updateOrderItemQuantity({
              variables: {
                orderItemId: props.orderItem.id,
                toIncreaseQuantity: false,
              },
            })
          }
        >
          -
        </button>
        <button
          className="px-2 rounded-r-md"
          onClick={() =>
            props.onRemoveOrderItem({
              variables: { orderItemId: props.orderItem.id },
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
