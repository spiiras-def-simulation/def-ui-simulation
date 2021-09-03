import { gql } from '@apollo/client';

const GET_DETECTED_TARGET_OBJECTS = gql`
  query GetDetectedTargetObjects {
    objects: getDetectedTargetObjects {
      id
      detectedCoordinates {
        x
        y
      }
    }
  }
`;

const SUBSCRIBE_DETECT_TARGET_OBJECTS = gql`
  subscription OnDetectTargetObjects {
    objects: onDetectTargetObjects {
      id
      detectedCoordinates {
        x
        y
      }
    }
  }
`;

export { GET_DETECTED_TARGET_OBJECTS, SUBSCRIBE_DETECT_TARGET_OBJECTS }; // eslint-disable-line
