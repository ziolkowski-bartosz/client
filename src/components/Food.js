import "../assets/styles/Food.css";

import React from "react";
import mockImage from "../assets/images/kluskiSlaskie.jpg";

function Food(props) {
  return (
    <div className="food-container">
      <div className="form-group">
        <h2>{props.food.name}</h2>
      </div>
      <p className="food-detail food-price">{props.food.price} DKK</p>
      <p className="food-detail food-quantity">
        Left today: {props.food.quantity}
      </p>
      <div className="form-group">
        <img src={mockImage} alt="polish food" />
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
          <button className="form-btn buy-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Food;
