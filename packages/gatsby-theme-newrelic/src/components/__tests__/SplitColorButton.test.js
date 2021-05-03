import React from 'react';
import TestRenderer from 'react-test-renderer';
import { SplitFactory } from '@splitsoftware/splitio-react';
import SplitColorButton from '../SplitColorButton';
import Button from '../Button';

test('renders default button with no split', async () => {
  const config = createSplitConfig();

  const element = () => (
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitColorButton treatmentName="test_feature" variant={Button.VARIANT.PRIMARY} size={Button.SIZE.EXTRA_SMALL}>
        <span>Test</span>
      </SplitColorButton>
    </SplitFactory>
  );

  let root = element();
  let tree;
  await TestRenderer.act(async () => {
    tree = TestRenderer.create(root);
  });

  await TestRenderer.act(async () => {
    tree.update(root);
  });

  expect(tree.toJSON()).toMatchSnapshot();
});

test('renders button with color defined in split', async () => {
  const config = createSplitConfig("red");

  const element = () => (
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitColorButton treatmentName="test_feature" variant={Button.VARIANT.PRIMARY} size={Button.SIZE.EXTRA_SMALL}>
        <span>Test</span>
      </SplitColorButton>
    </SplitFactory>
  );

  let root = element();
  let tree;
  await TestRenderer.act(async () => {
    tree = TestRenderer.create(root);
  });

  await TestRenderer.act(async () => {
    tree.update(root);
  });

  expect(tree.toJSON()).toMatchSnapshot();
});

test('renders spinner before split.io is ready', async () => {
  const config = createSplitConfig("red");

  const element = () => (
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitColorButton treatmentName="test_feature" variant={Button.VARIANT.PRIMARY} size={Button.SIZE.EXTRA_SMALL}>
        <span>Test</span>
      </SplitColorButton>
    </SplitFactory>
  );

  let root = element();
  let tree;
  await TestRenderer.act(async () => {
    tree = TestRenderer.create(root);
  });

  expect(tree.toJSON()).toMatchSnapshot();
});

test('renders children', async () => {
  const config = createSplitConfig('blue');

  const element = () => (
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitColorButton treatmentName="test_feature" variant={Button.VARIANT.PRIMARY} size={Button.SIZE.EXTRA_SMALL}>
        <span>Test child text must match</span>
      </SplitColorButton>
    </SplitFactory>
  );

  let root = element();
  let tree;
  await TestRenderer.act(async () => {
    tree = TestRenderer.create(root);
  });

  await TestRenderer.act(async () => {
    tree.update(root);
  });

  expect(tree.toJSON()).toMatchSnapshot();
});

const createSplitConfig = (color) => {
  return {
    core: {
      authorizationKey: 'localhost',
      key: 'user',
    },
    features: {
      test_feature: color ? { treatment: 'testcolor', config: `{ "color": "${color}" }` } : 'off',
    },
    scheduler: {
      offlineRefreshRate: 15
    },
    debug: false,
  }
};
