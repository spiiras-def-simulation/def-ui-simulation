import PropTypes from 'prop-types';

export default Object.freeze({
  telemetry: {
    battery: PropTypes.string,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    lastActivity: PropTypes.string
  }
});
