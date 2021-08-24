import { gql } from '@apollo/client';

const LOAD_MISSION_TARGET_OBJECTS = gql`
  mutation LoadMissionTargetObjects {
    objects: loadMissionTargetObjects {
      id
      coordinates {
        x
        y
      }
    }
  }
`;

export { LOAD_MISSION_TARGET_OBJECTS }; // eslint-disable-line
