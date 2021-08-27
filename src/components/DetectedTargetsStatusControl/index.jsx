import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';
import { useMutation } from '@apollo/client';

import ControlPanel from '../ControlPanel';
import DetectedTargetsListWithData from '../DetectedTargetsListWithData';

import { CONFIRM_ATTACK_TARGETS } from './requests';

import './index.css';

const DetectedTargetsStatusControl = ({ stylization, position, opened }) => {
  const [confirmAttackTargets, result] = useMutation(CONFIRM_ATTACK_TARGETS);
  const { data: answer, loading, error } = result;
  const { startAttack } = answer || {};
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('detected-targets-status-control', stylization)}
        title="Обнаруженные цели"
        opened={opened}
      >
        <div className="control-content">
          <div className="detected-controls">
            <button type="button" onClick={confirmAttackTargets}>
              Уничтожить
            </button>
            {loading && <span>Выполняется...</span>}
            {error && <span>Ошибка</span>}
            {startAttack && <span>Атака началась</span>}
          </div>
          <DetectedTargetsListWithData stylization="detected-list" />
        </div>
      </ControlPanel>
    </Control>
  );
};

DetectedTargetsStatusControl.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string,
  opened: PropTypes.bool
};

DetectedTargetsStatusControl.defaultProps = {
  stylization: '',
  position: '',
  opened: false
};

export default DetectedTargetsStatusControl;
