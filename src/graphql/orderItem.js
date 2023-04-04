import { gql } from "@apollo/client";

export const CREATE_ORDER_ITEM_MUTATION = gql`
  mutation CreateOrderItem($orderId: Int!, $foodId: Int!, $quantity: Int!) {
    createOrderItem(orderId: $orderId, foodId: $foodId, quantity: $quantity) {
      id
    }
  }
`;

export const GET_ALL_ORDER_ITEMS_QUERY = gql`
  query GetAllOrderItems {
    getAllOrderItems {
      id
      food {
        name
        category {
          name
        }
      }
      quantity
    }
  }
`;

export const GET_SINGLE_ORDER_ITEM_QUERY = gql`
  query GetSingleOrderItem($orderItemId: Int!) {
    getSingleOrderItem(orderItemId: $orderItemId) {
      id
      food {
        name
        category {
          name
        }
      }
      quantity
    }
  }
`;
