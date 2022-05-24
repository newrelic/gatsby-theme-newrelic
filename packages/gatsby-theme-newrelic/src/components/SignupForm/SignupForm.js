import React, { useState } from 'react';

import TextInput from './TextInput';
import Button from '../Button';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    console.log({ email, name });
  };
  return (
    <form>
      <TextInput
        name="name"
        label="Name"
        placeholder="e.g. Katherine Johnson"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        name="email"
        label="Work email"
        placeholder="name@company"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant={Button.VARIANT.PRIMARY} onClick={handleSubmit} />
    </form>
  );
};

export default SignupForm;
