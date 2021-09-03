import { gql } from '@apollo/client';

const GET_UNITS_GROUP_OBJECTS = gql`
  query GetUnitsGroupObjects {
    mission: getLaunchedCombatMission {
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

const SUBSCRIBE_CHANGE_UNITS_STATUS = gql`
  subscription onChangeUnitsStatus {
    units: onChangeStatusCombatUnits {
      id
      status
    }
  }
`;

export { GET_UNITS_GROUP_OBJECTS, SUBSCRIBE_CHANGE_UNITS_STATUS }; // eslint-disable-line
