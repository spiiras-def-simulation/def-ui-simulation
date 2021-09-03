import { gql } from '@apollo/client';

const GET_TARGET_OBJECT = gql`
  query GetTargetObject($id: ID!) {
    object: getTargetObject(id: $id) {
      id
      coordinates {
        x
        y
      }
      path {
        x
        y
      }
    }
  }
`;

const SUBSCRIBE_TARGET_POSITION = gql`
  subscription OnUpdateTargetPosition($id: ID!) {
    object: onUpdateTargetObjectPosition(id: $id) {
      id
      coordinates {
        x
        y
      }
    }
  }
`;

export { GET_TARGET_OBJECT, SUBSCRIBE_TARGET_POSITION }; // eslint-disable-line
