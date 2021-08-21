import { gql } from '@apollo/client';

const GET_MISSIONS_LIST = gql`
  query GetMissionsList {
    missions: getCombatMissions {
      id
      status
      directiveTime
      accomplished
    }
  }
`;

export { GET_MISSIONS_LIST }; // eslint-disable-line
