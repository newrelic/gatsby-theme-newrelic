import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import useTessen from '../hooks/useTessen';
import useLocale from '../hooks/useLocale';
import { useLocation } from '@reach/router';
import { localizePath } from '../utils/localization';
import Icon from './Icon';
import { css } from '@emotion/react';

const formatHref = (href, { locale }) => {
  const url = new URL(href);
  const queryParams = new URLSearchParams(url.search);

  url.search = queryParams.toString();
  url.pathname = localizePath({ path: url.pathname, locale });

  return url.href;
};

const SignUpLink = forwardRef(
  ({ href, onClick, instrumentation, ...props }, ref) => {
    const tessen = useTessen();
    const location = useLocation();
    const locale = useLocale();

    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        {...props}
        ref={ref}
        href={formatHref(href, { locale })}
        target="_blank"
        rel="noopener"
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
      >
        {props.children}
        {props.externalIcon && (
          <Icon
            name="fe-external-link"
            css={css`
              margin-left: 0.25rem;
              position: relative;
              top: -1px;
            `}
            size="1em"
          />
        )}
      </a>
    );
  }
);

SignUpLink.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  instrumentation: PropTypes.shape({
    component: PropTypes.string,
  }),
  children: PropTypes.node,
  externalIcon: PropTypes.bool,
};

export default SignUpLink;
