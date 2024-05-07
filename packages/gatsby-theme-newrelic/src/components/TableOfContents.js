import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { PageTools } from '@newrelic/gatsby-theme-newrelic';
import useActiveHash from '../hooks/useActiveHash';
import useDeepMemo from '../hooks/useDeepMemo';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import useThemeTranslation from '../hooks/useThemeTranslation';

const prop = (name) => (obj) => obj[name];

const TableOfContents = ({ className, headings }) => {
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
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 150px;
        border: none;
        border-radius: 0;
        margin-bottom: 0;
        background: var(--system-text-primary-dark);
        border-bottom: 1px solid var(--system-text-disabled-dark);

        .dark-mode && {
          background: var(--erno-black);
          border-bottom: 1px solid var(--system-background-hover-dark);
        }
        h4 {
          font-weight: 500;
        }
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
                    padding: 0.5rem 1rem 0.5rem 1.25rem;
                    color: var(--primary-text-color);
                    transition: background-color 0.2s ease-out,
                      color 0.2s ease-out;
                    text-decoration: none;
                    position: relative;
                    font-weight: 400;

                    &:hover {
                      color: #0E74DF;

                    }


                    &.active {
                      background: #0E74DF;
                      color: var(--system-background-app-light);
                      font-weight: 500;
                     
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
  className: PropTypes.string,
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableOfContents;
