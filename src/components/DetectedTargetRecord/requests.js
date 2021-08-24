import { gql } from '@apollo/client';

const GET_TARGET_OBJECT = gql`
  query GetTargetObject($id: ID!) {
    object: getTargetObject(id: $id) {
      id
      type
      image
      coordinates {
        x
        y
      }
    }
  }
`;

export { GET_TARGET_OBJECT }; // eslint-disable-line
