import { gql } from '@apollo/client';

const GET_UNIT_ATTACK_POINTS = gql`
  query GetUnitAttackPoints($id: ID!) {
    unit: getCombatUnit(id: $id) {
      id
      status
      coordinates: globalPosition {
        x
        y
      }
      attackPoints {
        x
        y
      }
    }
  }
`;

const SUBSCRIBE_CHANGE_UNIT_STATUS = gql`
  subscription onChangeUnitStatus($id: ID!) {
    unit: onChangeStatusCombatUnit(id: $id) {
      id
      status
      attackPoints {
        x
        y
      }
    }
  }
`;

export { GET_UNIT_ATTACK_POINTS, SUBSCRIBE_CHANGE_UNIT_STATUS }; // eslint-disable-line
