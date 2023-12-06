import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useMount } from 'react-use';

import { setUTMCookies } from './utmCookie';
import { createAccountRequest } from './signup';
import { isValidInput, isValidEmail } from '../../utils/isValidEmail';

import Button from '../Button';
import Link from '../Link';
import Spinner from '../Spinner';
import TextInput from './TextInput';
import ErrorMessage from './ErrorMessage';

import useTessen from '../../hooks/useTessen';

const defaultInputValues = { value: '', isValid: false };

const defaultValues = { email: defaultInputValues, name: defaultInputValues };

const SignupForm = ({ siteUrl }) => {
  const [input, setInput] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const tessen = useTessen();
  const submitEvent = {
    eventName: 'attemptedSignup',
    category: 'SignupForm',
  };

  useMount(() => {
    setUTMCookies(siteUrl);
  });

  const handleChange = (parameter, value) => {
    const changedInput = { ...input };
    if (parameter === 'email') {
      changedInput[parameter] = { value, isValid: isValidEmail(value) };
    } else changedInput[parameter] = { value, isValid: isValidInput(value) };

    setInput(changedInput);
  };

  const onSubmit = async () => {
    setLoading(true);
    const organizationId = await createAccountRequest(
      { email: input.email.value, name: input.name.value },
      tessen,
      submitEvent
    );

    setLoading(false);
    if (organizationId) {
      const redirectUrl = `https://newrelic.com/thank-you?org=${organizationId}&standalone=${true}`;
      window.location.assign(redirectUrl);
    } else {
      setError(true);
    }
  };

  const onClickBack = () => {
    setError(false);
  };

  const validInput = input.email.isValid && input.name.isValid;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage onClickBack={onClickBack} />;
  }

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <h1
        css={css`
          font-size: 3.25rem;
          font-weight: 500;
        `}
      >
        <span
          css={css`
            font-size: 3rem;
          `}
        >
          Free access to all
        </span>{' '}
        <br />
        of New Relic.{' '}
        <span
          css={css`
            position: relative;
            display: inline-block;
            color: var(--brand-button-primary-accent);
            &::after {
              content: '';
              position: absolute;
              z-index: -1;
              top: 102%;
              left: -0.25rem;
              width: 105%;
              aspect-ratio: 124/5;
              background: url(https://newrelic.com/tlmk-14f2caefd4ac6c0f073bb9308664f3e0.svg)
                no-repeat center center / contain;
            }
          `}
        >
          Forever.
        </span>
      </h1>
      <p
        css={css`
          font-size: 1.25rem;
          font-weight: 400;
          letter-spacing: -0.005em;
          margin-bottom: 0.5rem;
        `}
      >
        No credit card required.
      </p>
      <p
        css={css`
          margin-bottom: 1rem;
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--secondary-text-color);
        `}
      >
        Have an account?{' '}
        <Link to="https://login.newrelic.com/login">Login.</Link>
      </p>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        `}
      >
        <TextInput
          name="name"
          label="Name"
          placeholder="e.g. Katherine Johnson"
          value={input.name.value}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <TextInput
          name="email"
          label="Work email"
          placeholder="name@company"
          value={input.email.value}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <Button
          variant={Button.VARIANT.PRIMARY}
          disabled={!validInput}
          onClick={onSubmit}
          css={css`
            margin-top: 0.5rem;
            padding: 1rem;
          `}
        >
          Start Now
        </Button>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <p
            css={css`
              font-size: 12px;
              margin-top: 16px;
            `}
          >
            By signing up you're agreeing to{' '}
            <Link
              css={css`
                color: var(--primary-text-color);

                &:hover {
                  color: var(--brand-button-primary-accent);
                }
              `}
              to="https://newrelic.com/termsandconditions/terms"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              css={css`
                color: var(--primary-text-color);

                &:hover {
                  color: var(--brand-button-primary-accent);
                }
              `}
              to="https://newrelic.com/termsandconditions/privacy"
            >
              Services Privacy Notice.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  siteUrl: PropTypes.string,
};

export default SignupForm;
