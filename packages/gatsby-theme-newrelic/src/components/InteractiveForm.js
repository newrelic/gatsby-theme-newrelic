import React, { useState } from 'react';
import { css } from '@emotion/react';
import { scroller } from 'react-scroll';
import Link from './Link';
import Callout from './Callout';
import CustomTextInput from './CustomTextInput';
import InteractiveOutput from './InteractiveOutput';

const InteractiveForm = () => {
  const [appName, setAppName] = useState('My Application');
  const [licenseKey, setLicenseKey] = useState('12345');
  const scrollToAppName = () => {
    scroller.scrollTo('line-32', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'codeblock',
      offset: -5,
    });
  };

  const scrollToLicenseKey = () => {
    scroller.scrollTo('line-16', {
      duration: 800,
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
      `}
    >
      <div
        css={css`
          width: 49%;
        `}
      >
        <CustomTextInput
          name="app-name"
          label="Name your app"
          value={appName}
          onChange={(e) => {
            scrollToAppName();
            setAppName(e.target.value);
          }}
          toolTip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "
          css={css`
            margin-bottom: 1.5rem;
          `}
        />
        <CustomTextInput
          name="license-key"
          label="Enter your New Relic"
          value={licenseKey}
          onChange={(e) => {
            scrollToLicenseKey();
            setLicenseKey(e.target.value);
          }}
          url={{ href: 'https://newrelic.com', title: 'license key' }}
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
        `}
        appName={appName}
        licenseKey={licenseKey}
      />
    </div>
  );
};

export default InteractiveForm;
