import { addLeadingSlash } from './location';

export const localizePath = ({
  path,
  locale,
}: {
  path: string;
  locale: { isDefault: boolean; locale: string };
}): string => {
  if (locale.isDefault) {
    return path;
  }

  const [, base] = path.split('/');

  return base === locale.locale
    ? path
    : `/${locale.locale}${addLeadingSlash(path) as string}`;
};

export const localizeExternalLink = ({
  link,
  locale,
}: {
  link: string;
  locale: { isDefault: boolean; locale: string };
}): string => {
  if (locale.isDefault) {
    return link;
  }

  const url = new URL(link);

  url.pathname = localizePath({ path: url.pathname, locale });

  return url.href;
};
