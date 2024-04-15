import {ChangeEventHandler, FocusEvent, FocusEventHandler} from 'react';
import {HiSearch} from 'react-icons/hi';

import {StyledSearchInput, SuffixWrapper} from './styles';

export interface SearchInputProps {
  searchString: string;
  setSearchString: ChangeEventHandler<HTMLInputElement>;
  autoFocus: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
  placeholder: string;
  showClear: boolean;
}

export const Input = ({searchString, setSearchString, autoFocus, onFocus, placeholder}: SearchInputProps) => {
  const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event);
  };

  return (
    <StyledSearchInput>
      <SuffixWrapper>
        <HiSearch />
      </SuffixWrapper>

      <input
        type="text"
        spellCheck={false}
        value={searchString}
        onChange={setSearchString}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    </StyledSearchInput>
  );
};
