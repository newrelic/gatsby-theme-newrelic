import Cookies from 'js-cookie';

const utmNames = [
  'utm_campaign',
  'utm_medium',
  'utm_source',
  'utm_content',
  'gclid',
  'utm_mpc',
];

const getUrlParameter = (name) => {
  name = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');

  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results === null
    ? false
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const getGaId = () => {
  // Magic formula provided by Website Eng
  const gaID = Cookies.get('_ga');
  return gaID ? gaID.replace(/GA.\..\./g, '') : '';
};

const getUTMValues = () => {
  return {
    source_f: Cookies.get('source_f'),
    medium_f: Cookies.get('medium_f'),
    campaign_f: Cookies.get('campaign_f'),
    content_f: Cookies.get('content_f'),
    gclid_f: Cookies.get('gclid_f'),
    mpc_f: Cookies.get('mpc_f'),
    source_l: Cookies.get('source_l'),
    medium_l: Cookies.get('medium_l'),
    campaign_l: Cookies.get('campaign_l'),
    content_l: Cookies.get('content_l'),
    gclid_l: Cookies.get('gclid_l'),
    mpc_l: Cookies.get('mpc_l'),
    ga_id: getGaId(),
    ref_page_url: Cookies.get('ref_page_url'),
    ref_page_cat: Cookies.get('ref_page_cat'),
    ref_page_sub_cat: Cookies.get('ref_page_sub_cat'),
    content_from_page_c: window.location && window.location.href,
    url: window.location && window.location.href, // aliased for integration purposes, Marketo likes ^
  };
};

const setUTMCookies = () => {
  if (window.location.search.length > 0) {
    utmNames.forEach((paramName) => {
      const urlValue = getUrlParameter(paramName);
      if (urlValue) {
        const cookieName = paramName.replace('utm_', '');
        if (!Cookies.get(`${cookieName}_f`)) {
          Cookies.set(`${cookieName}_f`, urlValue, {
            domain: 'newrelic.com',
          });
        }
        Cookies.set(`${cookieName}_l`, urlValue, {
          domain: 'newrelic.com',
        });
      }
    });
    Cookies.set('ref_page_url', document.referrer, {
      domain: 'newrelic.com',
    });
    Cookies.set('ref_page_cat', 'public', {
      domain: 'newrelic.com',
    });
    Cookies.set('ref_page_sub_cat', 'signup', {
      domain: 'newrelic.com',
    });
  }
};

export { getUTMValues, setUTMCookies };
