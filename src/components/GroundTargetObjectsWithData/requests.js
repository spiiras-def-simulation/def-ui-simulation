import { gql } from '@apollo/client';

const GET_TARGETS_OBJECTS = gql`
  query GetTargets {
    objects: getTargetObjects {
      id
      status
    }
  }
`;

const SUBSCRIBE_CHANGE_TARGETS_STATUS = gql`
  subscription OnChangeTargetsStatus {
    objects: onChangeStatusTargetObjects {
      id
      status
    }
  }
`;

export { GET_TARGETS_OBJECTS, SUBSCRIBE_CHANGE_TARGETS_STATUS }; // eslint-disable-line
