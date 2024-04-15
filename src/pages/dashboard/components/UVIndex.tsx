import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const UVIndex = ({uvIndex = 0}) => {
  const uvIndexLevel: {
    [key: number | string]: string;
  } = {
    0: 'Low',
    1: 'Low',
    2: 'Low',
    3: 'Moderate',
    4: 'High',
    5: 'Very High',
    6: 'High',
    7: 'High',
    8: 'Very High',
    9: 'Very High',
    10: 'Very High',
    '11+': 'Hazardous',
  };

  const uvIndexLabels: {
    [key: string]: string;
  } = {
    0: 'Minimal risk; protective measures not usually needed.',
    1: 'Low risk; protection against sun exposure is advisable.',
    2: 'Low risk; some protection against sun exposure recommended for ordinary people.',
    3: 'Moderate risk of harm from unprotected sun exposure.',
    4: 'High risk of harm from unprotected sun exposure; use sun protection and avoid the midday sun.',
    5: 'Very high risk of harm from unprotected sun exposure; take extra precautions.',
    6: 'High risk of harm from unprotected sun exposure; take immediate precautions.',
    7: 'Extremely high risk of harm from unprotected sun exposure; stay in the shade and wear protective clothing.',
    8: 'Very high risk of harm from unprotected sun exposure; minimize sun exposure during midday hours.',
    9: 'Very high risk of harm from unprotected sun exposure; stay indoors during midday hours.',
    10: 'Very high risk of harm from unprotected sun exposure; risk of sunburn in a short period of time.',
    11: 'Extremely high risk of harm from unprotected sun exposure; risk of sunburn in a very short period of time.',
  };

  const uvIndexPercentage = (uvIndex: number) => {
    uvIndex = Math.min(Math.max(uvIndex, 0), 12);
    return (uvIndex / 12) * 100 + '%';
  };

  return (
    <Wrapper>
      <div className="value-container">
        <h2 className="uv-value">{uvIndex}</h2>
        <p className="uv-level">{uvIndexLevel[uvIndex]}</p>
      </div>
      <div className="uv-index-container">
        <div className="uv-index-dot" style={{left: uvIndexPercentage(uvIndex)}}></div>
      </div>
      <div className="uv-info-text">{uvIndexLabels[uvIndex]}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .value-container {
    height: 56px;
    .uv-level {
      margin: 0;
      margin-bottom: 16px;
      font-family: ${(props) => props.theme.fontBoldFamily};
    }
  }

  .uv-info-text {
    padding-top: 8px;
    color: var(--light-grey);
    font-size: 12px;

    @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      font-size: 12px;
    }
  }
  .uv-index-container {
    position: relative;
    border-radius: 10px;
    background: linear-gradient(
      to right,
      #00ff00 0%,
      /* Green */ #ffff00 25%,
      /* Yellow */ #ffa500 50%,
      /* Orange */ #d74646 75%,
      /* Red */ #eb3feb 100% /* Purple */
    );
    width: 100%;
    height: 3px;
    margin-top: 10px;
  }

  .uv-index-dot {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid black;
    border-radius: 50%;
    background-color: white;
    width: 6px;
    height: 6px;
  }
`;
