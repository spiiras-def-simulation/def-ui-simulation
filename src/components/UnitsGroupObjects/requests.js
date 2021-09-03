import { gql } from '@apollo/client';

const GET_UNITS_GROUP_OBJECTS = gql`
  query GetUnitsGroupStatus($missionId: ID!) {
    mission: getCombatMission(id: $missionId) {
      id
      units: uavs {
        id
        status
        role {
          name
        }
      }
    }
  }
`;

export { GET_UNITS_GROUP_OBJECTS }; // eslint-disable-line
