import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMedia from 'use-media';
import path from 'path';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';

import AnnouncementBanner from './AnnouncementBanner';
import DarkModeToggle from './DarkModeToggle';
import ExternalLink from './ExternalLink';
import Button from './Button';
import Dropdown from './Dropdown';
import NewRelicLogo from './NewRelicLogo';
import Icon from './Icon';
import GlobalNavLink from './GlobalNavLink';
import GlobalSearch from './GlobalSearch';

import { HEADER_LINKS, NR_SITES } from '../utils/constants';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';

// removes the site nav from the header in favor of the search bar
// swaps out logo into collapsable nav
const NAV_BREAKPOINT = '1070px';
const LOGO_TEXT_BREAKPOINT = '460px';
const SEARCH_BREAKPOINT = '1355px';
const SEARCH_BREAKPOINT_2 = '865px';
const NAVLIST_BREAKPOINT = '1507px';

const GlobalHeader = ({ className, activeSite }) => {
  const location = useLocation();
  const { t } = useThemeTranslation();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const {
    allLocale: { nodes: locales },
    site: {
      layout: { mobileBreakpoint },
    },
  } = useStaticQuery(graphql`
    query GlobalHeaderQuery {
      allLocale(sort: { fields: [isDefault, locale], order: [DESC, ASC] }) {
        nodes {
          locale
          localName
          isDefault
        }
      }
      site {
        layout {
          mobileBreakpoint
        }
      }
    }
  `);

  const hideLogoText = useMedia({ maxWidth: LOGO_TEXT_BREAKPOINT });

  const matchLocalePath = new RegExp(
    `^\\/(${locales.map(({ locale }) => locale).join('|')})`
  );

  const handleLocaleClick = useInstrumentedHandler(null, ({ locale }) => ({
    eventName: 'localeDropDownClick',
    category: 'LocaleDropDown',
    origin: 'gatsbyTheme',
    layoutElement: 'globalHeader',
    locale,
  }));

  return (
    <>
      <AnnouncementBanner />
      <div
        data-swiftype-index={false}
        className={className}
        css={css`
          display: grid;
          background-color: var(--erno-black);
          grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
          grid-template-rows: 1fr auto;
          grid-template-areas: 'logo nav';
          box-shadow: var(--shadow-2);
          position: sticky;
          top: 0;
          z-index: 80;
          height: var(--global-header-height);
          @media screen and (max-width: ${NAVLIST_BREAKPOINT}) {
            grid-template-columns: calc(150px + 1.5rem) minmax(0, 1fr);
          }
          @media screen and (max-width: ${mobileBreakpoint}) {
            grid-template-columns: calc(150px + 1.5rem) minmax(0, 1fr);
          }
        `}
      >
        <nav
          css={css`
            grid-area: logo;
            padding: 0 1.5rem;
            display: flex;
            align-items: center;
            height: 100%;
            overflow: hidden;
          `}
        >
          <ExternalLink
            href={t('header.newRelicLogoLink')}
            css={css`
              display: flex;
              align-items: center;
              @media screen and (max-width: ${NAV_BREAKPOINT}) {
                display: none;
              }
            `}
            instrumentation={{
              component: 'globalHeaderLogo',
              layoutElement: 'globalHeader',
            }}
          >
            <NewRelicLogo
              size="150px"
              css={css`
                .text-color {
                  fill: var(--color-white);
                }
              `}
            />
          </ExternalLink>

          <Dropdown
            css={css`
              display: none;

              @media screen and (max-width: ${NAV_BREAKPOINT}) {
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
                size={hideLogoText ? '45px' : '150px'}
                css={css`
                  .text-color {
                    fill: var(--color-white);
                  }
                `}
                omitText={hideLogoText}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <NavList listType="dropdown" activeSite={activeSite} />
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        <div
          css={css`
            grid-area: nav;
            display: flex;
            justify-content: space-between;
            padding: 0 1.5rem;
            width: 100%;
            max-width: var(--site-max-width);
            margin: auto;
          `}
        >
          <nav>
            <ul
              css={css`
                height: 100%;
                display: flex;
                list-style-type: none;
                white-space: nowrap;
                padding: 0;

                li {
                  > a {
                    font-size: 18px;
                  }
                  &:first-of-type {
                    > a {
                      padding-left: 0px;
                    }
                  }
                }

                @media screen and (max-width: ${NAV_BREAKPOINT}) {
                  display: none;
                }
              `}
            >
              <NavList listType="main" activeSite={activeSite} />
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
              justify-content: flex-end;

              > li {
                transition: all 0.2s ease-out;

                &:not(:first-of-type) &:not(:last-of-type) {
                  margin-left: 0.5rem;
                }
              }

              @media screen and (max-width: ${NAV_BREAKPOINT}) {
                width: 100%;
                justify-content: flex-end;
                margin: 0;
              }
            `}
          >
            <li
              css={css`
                --search-width: 26.625rem;
                --search-dropdown-width: 26.625rem;

                display: flex;
                justify-content: end;
                margin: 0rem 0.5rem 0 1rem;
                position: relative;
                width: var(--search-width);

                @media screen and (max-width: 930px) {
                  margin-right: 1rem;
                }
                @media screen and (max-width: ${NAV_BREAKPOINT}) {
                  margin-left: 0;
                }
                @media (max-width: ${SEARCH_BREAKPOINT}) {
                  --search-width: 13.3125rem;
                }
                @media (max-width: ${SEARCH_BREAKPOINT_2}) {
                  --search-width: 12rem;
                }
                @media screen and (max-width: ${mobileBreakpoint}) {
                  display: ${mobileSearchOpen ? 'block' : 'none'};
                  position: static;
                }
              `}
            >
              <GlobalSearch onClose={() => setMobileSearchOpen(false)} />
            </li>
            <li
              css={css`
                display: flex;
                flex-direction: row;
                @media screen and (max-width: ${LOGO_TEXT_BREAKPOINT}) {
                  width: 100%;
                  justify-content: space-evenly;
                }
              `}
            >
              <Button
                id="mobile-search-expand"
                variant={Button.VARIANT.PLAIN}
                onClick={() => setMobileSearchOpen(true)}
                css={css`
                  align-self: center;
                  color: var(--system-text-primary-dark);
                  display: none;
                  margin-right: 8px;
                  padding: 8px;
                  transition: all 0.2s ease-out;

                  @media screen and (max-width: ${mobileBreakpoint}) {
                    display: block;
                  }
                `}
              >
                <Icon
                  css={css`
                    cursor: pointer;
                    display: block;
                  `}
                  name="fe-search"
                  size="1.25rem"
                />
              </Button>
              {locales.length > 1 && (
                <Dropdown align="right">
                  <Dropdown.Toggle
                    size={Button.SIZE.EXTRA_SMALL}
                    variant={Button.VARIANT.LINK}
                    chevron={false}
                    css={css`
                      margin: 0;
                      border-radius: 0px;
                      font-size: 0.75rem;
                      color: var(--system-text-primary-dark);
                      background: transparent;
                    `}
                  >
                    <Icon name="nr-i18n" size="20px" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {locales.map(({ isDefault, locale, localName }) => (
                      <Dropdown.MenuItem
                        key={locale}
                        onClick={() => handleLocaleClick({ locale })}
                        as="a"
                        href={path.join(
                          isDefault ? '' : `/${locale}`,
                          location.pathname.replace(matchLocalePath, '')
                        )}
                        css={css`
                          text-decoration: none;
                          color: var(--primary-text-color);
                        `}
                      >
                        {localName}
                      </Dropdown.MenuItem>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}
              <DarkModeToggle
                css={css`
                  font-size: 0.75rem;
                  @media screen and (max-width: ${mobileBreakpoint}) {
                    margin: 0;
                  }
                  color: var(--system-text-primary-dark);
                `}
                size="27px"
              />
            </li>

            <li
              css={css`
                display: flex;
                align-items: right;
                flex-direction: row;
              `}
            >
              <Button
                as={ExternalLink}
                size={Button.SIZE.SMALL}
                variant={Button.VARIANT.LINK}
                href="https://one.newrelic.com"
                css={css`
                  white-space: nowrap;
                  font-size: 18px;
                  span {
                    color: var(--system-text-primary-dark);
                  }

                  @media screen and (max-width: ${mobileBreakpoint}) {
                    display: none;
                  }
                `}
                instrumentation={{
                  component: 'headerLogInButton',
                  layoutElement: 'globalHeader',
                }}
              >
                <span>{t('button.login')}</span>
              </Button>

              <Button
                as={ExternalLink}
                className={className}
                css={css`
                  font-size: 18px;
                  white-space: nowrap;
                  span {
                    color: var(--brand-button-primary-accent);
                  }
                  padding-right: 0;
                `}
                href="https://newrelic.com/signup"
                size={Button.SIZE.SMALL}
                variant={Button.VARIANT.LINK}
                instrumentation={{
                  component: 'SignUpButton',
                  layoutElement: 'globalHeader',
                }}
              >
                <span>{t('button.startNow')}</span>
              </Button>
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

const NavList = ({ listType, activeSite = null }) => {
  const navList = [];
  HEADER_LINKS.forEach(({ text, href }) => {
    switch (listType) {
      case 'main':
        navList.push(
          <li key={href}>
            <GlobalNavLink
              href={href}
              activeSite={activeSite && HEADER_LINKS.get(activeSite)}
              instrumentation={{
                component: 'globalHeader',
                layoutElement: 'globalHeader',
              }}
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

export default GlobalHeader;
