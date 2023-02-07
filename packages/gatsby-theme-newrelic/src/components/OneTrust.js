import React from 'react';
import PropTypes from 'prop-types';

const OneTrust = ({ id }) => {
  // If the site does not have a oneTrustID specified in the siteMetadata,
  // don't add the snippet.
  if (!id) {
    return null;
  }

  // This needs to be set for the OneTrust snippet.
  if (typeof window !== 'undefined') {
    window.OptanonWrapper = () => {};
  }

  return (
    <script
      src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
      type="text/javascript"
      // eslint-disable-next-line react/no-unknown-property
      charset="UTF-8"
      data-domain-script={id}
    />
  );
};

OneTrust.propTypes = {
  id: PropTypes.string,
};

export default OneTrust;
