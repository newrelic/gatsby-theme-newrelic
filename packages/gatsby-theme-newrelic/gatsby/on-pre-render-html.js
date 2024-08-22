import React from 'react';

const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  pathname,
}) => {
  const languages = { kr: 'ko', jp: 'ja', es: 'es', pt: 'pt-br' };

  const getCurrentLanguage = () => {
    let matchingLanguage = 'en';
    for (const language in languages) {
      if (pathname.startsWith(`/${language}/`)) {
        matchingLanguage = languages[language];
      }
    }
    return matchingLanguage;
  };

  const currentLanguage = getCurrentLanguage();

  replaceHeadComponents(
    [
      process.env.ENVIRONMENT === 'production' && (
        <script
          src={`https://cmp.osano.com/AzZVWOTJtg1WY32RK/cd381ba3-ebca-488c-a528-376a86764609/osano.js?language=${currentLanguage}`}
        />
      ),
      ...getHeadComponents(),
      <link
        key="open-sans"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
      />,
    ].filter(Boolean)
  );
};

export default onPreRenderHTML;
