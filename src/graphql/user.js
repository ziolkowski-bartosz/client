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
        orderItems {
          food {
            name
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
