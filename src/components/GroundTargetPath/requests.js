import { gql } from '@apollo/client';

const GET_TARGET_PATH = gql`
  query GetTargetPath($id: ID!) {
    object: getTargetObject(id: $id) {
      id
      path {
        x
        y
      }
    }
  }
`;

const SUBSCRIBE_TARGET_PATH = gql`
  subscription OnUpdateTargetPath($id: ID!) {
    object: onUpdateTargetObjectPath(id: $id) {
      id
      path {
        x
        y
      }
    }
  }
`;

export { GET_TARGET_PATH, SUBSCRIBE_TARGET_PATH }; // eslint-disable-line
