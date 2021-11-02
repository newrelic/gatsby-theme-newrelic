import React from 'react';
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
        Get New Relic account
      </Button>
      <Button
        data-tessen="stitchedPathLinkClick"
        role="button"
        to={props.guidedInstallLink}
        variant="primary"
      >
        Install {props.agentName} agent
      </Button>
    </div>
  );

  const links = (
    <div {...props}>
      <Link to="https://newrelic.com/signup">Get a New Relic account</Link> or{' '}
      <Link to={props.guidedInstallLink}>start the guided install</Link>
    </div>
  );

  if (treatment === 'btns' && isReady) {
    return { btns };
  } else if (treatment === 'links' && isReady) {
    return { links };
  }
};

export default SignupsSplit;
