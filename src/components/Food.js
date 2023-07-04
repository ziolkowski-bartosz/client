import "../assets/styles/Food.css";

import React, { useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { AuthContext } from "../context/authContext";
import { CREATE_ORDER_ITEM_MUTATION } from "../graphql/orderItem";
import { GET_SINGLE_FOOD_QUERY } from "../graphql/food";
import { GET_USER_ORDERS_QUERY } from "../graphql/user";

function Food(props) {
  const { user } = useContext(AuthContext);

  const [addItemToCart] = useMutation(CREATE_ORDER_ITEM_MUTATION, {
    variables: {
      foodId: props.food.id,
    },
    onCompleted: () => {
      refetchFood();
      refetchUserOrders();
    },
  });

  const { refetch: refetchFood } = useQuery(GET_SINGLE_FOOD_QUERY, {
    variables: { foodId: props.food.id },
  });

  const { refetch: refetchUserOrders } = useQuery(GET_USER_ORDERS_QUERY, {
    variables: { userId: user?.id },
  });

  const isOutOfStock = props.food.quantity === 0;

  return (
    <div className={`food-container ${isOutOfStock ? "out-of-stock" : ""}`}>
      <div className="form-group">
        <h2>{props.food.name}</h2>
      </div>
      <p className="food-detail food-price">{props.food.price} DKK</p>
      <p className="food-detail food-quantity">
        Left today: {props.food.quantity}
      </p>
      <div className="form-group">
        <img src={props.img} alt="polish food" />
        <div className="food-info">
          <p className="food-detail food-category">
            {props.food.category.name}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit minima velit aliquid ipsa Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reprehenderit minima velit aliquid
            ipsa
          </p>
          <button
            onClick={() => addItemToCart()}
            className="form-btn buy-btn"
            disabled={isOutOfStock || !user}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Food;
