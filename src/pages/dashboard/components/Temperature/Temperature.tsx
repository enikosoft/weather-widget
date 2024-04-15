import {DateTime} from 'luxon';
import {AiOutlineCalendar} from 'react-icons/ai';

import {ConditionIcon} from 'components/weather-icon/ConditionIcon';

import {Wrapper} from './styles';

interface Props {
  temperature: number;
  conditions: string;
  icon: string;
  dataUpdatedAt: number;
  description?: string;
}

export const Temperature = (props: Props) => {
  const {temperature, conditions, icon, description, dataUpdatedAt} = props;

  const currentTime = DateTime.fromJSDate(new Date(dataUpdatedAt));

  const lastUpdatedTime = currentTime.toFormat('h:mm a');
  const lastUpdatedDate = currentTime.toFormat('dd LLL, yyyy');

  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <div className="temperature">{temperature} °C</div>
          <div className="conditions">{conditions}</div>
        </div>
        <div className="col">
          <ConditionIcon height={200} width={200} className="condition_icon" condition={icon} />
        </div>
      </div>
      <div className="description">{description}</div>

      <div className="row time-row">
        <div className="updatedAt-date">
          <AiOutlineCalendar />
          <span>{lastUpdatedDate}</span>
        </div>
        <div className="updatedAt-time">{lastUpdatedTime}</div>
      </div>
    </Wrapper>
  );
};
