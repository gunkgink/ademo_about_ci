import { useState } from 'react';

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const [val, setVal] = useState(1);

  const increment = () => setCount(prev => prev + val);
  const decrement = () => setCount(prev => prev - val);
  const reset = () => setCount(initialValue);

  return {
    count,
    val,
    setVal,
    increment,
    decrement,
    reset,
  };

  return { count, increment, val, setVal };
}
