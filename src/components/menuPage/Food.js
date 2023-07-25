import "../../assets/styles/Food.css";

import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { AuthContext } from "../../context/authContext";
import { CREATE_ORDER_ITEM_MUTATION } from "../../graphql/orderItem";
import { Fade } from "react-awesome-reveal";
import { GET_SINGLE_FOOD_QUERY } from "../../graphql/food";
import { GET_USER_ORDERS_QUERY } from "../../graphql/user";

function Food(props) {
  const { user } = useContext(AuthContext);
  const [isFoodQuantityAnimated, setIsFoodQuantityAnimated] = useState(false);

  const [addItemToCart, { error: addItemToCartError }] = useMutation(
    CREATE_ORDER_ITEM_MUTATION,
    {
      variables: {
        foodId: props.food.id,
      },
      onCompleted: () => {
        refetchFood();
        refetchUserOrders();
        handleAnimateFoodQuantity();
      },
      onError: () => {
        refetchFood();
      },
    }
  );

  const handleAnimateFoodQuantity = () => {
    setIsFoodQuantityAnimated(true);
    setTimeout(() => {
      setIsFoodQuantityAnimated(false);
    }, 500);
  };

  const { refetch: refetchFood } = useQuery(GET_SINGLE_FOOD_QUERY, {
    variables: { foodId: props.food.id },
  });

  const { refetch: refetchUserOrders } = useQuery(GET_USER_ORDERS_QUERY, {
    variables: { userId: user?.id },
    skip: user?.id === undefined,
  });

  const isOutOfStock = props.food.quantity === 0;

  return (
    <Fade cascade triggerOnce direction="up">
      <div className={`food-container ${isOutOfStock ? "out-of-stock" : ""}`}>
        <h2>{props.food.name}</h2>

        <div className="form-group food-overview">
          <p className="food-detail">{props.food.price} kr</p>
          <p
            className={`food-detail food-quantity ${
              isFoodQuantityAnimated ? "animate" : ""
            }`}
          >
            Left today: {props.food.quantity}
          </p>
          <p className="food-detail">{props.food.category.name}</p>
        </div>

        <div className="form-group">
          <img src={props.img} alt="polish food" />
          <div className="food-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit minima velit aliquid ipsa Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit minima velit aliquid
              ipsa
            </p>
            {(addItemToCartError && (
              <p className="form-warning">{addItemToCartError.message}</p>
            )) ||
              (isOutOfStock && <p className="form-warning">Out of stock</p>)}

            <button
              onClick={() => addItemToCart()}
              className="form-btn"
              disabled={isOutOfStock || !user}
            >
              {!user ? "Login first" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Food;
