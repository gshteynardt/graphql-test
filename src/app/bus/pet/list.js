import useQueryAllPets from './hooks/useQueryAllPets';

const List = () => {
  const { loading, error, pets } = useQueryAllPets();

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>We have a problem {error.message}</p>
  }

  return (
    <>
      <h2>Pets</h2>
      {pets.map(({ id, name, weight }) => (
        <p key={id}>
          <span>Name: {name}</span>
          <span>Weight: {weight}</span>
        </p>
      ))}
    </>
  );
};

export default List;