import React from 'react';

import {StyledOption} from './styles';
import {Option} from './types';

interface Props {
  option: Option;
  index: number;
  className?: string;
  setHighlightedItem: ({
    index,
  }: {
    index?: number | undefined;
    event?: React.KeyboardEvent<HTMLInputElement> | undefined;
  }) => void;
  onClick: (option: Option) => void;
}

export const OptionItem = (props: Props) => {
  const {index, option, className, setHighlightedItem, onClick} = props;

  const handleMouseEnter = () => {
    setHighlightedItem({index});
  };

  const handleClick = () => {
    onClick(option);
  };

  return (
    <StyledOption className={className} onMouseEnter={handleMouseEnter} key={`option-${index}`} onClick={handleClick}>
      <span className="ellipsis" title={option.label}>
        {option.label}
      </span>
    </StyledOption>
  );
};
