import useQueryAllAvailablePets from './hooks/useQueryAllAvailablePets';

const SpecialList = () => {
  const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets();

  return (
    <>
      <button onClick={getAllAvailablePets}>Download</button>
      {loading && <p>loading</p>}
      {error && <p>We have a problem: {error.message}</p>}
      {pets && pets.map(({ id, name, weight }) => (
        <p key={id}>
          <span>Name: {name}</span>
          <span>Weight: {weight}</span>
        </p>
      ))}
    </>
  );
};

export default SpecialList;
