import React from 'react';
import Tabs from '../Tabs';
import { render } from '@testing-library/react';

test('renders tab pages', () => {
  const { getByText } = render(
    <Tabs>
      <Tabs.Bar>
        <Tabs.BarItem id="first">Amazing first tab</Tabs.BarItem>
        <Tabs.BarItem id="second">Amazing second tab</Tabs.BarItem>
        <Tabs.BarItem id="third">Amazing third tab</Tabs.BarItem>
      </Tabs.Bar>
      <Tabs.Pages>
        <Tabs.Page id="first">useboop()</Tabs.Page>
        <Tabs.Page id="second">I like turtles</Tabs.Page>
        <Tabs.Page id="third">Brown rice taco</Tabs.Page>
      </Tabs.Pages>
    </Tabs>
  );
  expect(getByText(/useboop()/)).toBeInTheDocument();
  expect(getByText(/I like turtles/)).toBeInTheDocument();
  expect(getByText(/Brown rice taco/)).toBeInTheDocument();
});

test('renders first tab as selected as default', () => {
  const { getAllByRole } = render(
    <Tabs>
      <Tabs.Bar>
        <Tabs.BarItem id="first">Amazing first tab</Tabs.BarItem>
        <Tabs.BarItem id="second">Amazing second tab</Tabs.BarItem>
        <Tabs.BarItem id="third">Amazing third tab</Tabs.BarItem>
      </Tabs.Bar>
      <Tabs.Pages>
        <Tabs.Page id="first">useboop()</Tabs.Page>
        <Tabs.Page id="second">I like turtles</Tabs.Page>
        <Tabs.Page id="third">Brown rice taco</Tabs.Page>
      </Tabs.Pages>
    </Tabs>
  );
  const tabs = getAllByRole('tab');
  expect(
    tabs
      .find((tab) => tab.textContent === 'Amazing first tab')
      .className.includes('isSelected')
  ).toBeTruthy();
  expect(
    tabs
      .find((tab) => tab.textContent === 'Amazing second tab')
      .className.includes('isSelected')
  ).not.toBeTruthy();
  expect(
    tabs
      .find((tab) => tab.textContent === 'Amazing third tab')
      .className.includes('isSelected')
  ).not.toBeTruthy();
});

test('renders chosen tab as selected when initialTab is passed', () => {
  const { getAllByRole } = render(
    <Tabs initialTab={'second'}>
      <Tabs.Bar>
        <Tabs.BarItem id="first">Amazing first tab</Tabs.BarItem>
        <Tabs.BarItem id="second">Amazing second tab</Tabs.BarItem>
        <Tabs.BarItem id="third">Amazing third tab</Tabs.BarItem>
      </Tabs.Bar>
      <Tabs.Pages>
        <Tabs.Page id="first">useboop()</Tabs.Page>
        <Tabs.Page id="second">I like turtles</Tabs.Page>
        <Tabs.Page id="third">Brown rice taco</Tabs.Page>
      </Tabs.Pages>
    </Tabs>
  );
  const tabs = getAllByRole('tab');
  expect(
    tabs
      .find((tab) => tab.textContent === 'Amazing first tab')
      .className.includes('isSelected')
  ).not.toBeTruthy();
  expect(
    tabs
      .find((tab) => tab.textContent === 'Amazing second tab')
      .className.includes('isSelected')
  ).toBeTruthy();
  expect(
    tabs
      .find((tab) => tab.textContent === 'Amazing third tab')
      .className.includes('isSelected')
  ).not.toBeTruthy();
});
