/* global expect */
import { createSerializer, matchers } from 'jest-emotion';
import * as emotion from '@emotion/core';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer(emotion));
