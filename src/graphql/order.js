import { gql } from "@apollo/client";

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder($delivery: Boolean!) {
    createOrder(delivery: $delivery) {
      id
    }
  }
`;

export const GET_ALL_ORDERS_QUERY = gql`
  query GetAllOrders {
    getAllOrders {
      id
      food {
        name
        price
      }
      quantity
    }
  }
`;

export const GET_SINGLE_ORDER_QUERY = gql`
  query GetSingleCategory($categoryId: Int!) {
    getSingleCategory(categoryId: $categoryId) {
      id
      name
      food {
        name
      }
    }
  }
`;
