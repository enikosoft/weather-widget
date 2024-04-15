import Lottie from 'lottie-react';
import styled from 'styled-components';

import {WeatherConditionAnimationPath, useAnimationData} from './useAnimationData';

interface Props {
  condition: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const Icon = styled.div`
  display: flex;
`;

export const ConditionIcon = (props: Props) => {
  const {condition, className} = props;
  const {animation, loading} = useAnimationData(`${condition}`, WeatherConditionAnimationPath.ConditionIcons);

  const {width = 30, height = 38} = props;

  return (
    <Icon className={className}>
      {loading && !animation && <></>}
      {animation && (
        <Lottie style={{width: `${width}px`, height: `${height}px`}} animationData={animation} autoplay loop />
      )}
    </Icon>
  );
};
