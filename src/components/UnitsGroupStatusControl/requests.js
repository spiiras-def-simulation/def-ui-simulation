import { gql } from '@apollo/client';

const GET_UNITS_GROUP_STATUS = gql`
  query GetUnitsGroupStatus {
    mission: getLaunchedCombatMission {
      id
      units: uavs {
        id
      }
    }
  }
`;

export { GET_UNITS_GROUP_STATUS }; // eslint-disable-line
