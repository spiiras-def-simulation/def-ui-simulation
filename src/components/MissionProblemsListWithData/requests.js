import { gql } from '@apollo/client';

const GET_MISSION_PROBLEMS = gql`
  query GetMissionUnits($id: ID!) {
    mission: getCombatMission(id: $id) {
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

const SUBCRIBE_CHANGE_UNITS_STATUS = gql`
  subscription OnSubscribeChangeUnitStatus {
    units: onChangeStatusCombatUnits {
      id
      status
    }
  }
`;

const SET_UNITS_MANUAL_CONTROL = gql`
  mutation SetUnitsManualControl {
    confirmUnitsManualControl
  }
`;

const SET_UNIT_MANUAL_CONTROL = gql`
  mutation SetUnitManualControl($id: ID!) {
    confirmUnitManualControl(id: $id)
  }
`;

export {
  GET_MISSION_PROBLEMS,
  SUBCRIBE_CHANGE_UNITS_STATUS,
  SET_UNITS_MANUAL_CONTROL,
  SET_UNIT_MANUAL_CONTROL
}; // eslint-disable-line
