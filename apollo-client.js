import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/oakes6/sample-subgraph-uno",
  cache: new InMemoryCache(),
});

export default client;