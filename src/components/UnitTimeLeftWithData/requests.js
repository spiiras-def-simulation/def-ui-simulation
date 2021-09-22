import { gql } from '@apollo/client';

const GET_COMBAT_UNIT = gql`
  query GetCombatUnit($id: ID!) {
    unit: getCombatUnit(id: $id) {
      id
      timeLeft
    }
  }
`;

const SUBSCRIBE_UNIT_TIME_LEFT = gql`
  subscription OnUpdateTimeLeft($id: ID!) {
    unit: onUpdateCombatUnitTimeLeft(id: $id) {
      id
      timeLeft
    }
  }
`;

export { GET_COMBAT_UNIT, SUBSCRIBE_UNIT_TIME_LEFT }; // eslint-disable-line
