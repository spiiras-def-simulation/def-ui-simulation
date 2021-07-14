import { gql } from '@apollo/client';

const ADD_GROUND_TARGETS = gql`
  mutation AddGroundTargets($input: JSON!) {
    addTargetObjectsToMap(input: $input)
  }
`;

export { ADD_GROUND_TARGETS }; // eslint-disable-line
