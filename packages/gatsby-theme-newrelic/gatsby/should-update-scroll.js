const shouldUpdateScroll = ({
  routerProps,
  getSavedScrollPosition,
  themeOptions,
}) => {
  if (
    themeOptions?.shouldUpdateScroll &&
    themeOptions.shouldUpdateScroll.routes.some((route) =>
      routerProps?.location?.pathname.startsWith(route)
    )
  ) {
    const currentPosition = getSavedScrollPosition(routerProps?.location);
    return currentPosition || [0, 0];
  }
  return false;
};

export default shouldUpdateScroll;
