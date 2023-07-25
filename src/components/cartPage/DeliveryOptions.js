import React from "react";

const DeliveryOptions = ({ order, onUpdateOrder, setOrderErrors }) => {
  
  return (
    <div className="cart-delivery-container">
      <p>Delivery ?</p>
      <div>
        {[true, false].map((deliveryOption) => (
          <button
            key={deliveryOption ? "yes" : "no"}
            className={`bg-gray-300 text-gray-800 font-bold py-1 px-4 ${
              order.delivery === deliveryOption
                ? "delivery-option-selected"
                : ""
            }`}
            onClick={() =>
              onUpdateOrder({
                variables: {
                  orderId: order.id,
                  delivery: deliveryOption,
                  status: order.status,
                },
                onError: (error) => {
                  setOrderErrors((prevErrors) => ({
                    ...prevErrors,
                    [order.id]: error.message,
                  }));
                },
              })
            }
            disabled={order.status !== "DRAFT"}
          >
            {deliveryOption ? "Yes" : "No"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeliveryOptions;
