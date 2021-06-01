import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'https://funded-pet-library.moonhighway.com/';
const link = createHttpLink({
  uri,
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  link,
});
