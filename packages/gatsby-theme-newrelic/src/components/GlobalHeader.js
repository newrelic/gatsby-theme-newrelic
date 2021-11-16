import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import AnnouncementBanner from './AnnouncementBanner';
import DarkModeToggle from './DarkModeToggle';
import ExternalLink from './ExternalLink';
import Button from './Button';
import Dropdown from './Dropdown';
import NewRelicLogo from './NewRelicLogo';
import Icon from './Icon';
import GlobalNavLink from './GlobalNavLink';
import SearchInput from './SearchInput';
import useMedia from 'use-media';
import { useLocation } from '@reach/router';
import useQueryParams from '../hooks/useQueryParams';
import useLocale from '../hooks/useLocale';
import useThemeTranslation from '../hooks/useThemeTranslation';
import path from 'path';
import { rgba } from 'polished';
import SearchModal from './SearchModal';
import { useDebounce } from 'react-use';
import useHasMounted from '../hooks/useHasMounted';

import SplitTextButton from './SplitTextButton';

const action = css`
  color: var(--secondary-text-color);
  transition: all 0.2s ease-out;

  &:hover {
    color: var(--secondary-text-hover-color);
  }
`;

export const NR_SITES = {
  DOCS: 'DOCS',
  DEVELOPER: 'DEVELOPER',
  OSS: 'OSS',
  COMMUNITY: 'COMMUNITY',
  LEARN: 'LEARN',
  IO: 'IO',
};

const HEADER_LINKS = new Map();

HEADER_LINKS.set(NR_SITES.DOCS, {
  text: 'Docs',
  href: 'https://docs.newrelic.com/',
})
  .set(NR_SITES.DEVELOPER, {
    text: 'Developer',
    href: 'https://developer.newrelic.com/',
  })
  .set(NR_SITES.OSS, {
    text: 'Open Source',
    href: 'https://opensource.newrelic.com/',
  })
  .set(NR_SITES.COMMUNITY, {
    text: 'Community',
    href: 'https://discuss.newrelic.com/',
  })
  .set(NR_SITES.LEARN, {
    text: 'Learn',
    href: 'https://learn.newrelic.com/',
  })
  .set(NR_SITES.IO, {
    text: 'Instant Observability',
    href: 'https://developer.newrelic.com/instant-observability',
  });

const createNavList = (listType, activeSite = null) => {
  const navList = [];
  HEADER_LINKS.forEach(({ text, href }) => {
    switch (listType) {
      case 'main':
        navList.push(
          <li key={href}>
            <GlobalNavLink
              href={href}
              activeSite={activeSite && HEADER_LINKS.get(activeSite)}
            >
              {text}
            </GlobalNavLink>
          </li>
        );
        break;
      case 'dropdown':
        navList.push(
          <Dropdown.MenuItem key={href} href={href}>
            {text}
          </Dropdown.MenuItem>
        );
        break;
    }
  });
  return navList;
};

const CONDENSED_BREAKPOINT = '760px';

const actionLink = css`
  ${action};

  display: flex;
  align-items: center;
`;

const actionIcon = css`
  display: block;
  cursor: pointer;
`;

const useSearchQuery = () => {
  const { queryParams, setQueryParam } = useQueryParams();
  const searchQueryParam = queryParams.get('q');
  const [searchTerm, setSearchTerm] = useState(searchQueryParam);
  const hasQParam = queryParams.has('q');

  useDebounce(
    () => {
      if (hasQParam) {
        setQueryParam('q', searchTerm);
        if (
          typeof window !== 'undefined' &&
          window.Tessen &&
          searchTerm &&
          searchTerm.length > 2
        ) {
          window.Tessen.track({
            tessenEventName: 'swiftypeSearchInput',
            tessenCategoryName: 'GlobalSearch',
            name: 'searchInput',
            searchTerm,
          });
        }
      }
    },
    400,
    [searchTerm, setQueryParam, hasQParam]
  );

  useEffect(() => {
    setSearchTerm(searchQueryParam);
  }, [searchQueryParam]);

  return [searchTerm, setSearchTerm];
};

const GlobalHeader = ({ className, activeSite }) => {
  const hasMounted = useHasMounted();
  const location = useLocation();
  const { queryParams, setQueryParam, deleteQueryParam } = useQueryParams();
  const [searchTerm, setSearchTerm] = useSearchQuery();
  const { t } = useThemeTranslation();

  const {
    allLocale: { nodes: locales },
  } = useStaticQuery(graphql`
    query GlobalHeaderQuery {
      allLocale(sort: { fields: [isDefault, locale], order: [DESC, ASC] }) {
        nodes {
          locale
          localName
          isDefault
        }
      }
    }
  `);

  const hideLogoText = useMedia({ maxWidth: '655px' });

  const matchLocalePath = new RegExp(
    `^\\/(${locales.map(({ locale }) => locale).join('|')})`
  );

  const locale = useLocale();

  return (
    <>
      <SearchModal
        value={searchTerm}
        onChange={(searchTerm) => setSearchTerm(searchTerm)}
        onClose={() => {
          deleteQueryParam('q');
        }}
        isOpen={hasMounted && queryParams.has('q')}
      />
      <AnnouncementBanner />
      <div
        data-swiftype-index={false}
        className={className}
        css={css`
          background-color: var(--color-neutrals-100);
          position: sticky;
          top: 0;
          z-index: 80;

          .dark-mode & {
            background-color: var(--color-dark-100);
          }
        `}
      >
        <div
          css={css`
            height: var(--global-header-height);
            display: flex;
            justify-content: space-between;
            max-width: var(--site-max-width);
            margin: 0 auto;
            padding: 0 var(--site-content-padding);
          `}
        >
          <nav
            css={css`
              display: flex;
              align-items: center;
              height: 100%;
              overflow: hidden;
              position: relative;

              @media screen and (max-width: 800px) {
                &::after {
                  content: '';
                  position: absolute;
                  right: 0;
                  height: 100%;
                  width: 2rem;
                  pointer-events: none;
                  background: linear-gradient(
                    to right,
                    ${rgba('#f4f5f5', 0)},
                    var(--color-neutrals-100)
                  );

                  .dark-mode & {
                    background: linear-gradient(
                      to right,
                      ${rgba('#22353c', 0)},
                      var(--color-dark-100)
                    );
                  }
                }
              }

              @media screen and (max-width: 545px) {
                overflow: visible;

                &::after {
                  background: none !important;
                  width: 0 !important;
                }
              }
            `}
          >
            <ExternalLink
              href="https://newrelic.com/"
              css={css`
                display: flex;
                align-items: center;
                margin-right: 1rem;

                @media screen and (max-width: 545px) {
                  display: none;
                }
              `}
            >
              <NewRelicLogo omitText={hideLogoText} />
            </ExternalLink>

            <Dropdown
              css={css`
                display: none;

                @media screen and (max-width: 545px) {
                  display: block;
                }
              `}
            >
              <Dropdown.Toggle
                size={Button.SIZE.EXTRA_SMALL}
                variant={Button.VARIANT.LINK}
                chevron={false}
                css={css`
                  padding-left: 0;
                  padding-right: 0;
                `}
              >
                <Icon name="logo-newrelic" size="1.125rem" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {createNavList('dropdown', activeSite)}
              </Dropdown.Menu>
            </Dropdown>

            <ul
              css={css`
                height: 100%;
                margin: 0;
                padding: 0;
                display: flex;
                list-style-type: none;
                white-space: nowrap;
                overflow-x: auto;
                position: relative;
                -webkit-overflow-scrolling: touch;
                -ms-overflow-style: -ms-autohiding-scrollbar;

                > li {
                  margin: 0;
                  flex: 0 0 auto;
                }

                @media screen and (max-width: 545px) {
                  display: none;
                }
              `}
            >
              {createNavList('main', activeSite)}
            </ul>
          </nav>

          <ul
            css={css`
              margin: 0;
              margin-left: 1rem;
              padding: 0;
              display: flex;
              list-style-type: none;
              align-items: center;
              flex: 1;

              > li {
                transition: all 0.2s ease-out;
                color: var(--secondary-text-color);

                &:not(:first-of-type) {
                  margin-left: 0.5rem;
                }
              }

              @media screen and (max-width: ${CONDENSED_BREAKPOINT}) {
                flex: unset;
              }
            `}
          >
            <li
              css={css`
                flex: 1;

                @media screen and (max-width: ${CONDENSED_BREAKPOINT}) {
                  flex: unset;
                }
              `}
            >
              <Link
                to="?q="
                css={css`
                  ${actionLink}

                  display: none;

                  @media screen and (max-width: ${CONDENSED_BREAKPOINT}) {
                    display: block;
                  }
                `}
              >
                <Icon css={actionIcon} name="fe-search" size="0.875rem" />
              </Link>
              <SearchInput
                placeholder={t('searchInput.placeholder')}
                size={SearchInput.SIZE.SMALL}
                focusWithHotKey="/"
                css={css`
                  min-width: 150px;
                  max-width: 350px;

                  @media screen and (max-width: ${CONDENSED_BREAKPOINT}) {
                    display: none;
                  }
                `}
                onFocus={() => {
                  setQueryParam('q', '');
                }}
              />
            </li>
            {locales.length > 1 && (
              <li>
                <Dropdown align="right">
                  <Dropdown.Toggle
                    size={Button.SIZE.EXTRA_SMALL}
                    variant={Button.VARIANT.LINK}
                  >
                    {locale.localName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {locales.map(({ isDefault, locale, localName }) => (
                      <Dropdown.MenuItem
                        as={Link}
                        key={locale}
                        href={path.join(
                          isDefault ? '' : `/${locale}`,
                          location.pathname.replace(matchLocalePath, '')
                        )}
                      >
                        {localName}
                      </Dropdown.MenuItem>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            )}
            <li>
              <DarkModeToggle css={[actionIcon, action]} size="0.875rem" />
            </li>
            <li
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <Button
                as={ExternalLink}
                size={Button.SIZE.EXTRA_SMALL}
                variant={Button.VARIANT.LINK}
                href="https://one.newrelic.com"
                css={css`
                  font-weight: 600;
                  white-space: nowrap;
                `}
              >
                <span
                  css={css`
                    @media screen and (max-width: 545px) {
                      display: none;
                    }
                  `}
                >
                  {t('button.login')}
                </span>
                <Icon
                  name="fe-log-in"
                  css={css`
                    display: none;

                    @media screen and (max-width: 545px) {
                      display: block;
                    }
                  `}
                  size="0.875rem"
                />
              </Button>
            </li>
            <li
              css={css`
                display: flex;
              `}
            >
              <SplitTextButton />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

GlobalHeader.propTypes = {
  className: PropTypes.string,
  activeSite: PropTypes.oneOf(Object.values(NR_SITES)),
};

export default GlobalHeader;
