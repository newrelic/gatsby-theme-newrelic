import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const OneTrust = () => {
  const {
    site: {
      siteMetadata: { oneTrustID },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          oneTrustID
        }
      }
    }
  `);

  // This needs to be set for the OneTrust snippet.
  if (window !== undefined) {
    window.OptanonWrapper = () => {};
  }

  // If the site does not have a oneTrustID specified in the siteMetadata,
  // don't add the snippet.
  if (!oneTrustID) {
    return null;
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
