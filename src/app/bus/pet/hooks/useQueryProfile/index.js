import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const queryPetById = loader('./gql/queryPetById.graphql');

const useQueryProfile = () => {
  const [getProfile, { loading, error, data }] = useLazyQuery(queryPetById);

  return { getProfile, loading, error, profile: data?.petById };
};

export default useQueryProfile;
