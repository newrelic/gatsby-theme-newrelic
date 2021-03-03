import React from 'react';
import PropTypes from 'prop-types';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import { localizeExternalLink } from '../utils/localization';
import useLocale from '../hooks/useLocale';
import useTessen from '../hooks/useTessen';
import { useLocation } from '@reach/router';

const isNewRelic = (to) => to.startsWith('https://newrelic.com');
const isSignup = (to) => to.startsWith('https://newrelic.com/signup');

const ExternalLink = ({
  children,
  onClick,
  href,
  trackingProps = {},
  ...props
}) => {
  const locale = useLocale();
  const tessen = useTessen();
  const location = useLocation();
  const properties =
    typeof trackingProps === 'string'
      ? { customProp: trackingProps }
      : trackingProps;

  const handleClick = useInstrumentedHandler(onClick, {
    actionName: 'externalLink_click',
    href: href,
    ...properties,
  });

  const link = isNewRelic(href)
    ? localizeExternalLink({ link: href, locale })
    : href;

  const trackSignUp = () => {
    handleClick();
    tessen.track('stitchedPathLinkClick', 'DocPageLinkClick', {
      href: link,
      path: location.pathname,
      ...properties,
    });
  };

  return (
    <a
      {...props}
      href={link}
      onClick={isSignup(href) ? trackSignUp : handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
  trackingProps: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default ExternalLink;
