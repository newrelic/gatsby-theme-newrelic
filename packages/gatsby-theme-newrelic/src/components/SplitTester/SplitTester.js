import React from 'react';
import PropTypes from 'prop-types';
import SplitTreatment from './SplitTreatment';
import SplitDefault from './SplitDefault';
import {
  useTreatments,
  useTrack,
  SplitContext,
} from '@splitsoftware/splitio-react';

const SplitTester = ({ splitEventName, children, ...rest }) => {
  const track = useTrack();

  const treatments = useTreatments([splitEventName]);
  const { treatment: chosenTreatment, config } = treatments[splitEventName];
  const { isReady } = React.useContext(SplitContext);

  const splitInstrumentation = {
    eventName: 'splitTestClick',
    category: 'SplitTestComponent',
    treatmentName: chosenTreatment,
    splitEventName,
  };
  const handleSplitClick = () => {
    track(splitEventName);
  };

  return (
    children && (
      <>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            chosenTreatment,
            splitEventName,
            onClick: handleSplitClick,
            instrumentation: splitInstrumentation,
            config,
            isReady,
            ...rest,
          })
        )}
      </>
    )
  );
};

SplitTester.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  treatmentName: PropTypes.string,
  splitEventName: PropTypes.string,
  rest: PropTypes.object,
};

SplitTester.Treatment = SplitTreatment;
SplitTester.Default = SplitDefault;

export default SplitTester;
