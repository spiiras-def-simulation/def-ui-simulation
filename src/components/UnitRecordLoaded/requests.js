import { gql } from '@apollo/client';

const GET_COMBAT_UNIT = gql`
  query GetCombatUnit($id: ID!) {
    unit: getCombatUnit(id: $id) {
      id
      role {
        id
        name
      }
      type {
        id
        name
      }
    }
  }
`;

export { GET_COMBAT_UNIT }; // eslint-disable-line
