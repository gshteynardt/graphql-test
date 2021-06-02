import useCustomerCreater from './hooks/useCustomerCreater';

const Customer = () => {
  const { handleChange, onSave, loading, error, user } = useCustomerCreater();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>We have a problem {error.message}</p>;
  }

  return (
    <>
      <h2>Registration</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
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
      <button type="submit" onClick={onSave}>Save</button>
      <h2>{user}</h2>
    </>
  );
};

export default Customer;
