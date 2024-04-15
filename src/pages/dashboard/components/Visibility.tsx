import {DashboardLittleComponent} from './styles';

export const Visibility = ({visibility}: {visibility?: number}) => {
  return (
    <DashboardLittleComponent style={{alignItems: 'start'}}>
      <div className="left-side">
        <span className="value">{visibility || 21.2}</span> <span className="value-label">km</span>
      </div>

      <div className="right-side">
        <span>The fog is affecting visibility.</span>
      </div>
    </DashboardLittleComponent>
  );
};
