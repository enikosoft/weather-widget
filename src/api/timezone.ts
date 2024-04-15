import {formatTimezoneOffset} from 'utils/time';

import {GOOGLE_API_KEY} from 'config/api';

export const getTimeZoneId = async (lat: number, lng: number) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const apiKey = GOOGLE_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      const {timeZoneId, timeZoneName, dstOffset, rawOffset} = data;
      return {
        timeZoneId,
        timeZoneName,
        gmt: formatTimezoneOffset(rawOffset, dstOffset),
      };
    } else {
      console.error('Failed to retrieve time zone information.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
