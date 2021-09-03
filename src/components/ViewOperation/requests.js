import { gql } from '@apollo/client';

const GET_LAUNCHED_MISSION = gql`
  query GetLaunchedMission {
    mission: getLaunchedCombatMission {
      id
    }
  }
`;

export { GET_LAUNCHED_MISSION }; // eslint-disable-line
