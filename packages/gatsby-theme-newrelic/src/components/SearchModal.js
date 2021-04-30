import React, { useRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Footer from './SearchModal/Footer';
import Input from './SearchModal/Input';
import NoResults from './SearchModal/NoResults';
import Portal from './Portal';
import ResultList from './SearchModal/ResultList';
import ResultPreview from './SearchModal/ResultPreview';
import ScrollContainer from './SearchModal/ScrollContainer';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useKeyPress from '../hooks/useKeyPress';
import useScrollFreeze from '../hooks/useScrollFreeze';
import { animated, useTransition } from 'react-spring';
import { rgba } from 'polished';
import useSearch from './SearchModal/useSearch';
import usePrevious from '../hooks/usePrevious';
import { useLocation } from '@reach/router';

const defaultFilters = [
  { name: 'docs', isSelected: false },
  { name: 'developer', isSelected: false },
  { name: 'opensource', isSelected: false },
];

const SearchModal = ({ onClose, isOpen, onChange, value }) => {
  const { pathname } = useLocation();
  const didChangeRoute =
    pathname !== usePrevious(pathname, { initializeWithValue: true });
  const { t } = useThemeTranslation();
  const searchInput = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filters, setFilters] = useState(defaultFilters);
  const { status, results, fetchNextPage } = useSearch({
    searchTerm: value,
    filters,
  });

  const transitions = useTransition(isOpen, null, {
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
  }, [value]);

  const onIntersection = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const handleSelectIndex = useCallback((idx) => {
    setSelectedIndex(idx);
  }, []);

  const selectedResult = results[selectedIndex];

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Portal key={key}>
          <animated.div
            style={{ opacity: props.opacity }}
            css={css`
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              padding: var(--site-content-padding);
              z-index: 100;
              background: ${rgba('#d5d7d7', 0.5)};

              .dark-mode & {
                background: hsla(195, 20%, 20%, 0.5);
              }

              @media screen and (max-width: 760px) {
                padding: 0;
              }

              em {
                border-radius: 0.125rem;
                padding: 0.125rem 0.25rem;
                color: var(--color-neutrals-800);
                background: var(--color-neutrals-200);
                font-style: normal;
                font-weight: bold;
                font-size: 85%;

                .dark-mode & {
                  color: var(--color-brand-300);
                  background: var(--color-dark-200);
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
              style={props}
              css={css`
                --horizontal-spacing: 1rem;

                z-index: 101;
                max-width: 1024px;
                width: 100%;
                margin: auto;
                box-shadow: var(--shadow-4);
                max-height: calc(100vh - 2 * var(--site-content-padding));
                display: flex;
                flex-direction: column;
                position: relative;

                @media screen and (max-width: 760px) {
                  max-height: 100vh;
                  height: 100vh;
                }
              `}
            >
              <Input
                placeholder={t('searchInput.placeholder')}
                ref={searchInput}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                onFilter={(filterName) => {
                  setFilters((filters) => {
                    return filters.map((filter) => {
                      return filter.name === filterName
                        ? { ...filter, isSelected: !filter.isSelected }
                        : filter;
                    });
                  });
                }}
                value={value}
                onClear={() => onChange('')}
                onCancel={onClose}
                filters={filters}
                css={
                  value &&
                  css`
                    input {
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                    }
                  `
                }
              />

              {value && (
                <div
                  css={css`
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    flex-grow: 1;
                    background-color: white;
                    border-bottom-left-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                    box-shadow: var(--shadow-6);
                    border: 1px solid var(--border-color);
                    border-top: none;
                    overflow: hidden;

                    .dark-mode & {
                      background: var(--color-dark-050);
                    }
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
  value: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SearchModal;
