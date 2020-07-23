import React, { useState } from 'react';
import { Button, SearchInput } from '@newrelic/gatsby-theme-newrelic';

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <h1>Hello, World</h1>
      <p>This is a test</p>
      <Button
        onClick={() => console.log('IT IS NOT')}
        variant={Button.VARIANT.PRIMARY}
        size={Button.SIZE.LARGE}
      >
        Or is it?
      </Button>
      <SearchInput
        style={{ margin: '1rem 0' }}
        placeholder="Test out a medium search"
        onClear={() => setSearchTerm('')}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        width="500px"
      />
      <SearchInput
        style={{ marginBottom: '1rem' }}
        placeholder="Test out a large search"
        onClear={() => setSearchTerm('')}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        width="500px"
        size={SearchInput.SIZE.LARGE}
      />
    </div>
  );
};

export default IndexPage;
