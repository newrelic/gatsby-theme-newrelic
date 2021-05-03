import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useTreatments, SplitContext } from '@splitsoftware/splitio-react';
import Button from './Button';
import Spinner from './Spinner';

const renderButton = (treatmentWithConfig, children, props) => {
  const { treatment, config } = treatmentWithConfig;
  const btnColor = JSON.parse(config)?.color;

  if (treatment !== 'off' && btnColor) {
    return (
      <Button
        css={css`
          background-color: ${btnColor};
        `}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return <Button {...props}>{children}</Button>;
};

const SplitColorButton = ({ children, treatmentName, ...props }) => {
  const { isReady } = React.useContext(SplitContext);
  const treatments = useTreatments([treatmentName]);

  return isReady ? (
    renderButton(treatments[treatmentName], children, props)
  ) : (
    <Spinner />
  );
};

SplitColorButton.propTypes = {
  children: PropTypes.node,
  treatmentName: PropTypes.string.isRequired,
};

export default SplitColorButton;
