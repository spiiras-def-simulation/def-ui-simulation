import { gql } from '@apollo/client';

const GET_COMBAT_UNIT_WEAPONS = gql`
  query GetCombatUnitWeapons {
    weapons: getCombatUnitWeaponTypes {
      id
      name
    }
  }
`;

export { GET_COMBAT_UNIT_WEAPONS }; // eslint-disable-line
