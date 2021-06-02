import useCustomerAuth from '../customer/hooks/useCustomerAuth';

const Login = () => {
  const { isLogged, handleChange, handleLogin, customerName } = useCustomerAuth();

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
      <button type="submit" onClick={handleLogin}>Login</button>
      {
        isLogged &&
        <p>Authorized Customer: {customerName}</p>
      }
    </>
  );
};

export default Login;
