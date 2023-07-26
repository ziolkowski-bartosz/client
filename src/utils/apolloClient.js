import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri:
    process.env.REACT_APP_APOLLO_URL ||
    "https://polenix-b105de561032.herokuapp.com/api",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token") || "";
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
