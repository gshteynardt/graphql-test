import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './init/client';
import Pet from './bus/pet';
import Customer from './bus/customer';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Customer />
      <Pet />
    </ApolloProvider>
  );
};

export default App;
