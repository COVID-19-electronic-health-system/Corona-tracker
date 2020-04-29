import axios from 'axios';
import { mapboxToken } from './constants';

const mapboxUrl = 'https://api.mapbox.com';

const searchPlaces = async searchText => {
  if (!searchText) {
    return [];
  }

  const url = `${mapboxUrl}/geocoding/v5/mapbox.places/${searchText}.json?access_token=${mapboxToken}&types=place`;
  const res = await axios.get(url);
  return res.data.features.map(feature => {
    const place = {
      name: feature.place_name,
      city: feature.text,
      state: {
        name: '',
        abbreviation: '',
      },
      country: '',
    };

    feature.context.forEach(context => {
      const dataType = context.id.split('.')[0];
      switch (dataType) {
        case 'region':
          place.state.name = context.text;

          if (!context.short_code) {
            break;
          }

          // eslint-disable-next-line no-case-declarations
          const [country, state] = context.short_code.split('-');
          if (country.toUpperCase() === 'US') {
            place.state.abbreviation = state;
          }
          break;
        case 'country':
          place.country = context.text;
          break;
        default:
          break;
      }
    });

    return place;
  });
};

export default { searchPlaces };
