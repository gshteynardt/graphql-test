import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const queryAvailablePets = loader('./gql/useQueryAvialablePets.graphql');

const useQueryAvialablePets = () => {
  return useQuery(queryAvailablePets);
};

export default useQueryAvialablePets;

