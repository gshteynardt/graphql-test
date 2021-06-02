import useCustomerAuth from '../customer/hooks/useCustomerAuth';

const Login = () => {
  const { handleChange, onLogin } = useCustomerAuth();

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button type="submit" onClick={onLogin}>Login</button>
    </>
  );
};

export default Login;
