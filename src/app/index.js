import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './init/client';
import Pet from './bus/pet';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pet />
    </ApolloProvider>
  );
};

export default App;
