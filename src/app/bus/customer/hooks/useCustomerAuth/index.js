import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import useForm from '../useForm';

const mutationLogIn = loader('./gql/mutationLogin.graphql');

const initialValues = {
  username: '',
  password: '',
};

export default () => {
  const [onLogin, { loading, error, data }] = useMutation(mutationLogIn);
  const { state, handleChange } = useForm(initialValues);
  const [isLogged, setIsLogged] = useState(false);
  const customerName = data?.logIn?.customer.name;
  const token = data?.logIn.token;

  useEffect(() => {
    if (!token) return;

    setIsLogged(true);
    localStorage.setItem('token', token);
  }, [token]);

  const handleLogin = () => {
    onLogin({
      variables: state,
    });
  };

  return {
    loading,
    error,
    isLogged,
    handleLogin,
    handleChange,
    customerName,
  };
};
