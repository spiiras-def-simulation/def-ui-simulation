import { gql } from '@apollo/client';

const CONFIRM_ATTACK_TARGETS = gql`
  mutation ConfirmAttackTargets {
    startAttack: confirmMissionAttackTargets
  }
`;

export { CONFIRM_ATTACK_TARGETS }; // eslint-disable-line
