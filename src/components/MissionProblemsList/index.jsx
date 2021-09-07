import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const mapProblems = {
  LOST: 'нет сигнала'
};

const MissionProblemsList = ({ units, setUnitsControl, setUnitControl, stylization }) => {
  return (
    <div className={classNames('mission-problems-list', stylization)}>
      <p className="list-header list-block">
        {units.length ? `Обнаружено проблем - ${units.length} шт.` : 'Проблем не обнаружено'}
      </p>
      {units.length ? (
        <button className="list-control list-block" type="button" onClick={setUnitsControl}>
          Ручное управление группой
        </button>
      ) : (
        ''
      )}
      <ul className="list-elements list-block">
        {units.reverse().map(({ id, status, role }, i) => (
          <li key={id} className="list-element">
            <p>
              {i + 1}. №{id} {role ? ` (${role.name[0]})` : ''} - {mapProblems[status]}
            </p>
            <button className="list-control" type="button" onClick={() => setUnitControl(id)}>
              Ручное управление БпЛА
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

MissionProblemsList.propTypes = {
  units: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      status: PropTypes.string,
      role: PropTypes.shape({
        name: PropTypes.string
      })
    })
  ).isRequired,
  setUnitsControl: PropTypes.func,
  setUnitControl: PropTypes.func,
  stylization: PropTypes.string
};

MissionProblemsList.defaultProps = {
  setUnitsControl: () => {},
  setUnitControl: () => {},
  stylization: ''
};

export default MissionProblemsList;
