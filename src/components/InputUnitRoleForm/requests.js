import { gql } from '@apollo/client';

const GET_ROLE_OPTIONS = gql`
  query GetRoleOptions {
    roleTypes: getCombatUnitRoleTypes {
      id
      name
    }
    types: getCombatUnitTypes {
      id
      name
    }
  }
`;

const ADD_UNIT_ROLE = gql`
  mutation AddCombatUnitRole($input: JSON!) {
    addUnitRole: addCombatUnitRole(input: $input) {
      id
    }
  }
`;

export { GET_ROLE_OPTIONS, ADD_UNIT_ROLE }; // eslint-disable-line
