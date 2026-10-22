import * as theme from '../../index';

describe('package exports', () => {
  test('every named export from the package root is defined', () => {
    const undefinedExports = Object.entries(theme)
      .filter(([, value]) => value === undefined)
      .map(([name]) => name);

    expect(undefinedExports).toEqual([]);
  });

  test('exports NR_SITES', () => {
    expect(theme.NR_SITES).toEqual(
      expect.objectContaining({ DOCS: 'DOCS', COMMUNITY: 'COMMUNITY' })
    );
  });
});
