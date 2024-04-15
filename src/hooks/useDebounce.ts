import {useEffect, useState} from 'react';

// Custom hook for debouncing
export const useDebounce = <T>(data: T, delay = 500) => {
  const [value, setValue] = useState<T>(data);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(data);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [data]);

  return value;
};
