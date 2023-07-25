import Food from "./Food";
import React from "react";
import { menuImgs } from "../../utils/menuImgs";

function MenuListing(props) {
  const { state, foodByCategoryLoading, allFoodLoading } = props;
  return (
    <div className="food-listing">
      {foodByCategoryLoading || allFoodLoading ? (
        <h1 className="form-slogan info-listing-slogan">Loading...</h1>
      ) : state.error ? (
        <h1 className="form-slogan info-listing-slogan">{state.error}</h1>
      ) : state.foodToDisplay.length > 0 ? (
        state.foodToDisplay.map((food, index) => {
          const img = menuImgs[index % menuImgs.length];
          return <Food key={index} food={food} img={img} />;
        })
      ) : (
        <h1 className="form-slogan info-listing-slogan">No food</h1>
      )}
    </div>
  );
}

export default MenuListing;
