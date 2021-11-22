import React from 'react';
import PropTypes from 'prop-types';
import {
  useTreatments,
  SplitContext,
  useTrack,
} from '@splitsoftware/splitio-react';
import { SPLITS, SPLIT_TRACKING_EVENTS } from '../utils/constants';
import Button from './Button';
import ExternalLink from './ExternalLink';
import useThemeTranslation from '../hooks/useThemeTranslation';

const SplitTextButton = ({ className }) => {
  const { t } = useThemeTranslation();
  const { deven_signupbutton_text } = useTreatments([
    SPLITS.SIGNUP_BUTTON_TEXT,
  ]);
  const track = useTrack();
  const clickCallback = () => {
    track(SPLIT_TRACKING_EVENTS.SIGNUP_BUTTON_CLICK);
  };
  const splitText = deven_signupbutton_text?.treatment;

  const { isReady } = React.useContext(SplitContext);

  return isReady ? (
    <Button
      as={ExternalLink}
      className={className}
      href="https://newrelic.com/signup"
      size={Button.SIZE.SMALL}
      variant={Button.VARIANT.PRIMARY}
      instrumentation={{ component: 'SplitTextButton' }}
      onClick={clickCallback}
    >
      <span>
        {t(splitText === 'start_now' ? 'button.startNow' : 'button.signUp')}
      </span>
    </Button>
  ) : (
    <Button
      as={ExternalLink}
      className={className}
      href="https://newrelic.com/signup"
      size={Button.SIZE.SMALL}
      variant={Button.VARIANT.PRIMARY}
      instrumentation={{ component: 'SplitTextButton' }}
    >
      <span>{t('button.signUp')}</span>
    </Button>
  );
};
SplitTextButton.propTypes = {
  className: PropTypes.string,
};

export default SplitTextButton;
