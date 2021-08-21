import { gql } from '@apollo/client';

const GET_COMBAT_AREAS = gql`
  query GetCombatAreas($type: String!) {
    areas: getMapObjectsByType(type: $type) {
      id
      coordinates
    }
  }
`;

export { GET_COMBAT_AREAS }; // eslint-disable-line
