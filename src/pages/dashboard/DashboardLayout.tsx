import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'styles/styled';

import {Card} from 'components/card/Card';

import {City} from 'types/city';
import {Forecast as ForecastType, Weather} from 'types/weather';

import {CurrentTime} from './components/CurrentTime';
import {FeelsLikeTemperature} from './components/FeelsLikeTemperature';
import {Forecast} from './components/Forecast/Forecast';
import {Humidity} from './components/Humidity';
import {SunSet} from './components/SunSet/SunSet';
import {Temperature} from './components/Temperature/Temperature';
import {UVIndex} from './components/UVIndex';
import {Visibility} from './components/Visibility';
import {Wind} from './components/Wind/Wind';
import {GridDashboard} from './styles';

interface Props {
  weather: Weather;
  forecast: ForecastType[];
  dataUpdatedAt: number;
  city: City;
}

interface WeatherCards {
  [key: string]: JSX.Element;
}

export const DashboardLayout = (props: Props) => {
  const {weather, forecast, dataUpdatedAt, city} = props;
  const {
    temperature,
    conditions,
    icon,
    description,
    winddir,
    windspeed,
    uvindex,
    sunriseEpoch,
    sunsetEpoch,
    humidity,
    dew,
    visibility,
    feelslike,
    windgust,
  } = weather;

  const {photos, timezone} = city;

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  const weatherCards: WeatherCards = {
    wind: (
      <div key="wind" className="grid-item" style={mobile ? {gridColumn: 'span 2'} : {}}>
        <Card titleSize={16} title="Wind Status" padding={24}>
          <Wind windGust={windgust} windSpeed={windspeed} windDir={winddir} />
        </Card>
      </div>
    ),
    sunrise: (
      <div key="sunrise" className="grid-item" style={mobile ? {gridColumn: 'span 2'} : {}}>
        <Card titleSize={16} title="Sunrise & Sunset" padding={24}>
          <SunSet
            timeZoneId={timezone.timeZoneId}
            sunsetUnix={sunsetEpoch}
            sunriseUnix={sunriseEpoch}
            size={150}
            sunIconSize={25}
          />
        </Card>
      </div>
    ),
    uvIndex: (
      <div key="uvIndex" className="grid-item">
        <Card titleSize={16} title="UV Index" padding={24}>
          <UVIndex uvIndex={uvindex} />
        </Card>
      </div>
    ),
    humidity: (
      <div key="humidity" className="grid-item grid-item-small">
        <Card titleSize={14} title="Humidity" padding={16}>
          <Humidity humidity={humidity} dew={dew} />
        </Card>
      </div>
    ),
    visibility: (
      <div key="visibility" className="grid-item grid-item-small">
        <Card titleSize={14} title="Visibility" padding={16}>
          <Visibility visibility={visibility} />
        </Card>
      </div>
    ),
    feelsLike: (
      <div key="feelsLike" className="grid-item grid-item-small">
        <Card titleSize={14} title="Feels Like" padding={16}>
          <FeelsLikeTemperature feelsLike={feelslike} />
        </Card>
      </div>
    ),
  };

  const mobileOrder = ['wind', 'uvIndex', 'humidity', 'sunrise', 'visibility', 'feelsLike'];

  const defaultOrder = ['wind', 'uvIndex', 'sunrise', 'humidity', 'visibility', 'feelsLike'];

  mobileOrder.map((key) => {
    console.log(key);
  });
  return (
    <GridDashboard>
      <div className="main-grid-card">
        <Card padding={40}>
          <Temperature
            temperature={temperature}
            conditions={conditions}
            description={description}
            icon={icon}
            dataUpdatedAt={dataUpdatedAt}
          />
        </Card>
      </div>

      {mobile ? mobileOrder.map((key) => weatherCards[key]) : defaultOrder.map((key) => weatherCards[key])}

      <div className="bottom-grid-row">
        <div className="forecast-grid-card">
          <Forecast forecast={forecast} />
        </div>
        <div className="time-grid-card" style={{position: 'relative'}}>
          <Card noPadding>
            <CurrentTime cityPhotos={photos} />
          </Card>
        </div>
      </div>
    </GridDashboard>
  );
};
