import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Link } from 'react-router-dom';
import { SplitContext } from '@splitsoftware/splitio-react';

const SignupsSplit = (treatmentWithConfig, props) => {
  const { treatment } = treatmentWithConfig;
  const { isReady } = React.useContext(SplitContext);

  const btns = (
    <div {...props}>
      <Button
        data-tessen="stitchedPathLinkClick"
        role="button"
        to="https://newrelic.com/signup"
        variant="primary"
      >
        Get an account
      </Button>
      <Button
        data-tessen="stitchedPathLinkClick"
        role="button"
        to={props.guidedInstallLink}
        variant="primary"
      >
        Guided agent install
      </Button>
    </div>
  );

  const btnsEu = (
    <div {...props}>
      <Button
        data-tessen="stitchedPathLinkClick"
        role="button"
        to="https://newrelic.com/signup"
        variant="primary"
      >
        Get an account
      </Button>
      <Button
        data-tessen="stitchedPathLinkClick"
        role="button"
        to={props.guidedInstallLink}
        variant="primary"
      >
        Guided agent install
      </Button>
      <Button
        data-tessen="stitchedPathLinkClick"
        role="button"
        to={props.euGuidedInstallLink}
        variant="primary"
      >
        EU guided agent install
      </Button>
    </div>
  );

  const links = (
    <ul {...props}>
      <li>
        <Link to="https://newrelic.com/signup">Get an account</Link>
      </li>
      <li>
        <Link to={props.guidedInstallLink}>Guided agent install</Link>
      </li>
    </ul>
  );

  const linksEu = (
    <ul {...props}>
      <li>
        <Link to="https://newrelic.com/signup">Get an account</Link>
      </li>
      <li>
        <Link to={props.guidedInstallLink}>Guided agent install</Link>
      </li>
      <li>
        <Link to={props.euGuidedInstallLink}>EU guided agent install</Link>
      </li>
    </ul>
  );

  if (treatment === 'btns' && isReady) {
    return { btns };
  } else if (treatment === 'links' && isReady) {
    return { links };
  } else if (treatment === 'btnsEu' && isReady) {
    return { btnsEu };
  } else if (treatment === 'linksEu' && isReady) {
    return { linksEu };
  }
  return {};
};

SignupsSplit.propTypes = {
  children: PropTypes.node,
  treatmentName: PropTypes.string.isRequired,
};

export default SignupsSplit;
