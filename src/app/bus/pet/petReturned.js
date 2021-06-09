import usePetReturned from './hooks/usePetReturned';

const PetReturned = () => {
  const { loading, pet, error } = usePetReturned();

  return (
    <>
      <h2>Returned: </h2>
      { loading && <p>loading...</p>}
      { error && <p>We have a problem: {error.message}</p>}
      {
        pet && (
          <p>
            <span>Id: {pet.id}</span>
            <span>Name: {pet.name}</span>
          </p>
        )
      }
    </>
  );
};

export default PetReturned;
