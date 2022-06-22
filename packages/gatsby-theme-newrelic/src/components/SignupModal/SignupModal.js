import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useStaticQuery, graphql } from 'gatsby';

import SignupForm from './SignupForm';
import Modal from '../Modal';
import Surface from '../Surface';
import ListItem from './ListItem';
import Icon from '../Icon';
import Button from '../Button';
import useScrollFreeze from '../../hooks/useScrollFreeze';

const SignupModal = ({ isOpen, onClose }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
      layout: { mobileBreakpoint },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
        layout {
          mobileBreakpoint
        }
      }
    }
  `);

  useScrollFreeze(isOpen);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Button
        css={css`
          position: absolute;
          top: 1rem;
          right: 1rem;
        `}
        variant={Button.VARIANT.PLAIN}
        onClick={onClose}
      >
        <Icon
          css={css`
            :hover {
              color: var(--link-hover-color);
            }
          `}
          name="fe-x"
        />
      </Button>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 4rem;
          align-items: center;
        `}
      >
        <SignupForm siteUrl={siteUrl} />
        <Surface
          css={css`
            width: 100%;
            padding: 2.5rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
            box-shadow: none;
            @media screen and (max-width: ${mobileBreakpoint}) {
              display: none;
            }
          `}
          base={Surface.BASE.PRIMARY}
        >
          <h2
            css={css`
              margin-bottom: 2rem;
            `}
          >
            With your new account, you get:
          </h2>
          <ul
            css={css`
              list-style-type: none;
              padding: 0;

              li:before {
                background-color: var(--brand-button-primary-accent);
              }
            `}
          >
            <ListItem
              primaryText="Perpetually free access."
              secondaryText="100 GB/month of free data ingest. 1 free full access user. Unlimited free basic users."
            />
            <ListItem
              primaryText="One data platform for all metrics, logs, events, and traces."
              secondaryText="Petabyte scale. Millisecond speed. Pennies per gigabyte (beyond free tier)."
            />
            <ListItem
              primaryText="Easily visualize, analyze, and troubleshoot your entire stack."
              secondaryText="APM, Infrastructure Monitoring, Digital Experience Monitoring, Applied Intelligence, and more."
            />
          </ul>
        </Surface>
      </div>
    </Modal>
  );
};

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SignupModal;
