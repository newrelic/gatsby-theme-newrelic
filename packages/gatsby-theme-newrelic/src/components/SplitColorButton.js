import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useTreatments, useTrack } from '@splitsoftware/splitio-react';
import Button from './Button';

const renderButton = (treatmentWithConfig, children, clickCallback, props) => {
  const { treatment, config } = treatmentWithConfig;
  const btnColor = JSON.parse(config)?.color;

  if (treatment !== 'off' && treatment !== 'control' && btnColor) {
    return (
      <Button
        css={css`
          background-color: ${btnColor};
        `}
        onClick={clickCallback}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button onClick={clickCallback} {...props}>
      {children}
    </Button>
  );
};

const SplitColorButton = ({ children, treatmentName, eventName, ...props }) => {
  const treatments = useTreatments([treatmentName]);
  const track = useTrack();
  const clickCallback = () => track(eventName);

  return renderButton(
    treatments[treatmentName],
    children,
    clickCallback,
    props
  );
};

SplitColorButton.propTypes = {
  children: PropTypes.node,
  treatmentName: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
};

export default SplitColorButton;
