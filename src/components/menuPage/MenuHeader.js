import { Button, Dropdown } from "flowbite-react";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import { GET_ALL_CATEGORIES_QUERY } from "../../graphql/category";
import React from "react";
import { useQuery } from "@apollo/client";

function MenuHeader(props) {
  const { state, dispatch, allFood, onGetFoodByCategory } = props;

  const { data: foodCategories = { getAllCategories: [] } } = useQuery(
    GET_ALL_CATEGORIES_QUERY,
    {
      onError: (error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      },
    }
  );

  const handleGetAllFood = () => {
    dispatch({ type: "SET_CURRENT_CATEGORY", payload: "All food" });
    dispatch({
      type: "SET_FOOD_TO_MANIPULATE",
      payload: allFood.getAllFood,
    });
  };

  const handleSortOrder = (property, order) => {
    const sortedFood = [...state.foodToManipulate].sort((a, b) => {
      let aProperty = a[property];
      let bProperty = b[property];
      if (aProperty > bProperty) {
        return order;
      }
      if (aProperty < bProperty) {
        return -order;
      }
      return 0;
    });
    dispatch({ type: "SET_FOOD_TO_MANIPULATE", payload: sortedFood });
  };

  return (
    <>
      <Button.Group>
        <Dropdown label={state.currentCategory} placement="left-start">
          <Dropdown.Item onClick={handleGetAllFood}>All food</Dropdown.Item>
          {foodCategories.getAllCategories.map((category) => (
            <Dropdown.Item
              className="pl-4"
              onClick={() => {
                dispatch({
                  type: "SET_CURRENT_CATEGORY",
                  payload: category.name,
                });
                onGetFoodByCategory({ variables: { categoryId: category.id } });
              }}
              key={category.id}
            >
              {category.name}
            </Dropdown.Item>
          ))}
        </Dropdown>

        <Dropdown label="Sort" placement="top-start">
          <Button.Group>
            <Dropdown label="Name" placement="right-start">
              <Dropdown.Item onClick={() => handleSortOrder("name", 1)}>
                <FaSortAlphaDown className="mr-1.5" /> Sort A-Z
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortOrder("name", -1)}>
                <FaSortAlphaUp className="mr-1.5" /> Sort Z-A
              </Dropdown.Item>
            </Dropdown>

            <Dropdown label="Price" placement="down-start">
              <Dropdown.Item onClick={() => handleSortOrder("price", 1)}>
                <IoMdArrowDropup className="mr-1.5" /> Price Ascending
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortOrder("price", -1)}>
                <IoMdArrowDropdown className="mr-1.5" /> Price Descending
              </Dropdown.Item>
            </Dropdown>

            <Dropdown label="Quantity" placement="left-start">
              <Dropdown.Item onClick={() => handleSortOrder("quantity", 1)}>
                <IoMdArrowDropup className="mr-1.5" /> Quantity Ascending
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSortOrder("quantity", -1)}>
                <IoMdArrowDropdown className="mr-1.5" /> Quantity Descending
              </Dropdown.Item>
            </Dropdown>
          </Button.Group>
        </Dropdown>
      </Button.Group>
      <div className="search-bar">
        <input
          value={state.searchInput}
          type="text"
          onChange={(e) =>
            dispatch({
              type: "SET_SEARCH_INPUT",
              payload: e.target.value.toLowerCase(),
            })
          }
        />
        <button
          className="form-btn reset-btn search-btn"
          onClick={() => dispatch({ type: "SET_SEARCH_INPUT", payload: "" })}
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default MenuHeader;
