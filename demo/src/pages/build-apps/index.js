import React from 'react';
import { css } from '@emotion/react';
import {
  Button,
  Link,
  Layout,
  ContributingGuidelines,
} from '@newrelic/gatsby-theme-newrelic';

const BuildApps = () => {
  return (
    <Layout.Main
      css={css`
        display: grid;
        grid-template-areas: 'content page-tools';
        grid-template-columns: minmax(0, 1fr) 320px;
        grid-column-gap: 2rem;
      `}
    >
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
          pageTitle="Build Apps"
        />
      </Layout.PageTools>
    </Layout.Main>
  );
};

export default BuildApps;
