import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const queryAllAvailablePets = loader('./gql/queryAllAvailablePets.graphql');

const useQueryAllAvailablePets = () => {
  const [getAllAvailablePets, { loading, error, data }] = useLazyQuery(queryAllAvailablePets);

  return { getAllAvailablePets, loading, error, pets: data?.allAvailablePets };
};

export default useQueryAllAvailablePets;