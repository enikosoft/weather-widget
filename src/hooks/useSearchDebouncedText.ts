import {useEffect, useState} from 'react';

import {useDebounce} from './useDebounce';

// Custom hook for getting debounced input text from select
export const useSearchDebouncedText = (
  delay = 500,
  delayFn?: () => void
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [inputStr, setInputStr] = useState<string>('');

  const [searchStr, setSearchStr] = useState<string>('');
  const debouncedSearchText = useDebounce(searchStr, delay);

  useEffect(() => {
    setInputStr(searchStr);

    if (delayFn) {
      delayFn();
    }
  }, [debouncedSearchText]);

  return [inputStr, setSearchStr];
};
