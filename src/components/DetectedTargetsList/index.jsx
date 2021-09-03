import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import DetectedTargetRecord from '../DetectedTargetRecord';

const DetectedTargetsList = ({ objects, stylization, subToUpdate }) => {
  useEffect(() => subToUpdate(), [subToUpdate]);
  return (
    <div className={classNames('detected-targets-list', stylization)}>
      {objects.map(({ id }, number) => (
        <DetectedTargetRecord key={id} id={id} number={number + 1} stylization="list-element" />
      ))}
    </div>
  );
};

DetectedTargetsList.propTypes = {
  objects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ).isRequired,
  stylization: PropTypes.string,
  subToUpdate: PropTypes.func
};

DetectedTargetsList.defaultProps = {
  stylization: '',
  subToUpdate: () => {}
};

export default DetectedTargetsList;
