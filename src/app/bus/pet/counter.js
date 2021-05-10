import useQueryAvialablePets from './hooks/useQueryAvailablePets';

const Counter = () => {
  const { loading, error, data } = useQueryAvialablePets();

  return (
    <p>Counter</p>
  );
};

export default Counter;