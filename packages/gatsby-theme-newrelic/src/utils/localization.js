import { addLeadingSlash } from './location';

export const localizePath = ({ path, locale }) => {
  if (locale.isDefault) {
    return path;
  }

  const [, base] = path.split('/');

  return base === locale.localizedPath
    ? path
    : `/${locale.localizedPath}${addLeadingSlash(path)}`;
};

export const localizeExternalLink = ({ link, locale }) => {
  if (locale.isDefault) {
    return link;
  }

  const paths = link.replace('https://', '').split('/');

  paths.splice(1, 0, locale.locale).join('/');

  return `https://${paths.join('/')}`;
};
//{ path: to, locale }
