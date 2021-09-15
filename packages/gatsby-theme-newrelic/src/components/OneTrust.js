import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const OneTrust = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          oneTrustID
        }
      }
    }
  `);
  const { oneTrustID } = data.site.siteMetadata;

  if (window !== undefined) {
    window.OptanonWrapper = () => {};
  }

  return (
    <script
      src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
      type="text/javascript"
      charset="UTF-8"
      data-domain-script={oneTrustID}
    />
  );
};

export default OneTrust;
