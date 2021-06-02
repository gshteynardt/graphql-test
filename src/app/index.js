import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './init/client';
import Pet from './bus/pet';
import Customer from './bus/customer';
import Login from './bus/customer/login';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Login />
      <Customer />
      <Pet />
    </ApolloProvider>
  );
};

export default App;
