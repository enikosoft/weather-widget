import {FaTemperatureThreeQuarters} from 'react-icons/fa6';

import {DashboardLittleComponent} from './styles';

export const FeelsLikeTemperature = ({feelsLike = 0}) => {
  return (
    <DashboardLittleComponent style={{alignItems: 'start'}}>
      <div className="left-side">
        <FaTemperatureThreeQuarters className="icon" color="#FFF" />
        <span className="value">{feelsLike}</span> <span className="value-label">°C</span>
      </div>

      <div className="right-side">
        <span>Weather can alter perceived temp variably</span>
      </div>
    </DashboardLittleComponent>
  );
};
