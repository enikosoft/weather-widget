import {useNavigate} from 'react-router-dom';

import {useCityStore} from 'state/city';

import {Card} from 'components/card/Card';

import {City, FavoriteCity} from 'types/city';

import {FavoriteCard} from './FavoriteCard';
import {StyledFavoriteWrapper} from './styles';

interface Props {
  favorites: FavoriteCity[];
}

export const FavoriteLayout = (props: Props) => {
  const {favorites} = props;
  const navigate = useNavigate();
  const setCity = useCityStore((state) => state.add);

  const onClick = (city: City) => () => {
    setCity(city);
    navigate('/');
  };

  return (
    <StyledFavoriteWrapper>
      {favorites.map((city, index) => (
        <Card padding={40} clickable onClick={onClick(city)} key={`f-item-${index}-${city.id}`}>
          <FavoriteCard city={city} />
        </Card>
      ))}
    </StyledFavoriteWrapper>
  );
};
