import { gql } from '@apollo/client';

const GET_UNIT_STATUS_RECORD = gql`
  query GetUnitStatusRecord($id: ID!) {
    unit: getCombatUnit(id: $id) {
      id
      status
      role {
        name
      }
      type {
        name
      }
    }
  }
`;

const SUBCRIBE_CHANGE_UNIT_STATUS = gql`
  subscription OnSubscribeChangeUnitStatus($id: ID!) {
    unit: onChangeStatusCombatUnit(id: $id) {
      id
      status
    }
  }
`;

export { GET_UNIT_STATUS_RECORD, SUBCRIBE_CHANGE_UNIT_STATUS }; // eslint-disable-line
