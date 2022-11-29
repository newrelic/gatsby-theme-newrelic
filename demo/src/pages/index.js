import React from 'react';
import { css } from '@emotion/react';
import useDarkMode from 'use-dark-mode';
import { Layout } from '@newrelic/gatsby-theme-newrelic';

const Homepage = () => {
  const darkMode = useDarkMode();

  return (
    <Layout.Main>
      <header
        css={css`
          padding-top: 5px;
          padding-bottom: 25px;
        `}
      >
        <h1>gatsby-theme-newrelic</h1>
      </header>
      <div
        css={css`
          padding-bottom: 25px;
          max-width: 800px;
        `}
      >
        <p>
          This theme contains contains common configuration and shared
          components used across New Relic Gatsby sites. It is primarily used on
          the <a href="https://docs.newrelic.com">docs</a>,
          <a href="https://developer.newrelic.com">developer</a> and{' '}
          <a href="https://opensource.newrelic.com">open source</a> websites.
        </p>
      </div>
      <div
        css={css`
          display: flex;
          padding-bottom: 25px;
        `}
      >
        <section>
          <h2>What's new</h2>
          <p>Check out our latest components:</p>
        </section>
      </div>

      <ul
        css={css`
          color: blue;
          list-style: none;
          display: flex;
          justify-content: space-evenly;
          height: 100px;
          text-align: center;
        `}
      >
        <li
          css={css`
            padding: 3px;
            height: 100%;
            width: 20%;
            border-radius: 5px;
            background-color: white;
            box-shadow: ${darkMode.value ? 'none' : 'var( --shadow-1)'};
          `}
        >
          <a href="/PageTools#ComplexFeedback">ComplexFeedback</a>
        </li>
        <li
          css={css`
            padding: 3px;
            height: 100%;
            width: 20%;
            border-radius: 5px;
            background-color: white;
            box-shadow: ${darkMode.value ? 'none' : 'var( --shadow-1)'};
          `}
        >
          <a href="/utils-examples#Walkthrough">Walkthrough</a>
        </li>
      </ul>
    </Layout.Main>
  );
};

export default Homepage;
