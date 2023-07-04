import { gql } from "@apollo/client";

export const CREATE_ORDER_ITEM_MUTATION = gql`
  mutation CreateOrderItem($foodId: Int!) {
    createOrderItem(foodId: $foodId) {
      id
    }
  }
`;

export const UPDATE_ORDER_ITEM_QUANTITY_MUTATION = gql`
  mutation UpdateOrderItemQuantity(
    $orderItemId: Int!
    $toIncreaseQuantity: Boolean!
  ) {
    updateOrderItemQuantity(
      orderItemId: $orderItemId
      toIncreaseQuantity: $toIncreaseQuantity
    ) {
      id
      quantity
      food {
        name
        price
        quantity
      }
    }
  }
`;

export const REMOVE_ORDER_ITEM_MUTATION = gql`
  mutation RemoveOrderItem($orderItemId: Int!) {
    removeOrderItem(orderItemId: $orderItemId) {
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
        price
        category {
          name
        }
        quantity
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
        price
        category {
          name
        }
        quantity
      }
      quantity
    }
  }
`;
