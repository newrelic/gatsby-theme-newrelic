import React from 'react';
import Icon from '../Icon';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import icons from '../../icons';

const defaultIcon = Object.keys(icons)[0];

Object.keys(icons).forEach((name) => {
  test(`${name} icon matches its snapshot`, () => {
    const tree = TestRenderer.create(<Icon name={name} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

test('raises when an icon does not exist', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});

  expect(() => render(<Icon name="this icon does not exist" />)).toThrow(
    'Icon: this icon does not exist did not match a known icon'
  );
});

test('matches the size passed in from the prop', () => {
  const { container } = render(<Icon name={defaultIcon} size="2rem" />);

  const icon = container.firstChild;

  expect(icon).toHaveStyleRule('width', '2rem');
  expect(icon).toHaveStyleRule('height', '2rem');
});

test('allows for defs defined for the icon', () => {
  const { container } = render(
    <Icon
      name={defaultIcon}
      defs={
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#0FB7C9" />
          <stop offset="150%" stopColor="#0069CE" />
        </linearGradient>
      }
    />
  );

  expect(container.querySelector('defs')).toBeInTheDocument();
});
