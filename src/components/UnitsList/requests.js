import { gql } from '@apollo/client';

const GET_COMBAT_UNITS = gql`
  query GetCombatUnits {
    units: getCombatUnits {
      id
    }
  }
`;

export { GET_COMBAT_UNITS }; // eslint-disable-line
