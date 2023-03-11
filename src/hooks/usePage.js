import { useState } from 'react';

export const usePage = (initialState = 1) => {
  const [state, setState] = useState(initialState);
  const reset = () => setState(initialState);
  const increment = () => setState(s => s + 1);
  return [state, reset, increment];
};
