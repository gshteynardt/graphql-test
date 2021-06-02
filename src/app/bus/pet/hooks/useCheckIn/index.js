import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export default () => {
  const [checkIn, { data }] = useMutation(mutationCheckIn);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();

  const onCheckIn = async id => {
    try {
      setLoader(true);
      await checkIn({
        variables: { id },
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoader(false);
    }
  };

  return {
    onCheckIn,
    loader,
    error,
    pet: data?.checkIn?.pet,
  };
};
