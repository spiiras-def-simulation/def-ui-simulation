import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Control from 'react-leaflet-control';

import './index.css';

const eventTypes = {
  OPERATION: 'operation',
  WEATHER: 'weather',
  GROUND_TARGETS: 'groundTargets',
  UNITS: 'units'
};

const operation = {
  startTime: new Date(2021, 5, 1, 10, 0, 0),
  currentTime: new Date(2021, 5, 1, 10, 45, 30),
  maxTime: new Date(2021, 5, 1, 22, 0, 0)
};
const events = [
  { id: 1, time: new Date(2021, 5, 1, 11, 0, 0), type: eventTypes.WEATHER },
  { id: 3, time: new Date(2021, 5, 1, 16, 0, 0), type: eventTypes.GROUND_TARGETS },
  { id: 4, time: new Date(2021, 5, 1, 20, 0, 0), type: eventTypes.UNITS }
];
const missions = [
  { id: 1, name: 'Миссия 1', startTime: new Date(2021, 5, 1, 12, 0, 0) },
  { id: 2, name: 'Миссия 2', startTime: new Date(2021, 5, 1, 13, 0, 0) },
  { id: 3, name: 'Миссия 3', startTime: new Date(2021, 5, 1, 14, 0, 0) }
];

const getEventOffset = eventTime => {
  const offsetValue = (eventTime - operation.startTime) / (operation.maxTime - operation.startTime);
  return `${offsetValue * 100}%`;
};
const typeStylesMap = new Map([
  [eventTypes.WEATHER, 'event-weather'],
  [eventTypes.OPERATION, 'event-operation'],
  [eventTypes.GROUND_TARGETS, 'event-ground-targets'],
  [eventTypes.UNITS, 'event-untis']
]);

const EventsTimeline = ({ stylization, position }) => {
  return (
    <Control position={position}>
      <div className={classNames('events-timeline', stylization)}>
        <div className="timeline-panel">
          <div className="timeline-events">
            <div
              className="timeline-event event-current-time"
              style={{ top: getEventOffset(operation.currentTime) }}
            />
            <div
              className="timeline-event event-interval"
              style={{ top: getEventOffset(operation.startTime) }}
            />
            <div
              className="timeline-event event-interval"
              style={{ top: getEventOffset(operation.maxTime) }}
            />
            {events.map(({ id, time, type }) => (
              <div
                key={id}
                className={classNames('timeline-event', typeStylesMap.get(type))}
                style={{ top: getEventOffset(time) }}
              />
            ))}
            {missions
              .map((mission, index) => ({ ...mission, order: index + 1 }))
              .map(({ id, order, startTime }) => (
                <div
                  key={id}
                  className="timeline-event event-mission"
                  style={{ top: getEventOffset(startTime) }}
                >
                  <span>{order}</span>
                </div>
              ))}
          </div>
        </div>
        <button type="button" className="add-event-button">
          <i className="fas fa-plus" />
        </button>
      </div>
    </Control>
  );
};

EventsTimeline.propTypes = {
  stylization: PropTypes.string,
  position: PropTypes.string
};

EventsTimeline.defaultProps = {
  stylization: '',
  position: 'topright'
};

export default EventsTimeline;
