import { gql } from "@apollo/client";

export const CREATE_FOOD_MUTATION = gql`
  mutation CreateFood(
    $categoryId: Int!
    $name: String!
    $quantity: Int!
    $price: Float!
  ) {
    createFood(
      categoryId: $categoryId
      name: $name
      quantity: $quantity
      price: $price
    ) {
      id
      name
    }
  }
`;

export const GET_ALL_FOOD_QUERY = gql`
  query GetAllFood {
    getAllFood {
      id
      name
      quantity
      price
      category {
        name
      }
    }
  }
`;

export const GET_SINGLE_FOOD_QUERY = gql`
  query GetSingleFood($foodId: Int!) {
    getSingleFood(foodId: $foodId) {
      id
      name
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const GET_FOOD_BY_CATEGORY_QUERY = gql`
  query GetFoodByCategory($categoryId: Int!) {
    getFoodByCategory(categoryId: $categoryId) {
      id
      name
      price
      quantity
      category {
        name
      }
    }
  }
`;
