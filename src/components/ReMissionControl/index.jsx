import React, { useContext, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuery, useMutation } from '@apollo/client';
import Control from 'react-leaflet-control';
import { FeatureGroup } from 'react-leaflet';

import PointRecord from '../PointRecord';
import MarkerPosition from '../MarkerPosition';

import MapContext from '../ViewMap/context';

import { GET_MISSION_STATUS, LOAD_MISSION_TARGET_OBJECTS, RECALCULATE_MISSION } from './requests';

import './index.css';

const getPoint = ({ x, y }) => ({ x, y });
const printResult = result => {
  if (result === null) return 'Неизвестно';
  return result ? 'Выполнима' : 'Невыполнима';
};

const ReMissionControl = ({ id, position, stylization }) => {
  const { projection } = useContext(MapContext);
  const { data } = useQuery(GET_MISSION_STATUS, { variables: { id } });
  const [recalcualte, request] = useMutation(RECALCULATE_MISSION);
  const [loadTargets, { data: loadTargetsData }] = useMutation(LOAD_MISSION_TARGET_OBJECTS);

  const targets = useMemo(() => {
    const { objects = null } = loadTargetsData || {};
    return (
      objects &&
      objects.map(object => ({
        id: object.id,
        coordinates: projection.project(object.coordinates)
      }))
    );
  }, [loadTargetsData, projection]);

  const handleRecalculate = useCallback(() => {
    if (data && targets) {
      const { uavs, departurePoint, landingPoint, dumpAmmoPoint, ...mission } = data.mission;
      const input = {
        uavs: uavs.map(({ id: uavId }) => uavId),
        departurePoint: getPoint(departurePoint),
        landingPoint: getPoint(landingPoint),
        dumpAmmoPoint: getPoint(dumpAmmoPoint),
        targetsNumber: targets.length,
        targetsCoordinates: targets.map(({ coordinates }) => coordinates),
        ...mission
      };
      recalcualte({ variables: { id, input } });
    }
  }, [id, data, targets, recalcualte]);

  return (
    <>
      <Control position={position}>
        <div className={classNames('re-mission-control', stylization)}>
          <div className="control-title">
            <span className="title">Перерасчёт выбранной миссии</span>
          </div>
          <div className="control-content">
            <div className="request-control">
              <button
                className="request-button"
                type="button"
                disabled={!(data && targets)}
                onClick={handleRecalculate}
              >
                Пересчитать
              </button>
              <span className="request-result">
                {request.data ? printResult(request.data.result) : null}
              </span>
            </div>
            <div className="targets-status">
              <div className="targets-status-header">
                <span>Известные цели</span>
                <button type="button" onClick={loadTargets}>
                  Загрузить
                </button>
              </div>
              <ul className="targets-list">
                {targets &&
                  targets.map(target => (
                    <li key={target.id} className="target-element">
                      <PointRecord point={target.coordinates} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Control>
      {targets && (
        <FeatureGroup objects={targets}>
          {targets.map(target => (
            <MarkerPosition
              key={target.id}
              number={target.id}
              position={target.coordinates}
              options={{ color: 'black' }}
            />
          ))}
        </FeatureGroup>
      )}
    </>
  );
};

ReMissionControl.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.string,
  stylization: PropTypes.string
};

ReMissionControl.defaultProps = {
  position: 'topright',
  stylization: ''
};

export default ReMissionControl;
