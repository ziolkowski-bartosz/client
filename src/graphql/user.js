import { gql } from "@apollo/client";

export const LOGIN_USER_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      type
      email
      firstName
      lastName
      phoneNumber
      dateOfBirth
      address
      zipCode
      city
      orders {
        id
        status
        delivery
        amount
        orderItems {
          food {
            name
            price
          }
          quantity
        }
      }
      token
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      id
      email
    }
  }
`;

export const GET_USER_QUERY = gql`
  query GetUser($userId: Int!) {
    getUser(userId: $userId) {
      id
      type
      email
      firstName
      lastName
      phoneNumber
      dateOfBirth
      address
      zipCode
      city
    }
  }
`;

export const GET_USER_ORDERS_QUERY = gql`
  query GetUserOrders($userId: Int!) {
    getUserOrders(userId: $userId) {
      id
      status
      orderItems {
        id
        food {
          id
          name
          price
          quantity
        }
        quantity
      }
      amount
      delivery
      updatedAt
    }
  }
`;
