import useQueryAvialablePets from './hooks/useQueryAvailablePets';

const Counter = () => {
  const { loading, error, data } = useQueryAvialablePets();

  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <p>We have a problem {error.message}</p>
  }

  return (
    <p>
      AvialablePets: { data?.availablePets }
    </p>
  );
};

export default Counter;