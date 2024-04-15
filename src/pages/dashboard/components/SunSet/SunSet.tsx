import {DateTime} from 'luxon';
import {useEffect, useRef, useState} from 'react';
import {BsSunFill} from 'react-icons/bs';
import {WiSunrise, WiSunset} from 'react-icons/wi';
import {ThemeProvider} from 'styled-components';

import {DEFAULT_YELLOW, Wrapper} from './styles';

interface Props {
  timeZoneId?: string;
  sunriseUnix: number;
  sunsetUnix: number;
  size: number;
  sunIconSize?: number;
}

/**
 *
 * @param props
 * `timeZoneId` - If you provide a timeZoneId, the time will be displayed in that zone.
 * If you don't provide one, then it will be in your zone.
 *
 * @returns
 */
export const SunSet = (props: Props) => {
  const {timeZoneId, size, sunIconSize = 16, sunriseUnix, sunsetUnix} = props;

  const nowUnix = DateTime.now().setZone(timeZoneId).toUTC().toSeconds();
  const sunriseDateTime = DateTime.fromSeconds(sunriseUnix).setZone(timeZoneId);
  const sunsetDateTime = DateTime.fromSeconds(sunsetUnix).setZone(timeZoneId);

  if (!sunriseDateTime.isValid || !sunsetDateTime.isValid) {
    throw new Error('Unix time props is invalid.');
  }

  const sunrise = sunriseDateTime.toFormat('HH:mm a');
  const sunset = sunsetDateTime.toFormat('HH:mm a');

  const leftPos = ((nowUnix - sunriseUnix) * 180) / (sunsetUnix - sunriseUnix);

  const boxRef = useRef<HTMLDivElement>(null);
  const [sunRect, setSunRect] = useState({
    sunZoneLeft: 0,
    sunIconLeft: 0,
  });

  useEffect(() => {
    setSunRect({
      sunZoneLeft: boxRef.current?.offsetParent?.parentElement?.getBoundingClientRect()?.left || 0,
      sunIconLeft: boxRef.current?.getBoundingClientRect()?.left || 0,
    });
  }, []);

  let sunAnimationValue = sunRect.sunIconLeft - sunRect.sunZoneLeft;

  // if now is not a sun day
  const now = DateTime.utc();
  if (now > DateTime.fromSeconds(sunsetUnix) || DateTime.fromSeconds(sunriseUnix) > now) {
    sunAnimationValue = 0;
  }

  const theme = {
    width: `${size}px`,
    height: `${size}px`,
    sunAnimationValue,
    sunIconSize,
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div className="sun-widget">
          <div>
            <div className="sun-zone">
              <div className="sun-animation" />
            </div>

            <div>
              <div className="legend-horisont" />
              <div className="legend-horisont legend-horisont-sunset" />
            </div>
          </div>

          <div style={{transform: `rotate(${leftPos - 90}deg`}} className="sun-path">
            <div ref={boxRef} className="sun-icon">
              <BsSunFill color={DEFAULT_YELLOW} />
            </div>
          </div>
        </div>
        <div className="legend">
          <div className="legend-wrapper">
            <div className="sunrise">
              <WiSunrise className="icon" color={'#D3D3D3'} />
              <div className="label">Sunrise</div>
              <div className="label time">{sunrise}</div>
            </div>
            <div className="sunset">
              <div className="legend-horisont" />
              <WiSunset color={'#D3D3D3'} className="icon" />
              <div className="label">Sunset</div>
              <div className="label time">{sunset}</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};
