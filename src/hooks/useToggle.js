import { useState, useCallback } from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(state => !state), []);
  const setTrue = () => setState(true);
  const setFalse = () => setState(false);
  return [state, toggle, setTrue, setFalse];
};
