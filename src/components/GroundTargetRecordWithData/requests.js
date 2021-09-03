import { gql } from '@apollo/client';

const GET_TARGET_OBJECT = gql`
  query GetTargetObject($id: ID!) {
    object: getTargetObject(id: $id) {
      id
      status
      type
      coordinates {
        x
        y
      }
    }
  }
`;

const SUBSCRIBE_TARGET_OBJECT = gql`
  subscription OnUpdateTargetObjectPosition($id: ID!) {
    object: onUpdateTargetObjectPosition(id: $id) {
      id
      coordinates {
        x
        y
      }
    }
  }
`;

export { GET_TARGET_OBJECT, SUBSCRIBE_TARGET_OBJECT }; // eslint-disable-line
