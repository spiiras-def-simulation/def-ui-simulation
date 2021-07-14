import { gql } from '@apollo/client';

const SUBSCRIBE_TARGET_OBJECT_POSITION = gql`
  subscription OnUpdateTargetObjectPosition($id: ID!) {
    target: onUpdateTargetObjectPosition(id: $id) {
      id
      coordinates {
        x
        y
      }
    }
  }
`;

export { SUBSCRIBE_TARGET_OBJECT_POSITION }; // eslint-disable-line
