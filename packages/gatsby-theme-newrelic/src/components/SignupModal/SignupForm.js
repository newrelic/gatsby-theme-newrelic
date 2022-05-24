import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useMount } from 'react-use';

import Button from '../Button';
import Link from '../Link';
import Spinner from '../Spinner';

import TextInput from './TextInput';
import { setUTMCookies } from './utmCookie';
import { createAccountRequest } from './signup';
import useTessen from '../../hooks/useTessen';
import ErrorMessage from './ErrorMessage';

const isValid = (value) => value !== undefined && value.length > 0;

const defaultInputValues = { value: '', isValid: false };

const defaultValues = { email: defaultInputValues, name: defaultInputValues };

const SignupForm = () => {
  const [input, setInput] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const tessen = useTessen();

  useMount(() => {
    setUTMCookies();
  });

  const handleChange = (parameter, value) => {
    const changedInput = { ...input };
    changedInput[parameter] = { value, isValid: isValid(value) };

    setInput(changedInput);
  };

  const onSubmit = async () => {
    setLoading(true);
    const organizationId = await createAccountRequest(input, tessen);

    setLoading(false);
    if (organizationId) {
      const redirectUrl = `https://newrelic.com/thank-you?org=${organizationId}&standalone=${true}`;
      window.location.assign(redirectUrl);
    } else {
      setError(true);
    }
  };

  const invalidInput = !input.email.isValid || !input.name.isValid;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div
      css={css`
        max-width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <h1
        css={css`
          font-size: 3.5rem;
          font-weight: 500;
        `}
      >
        Free access to all of New Relic.{' '}
        <span
          css={css`
            position: relative;
            display: inline-block;
            color: #0095a9;
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
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: -0.005em;
        `}
      >
        No credit card required.
      </p>
      <p
        css={css`
          margin-bottom: 1rem;
          font-size: 0.875rem;
          line-height: 1.5;
          color: #6a6f74;
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
          disabled={invalidInput}
          onClick={onSubmit}
          css={css`
            margin-top: 0.5rem;
            padding: 1rem;
          `}
        >
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
