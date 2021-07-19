import { gql } from '@apollo/client';

const GET_TARGET_OBJECTS = gql`
  query GetTargetObjects {
    objects: getTargetObjects {
      id
    }
  }
`;

const SUBSCRIBE_UPDATE_TARGETS_OBJECTS = gql`
  subscription OnUpdateTargetObjects {
    objects: onUpdateTargetObjectsList {
      id
    }
  }
`;

export { GET_TARGET_OBJECTS, SUBSCRIBE_UPDATE_TARGETS_OBJECTS }; // eslint-disable-line
