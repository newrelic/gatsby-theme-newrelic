import React from 'react';
import PropTypes from 'prop-types';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import { localizeExternalLink } from '../utils/localization';
import useLocale from '../hooks/useLocale';

const isNewRelic = (to) => to.startsWith('https://newrelic.com');

const ExternalLink = ({ children, onClick, href, ...props }) => {
  const handleClick = useInstrumentedHandler(onClick, {
    actionName: 'externalLink_click',
    href,
  });
  const locale = useLocale();

  const link = isNewRelic(href)
    ? localizeExternalLink({ link: href, locale })
    : href;

  return (
    <a
      {...props}
      href={link}
      onClick={handleClick}
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
};

export default ExternalLink;
