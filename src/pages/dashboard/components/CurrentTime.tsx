import {DateTime} from 'luxon';
import {useEffect, useState} from 'react';

import {useCityStore} from 'state/city';

import {City} from 'types/city';

import {BackgroundImage, TimeWrapper} from './styles';

import defaultCityBanner from 'assets/images/defaultCityBanner.jpeg';

interface Props {
  compact?: boolean;
  cityPhotos?: string[];
  city?: City;
}

export const CurrentTime = (props: Props) => {
  const {cityPhotos, compact} = props;

  const [contextCity] = useCityStore((state) => [state.cityInContext]);
  const city = props.city || contextCity;

  const currentTime = DateTime.now().setZone(city?.timezone?.timeZoneId);
  const formattedTime = currentTime.toFormat('h:mm:ss a');
  const [time, setTime] = useState(formattedTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = DateTime.now().setZone(city?.timezone?.timeZoneId);
      const formattedTime = currentTime.toFormat('h:mm:ss a');
      setTime(formattedTime);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const cityBanner = city?.photos[0] || defaultCityBanner;
  return (
    <TimeWrapper>
      {cityPhotos && <BackgroundImage src={cityBanner} />}
      <div className="city-time">
        <div className="timer">{time}</div>
        {city?.timezone && !compact && (
          <div className="timezone">
            <span className="timezone__id">{city?.timezone?.timeZoneId}</span>
            <span className="timezone__gmt">{city?.timezone?.gmt}</span>
            <div className="timezone__name">({city?.timezone?.timeZoneName})</div>
          </div>
        )}
      </div>
    </TimeWrapper>
  );
};
