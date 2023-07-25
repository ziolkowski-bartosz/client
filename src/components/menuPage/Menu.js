import "../../assets/styles/Menu.css";
import "react-responsive-pagination/themes/classic.css";

import {
  GET_ALL_FOOD_QUERY,
  GET_FOOD_BY_CATEGORY_QUERY,
} from "../../graphql/food";
import React, { useEffect, useReducer } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";

import MenuHeader from "./MenuHeader";
import MenuListing from "./MenuListing";
import MenuPagination from "./MenuPagination";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_TOTAL_PAGES":
      return { ...state, totalPages: action.payload };
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "SET_CURRENT_CATEGORY":
      return { ...state, currentCategory: action.payload };
    case "SET_FOOD_TO_MANIPULATE":
      return {
        ...state,
        foodToManipulate: action.payload,
      };
    case "SET_FOOD_TO_DISPLAY":
      return { ...state, foodToDisplay: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const initialState = {
  currentPage: 1,
  totalPages: 1,
  searchInput: "",
  currentCategory: "All food",
  foodToManipulate: [],
  foodToDisplay: [],
  error: null,
};

function Menu() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const recordsPerPage = 6;
  const indexOfLastRecord = state.currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const { data: allFood = { getAllFood: [] }, loading: allFoodLoading } =
    useQuery(GET_ALL_FOOD_QUERY, {
      onCompleted: (data) => {
        dispatch({ type: "SET_FOOD_TO_MANIPULATE", payload: data.getAllFood });
      },
      onError: (error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      },
    });

  const [getFoodByCategory, { loading: foodByCategoryLoading }] = useLazyQuery(
    GET_FOOD_BY_CATEGORY_QUERY,
    {
      onCompleted: (data) => {
        dispatch({
          type: "SET_FOOD_TO_MANIPULATE",
          payload: data.getFoodByCategory,
        });
      },
      onError: (error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      },
    }
  );

  useEffect(() => {
    const filteredFood = state.foodToManipulate.filter((food) => {
      return food.name.toLowerCase().includes(state.searchInput);
    });

    const updatedTotalPages = Math.ceil(filteredFood.length / recordsPerPage);
    dispatch({ type: "SET_TOTAL_PAGES", payload: updatedTotalPages });

    const foodToDisplay = filteredFood.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    );
    dispatch({ type: "SET_FOOD_TO_DISPLAY", payload: foodToDisplay });
  }, [
    state.foodToManipulate,
    state.searchInput,
    indexOfFirstRecord,
    indexOfLastRecord,
  ]);

  return (
    <>
      <h1 className="form-slogan user-slogan">Our today menu</h1>
      <div className="menu-container">
        <MenuHeader
          state={state}
          dispatch={dispatch}
          onGetFoodByCategory={getFoodByCategory}
          allFood={allFood}
        />

        <MenuListing
          state={state}
          foodByCategoryLoading={foodByCategoryLoading}
          allFoodLoading={allFoodLoading}
        />

        <MenuPagination state={state} dispatch={dispatch} />
      </div>
    </>
  );
}

export default Menu;
