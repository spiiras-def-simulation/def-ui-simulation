import { gql } from '@apollo/client';

const GET_TARGET_POSITION = gql`
  query GetTargetPosition($id: ID!) {
    object: getTargetObject(id: $id) {
      id
      coordinates {
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

export { GET_TARGET_POSITION, SUBSCRIBE_TARGET_POSITION }; // eslint-disable-line
