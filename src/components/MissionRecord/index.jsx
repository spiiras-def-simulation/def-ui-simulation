import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MissionStatus from '../ViewOperationConfirmation/MissionStatus';

import './index.css';

const strHourTime = time => {
  const hours = Math.trunc(time);
  const minuts = Math.trunc(60 * (time % 1));
  const secunds = Math.round((60 * (time % 1)) % 1);
  const strHour = hours ? `${hours} часа ` : '';
  const strMinuts = minuts ? `${minuts} мин.` : '';
  const strSecunds = secunds ? `${secunds} сек.` : '';
  const strTime = `${strHour}${strMinuts}${strSecunds}`;
  return strTime || null;
};

const MissionRecord = ({ mission, stylization, onShow }) => {
  const { id, status, accomplished, directiveTime } = mission;

  const mapStatusRecord = useMemo(
    () =>
      new Map([
        [MissionStatus.ANALYSED, `${id}. ${accomplished ? 'Выполнима.' : 'Невыполнима.'}`],
        [MissionStatus.LAUNCHED, `${id}. Займёт ${strHourTime(directiveTime / 3600)}`],
        [MissionStatus.REJECTED, `${id}. ${accomplished ? 'Выполнима.' : 'Невыполнима.'}`],
        [MissionStatus.FINISHED, `${id}. Завершена.`]
      ]),
    [id, accomplished, directiveTime]
  );

  return (
    <div className={classNames('mission-record', stylization)}>
      <span>{mapStatusRecord.get(status)}</span>
      <button type="button" onClick={onShow}>
        Подробнее
      </button>
    </div>
  );
};

MissionRecord.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    directiveTime: PropTypes.number,
    accomplished: PropTypes.bool
  }).isRequired,
  stylization: PropTypes.string,
  onShow: PropTypes.func
};

MissionRecord.defaultProps = {
  stylization: '',
  onShow: () => {}
};

export default MissionRecord;
