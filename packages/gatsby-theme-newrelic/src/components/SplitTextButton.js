import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
  useTreatments,
  SplitContext,
  useTrack,
} from '@splitsoftware/splitio-react';
import { SPLITS, SPLIT_TRACKING_EVENTS } from '../utils/constants';
import Button from './Button';
import ExternalLink from './ExternalLink';
import useThemeTranslation from '../hooks/useThemeTranslation';

const SplitTextButton = ({ style }) => {
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
      href="https://newrelic.com/signup"
      size={style.size || Button.SIZE.EXTRA_SMALL}
      variant={Button.VARIANT.PRIMARY}
      instrumentation={{ component: 'SplitTextButton' }}
      onClick={clickCallback}
      css={css`
        ${style && style.button}
      `}
    >
      <span>
        {t(splitText === 'start_now' ? 'button.startNow' : 'button.signUp')}
      </span>
    </Button>
  ) : (
    <Button
      as={ExternalLink}
      href="https://newrelic.com/signup"
      size={style.size || Button.SIZE.EXTRA_SMALL}
      variant={Button.VARIANT.PRIMARY}
      instrumentation={{ component: 'SplitTextButton' }}
    >
      <span>{t('button.signUp')}</span>
    </Button>
  );
};
SplitTextButton.propTypes = {
  style: PropTypes.object,
};

export default SplitTextButton;
