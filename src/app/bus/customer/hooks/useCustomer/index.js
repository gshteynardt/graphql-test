import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

const useCustomer = () => {
  const [addUser, { loading, error, data }] = useMutation(mutationCreateAccount);

  const [state, setState] = useState({
    account: {
      name: '',
      username: '',
      password: '',
    },
  });

  const handleChange = event => {
    event.persist();
    setState(prev => ({
      account: {
        ...prev.account,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const onSave = () => {
    const { account } = state;

    addUser({
      variables: { account },
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
