import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import NavLink from './NavLink';
import { useLocation } from '@reach/router';
import usePrevious from '../hooks/usePrevious';

const NavItem = ({ page, __parent: parent }) => {
  const { pathname } = useLocation();
  const containsCurrentPage = useMemo(() => containsPage(page, pathname), [
    page,
    pathname,
  ]);
  const isCurrentPage = page.url === pathname;
  const shouldExpand = isCurrentPage || containsCurrentPage;
  const hasChangedPage = pathname !== usePrevious(pathname);
  const [isExpanded, setIsExpanded] = useState(shouldExpand);
  const toggle = (expanded) => !expanded;

  useEffect(() => {
    if (hasChangedPage) {
      setIsExpanded(shouldExpand);
    }
  }, [hasChangedPage, shouldExpand]);

  return (
    <div
      css={css`
        --icon-size: 1.5rem;
        --icon-spacing: 0.5rem;
        --nav-link-padding: 1rem;

        padding-left: ${parent == null ? '0' : 'var(--nav-link-padding)'};
      `}
    >
      <NavLink
        active={isCurrentPage}
        to={page.url}
        icon={page.icon}
        isExpanded={isExpanded}
        expandable={page.pages?.length > 0}
        onClick={() => {
          setIsExpanded(isCurrentPage || !page.url ? toggle : true);
        }}
        onToggle={() => setIsExpanded(toggle)}
        css={css`
          padding-left: ${parent?.icon
            ? 'calc(var(--icon-size) + var(--icon-spacing))'
            : 'var(--nav-link-padding)'};
        `}
      >
        {page.title}
      </NavLink>

      {isExpanded &&
        page.pages?.map((child) => (
          <NavItem key={child.url} page={child} __parent={page} />
        ))}
    </div>
  );
};

const page = PropTypes.shape({
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  url: PropTypes.string,
  pages: PropTypes.arrayOf(PropTypes.object),
});

NavItem.propTypes = {
  __parent: page,
  page: page.isRequired,
};

const containsPage = (page, url) => {
  if (page.url === url) {
    return true;
  }

  if (page.pages == null || page.pages.length === 0) {
    return false;
  }

  return page.pages.some((child) => containsPage(child, url));
};

export default NavItem;
