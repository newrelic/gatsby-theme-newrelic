import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';
import Link from './Link';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';
import useThemeTranslation from '../hooks/useThemeTranslation';
import { graphql, useStaticQuery } from 'gatsby';

const EditPageButton = ({
  fileRelativePath,
  onClick,
  instrumentation,
  ...props
}) => {
  const { t } = useThemeTranslation();
  const handleClick = useInstrumentedHandler(onClick, {
    actionName: 'editThisPage_click',
    component: instrumentation?.component,
  });

  const {
    site: {
      siteMetadata: { repository, branch },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository
          branch
        }
      }
    }
  `);

  return (
    <Button
      {...props}
      as={Link}
      to={`${repository}/blob/${branch}/${fileRelativePath || ''}`}
      onClick={handleClick}
    >
      <Icon
        name="fe-edit"
        css={css`
          margin-right: 0.5rem;
        `}
      />
      {t('github.editPage')}
    </Button>
  );
};

EditPageButton.propTypes = {
  fileRelativePath: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  instrumentation: PropTypes.shape({
    component: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditPageButton;
