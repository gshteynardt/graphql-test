import useQueryAvialablePets from './hooks/useQueryAvailablePets';

const Counter = () => {
  const { loading, error, numberPets } = useQueryAvialablePets();

  if(loading) {
    return <p>Loading...</p>;
  }

  if(error) {
    return <p>We have a problem {error.message}</p>;
  }

  return (
    <p>
      AvialablePets: { numberPets }
    </p>
  );
};

export default Counter;
