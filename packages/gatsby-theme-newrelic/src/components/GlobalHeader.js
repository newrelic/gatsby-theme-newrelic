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
import useTessen from '../hooks/useTessen';
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

const CONDENSED_BREAKPOINT = '815px';

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
  const tessen = useTessen();

  useDebounce(
    () => {
      if (hasQParam) {
        setQueryParam('q', searchTerm);
        if (searchTerm && searchTerm.length > 2) {
          tessen.track({
            eventName: 'swiftypeSearchInput',
            category: 'GlobalSearch',
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

  const hideLogoText = useMedia({ maxWidth: '370px' });

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
          background-color: var(--color-neutrals-800);
          box-shadow: var(--shadow-2);
          position: sticky;
          top: 0;
          z-index: 80;

          .dark-mode & {
            background-color: var(--color-dark-300);
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

              @media screen and (max-width: 1235px) {
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
                    var(--color-neutrals-800)
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

              @media screen and (max-width: 675px) {
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

                @media screen and (max-width: 700px) {
                  display: none;
                }
              `}
            >
              <NewRelicLogo
                omitText={hideLogoText}
                size="104px"
                textColor="var(--color-neutrals-050)"
              />
            </ExternalLink>

            <Dropdown
              css={css`
                display: none;

                @media screen and (max-width: 700px) {
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
                <NewRelicLogo
                  omitText={hideLogoText}
                  size="104px"
                  textColor="var(--color-neutrals-050)"
                />
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

                @media screen and (max-width: 700px) {
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
                padding: 0rem 1rem;

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
                <Icon css={actionIcon} name="fe-search" size="1.5rem" />
              </Link>
              <SearchInput
                placeholder={t('searchInput.placeholder')}
                size={SearchInput.SIZE.MEDIUM}
                focusWithHotKey="/"
                css={css`
                  --icon-size: 1.5rem;
                  min-width: 150px;
                  max-width: 350px;

                  svg {
                    color: var(--color-neutrals-500);
                    width: 1.5rem;
                    height: 1.5rem;
                  }

                  input {
                    --hover-border-color: var(--color-neutrals-600);
                    --background-color: var(--color-neutrals-700);
                    background: var(--background-color);
                    border: none;
                    height: 40px;

                    .dark-mode & {
                      --background-color: var(--color-dark-500);
                    }

                    &:hover {
                      box-shadow: 0 0 0 1px var(--color-neutrals-600);
                    }
                  }

                  .search-hotkey {
                    background: var(--color-neutrals-700);
                    border-color: var(--color-neutrals-600);
                    border-radius: 0.125rem;
                    font-size: 0.875rem;
                    padding: 0.125rem 0.375rem;

                    .dark-mode & {
                      background: var(--color-dark-500);
                    }
                  }

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
              <li
                css={css`
                  @media screen and (max-width: 545px) {
                    display: none;
                  }
                `}
              >
                <Dropdown align="right">
                  <Dropdown.Toggle
                    size={Button.SIZE.SMALL}
                    variant={Button.VARIANT.LINK}
                    css={css`
                      --active-color: none;
                      margin: 0;
                      height: 72px;
                      border-radius: 0px;
                      font-size: 0.75rem;
                      color: var(--color-neutrals-100);
                      background: transparent;

                      .dark-mode & {
                        --active-color: var(--color-dark-100);
                      }

                      &:hover {
                        color: var(--color-neutrals-600);
                        background-color: var(--active-color);
                      }
                    `}
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
              <DarkModeToggle
                css={[
                  actionIcon,
                  action,
                  css`
                    margin: 24px;
                  `,
                ]}
                size="1.5rem"
              />
            </li>
            <li
              css={css`
                display: flex;
                align-items: right;
              `}
            >
              <Button
                as={ExternalLink}
                size={Button.SIZE.SMALL}
                variant={Button.VARIANT.LINK}
                href="https://one.newrelic.com"
                css={css`
                  margin: 0 0.625rem;
                  font-weight: 600;
                  font-size: 0.875rem;
                  white-space: nowrap;
                  color: var(--color-brand-400);
                  border: 1px solid var(--color-brand-400);
                  border-radius: 4px;

                  @media screen and (max-width: 545px) {
                    display: none;
                  }
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
              <SplitTextButton
                style={{
                  button: css`
                    background: var(color-brand-500);
                    border: 1px solid var(color-brand-500);
                    border-radius: 4px;
                  `,
                  size: Button.SIZE.SMALL,
                }}
              />
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
