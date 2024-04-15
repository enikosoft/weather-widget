import {getDetails, getGeocode} from 'use-places-autocomplete';

import {City} from 'types/city';

import {mapDataToCity} from 'utils/citiesUtils';

export const detectLocation = (callback: (city: City | null) => void) => {
  try {
    navigator.geolocation.watchPosition(
      function () {
        console.log('Detect your position:::');
      },
      function (error) {
        if (error.code == error.PERMISSION_DENIED) {
          console.log('User denied the request for Geolocation.');
          callback(null);
        }
      }
    );

    navigator.geolocation.getCurrentPosition(async (pos: GeolocationPosition) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      const geoCoderesult = await getGeocode({location: {lat, lng}});

      const placeId = geoCoderesult?.find(
        (res) => (res.types.includes('locality') && res.types.includes('political')) || res.types.includes('plus_code')
      )?.place_id;

      if (placeId) {
        const details = await getDetails({
          placeId,
          fields: ['place_id', 'geometry', 'address_components', 'photos'],
        });

        const city = await mapDataToCity(details);

        if (city) {
          return callback(city);
        }

        callback(null);
      }

      callback(null);
    });
  } catch (error) {
    console.error('Detect current location error:::', error);
  }
};
