import {ChangeEvent, useCallback} from 'react';
import usePlacesAutocomplete, {getDetails} from 'use-places-autocomplete';

import {Option} from 'components/option/types';
import ReactSearchAutocomplete from 'components/select/ReactSearchAutocomplete';

import {City} from 'types/city';

import {mapDataToCity, mapDataToOptions} from 'utils/citiesUtils';

interface Props {
  mobileAndTablet?: boolean;
  showInputSearchIcon?: boolean;
  onSelect: (city: City) => void;
}

export const CitySelect = (props: Props) => {
  const {onSelect} = props;

  const {
    ready,
    value,
    setValue,
    suggestions: {status, data},
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['(cities)'],
      language: 'en',
    },

    debounce: 500,
  });

  // get place details from Google autocomplete
  const getCityDetails = useCallback(async (placeId: string) => {
    const parameter = {
      placeId,
      fields: ['place_id', 'geometry', 'address_components', 'photos', 'utc_offset_minutes', 'timezone'],
    };

    return getDetails(parameter);
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSelect = async (option: Option) => {
    try {
      const details = await getCityDetails(option.key as string);

      const city = await mapDataToCity(details);

      if (city) {
        onSelect(city);
        clearSuggestions();
        setValue('');

        return;
      }

      // @TODO: add inform that city details is unavailable
    } catch (e) {
      console.error(e);
    }
  };

  const options = mapDataToOptions(data);
  const showNoResults = status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS;

  return (
    <ReactSearchAutocomplete
      items={options}
      onSearch={handleSearch}
      onSelect={handleSelect}
      autoFocus
      placeholder="Type here"
      inputSearchString={value}
      isLoading={!ready}
      showNoResults={showNoResults}
    />
  );
};

export default CitySelect;
