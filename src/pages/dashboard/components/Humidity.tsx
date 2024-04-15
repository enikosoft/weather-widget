import {WiHumidity} from 'react-icons/wi';

import {DashboardLittleComponent} from './styles';

export const Humidity = ({humidity = 0, dew = 0}) => {
  return (
    <DashboardLittleComponent>
      <div className="left-side">
        <span className="value value-humidity">{humidity}</span> <span className="value-label">%</span>
      </div>
      <div className="right-side">
        <WiHumidity color="var(--light-grey)" />
        <span>The dew point us {dew}°C right now</span>
      </div>
    </DashboardLittleComponent>
  );
};
