import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Button from './Button';
import PageTools from './PageTools';
import EditPageButton from './EditPageButton';
import useLocale from '../hooks/useLocale';

const ContributingGuidelines = ({ className, fileRelativePath }) => {
  const { locale } = useLocale();

  return (
    <PageTools.Section
      className={className}
      css={css`
        margin: 0;
        padding: 0;
        border: none;
      `}
    >
      {fileRelativePath && locale === 'en' && (
        <EditPageButton
          fileRelativePath={fileRelativePath}
          variant={Button.VARIANT.OUTLINE}
          size={Button.SIZE.SMALL}
          instrumentation={{ component: 'ContributingGuidelines' }}
          css={css`
            width: 100%;
            height: 3rem;
            &:hover {
              color: var(--secondary-text-color);
            }
          `}
        />
      )}
    </PageTools.Section>
  );
};

ContributingGuidelines.propTypes = {
  className: PropTypes.string,
  fileRelativePath: PropTypes.string,
};

export default ContributingGuidelines;
