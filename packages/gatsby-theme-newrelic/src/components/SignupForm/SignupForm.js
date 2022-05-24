import React, { useState } from 'react';
import { useMount } from 'react-use';

import Button from '../Button';

import TextInput from './TextInput';
import { setUTMCookies } from './utmCookie';
import { createAccountRequest } from './signup';
import useTessen from '../../hooks/useTessen';

const isValid = (value) => value !== undefined && value.length > 0;

const defaultInputValues = { value: '', isValid: false };

const defaultValues = { email: defaultInputValues, name: defaultInputValues };

const SignupForm = () => {
  const [input, setInput] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const tessen = useTessen();

  useMount(() => {
    setUTMCookies();
  });

  const handleChange = (parameter, value) => {
    const changedInput = input;
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
    }
  };

  const invalidInput = !input.email.isValid || !input.name.isValid;

  return (
    <form>
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
      />
      {loading}
    </form>
  );
};

export default SignupForm;
