import { useSubscription } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const subscriptionPet = loader('./gql/subscriptionPet.graphql');

export default () => {
  const { loading, error, data } = useSubscription(subscriptionPet);

  const pet = data?.petReturned.pet;

  return { loading, error, pet };

};
