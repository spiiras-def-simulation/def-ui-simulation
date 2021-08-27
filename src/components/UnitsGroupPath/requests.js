import { gql } from '@apollo/client';

const GET_MISSION_WITH_PATH = gql`
  query GetMissionPath($id: ID!) {
    mission: getCombatMission(id: $id) {
      id
      path {
        x
        y
      }
    }
  }
`;

export { GET_MISSION_WITH_PATH }; // eslint-disable-line
