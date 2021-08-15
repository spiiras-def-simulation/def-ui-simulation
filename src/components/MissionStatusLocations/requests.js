import { gql } from '@apollo/client';

const GET_MISSION_LOCATIONS = gql`
  query GetMissionLocations($id: ID!) {
    locations: getCombatMission(id: $id) {
      id
      scoutingArea
      landingPoint
      dumpAmmoPoint
      departurePoint
    }
  }
`;

export { GET_MISSION_LOCATIONS }; // eslint-disable-line
