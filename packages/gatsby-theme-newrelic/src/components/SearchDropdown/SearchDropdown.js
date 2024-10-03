import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import KeyboardLegend from './KeyboardLegend';
import Results from './Results';

const SearchDropdown = (props) => {
  // this is all mock data, will be replaced in a later change
  const recentQueries = ['alerts', 'NRQL', 'performance', 'gurngus'];
  const results = [
    {
      breadcrumb:
        'Application performance monitoring / ... / Installation and configuration',
      title: '<em>Analyze</em> model data',
      blurb:
        'AI monitoring surfaces data about your AI models so you can <em>analyze</em>  AI model performance alongside AI app performance',
    },
    {
      breadcrumb:
        'Application performance monitoring / ... / Monitoring / External services page',
      title:
        'New Relic advises updating .NET agent for customers employing Microsoft Extensions Logging with log forwarding...',
      blurb:
        'Change tracking allows you to <em>analyze</em> changes, such as deployments, on any part of your system and use them to <em>analyze</em>  performance data',
    },
    {
      breadcrumb:
        'Mobile monitoring / Explore your AI data / Analyze model data',
      title: 'Capture and analyze changes in your systems',
      blurb:
        'The HTTP errors page helps you understand why network failures are occuring and share actionable data with your team',
    },
    {
      breadcrumb:
        'Mobile monitoring / Explore your AI data / Analyze model data',
      title:
        'Automated user management: How your identity <em>analyze</em>s groups map to our groups',
      blurb:
        'AI monitoring surfaces data about your AI models so you can <em>analyze</em> AI model performance alongside AI app performance',
    },
    {
      breadcrumb:
        'Mobile monitoring / Explore your AI data / Analyze model data',
      title:
        'Understand your system with the New Relic <em>analyze</em> entity explorer, Lookout, and Navigator',
      blurb:
        'AI monitoring surfaces data about your AI models so you can <em>analyze</em> AI model performance alongside AI app performance',
    },
  ];
  const loading = false;
  const error = false;
  const loadMore = () => {};

  return (
    <>
      <Container {...props}>
        <SectionHeading>Recent search terms</SectionHeading>
        {recentQueries.length > 0 && (
          <RecentQueries>
            {recentQueries.map((query) => (
              <li>{query}</li>
            ))}
          </RecentQueries>
        )}

        <SectionHeading>All searches</SectionHeading>
        {error && <Error />}
        {loading && !error && <Skeleton />}
        {!loading && !error && (
          <Results results={results} onViewMore={loadMore} />
        )}
        <KeyboardLegend />
      </Container>
      <Overlay />
    </>
  );
};

const Error = () => (
  <div
    css={css`
      line-height: 1.1;
      margin-bottom: 1rem;
    `}
  >
    unable to load search results
  </div>
);

const Container = styled.div`
  --outer-padding: 16px;

  background: var(--search-dropdown-background);
  border: 1px solid var(--search-dropdown-border);
  border-radius: 4px;
  left: 0;
  padding: var(--outer-padding);
  position: absolute;
  top: 48px;
  width: var(--search-dropdown-width);
  z-index: 1;
`;

const SectionHeading = styled.p`
  font-weight: 500;
  line-height: 1.125;
  margin-bottom: 0.5rem;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: calc(100vh - var(--global-header-height));
  left: 0;
  position: fixed;
  top: var(--global-header-height);
  width: 100vw;
`;

const RecentQueries = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;

  & li {
    line-height: 1.125;
  }
`;

export default SearchDropdown;
