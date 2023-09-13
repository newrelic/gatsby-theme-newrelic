/* global expect */
import { createSerializer, matchers } from '@emotion/jest';
import * as emotion from '@emotion/react';
import '@testing-library/jest-dom';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer(emotion));

global.ResizeObserver = class ResizeObserver {
  observe = jest.fn();
  disconnect = jest.fn();
};
