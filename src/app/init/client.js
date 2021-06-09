import ApolloClient from 'apollo-client';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const ROOT = 'funded-pet-library.moonhighway.com/';
const uri = `https://${ROOT}`;
const httpLink = createHttpLink({
  uri,
});

const wsLink = new WebSocketLink({
  uri: `wss://${ROOT}/graphql`,
  options: { reconnect: true },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const wrappedHttpLink = authLink.concat(httpLink);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 
        'OperationDefinition' && 
        definition.operation === 'subscription'
    );
  },
  wsLink,
  wrappedHttpLink,
);

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  link,
});
