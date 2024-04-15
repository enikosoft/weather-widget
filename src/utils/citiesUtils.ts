import {getTimeZoneId} from 'api/timezone';

import {Option} from 'components/option/types';

import {City} from 'types/city';

// Map data from autocomplete `AutocompletePrediction` to options
export const mapDataToOptions = (places: google.maps.places.AutocompletePrediction[]): Option[] => {
  return places
    .filter(
      (suggestion) => suggestion.types.includes('locality') || suggestion.types.includes('administrative_area_level_2')
    )
    .map((place) => {
      return {
        key: place.place_id,
        label: place.description,
        value: place.place_id,
      };
    });
};

// Map result data from Google Place Api to city type
export const mapDataToCity = async (data: google.maps.places.PlaceResult | string): Promise<City | false> => {
  if (typeof data === 'string') return false;

  const {place_id, geometry} = data;

  // if lat or lng are undefined -> fetch weather by city name
  const lat = geometry?.location?.lat() || 0;
  const lng = geometry?.location?.lng() || 0;

  const tz = (await getTimeZoneId(lat, lng)) || {
    timeZoneId: 'undefined',
    timeZoneName: 'undefined',
    gmt: 'undefined',
  };

  const name = data?.address_components?.find(
    (cmp) => cmp.types.includes('locality') && cmp.types.includes('political')
  )?.long_name;
  const countryName = data?.address_components?.find(
    (cmp) => cmp.types.includes('country') && cmp.types.includes('political')
  )?.long_name;
  const countryCode = data?.address_components?.find(
    (cmp) => cmp.types.includes('country') && cmp.types.includes('political')
  )?.short_name;

  const photo = data?.photos?.[0]?.getUrl();

  if (!place_id || !name || !countryName || !countryCode) {
    return false;
  }

  return {
    id: place_id,
    name,
    fullAddress: `${name}, ${countryName}`,
    lat,
    lng,
    countryName,
    countryCode,
    photos: [photo || ''],
    timezone: tz,
  };
};
