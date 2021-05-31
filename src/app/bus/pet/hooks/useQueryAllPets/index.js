import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const queryAllPets = loader('./gql/queryAllPets.graphql');

const useQueryAllPets = () => {
  const { loading, error, data } = useQuery(queryAllPets);

  const pets = data?.allPets;

  return { loading, error, pets };
};

export default useQueryAllPets;
