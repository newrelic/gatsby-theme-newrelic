/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import useTessen from '../hooks/useTessen';
import useLocale from '../hooks/useLocale';
import { useLocation } from '@reach/router';
import { localizePath } from '../utils/localization';

const formatHref = (href, { locale }) => {
  const url = new URL(href);
  const queryParams = new URLSearchParams(url.search);

  url.search = queryParams.toString();
  url.pathname = localizePath({ path: url.pathname, locale });

  return url.href;
};

const SignUpLink = ({ href, onClick, instrumentation, ...props }) => {
  const tessen = useTessen();
  const location = useLocation();
  const locale = useLocale();

  return (
    <a
      {...props}
      href={formatHref(href, { locale })}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }

        tessen.track('stitchedPathLinkClick', 'DocPageLinkClick', {
          href,
          path: location.pathname,
          component: instrumentation?.component,
        });
      }}
    />
  );
};

SignUpLink.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  instrumentation: PropTypes.shape({
    component: PropTypes.string,
  }),
};

export default SignUpLink;
