import { gql } from '@apollo/client';

const ADD_UNIT_TYPE = gql`
  mutation AddUnitType($input: JSON!) {
    addUnitType(input: $input) {
      id
    }
  }
`;

export { ADD_UNIT_TYPE }; // eslint-disable-line
