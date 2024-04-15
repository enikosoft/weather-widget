import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'styles/styled';

import {ConditionIcon} from 'components/weather-icon/ConditionIcon';

import {Forecast} from 'types/weather';

interface Props {
  item: Forecast;
}
export const ForecastItem = (props: Props) => {
  const {item} = props;

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return (
    <tr>
      <td>
        <ConditionIcon
          width={mobile ? 40 : 60}
          height={mobile ? 40 : 60}
          className="condition-icon"
          condition={item.conditionIcon}
        />
      </td>
      <td>
        <div className="forecast-table-temperature">
          {item.maxTemp}°C/<span>{item.minTemp}</span>
        </div>
      </td>
      <td style={{width: mobile ? '68px' : '100px'}}>
        <div className="forecast-table-date">
          <span>{item.date}</span>
        </div>
      </td>
      <td style={{maxWidth: '90px'}}>
        <div className="forecast-table-day">
          <span>{item.day}</span>
        </div>
      </td>
    </tr>
  );
};
