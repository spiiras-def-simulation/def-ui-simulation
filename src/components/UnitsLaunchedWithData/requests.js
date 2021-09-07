import { gql } from '@apollo/client';

const GET_UNITS_OBJECTS = gql`
  query GetUnitsGroupObjects {
    units: getCombatUnits {
      id
      role {
        name
      }
      status
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

export { GET_UNITS_OBJECTS, SUBSCRIBE_CHANGE_UNITS_STATUS }; // eslint-disable-line
