import Counter from './counter';
import List from './list';
import SpecialList from './spicialList';
import Profile from './profile';
import CheckInPet from './checkInPet';

const Pet = () => {
  return(
    <>
      <Profile />
      <h1>Pet</h1>
      <Counter />
      <CheckInPet />
      <List />
      <SpecialList />
    </>
  );
};

export default Pet;
