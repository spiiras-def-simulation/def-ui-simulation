import { gql } from '@apollo/client';

const GET_WEATHER_STATUS = gql`
  query GetWeatherStatus {
    status: getWeatherStatus {
      wind {
        direction {
          x
          y
          z
        }
        velocity
      }
      temperature
    }
  }
`;

export { GET_WEATHER_STATUS }; // eslint-disable-line
