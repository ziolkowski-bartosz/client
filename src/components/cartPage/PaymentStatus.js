import React from "react";

const PaymentStatus = (props) => {
  
  return (
    <div className="cart-payment-container">
      <p>
        {props.order.status === "DRAFT"
          ? `TO PAY: ${props.order.amount}kr ${
              props.order.delivery ? "(inc. delivery)" : ""
            }`
          : `Summary: paid ${props.order.amount}kr`}
      </p>
      
      {props.orderErrors[props.order.id] && (
        <p className="form-warning">{props.orderErrors[props.order.id]}</p>
      )}
      
      {props.order.status !== "DRAFT" && (
        <p className="order-status">Status: {props.order.status}</p>
      )}
      
      {props.order.status === "DRAFT" && (
        <>
          <button
            className="form-btn"
            onClick={() =>
              props.onUpdateOrder({
                variables: {
                  orderId: props.order.id,
                  delivery: props.order.delivery,
                  status: "RECEIVED",
                },
                onError: (error) => {
                  props.setOrderErrors((prevErrors) => ({
                    ...prevErrors,
                    [props.order.id]: error.message,
                  }));
                },
              })
            }
          >
            Purchase order
          </button>
          <button
            className="form-btn"
            onClick={() =>
              props.onRemoveOrder({
                variables: { orderId: props.order.id },
                onError: (error) => {
                  props.setOrderErrors((prevErrors) => ({
                    ...prevErrors,
                    [props.order.id]: error.message,
                  }));
                },
              })
            }
          >
            Remove order
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentStatus;
