import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import SignupForm from './SignupForm';
import Modal from '../Modal';
import Surface from '../Surface';
import ListItem from './ListItem';
import RecaptchaFooter from './RecaptchaFooter';

const SignupModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 2rem;
        `}
      >
        <SignupForm />
        <Surface
          css={css`
            width: 100%;
            padding: 2rem;
          `}
          base={Surface.BASE.PRIMARY}
        >
          <h2>With your new account, you get:</h2>
          <ul
            css={css`
              list-style-type: none;
              li:nth-child(1):before {
                background-color: #f9e3f2;
              }
              li:nth-child(2):before {
                background-color: #e7f6f6;
              }
              li:nth-child(3):before {
                background-color: #fdebb8;
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
              checkmarkColor="#E7F6F6"
            />
            <ListItem
              primaryText="Easily visualize, analyze, and troubleshoot your entire stack."
              secondaryText="APM, Infrastructure Monitoring, Digital Experience Monitoring, Applied Intelligence, and more."
            />
          </ul>
        </Surface>
      </div>
      <RecaptchaFooter />
    </Modal>
  );
};

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SignupModal;
