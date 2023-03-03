import React from 'react';
import { css } from '@emotion/react';
import { CodeBlock, Walkthrough } from '@newrelic/gatsby-theme-newrelic';

import { PopoverButton, Popover } from '.';

// don't export this component.
// just an example for the demo page 🙂
const CustomPopoverExample = () => (
  <PopoverButton Popover={CustomPopover}>a ✨ custom popover ✨</PopoverButton>
);

// make sure to pass through `props` to the `Popover` component,
// otherwise none of the functionality will work and your `PopoverButton`
// with just be a `Button` that doesn't do anything.
const CustomPopover = (props) => (
  <Popover {...props}>
    <h2
      css={css`
        color: tomato;
      `}
    >
      howdy pardner 🤠
    </h2>
    <p>
      you can do whatever you want in here and nobody can stop you. okay, almost
      everything, it probably isn't a good idea to put another Popover inside of
      here. but other stuff works pretty well
    </p>
    <CodeBlock
      css={css`
        margin-bottom: 2rem;
      `}
      language="json"
    >
      {jsonSample}
    </CodeBlock>

    <Walkthrough
      css={css`
        & h2 {
          color: var(--brand-button-primary-accent);
        }
      `}
    >
      <Walkthrough.Step title="The first step" id="step1">
        hello there!
      </Walkthrough.Step>
      <Walkthrough.Step title="The second step" id="step2">
        this is the next step. this works in a Popover! pretty wild
      </Walkthrough.Step>
    </Walkthrough>
  </Popover>
);

const jsonSample = `
[
  {
    "name": "Virgo",
    "brightest_star": "Spica"
  },
  {
    "name": "Perseus"
    "brightest_star": "Alpha Persei"
  }
]
`;

export default CustomPopoverExample;
