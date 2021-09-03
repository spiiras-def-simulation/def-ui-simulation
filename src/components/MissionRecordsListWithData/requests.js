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

const SUBSCRIBE_CHANGE_MISSIONS_STATUS = gql`
  subscription OnChangeMissionsStatus {
    missions: onChangeStatusCombatMissions {
      id
      status
    }
  }
`;

export { GET_MISSIONS_LIST, SUBSCRIBE_CHANGE_MISSIONS_STATUS }; // eslint-disable-line
