import {useCallback} from 'react';
import {FaMapMarkerAlt} from 'react-icons/fa';

import {useFavoritesStore} from 'state/favorites';

import {LikeIcon} from 'components/like-icon/LikeIcon';

import {City} from 'types/city';

import {CityTitleStyled, HeaderSubText, HeaderText} from './styles';

export const CityTitle = (props: {city: City}) => {
  const {city} = props;

  const [isLiked, toggleFavorite, isDisabled] = useFavoritesStore((state) => [
    state.isLiked(city.id),
    state.toggle,
    state.isDisabled(),
  ]);

  const handleToggleFavorite = useCallback(() => toggleFavorite(city), [city]);

  return (
    <CityTitleStyled>
      <div>
        <FaMapMarkerAlt className="marker-icon" />
        <div className="city-title-label">
          <HeaderText>{props.city.name},</HeaderText>
          <HeaderSubText>{props.city.countryName}</HeaderSubText>
        </div>
      </div>
      <LikeIcon disabled={isDisabled && !isLiked} onClick={handleToggleFavorite} isLiked={isLiked} />
    </CityTitleStyled>
  );
};
