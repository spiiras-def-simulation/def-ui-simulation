import { gql } from '@apollo/client';

const GET_MISSION_STATUS = gql`
  query GetMissionStatus($id: ID!) {
    mission: getCombatMission(id: $id) {
      id
      directiveTime
      timeLaunch
      numLaunch
      successLevel
      strikeLevel
    }
  }
`;

export { GET_MISSION_STATUS }; // eslint-disable-line
