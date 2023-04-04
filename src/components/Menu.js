import "../assets/styles/Menu.css";

import Food from "./Food";
import { GET_ALL_FOOD_QUERY } from "../graphql/food";
import React from "react";
import { useQuery } from "@apollo/client";
import { useState } from "react";

function Menu() {
  const [allFood, setAllFood] = useState([]);

  useQuery(GET_ALL_FOOD_QUERY, {
    onCompleted: (data) => {
      setAllFood(data.getAllFood);
    },
  });

  return (
    <div className="menu-container">
      <h1 className="form-slogan menu-slogan">Our today menu</h1>
      <div className="food-listing">
        {allFood.map((food, index) => {
          return <Food key={index} food={food} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
