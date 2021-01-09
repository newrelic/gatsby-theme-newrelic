export const localizePath = ({ path, locale }) => {
  if (locale.isDefault) {
    return path;
  }

  const [, base] = path.split('/');

  return base === locale.localizedPath
    ? path
    : `/${locale.localizedPath}${path}`;
};
