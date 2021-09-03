import { gql } from '@apollo/client';

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

export { LOAD_MISSION_TARGET_OBJECTS }; // eslint-disable-line
