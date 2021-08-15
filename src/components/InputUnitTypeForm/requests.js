import { gql } from '@apollo/client';

const GET_COMBAT_UNIT_WEAPONS = gql`
  query GetCombatUnitWeapons {
    weapons: getCombatUnitWeaponTypes {
      id
      name
    }
  }
`;

const ADD_UNIT_TYPE = gql`
  mutation AddCombatUnitType($input: JSON!) {
    addUnitType: addCombatUnitType(input: $input) {
      id
    }
  }
`;

export { GET_COMBAT_UNIT_WEAPONS, ADD_UNIT_TYPE }; // eslint-disable-line
