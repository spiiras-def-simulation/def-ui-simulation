import { gql } from '@apollo/client';

const GET_UNIT_ROLES = gql`
  query GetUnitRoles {
    roles: getCombatUnitRoles {
      id
      name
      unitType {
        id
        name
      }
    }
  }
`;

export { GET_UNIT_ROLES }; // eslint-disable-line
