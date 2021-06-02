import useForm from '../useForm';

const initialValues = {
  username: '',
  password: '',
};

export default () => {
  const { state, handleChange } = useForm(initialValues);

  const onLogin = () => console.log(state);

  return {
    onLogin,
    handleChange,
  };
};
