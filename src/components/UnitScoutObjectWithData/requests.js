import { gql } from '@apollo/client';

const GET_UNIT_OBJECT = gql`
  query GetUnitScoutObject($id: ID!) {
    object: getCombatUnit(id: $id) {
      id
      detectionRadius
      coordinates: globalPosition {
        x
        y
      }
    }
  }
`;

const SUBSCRIBE_UNIT_POSITION = gql`
  subscription OnUpdateUnitPosition($id: ID!) {
    object: onUpdateCombatUnitLocalPosition(id: $id) {
      id
      coordinates: localPosition {
        x
        y
      }
    }
  }
`;

export { GET_UNIT_OBJECT, SUBSCRIBE_UNIT_POSITION }; // eslint-disable-line
