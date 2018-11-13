import React, { useState } from 'react';

import { useDocumentTitle } from './App';

const MyComponent = () => {
  const [value, setValue] = useState('');
  const handleChange = e => setValue(e.target.value);
  useDocumentTitle(value);

  return <input value={value} onChange={handleChange} />;
};

export default MyComponent;
