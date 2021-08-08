import { gql } from '@apollo/client';

const ADD_COMBAT_UNITS = gql`
  mutation AddGroundTargets($input: JSON!) {
    addUnits: addCombatUnitsToMap(input: $input)
  }
`;

export { ADD_COMBAT_UNITS }; // eslint-disable-line
