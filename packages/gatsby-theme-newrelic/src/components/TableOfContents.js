import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { PageTools } from '@newrelic/gatsby-theme-newrelic';
import useActiveHash from '../hooks/useActiveHash';
import useDeepMemo from '../hooks/useDeepMemo';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import useThemeTranslation from '../hooks/useThemeTranslation';

const prop = (name) => (obj) => obj[name];

const TableOfContents = ({ headings }) => {
  const { t } = useThemeTranslation();
  const headingIds = useDeepMemo(() => headings.map(prop('id')), [headings]);
  const activeHash = useActiveHash(headingIds);
  const handleClick = useInstrumentedHandler(null, ({ id, text }) => ({
    eventName: 'tableOfContentsClick',
    category: 'TableOfContents',
    heading: text,
    headingId: id,
  }));

  return headings.length === 0 ? null : (
    <PageTools.Section
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 150px;
      `}
    >
      <PageTools.Title>{t('tableOfContents.title')}</PageTools.Title>
      <nav
        css={css`
          margin-left: -1rem;
          margin-right: -1rem;
          overflow-y: auto;
        `}
      >
        <ul
          css={css`
            list-style: none;
            padding: 0;
            margin: 0;
          `}
        >
          {headings.map(({ id, text }) => {
            const isActive = activeHash === id;

            return (
              <li
                key={id}
                css={css`
                  margin: 5px 0 0;
                  line-height: 1.33rem;
                `}
              >
                <a
                  href={`#${id}`}
                  className={isActive ? 'active' : null}
                  onClick={() => handleClick({ id, text })}
                  css={css`
                    display: flex;
                    align-items: center;
                    font-size: 0.875rem;
                    padding: 0.5rem 1rem;
                    color: var(--primary-text-color);
                    transition: background-color 0.2s ease-out,
                      color 0.2s ease-out;
                    text-decoration: none;
                    position: relative;
                    border-left: 4px solid transparent;

                    &.active {
                      background: var(--primary-hover-color);
                      border-left-color: var(
                        --system-text-secondary-inverted-light
                      );
                      .dark-mode & {
                        border-left-color: var(
                          --system-background-selected-low-contrast-dark
                        );
                      }
                    }
                  `}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </PageTools.Section>
  );
};

TableOfContents.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableOfContents;
