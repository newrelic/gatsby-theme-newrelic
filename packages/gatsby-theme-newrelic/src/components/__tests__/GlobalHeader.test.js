import TestRenderer from 'react-test-renderer';
import GlobalHeader from '../GlobalHeader';
import { useStaticQuery } from 'gatsby';
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';

const source = createMemorySource('/');
const history = createHistory(source);

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        siteUrl: 'https://example.com',
      },
      layout: {
        maxWidth: '1236px',
      },
    },
  }));
});

test('Matches snapshot', () => {
  const tree = TestRenderer.create(
    <LocationProvider history={history}>
      <GlobalHeader search />
    </LocationProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
