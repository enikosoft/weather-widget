import {Dispatch, ReactNode, SetStateAction} from 'react';

import {OptionItem} from 'components/option/Option';
import {Option} from 'components/option/types';

import {StyledResults} from './styles';

export interface ResultsProps {
  results: Option[];
  highlightedItem: number;
  showNoResultsFlag?: boolean;
  showNoResultsText?: string;
  onClick: (item: Option) => void;
  setHighlightedItem: ({
    index,
  }: {
    index?: number | undefined;
    event?: React.KeyboardEvent<HTMLInputElement> | undefined;
  }) => void;
  setSearchString: Dispatch<SetStateAction<string>>;
}

export default function Results({
  results = [],
  onClick,
  setSearchString,
  highlightedItem,
  setHighlightedItem,
  showNoResultsFlag = false,
  showNoResultsText = 'No results',
}: ResultsProps) {
  const handleClick = (option: Option) => {
    onClick(option);
    setSearchString(option.label);
  };

  if (showNoResultsFlag) {
    return (
      <ResultsWrapper showNoResultsFlag={showNoResultsFlag}>
        <li data-test="no-results-message" style={{paddingLeft: '35px'}}>
          <div className="ellipsis">{showNoResultsText}</div>
        </li>
      </ResultsWrapper>
    );
  }

  if (results?.length <= 0 && !showNoResultsFlag) {
    return null;
  }

  return (
    <ResultsWrapper>
      {results.map((item, index) => {
        return (
          <OptionItem
            key={`option-item-div-${index}-${item.key}`}
            option={item}
            index={index}
            className={highlightedItem === index ? 'selected' : ''}
            setHighlightedItem={setHighlightedItem}
            onClick={handleClick}
          />
        );
      })}
    </ResultsWrapper>
  );
}

const ResultsWrapper = ({children}: {children: ReactNode; showNoResultsFlag?: boolean}) => {
  return (
    <StyledResults>
      <ul>{children}</ul>
    </StyledResults>
  );
};
