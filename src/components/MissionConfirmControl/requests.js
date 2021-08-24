import { gql } from '@apollo/client';

const GET_MISSION_STATUS = gql`
  query GetMissionStatus($id: ID!) {
    mission: getCombatMission(id: $id) {
      id
      status

      directiveTime
      successLevel
      strikeLevel

      units: uavs {
        id
      }

      accomplished
    }
  }
`;

const CONFIRM_MISSION = gql`
  mutation ConfirmMission($id: ID!) {
    startCombatMission(id: $id)
  }
`;

export { GET_MISSION_STATUS, CONFIRM_MISSION }; // eslint-disable-line
