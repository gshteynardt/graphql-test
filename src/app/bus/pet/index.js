import Counter from './counter';
import List from './list';
import SpecialList from './spicialList';
import Profile from './profile';

const Pet = () => {
  return(
    <>
      <Profile />
      <h1>Pet</h1>
      <Counter />
      <List />
      <SpecialList />
    </>
  );
};

export default Pet;
