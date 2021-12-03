import PropTypes from 'prop-types';

export default {
  children: PropTypes.node,
  treatmentName: PropTypes.string,
  chosenTreatment: PropTypes.string,
  onClick: PropTypes.func,
  isReady: PropTypes.bool,
  config: PropTypes.object,
  instrumentation: PropTypes.object,
  translate: PropTypes.bool,
};
