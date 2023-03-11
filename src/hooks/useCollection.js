import { useState } from 'react';

export const useCollection = () => {
  const [state, setState] = useState([]);
  const reset = () => setState([]);
  const addItems = items => setState(s => [...s, ...items]);
  return [state, reset, addItems];
};
