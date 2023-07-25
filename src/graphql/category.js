import { gql } from "@apollo/client";

export const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
    }
  }
`;

export const GET_SINGLE_CATEGORY_QUERY = gql`
  query GetSingleCategory($categoryId: Int!) {
    getSingleCategory(categoryId: $categoryId) {
      id
      name
      food {
        name
        price
        quantity
      }
    }
  }
`;

export const GET_ALL_CATEGORIES_QUERY = gql`
  query GetAllCategories {
    getAllCategories {
      id
      name
      food {
        name
        price
        quantity
      }
    }
  }
`;
