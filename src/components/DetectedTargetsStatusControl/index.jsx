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
  const [confirmAttackTargets, confirmResult] = useMutation(CONFIRM_ATTACK_TARGETS);
  const { startAttack } = confirmResult.data || {};
  return (
    <Control position={position}>
      <ControlPanel
        stylization={classNames('detected-targets-status-control', stylization)}
        title="Обнаруженные цели"
        opened={opened}
      >
        <div className="control-content">
          <div className="detected-controls">
            <div className="detected-control">
              <button className="confirm-button" type="button" onClick={confirmAttackTargets}>
                Подтвердить сброс СГ
              </button>
              {confirmResult.loading && <span>Запрос...</span>}
              {confirmResult.error && <span>Ошибка</span>}
              {startAttack && <span>Подтверждено</span>}
            </div>
            <div className="detected-control">
              <button className="reject-button" type="button" onClick={() => {}}>
                Отклонить сброс СГ
              </button>
            </div>
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
