//Core
import ApolloClient from 'apollo-boost';

//GraphQL Server

const uri = 'https://funded-pet-library.moonhighway.com/';

export const client = new ApolloClient({
  uri,
});
