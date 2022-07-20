import React, { useState } from 'react';
import { useDebounce } from 'react-use';
import { css } from '@emotion/react';
import { scroller } from 'react-scroll';
import Link from './Link';
import Callout from './Callout';
import CustomTextInput from './CustomTextInput';
import InteractiveOutput from './InteractiveOutput';

const InteractiveForm = () => {
  const [appName, setAppName] = useState('My Application');
  const [licenseKey, setLicenseKey] = useState('12345');

  useDebounce(
    () => {
      if (appName !== 'My Application') {
        scrollToAppName();
      }
    },
    400,
    [appName]
  );

  useDebounce(
    () => {
      if (licenseKey !== '12345') {
        scrollToLicenseKey();
      }
    },
    400,
    [licenseKey]
  );

  const scrollToAppName = () => {
    scroller.scrollTo('line-32', {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'codeblock',
      offset: -5,
    });
  };

  const scrollToLicenseKey = () => {
    scroller.scrollTo('line-16', {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'codeblock',
      offset: -5,
    });
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: relative;
        @media screen and (max-width: 1000px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          width: 49%;
          @media screen and (max-width: 1000px) {
            width: 100%;
          }
        `}
      >
        <CustomTextInput
          name="app-name"
          label="Name your app"
          value={appName}
          onChange={(e) => {
            setAppName(e.target.value);
          }}
          toolTip="The app name in the agent's configuration file will be used in the New Relic user interface"
          css={css`
            margin-bottom: 1.5rem;
          `}
        />
        <CustomTextInput
          name="license-key"
          label="Enter your New Relic"
          value={licenseKey}
          onChange={(e) => {
            setLicenseKey(e.target.value);
          }}
          url={{
            href: 'https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key',
            title: 'license key',
          }}
          css={css`
            margin-bottom: 1.5rem;
          `}
        />
        <Callout variant={Callout.VARIANT.TIP}>
          When using the config file we recommend:
          <ul>
            <li>
              change the default <code>newrelic.yml</code> file permissions to
              read/write only for the owner of the application server process.
            </li>
            <li>
              make sure <code>newrelic.yml</code> is part of your backup
              routine.
            </li>
            <li>
              use the{' '}
              <Link to="https://docs.newrelic.com/docs/new-relic-solutions/solve-common-issues/diagnostics-cli-nrdiag/diagnostics-cli-nrdiag/">
                New Relic Diagnostics CLI
              </Link>{' '}
              to validate your settings, either before or after you deploy.
            </li>
          </ul>
        </Callout>
      </div>
      <InteractiveOutput
        css={css`
          margin-top: 1rem;
          width: 49%;
          @media screen and (max-width: 1000px) {
            width: 100%;
          }

          #codeblock {
            // removing the height of the buttons at the top or it overflows
            max-height: calc(100% - 50px);
          }
          > div {
            height: calc(100% - 16px);
            position: absolute;
            width: inherit;
            @media screen and (max-width: 1000px) {
              position: relative;
              height: 400px;
            }
          }
        `}
        appName={appName}
        licenseKey={licenseKey}
      />
    </div>
  );
};

export default InteractiveForm;
