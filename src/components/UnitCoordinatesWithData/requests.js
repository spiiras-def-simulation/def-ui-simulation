import { gql } from '@apollo/client';

const GET_COMBAT_UNIT = gql`
  query GetCombatUnit($id: ID!) {
    unit: getCombatUnit(id: $id) {
      id
      coordinates: localPosition {
        x
        y
      }
    }
  }
`;

const SUBSCRIBE_UNIT_POSITION = gql`
  subscription OnUpdateUnitPosition($id: ID!) {
    unit: onUpdateCombatUnitLocalPosition(id: $id) {
      id
      coordinates: localPosition {
        x
        y
      }
    }
  }
`;

export { GET_COMBAT_UNIT, SUBSCRIBE_UNIT_POSITION }; // eslint-disable-line
