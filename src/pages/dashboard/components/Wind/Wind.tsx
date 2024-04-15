import {Theme} from 'styles/styled';

import {useThemeStore} from 'state/theme';

import Compass from './Compass';
import {Wrapper} from './styles';

const Arrow = ({color}: {color: string}) => {
  return (
    <svg
      className="compass-arrow"
      width="150px"
      height="150px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 7L12 21" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.7856 2.35729L9.72696 5.7884C9.40703 6.32162 9.79112 7 10.413 7L13.587 7C14.2089 7 14.593 6.32162 14.273 5.7884L12.2144 2.35729C12.1173 2.19545 11.8827 2.19545 11.7856 2.35729Z"
        fill={color}
      />
    </svg>
  );
};

export const Wind = ({windSpeed = 0, windGust = 0, windDir = 90}) => {
  const angle = windDir + 180;
  const compassStyle = {
    transform: `rotate(${angle}deg)`,
    transition: 'transform 0.5s ease-in-out',
  };

  const getWindDirectionAbbreviation = (windDirection: number) => {
    if (windDirection >= 348.75 || windDirection < 11.25) {
      return 'N';
    } else if (windDirection >= 11.25 && windDirection < 33.75) {
      return 'NNE';
    } else if (windDirection >= 33.75 && windDirection < 56.25) {
      return 'NE';
    } else if (windDirection >= 56.25 && windDirection < 78.75) {
      return 'ENE';
    } else if (windDirection >= 78.75 && windDirection < 101.25) {
      return 'E';
    } else if (windDirection >= 101.25 && windDirection < 123.75) {
      return 'ESE';
    } else if (windDirection >= 123.75 && windDirection < 146.25) {
      return 'SE';
    } else if (windDirection >= 146.25 && windDirection < 168.75) {
      return 'SSE';
    } else if (windDirection >= 168.75 && windDirection < 191.25) {
      return 'S';
    } else if (windDirection >= 191.25 && windDirection < 213.75) {
      return 'SSW';
    } else if (windDirection >= 213.75 && windDirection < 236.25) {
      return 'SW';
    } else if (windDirection >= 236.25 && windDirection < 258.75) {
      return 'WSW';
    } else if (windDirection >= 258.75 && windDirection < 281.25) {
      return 'W';
    } else if (windDirection >= 281.25 && windDirection < 303.75) {
      return 'WNW';
    } else if (windDirection >= 303.75 && windDirection < 326.25) {
      return 'NW';
    } else if (windDirection >= 326.25 && windDirection < 348.75) {
      return 'NNW';
    }
  };

  const theme = useThemeStore((state) => state.theme);
  const color = theme === Theme.dark ? 'var(--card-light)' : 'var(--card-dark)';
  const background = theme === Theme.dark ? 'var(--card-dark)' : 'var(--card-light)';

  return (
    <Wrapper>
      <div className="wind-info">
        <div className="compass-wrapper">
          <Compass color={color} background={background} />
          <div className="label">
            <span>{getWindDirectionAbbreviation(windDir)}</span>
          </div>

          <div className="arrow-wrapper" style={compassStyle}>
            <Arrow color={color} />
          </div>
        </div>
      </div>
      <div className="wind-data">
        <div>
          <div className="wind-data-row">
            <div className="row-value">
              <span>{windSpeed}</span>
            </div>
            <div className="row-label">
              <span className="row-label-subtext">m/s</span>
              <span>Speed</span>
            </div>
          </div>
          <div className="wind-data-row">
            <div className="row-value">
              <span>{windGust || windSpeed}</span>
            </div>
            <div className="row-label">
              <span className="row-label-subtext">m/s</span>
              <span>Gust</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
