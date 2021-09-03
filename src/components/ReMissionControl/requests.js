import { gql } from '@apollo/client';

const GET_MISSION_STATUS = gql`
  query GetMissionStatus($id: ID!) {
    mission: getCombatMission(id: $id) {
      id
      directiveTime
      numLaunch
      timeLaunch
      successLevel
      scoutingArea
      dumpAmmoPoint {
        x
        y
      }
      departurePoint {
        x
        y
      }
      landingPoint {
        x
        y
      }
      uavs {
        id
      }
    }
  }
`;

const LOAD_MISSION_TARGET_OBJECTS = gql`
  mutation LoadMissionTargetObjects {
    objects: loadDetectedTargetObjects {
      id
      coordinates: detectedCoordinates {
        x
        y
      }
    }
  }
`;

const RECALCULATE_MISSION = gql`
  mutation RecalculateCombatMission($id: ID!, $input: JSON!) {
    result: recalculateCombatMission(id: $id, input: $input)
  }
`;

export { GET_MISSION_STATUS, LOAD_MISSION_TARGET_OBJECTS, RECALCULATE_MISSION }; // eslint-disable-line
