import { gql } from '@apollo/client';

const GET_UNITS_GROUP_STATUS = gql`
  query GetUnitsGroupStatus($missionId: ID!) {
    mission: getCombatMission(id: $missionId) {
      id
      units: uavs {
        id
      }
    }
  }
`;

export { GET_UNITS_GROUP_STATUS }; // eslint-disable-line
