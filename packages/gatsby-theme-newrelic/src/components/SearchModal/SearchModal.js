import React, { useRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { animated, useTransition } from 'react-spring';
import { useLocation } from '@reach/router';
import Footer from './Footer';
import Input from './Input';
import NoResults from './NoResults';
import useSearchQuery from './useSearchQuery';
import ResultList from './ResultList';
import ResultPreview from './ResultPreview';
import ScrollContainer from './ScrollContainer';
import useSearch from './useSearch';
import Portal from '../Portal';
import useThemeTranslation from '../../hooks/useThemeTranslation';
import useKeyPress from '../../hooks/useKeyPress';
import useScrollFreeze from '../../hooks/useScrollFreeze';
import usePrevious from '../../hooks/usePrevious';

const defaultFilters = [
  { name: 'docs', isSelected: false },
  { name: 'developer', isSelected: false },
  { name: 'opensource', isSelected: false },
  { name: 'quickstarts', isSelected: false },
];

const defaultSearchByFilters = [
  { name: 'title', isSelected: false },
  { name: 'body', isSelected: false },
];

const DEFAULT_FILTER_TYPES = [
  { type: 'source', defaultFilters: defaultFilters },
  { type: 'searchBy', defaultFilters: defaultSearchByFilters },
];

const SearchModal = ({ onClose, isOpen }) => {
  const { pathname } = useLocation();
  const didChangeRoute =
    pathname !== usePrevious(pathname, { initializeWithValue: true });
  const { t } = useThemeTranslation();
  const searchInput = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filters, setFilters] = useState(DEFAULT_FILTER_TYPES);
  const [searchTerm, setSearchTerm] = useSearchQuery(filters);
  const { status, results, fetchNextPage } = useSearch({
    searchTerm,
    filters,
  });

  const transitions = useTransition(isOpen, {
    config: { tension: 220, friction: 22 },
    from: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.96)' },
  });

  useScrollFreeze(isOpen);
  useKeyPress('Escape', onClose, { ignoreTextInput: false });

  useEffect(() => {
    if (isOpen && didChangeRoute) {
      onClose();
    }
  }, [isOpen, didChangeRoute, onClose]);

  useEffect(() => {
    isOpen && searchInput.current.focus();
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  const onIntersection = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const handleSelectIndex = useCallback((idx) => {
    setSelectedIndex(idx);
  }, []);

  const selectedResult = results[selectedIndex];

  const updateFilters = (filterName) => {
    setFilters((filters) => {
      return filters.map(({ defaultFilters, type }) => ({
        defaultFilters: defaultFilters.map((filter) => {
          return filter.name === filterName
            ? { ...filter, isSelected: !filter.isSelected }
            : filter;
        }),
        type,
      }));
    });
  };

  return transitions(
    (style, item) =>
      item && (
        <Portal>
          <animated.div
            style={{ opacity: style.opacity }}
            css={css`
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              padding: var(--site-content-padding);
              z-index: var(--depth-8);
              background: var(--modal-wrapper-color);

              @media screen and (max-width: 760px) {
                padding: 0;
              }

              em {
                border-radius: 0.125rem;
                padding: 0.125rem 0.25rem;
                background: var(--system-text-secondary-inverted-light);
                font-style: normal;
                font-weight: bold;
                font-size: 85%;
                .dark-mode & {
                  background: var(
                    --system-background-selected-low-contrast-dark
                  );
                }
              }

              h2,
              h3,
              h4 {
                em {
                  font-size: inherit;
                }
              }
            `}
            onClick={onClose}
          >
            <animated.div
              onClick={(e) => e.stopPropagation()}
              style={style}
              css={css`
                --horizontal-spacing: 1rem;

                z-index: var(--depth-6);
                max-width: 1024px;
                width: 100%;
                margin: auto;
                box-shadow: var(--shadow-4);
                max-height: calc(100vh - 2 * var(--site-content-padding));
                display: flex;
                flex-direction: column;
                position: relative;
              `}
            >
              <Input
                placeholder={t('searchInput.placeholder')}
                ref={searchInput}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                onFilter={(filterName) => updateFilters(filterName)}
                value={searchTerm}
                onClear={() => setSearchTerm('')}
                onCancel={onClose}
                filters={filters}
                css={
                  searchTerm &&
                  css`
                    input {
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                    }
                  `
                }
              />

              {searchTerm && (
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    flex-grow: 1;
                    background-color: var(--modal-background-color);
                    border-bottom-left-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                    box-shadow: var(--shadow-6);
                    border: 1px solid var(--border-color);
                    border-top: none;
                    overflow: hidden;

                    @media screen and (max-width: 760px) {
                      grid-template-columns: 1fr;
                    }
                  `}
                >
                  {Boolean(results?.length) && (
                    <>
                      <ScrollContainer
                        onIntersection={onIntersection}
                        monitor={status === 'success'}
                      >
                        <ResultList
                          results={results}
                          selectedIndex={selectedIndex}
                          onSelectIndex={handleSelectIndex}
                        />
                      </ScrollContainer>
                      <ResultPreview css={css``} result={selectedResult} />
                      <Footer />
                    </>
                  )}
                  {results.length === 0 && status === 'success' && (
                    <NoResults />
                  )}
                </div>
              )}
            </animated.div>
          </animated.div>
        </Portal>
      )
  );
};

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SearchModal;
