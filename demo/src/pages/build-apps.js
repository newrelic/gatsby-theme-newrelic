import React from 'react';
import {
  Button,
  Link,
  Layout,
  ContributingGuidelines,
} from '@newrelic/gatsby-theme-newrelic';

const BuildApps = () => {
  return (
    <Layout.Main>
      <Layout.Content>
        <h1>Build apps</h1>
        <p>This is a dummy page to demonstrate navigating to another page</p>
        <Button as={Link} to="/" variant={Button.VARIANT.NORMAL}>
          Go back home
        </Button>
      </Layout.Content>
      <Layout.PageTools>
        <ContributingGuidelines
          fileRelativePath="/build-apps"
          title="Build Apps"
        />
      </Layout.PageTools>
    </Layout.Main>
  );
};

export default BuildApps;
