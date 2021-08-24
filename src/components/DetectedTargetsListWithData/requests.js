import { gql } from '@apollo/client';

const GET_TARGET_OBJECTS = gql`
  query GetTargetObjects {
    objects: getTargetObjects {
      id
      status
    }
  }
`;

const SUBSCRIBE_CHANGE_TARGET_OBJECTS = gql`
  subscription OnUpdateUnitPosition {
    objects: onChangeStatusTargetObjects {
      id
      status
    }
  }
`;

export { GET_TARGET_OBJECTS, SUBSCRIBE_CHANGE_TARGET_OBJECTS }; // eslint-disable-line
