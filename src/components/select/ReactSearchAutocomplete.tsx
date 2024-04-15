import {ChangeEvent, FocusEvent, FocusEventHandler, KeyboardEvent, useEffect, useState} from 'react';

import {Input} from 'components/input/Input';
import {Option} from 'components/option/types';

import Results from './Results';
import {StyledReactSearchAutocomplete} from './styles';

export interface ReactSearchAutocompleteProps {
  items: Option[];
  inputSearchString?: string;
  showClear?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  showNoResults?: boolean;
  showNoResultsText?: string;
  isLoading?: boolean;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (item: Option) => void;
  onHover?: (item: Option) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
}

const ReactSearchAutocomplete = ({
  items = [],
  onSearch,
  onSelect,
  onFocus,
  onClear,
  showClear = true,
  placeholder = '',
  autoFocus = false,
  inputSearchString = '',
  showNoResults = true,
  showNoResultsText = 'No results',
}: ReactSearchAutocompleteProps) => {
  const [searchString, setSearchString] = useState<string>(inputSearchString);
  const [highlightedItem, setHighlightedItem] = useState<number>(-1);

  useEffect(() => {
    if (!inputSearchString) {
      setSearchString('');
    }
  }, [inputSearchString]);

  const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event);
  };

  const handleSetSearchString = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchString(keyword);
    onSearch(e);
  };

  const handleSetHighlightedItem = ({index}: {index?: number; event?: KeyboardEvent<HTMLInputElement>}) => {
    if (index !== undefined) {
      setHighlightedItem(index);
    }
  };

  return (
    <StyledReactSearchAutocomplete>
      <div className="wrapper">
        <Input
          searchString={searchString}
          setSearchString={handleSetSearchString}
          autoFocus={autoFocus}
          onFocus={handleOnFocus}
          onClear={onClear}
          placeholder={placeholder}
          showClear={showClear}
        />

        <Results
          results={items}
          onClick={onSelect}
          setSearchString={setSearchString}
          highlightedItem={highlightedItem}
          setHighlightedItem={handleSetHighlightedItem}
          showNoResultsFlag={showNoResults}
          showNoResultsText={showNoResultsText}
        />
      </div>
    </StyledReactSearchAutocomplete>
  );
};

export default ReactSearchAutocomplete;
