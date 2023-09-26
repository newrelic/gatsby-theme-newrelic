import { buildConfigGetter } from '../configBuilder.mjs';

test('returns null if the theme option is not defined', () => {
  const themeOptions = {};

  const getter = buildConfigGetter('test');
  const config = getter(themeOptions);

  expect(config).toBeNull();
});

test('merges defaults with config', () => {
  const themeOptions = { test: { anotherOption: true } };

  const getter = buildConfigGetter('test', { defaults: { enable: true } });
  const config = getter(themeOptions);

  expect(config).toEqual({ enable: true, anotherOption: true });
});

test('merges environment-specific config when enabled and defined', () => {
  const themeOptions = {
    test: {
      enable: true,
      anotherOption: false,
      env: {
        test: {
          enable: false,
        },
      },
    },
  };

  const getter = buildConfigGetter('test', {
    envOptions: true,
    defaults: { enable: true },
  });
  const config = getter(themeOptions);

  expect(config).toEqual({ enable: false, anotherOption: false });
});

test('env-specific config has no effect if the config does not accept env options', () => {
  const themeOptions = {
    test: {
      enable: true,
      env: {
        development: {
          enable: false,
        },
      },
    },
  };

  const getter = buildConfigGetter('test', { envOptions: false });
  const config = getter(themeOptions);

  expect(config).toEqual({ enable: true });
});
