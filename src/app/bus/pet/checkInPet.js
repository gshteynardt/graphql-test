import useCheckIn from '../pet/hooks/useCheckIn';

const CheckInPet = () => {
  const { onCheckIn, pet, error, loader } = useCheckIn();

  if (loader) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>We heve a problem {error.message}</p>;
  }

  return (
    <>
      <h2>Checkin: </h2>
      <button onClick={() => onCheckIn('C-1')}>Checkin</button>
      {pet && <p>Name: {pet.name}</p>}
    </>
  );
};

export default CheckInPet;
