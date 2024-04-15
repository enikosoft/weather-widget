import {useCallback} from 'react';

import {useFavoritesStore} from 'state/favorites';

import {CurrentTime} from 'pages/dashboard/components/CurrentTime';

import {LikeIcon} from 'components/like-icon/LikeIcon';
import {ConditionIcon} from 'components/weather-icon/ConditionIcon';

import {FavoriteCity} from 'types/city';

import {StyledFavoriteCard} from './styles';

import defaultCityBanner from 'assets/images/defaultCityBanner.jpeg';

interface Props {
  city: FavoriteCity;
}

export const FavoriteCard = (props: Props) => {
  const {city} = props;
  const {photos, name, countryName} = city;

  const [isLiked, toggleFavorite, isDisabled] = useFavoritesStore((state) => [
    state.isLiked(city.id),
    state.toggle,
    state.isDisabled,
  ]);

  const handleToggleFavorite = useCallback(() => toggleFavorite(city), []);

  const cityBanner = photos[0] || defaultCityBanner;

  return (
    <StyledFavoriteCard>
      <div className="city-photo">
        <img src={cityBanner} alt={name} height={250} width={250}></img>
      </div>
      <div className="city-info">
        <div className="city-info-header">
          <div className="city-info-title">
            <span>{name}</span>
            <span>{countryName}</span>
          </div>

          <LikeIcon disabled={isDisabled() && !isLiked} isLiked={isLiked} onClick={handleToggleFavorite} />
        </div>
        <div className="weather-info">
          <>
            {city.conditionIcon && (
              <div className="weather">
                <div className="forecast-icon">
                  <ConditionIcon condition={city.conditionIcon} width={65} height={45} />
                </div>
                <div className="forecast-temperature">
                  {city.maxTemp}°C/<span>{city.minTemp}</span>
                </div>
              </div>
            )}

            <div className="forecast-date">
              <CurrentTime compact city={city} />
            </div>
          </>
        </div>
      </div>
    </StyledFavoriteCard>
  );
};
