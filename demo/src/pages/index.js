import React from 'react';
import { Button, NewRelicLogo } from '@newrelic/gatsby-theme-newrelic';

const IndexPage = () => (
  <div>
    <NewRelicLogo />
    <h1>Hello, World</h1>
    <p>This is a test</p>
    <Button
      onClick={() => console.log('IT IS NOT')}
      variant={Button.VARIANT.PRIMARY}
      size={Button.SIZE.LARGE}
    >
      Or is it?
    </Button>
  </div>
);

export default IndexPage;
