import { useState } from 'react';

export default initialValues => {
  const [state, setState] = useState(initialValues);

  const handleChange = event => {
    event.persist();
    setState(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    state,
  };
};
