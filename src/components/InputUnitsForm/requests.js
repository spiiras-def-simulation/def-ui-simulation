import { gql } from '@apollo/client';

const GET_UNIT_ROLES = gql`
  query GetUnitRoles {
    roles: getCombatUnitRoles {
      id
      name
      unitType {
        id
        name
      }
    }
  }
`;

const ADD_COMBAT_UNITS = gql`
  mutation AddCombatUnits($input: JSON!) {
    addUnits: addCombatUnits(input: $input)
  }
`;

export { GET_UNIT_ROLES, ADD_COMBAT_UNITS }; // eslint-disable-line
