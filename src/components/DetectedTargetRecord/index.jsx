import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import PointRecord from '../PointRecord';

import MapContext from '../ViewMap/context';

import { GET_TARGET_OBJECT } from './requests';

import './index.css';

const DetectedTargetRecord = ({ id, stylization }) => {
  const { projection } = useContext(MapContext);
  const [showImage, setShowImage] = useState(false);
  const { data, loading, error } = useQuery(GET_TARGET_OBJECT, { variables: { id } });

  if (loading || error) return null;

  const { type, image } = data.object;
  const coordinates = data.object.coordinates ? projection.project(data.object.coordinates) : null;
  return (
    <div className={classNames('detected-target-record', stylization)}>
      <div className="record-header">
        <span className="header-element">{type}</span>
        <button
          type="button"
          onClick={() => setShowImage(!showImage)}
          className="show-button header-element"
        >
          Показать
        </button>
        <button type="button" className="strike-button header-element">
          Уничтожить
        </button>
      </div>
      {coordinates && (
        <div className="record-descriptor">
          <PointRecord point={coordinates} />
        </div>
      )}
      {image && showImage && (
        <img className="image" src={`data:image/png;base64, ${image}`} alt="Изображение цели" />
      )}
    </div>
  );
};

DetectedTargetRecord.propTypes = {
  id: PropTypes.string.isRequired,
  stylization: PropTypes.string
};

DetectedTargetRecord.defaultProps = {
  stylization: ''
};

export default DetectedTargetRecord;
