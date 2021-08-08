import { gql } from '@apollo/client';

const ADD_MISSION = gql`
  mutation AddCombatMission($input: JSON!) {
    addMission: addCombatMission(input: $input)
  }
`;

export { ADD_MISSION }; // eslint-disable-line
