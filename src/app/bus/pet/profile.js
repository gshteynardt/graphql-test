import useQueryProfile from './hooks/useQueryProfile';

const Profile = () => {
  const { getProfile, loading, error, profile } = useQueryProfile();

  const handleClick = () => {
    getProfile({
      variables: { id: 'C-1' },
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>We have a problem {error.message}</p>;
  }

  return (
    <>
    <button onClick={handleClick}>Download profile</button>
      <h2>Profile: {profile?.name}</h2>
    </>
  );
};

export default Profile;
