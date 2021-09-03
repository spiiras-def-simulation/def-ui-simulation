import { gql } from '@apollo/client';

const GET_MISSION_STATUS = gql`
  query GetMissionStatus {
    mission: getLaunchedCombatMission {
      id
      directiveTime
      successLevel
      strikeLevel
    }
  }
`;

export { GET_MISSION_STATUS }; // eslint-disable-line
