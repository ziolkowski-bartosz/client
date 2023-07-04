import "../assets/styles/Menu.css";

import React, { useEffect, useState } from "react";

import Food from "./Food";
import { GET_ALL_FOOD_QUERY } from "../graphql/food";
import { menuImgs } from "../utils/menuImgs";
import { useQuery } from "@apollo/client";

function Menu() {
  const { data } = useQuery(GET_ALL_FOOD_QUERY);
  const [allFood, setAllFood] = useState(data?.getAllFood || []);

  useEffect(() => {
    if (data) {
      setAllFood(data.getAllFood);
    }
  }, [data]);

  return (
    <div className="menu-container">
      <h1 className="form-slogan menu-slogan">Our today menu</h1>
      <div className="food-listing">
        {allFood.map((food, index) => {
          const img = menuImgs[index % menuImgs.length];
          return <Food key={index} food={food} img={img} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
