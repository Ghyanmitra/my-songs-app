import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApoloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApoloClient;
