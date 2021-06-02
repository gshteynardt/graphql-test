import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import useForm from '../useForm';

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

const initialValues = {
  name: '',
  username: '',
  password: '',
};

const useCustomer = () => {
  const [addUser, { loading, error, data }] = useMutation(mutationCreateAccount);
  const { state, handleChange } = useForm(initialValues);

  const onSave = () => {

    addUser({
      variables: { account: state },
    });
  };

  return {
    state,
    loading,
    error,
    user: data?.createAccount.name,
    handleChange,
    onSave,
  };
};

export default useCustomer;
