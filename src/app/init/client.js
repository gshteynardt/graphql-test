import ApolloClient from 'apollo-boost';

const uri = 'https://funded-pet-library.moonhighway.com/';

export const client = new ApolloClient({
  uri,
});
