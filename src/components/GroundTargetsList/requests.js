import { gql } from '@apollo/client';

const GET_TARGET_OBJECTS = gql`
  query GetTargetObjects {
    objects: getTargetObjects {
      id
    }
  }
`;

export { GET_TARGET_OBJECTS }; // eslint-disable-line
