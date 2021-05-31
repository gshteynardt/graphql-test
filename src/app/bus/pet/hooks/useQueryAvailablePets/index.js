import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const queryAvailablePets = loader('./gql/useQueryAvialablePets.graphql');

const useQueryAvialablePets = () => {
  const { loading, error, data } = useQuery(queryAvailablePets);

  return { loading, error, numberPets: data?.availablePets }
};

export default useQueryAvialablePets;

