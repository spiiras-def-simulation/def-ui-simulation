import { gql } from '@apollo/client';

const SET_UNITS_MANUAL_CONTROL = gql`
  mutation SetUnitsManualControl {
    confirmUnitsManualControl
  }
`;

const SET_UNIT_MANUAL_CONTROL = gql`
  mutation SetUnitManualControl($id: ID!) {
    confirmUnitManualControl(id: $id)
  }
`;

export { SET_UNITS_MANUAL_CONTROL, SET_UNIT_MANUAL_CONTROL }; // eslint-disable-line
