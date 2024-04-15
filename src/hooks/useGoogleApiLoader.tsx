import {Library} from '@googlemaps/js-api-loader';
import {useJsApiLoader} from '@react-google-maps/api';

import {GOOGLE_API_KEY} from 'config/api';
import {libraries} from 'config/google-api';

export const useGoogleApiLoader = () => {
  const {isLoaded} = useJsApiLoader({
    libraries: libraries as Library[],
    language: 'en',
    preventGoogleFontsLoading: true,
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  return isLoaded;
};
