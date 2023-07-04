import { gql } from "@apollo/client";

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder($delivery: Boolean!) {
    createOrder(delivery: $delivery) {
      id
    }
  }
`;

export const UPDATE_ORDER_MUTATION = gql`
  mutation UpdateOrder(
    $orderId: Int!
    $delivery: Boolean
    $status: StatusType
  ) {
    updateOrder(orderId: $orderId, delivery: $delivery, status: $status) {
      id
      status
      delivery
    }
  }
`;

export const REMOVE_ORDER_MUTATION = gql`
  mutation RemoveOrder($orderId: Int!) {
    removeOrder(orderId: $orderId) {
      id
    }
  }
`;

export const GET_ALL_ORDERS_QUERY = gql`
  query GetAllOrders {
    getAllOrders {
      id
      status
      delivery
      amount
      orderItems {
        food {
          name
          price
          quantity
        }
        quantity
      }
    }
  }
`;

export const GET_SINGLE_ORDER_QUERY = gql`
  query GetSingleOrder($orderId: Int!) {
    getSingleOrder(orderId: $orderId) {
      id
      status
      delivery
      amount
      orderItems {
        food {
          name
          price
          quantity
        }
        quantity
      }
    }
  }
`;
