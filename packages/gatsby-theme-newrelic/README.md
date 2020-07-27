[![Community Project header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Community_Project.png)](https://opensource.newrelic.com/oss-category/#community-project)

# `gatsby-theme-newrelic`

This theme contains contains common configuration used across New Relic Gatsby
sites as well as exports shared components. It is primarily used on the
[developer](https://developer.newrelic.com) and [open source
websites](https://opensource.newrelic.com)

<!-- TOC GFM -->

- [Installation](#installation)
- [Configuration](#configuration)
  - [Options](#options)
    - [`newrelic`](#newrelic)
    - [`robots`](#robots)
    - [`layout`](#layout)
    - [`prism`](#prism)
- [Components](#components)
  - [`Button`](#button)
  - [`CodeBlock`](#codeblock)
  - [`ExternalLink`](#externallink)
  - [`GlobalHeader`](#globalheader)
  - [`HamburgerMenu`](#hamburgermenu)
  - [`Icon`](#icon)
  - [`MDXCodeBlock`](#mdxcodeblock)
  - [`NewRelicLogo`](#newreliclogo)
  - [`SearchInput`](#searchinput)
  - [`Surface`](#surface)
  - [`Video`](#video)
- [Hooks](#hooks)
  - [`useClipboard`](#useclipboard)
  - [`useFormattedCode`](#useformattedcode)
  - [`useTimeout`](#usetimeout)
- [Utils](#utils)
  - [`formatCode`](#formatcode)

<!-- /TOC -->

## Installation

`gatsby-theme-newrelic` uses [Emotion](https://emotion.sh) for styling and
depends on its packages. To install this package, add the
`@newrelic/gatsby-theme-newrelic` package and required Emotion packages.

npm:

```sh
npm install @newrelic/gatsby-theme-newrelic @emotion/core @emotion/styled
```

yarn:

```sh
yarn add @newrelic/gatsby/theme/newrelic @emotion/core @emotion/styled
```

## Configuration

You can configure `gatsby-theme-newrelic` using the provided configuration
options.

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    siteUrl: 'https://developer.newrelic.com',
    repository: 'https://github.com/newrelic/gatsby-theme-newrelic',
  },
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        layout: {
          contentPadding: '2rem',
          maxWidth: '1600px',
        },
        newrelic: {
          configs: {
            staging: {
              instrumentationType: 'proAndSPA',
              accountId: '1234',
              trustKey: '1',
              agentID: '1234',
              licenseKey: 'your-license-key',
              applicationID: '1234',
            },
            production: {
              instrumentationType: 'proAndSPA',
              accountId: '1234',
              trustKey: '1',
              agentID: '1234',
              licenseKey: 'your-license-key',
              applicationID: '12345',
            },
          },
        },
        robots: {
          policy: [{ userAgent: '*', allow: '/' }],
        },
      },
    },
  ],
};
```

### Options

#### `newrelic`

Configuration for
[`gatsby-plugin-newrelic`](https://github.com/newrelic/gatsby-plugin-newrelic).
For more details on the available configuration options, visit [the
documentation](https://github.com/newrelic/gatsby-plugin-newrelic).

**Default:** `null`

#### `robots`

Configuration for
[`gatsby-plugin-robots-txt`](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/).
For more details on the available configuration options, visit [the
documentation.](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/)

**Default**: `policy: [{ userAgent: '*', allow: '/' }]`

#### `layout`

Configuration for the layout.

**Options:**

- `maxWidth` _(string)_: Sets the max width of the layout. Accepts any CSS
  string value (e.g. `1280px`).
- `contentPadding` _(string)_: Sets the padding value for the content. Accepts
  any CSS string value (e.g. `2rem`)

**Default**: `{}`

Layout configuration is available in the GraphQL schema which can be queried
within the `Site` type. This is useful when you have other layout elements that
need to use the layout configuration.

```graphql
query {
  site {
    layout {
      maxWidth
      contentPadding
    }
  }
}
```

#### `prism`

Configuration for the [prismjs](https://prismjs.com/) library. This library
powers the syntax highlighting used in the [`CodeBlock`](#codeblock) component.

**Options:**

- `languages`: _([string])_: Configure additional languages used for syntax highlighting.
  These languages will be appended to the list of default supported languages in
  the theme. For a full list of supported languages, visit the [prism
  documentation](https://prismjs.com/#supported-languages).

Default supported languages:

- `css`
- `hcl`
- `javascript`
- `json`
- `jsx`
- `ruby`
- `shell`
- `sql`
- `graphql`

**Example:** Add `swift` as a supported language

```js
module.exports = {
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        prism: {
          languages: ['swift'],
        },
      },
    },
  ],
};
```

## Components

### `Button`

Styled buttons used to draw emphasis on clickable actions.

```js
import { Button } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop    | Type          | Required | Default  | Description                                                                                                                       |
| ------- | ------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| variant | enum          | yes      |          | Configures the variant of the button. Must either be `Button.VARIANT.PLAIN`, `Button.VARIANT.PRIMARY`, or `Button.VARIANT.NORMAL` |
| size    | enum          | no       |          | Configures the size of the button. Can be configured to `Button.SIZE.SMALL`                                                       |
| as      | React element | no       | `button` | Render the button as a different base element. Useful when you want to style links as buttons.                                    |

All other props will be forwarded to the underlying element specified by the
`as` prop.

**Examples**

Base

```js
<Button variant={Button.VARIANT.PRIMARY} onClick={() => console.log('Hello')}>
  Say hello
</Button>
```

Render a link as a button

```js
import { Link } from 'gatsby';

// ...

<Button as={Link} to="/page-2" variant={Button.VARIANT.PRIMARY}>
  Page 2
</Button>;
```

### `CodeBlock`

Used when rendering code blocks on a page.

```js
import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop               | Type    | Required | Default                    | Description                                                                                                                                                                                                                                                                |
| ------------------ | ------- | -------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`         | string  | yes      |                            | The code to be rendered in the code block                                                                                                                                                                                                                                  |
| `className`        | string  | no       |                            | Add a `className` to the outer container of the code block. Useful if you need to position the code block within its parent element.                                                                                                                                       |
| `components`       | object  | no       | `{ Preview: LivePreview }` | Swap out the elements used when rendering various elements of the code block. See the [configurable components](#configurable-components) guide below to learn more about this prop.                                                                                       |
| `fileName`         | string  | no       |                            | Render the name of the file used in the code block. Useful if the code block is used as part of tutorial.                                                                                                                                                                  |
| `copyable`         | boolean | no       | `true`                     | Determines whether to render a copy button for the content inside the code block.                                                                                                                                                                                          |
| `formatOptions`    | object  | no       |                            | Configuration options given to the [`formatCode`](#format-code) utility function to auto-format the code block.                                                                                                                                                            |
| `highlightedLines` | string  | no       |                            | Specifies which lines in the code block can be highlighted. See the examples below on how to format this string                                                                                                                                                            |
| `language`         | string  | no       |                            | Configures the language used for syntax highlighting. Must match one of the languages or its aliases from [`prismjs`](https://prismjs.com/#supported-languages). To learn more about configuring addition language support, see the [`prism` theme config options](#prism) |
| `lineNumbers`      | boolean | no       | `false`                    | Determines whether to show line numbers inside the code block.                                                                                                                                                                                                             |
| `live`             | boolean | no       | `false`                    | Determines whether the code block is live-editable or not. Useful when used in conjunction with the `preview` option, though not required.                                                                                                                                 |
| `preview`          | boolean | no       | `false`                    | Determines whether a preview is displayed using the value in the code block. Useful in conjunction with the `live` option if you want the user to be able to edit the code and see the preview live update.                                                                |
| `scope`            | object  | no       |                            | Configures the variables available as globals to the live preview. By default, only `React` is injected. To find out more about how the `scope` works, visit the [`react-live` documentation](https://github.com/FormidableLabs/react-live#how-does-the-scope-work)        |

**Configurable components**

The `<CodeBlock />` is a component made up of several underlying components.
There are cases where the default components may not be suitable for the needs
of the site. The `components` prop allows you to specify your own custom
components in place of the defaults to tailor component rendering for that
component.

Each custom component is given all the props that would otherwise be passed to
the default component. It is **highly recommended** to use the props given to
the component.

The following components can be customized:

**`Preview`**

By default, the built-in `Preview` component uses the `LivePreview` component
from [`react-live`](https://github.com/FormidableLabs/react-live). Overriding
this component may be useful if you need to, for example, render the preview
inside of a shadow DOM root element which allows style isolation without
polluting the global CSS namespace.

It is **highly recommended** that you render the `LivePreview` component
somewhere within your custom component in order to show the preview. It will be
very difficult without it to render the preview otherwise.

| Prop        | Type     | Description                                                                                                                                                          |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string` | Includes the default styles for the preview pane. It is highly recommended to forward this prop to the root of your custom component to maintain a consistent style. |

**Examples**

```jsx
const codeExample = `
import React from 'react'

const Button = (props) => (
  <button className='button' {...props} />
)
`

<CodeBlock language="jsx" fileName="src/components/Button.js">
  {codeExample}
</CodeBlock>
```

Line highlighting

```js
const codeExample = `
import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <button className='button' {...props}>
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.element
}

export default Button
`

/*
 * Highlight multiple lines by comma-separating the line numbers.
 * Include a range of lines by using a `-` between the line numbers.
 */
<CodeBlock language="jsx" highlightedLines="1,6,10-12">
  {codeExample}
</CodeBlock>
```

Custom Preview component

```jsx
import { LivePreview } from 'react-live';
import root from 'react-shadow';

const styles = `
.button {
  background: none;
}
`;

// This component will be used in place of the default `Preview` component in
// the `CodeBlock`. Here we are using the shadow DOM to provide style isolation
// for the `button` class defined in the CSS above.
const CustomPreview = ({ className }) => (
  <root.div>
    <style type="text/css">{styles}</style>
    <LivePreview className={className} />
  </root.div>
);

// The button implementation we will be using for the code block. This component
// is provided via `scope`, which means that the `<Button />` used in the code
// sample will use this implementation.
const Button = ({ children, ...props }) => (
  <button className='button'>{children}</button>
);

const codeSample = `
<Button>Click me</Button>
`

<CodeBlock
  preview={true}
  components={{ Preview: CustomPreview }}
  scope={{ Button }}
>
  {codeSample}
</CodeBlock>
```

### `ExternalLink`

Used to render links that navigate outside of the website. This component is a
shortcut on top of the `target="_blank"` and `rel="noopener noreferrer"`
attributes and provides no out-of-the-box styling.

```js
import { ExternalLink } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

All props are forwarded to the underlying `a` tag with the exception of the
`target` and `rel` props.

**Example**

```js
<ExternalLink href="https://newrelic.com">Link to New Relic</ExternalLink>
```

### `GlobalHeader`

Renders the global header used on all Gatsby New Relic sites. This component
utilizes the [`layout` configuration](#layout) from the theme size the width of
itself.

```js
import { GlobalHeader } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop      | Type   | Required | Default | Description                                        |
| --------- | ------ | -------- | ------- | -------------------------------------------------- |
| `editUrl` | string | no       |         | Used to populate the edit page link in the header. |

**Gatsby configuration**

The `<GlobalHeader />` component consumes configuration defined for the theme.
In order to make the most of the `<GlobalHeader />` component, it is recommended
that you configure the following values in `gatsby-config.js`:

```js
// gatsby-config.js

module.exports = {
  siteMetadata: {
    // Sets the current site as active when the `siteUrl` matches
    siteUrl: 'https://developer.newrelic.com',
    // Set the repository to link to the issues page from the global header
    repository: 'https://github.com/newrelic/gatsby-theme-newrelic',
  },
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        // Define the layout properties to ensure the global header aligns
        // nicely with the rest of the content
        layout: {
          maxWidth: '',
          contentPadding: '',
        },
      },
    },
  ],
};
```

**Examples**

```js
import { graphql, useStaticQuery } from 'gatsby';

const Layout = () => {
  const { data } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `);

  return (
    <GlobalHeader
      editUrl={`${data.site.siteMetadata.repository}/src/components/layout.js`}
    />
  );
};
```

### `HamburgerMenu`

Used for mobile views to toggle the navigation on and off. This component is the
toggle only and does not include any nav-related UI.

```js
import { HamburgerMenu } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop        | Type     | Required | Default | Description                                                                                                                                              |
| ----------- | -------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | string   | no       |         | Additional `className` for the component.                                                                                                                |
| `isOpen`    | boolean  | yes      | `false` | Determines whether the `HamburgerMenu` is considered open or closed.                                                                                     |
| `onToggle`  | function | yes      |         | Handler that is called when the user interacts with the hamburger menu. This handler should be responsible for toggling the state of the hamburger menu. |

**Examples**

```js
import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburgerMenu
      isOpen={isOpen}
      onToggle={() => setIsOpen((isOpen) => !isOpen)}
    />
  );
};
```

### `Icon`

Used to render icons on the website. The `<Icon />` component is currently setup
to with the [Feather icon set](https://feathericons.com/). This theme only
bundles a subset of the Feather icon set. To add additional icons while still
utilizing the `<Icon />` component from this theme, you can use [component
shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/) to define additional
icons. See below for an explanation on how to use this feature.

```js
import { Icon } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop   | Type   | Required | Default | Description                                                              |
| ------ | ------ | -------- | ------- | ------------------------------------------------------------------------ |
| `name` | enum   | yes      |         | The name of the icon that will be rendered. See the list of icons below. |
| `size` | string | no       | `1em`   | The size of the icon. The value can be any CSS sizing unit.              |

**Available icons**

- `Icon.TYPE.COPY`
- `Icon.TYPE.EDIT`
- `Icon.TYPE.GITHUB`
- `Icon.TYPE.MOON`
- `Icon.TYPE.SEARCH`
- `Icon.TYPE.SUN`
- `Icon.TYPE.X`

**Shadowing**

This theme only provides a subset of icons from the Feather icon set. If you
need additional icons, you can
[shadow](https://www.gatsbyjs.org/docs/themes/shadowing/) the icon set to add
additional icons. When shadowing **YOU MUST** include the default set of icons
in order for the built-in components to work properly.

When shadowing an icon set, the `<Icon />` component will automatically create a
constant value for the icon name. This allows you to continue to use the
constant pattern used for the other icons. For example, if you add a
`chevron-right` icon to the icon set, you can access it with
`Icon.TYPE.CHEVRON_RIGHT`.

```js
// src/@newrelic/gatsby-theme-newrelic/icons/feather.js
import React from 'react';
import defaultIcons from '@newrelic/gatsby-theme-newrelic/src/icons/feather';

export default {
  ...defaultIcons,
  // Only include the "guts" of the SVG and omit the surrounding `svg` tag.
  // The `<Icon />` compoent will automatically wrap this with an `svg` tag
  // configured with the proper `viewBox` and feather styles.
  'chevron-right': <polyline points="9 18 15 12 9 6" />,
};
```

**Example**

```js
<Icon name={Icon.TYPE.COPY} size="1rem" />
```

### `MDXCodeBlock`

Used when rendering a `CodeBlock` inside of MDX. This component is a wrapper
around the [`CodeBlock`](#codeblock) component and is responsible for mapping
values from a markdown fenced code block to the `<CodeBlock />` component. This
component works best in conjunction with the `<MDXProvider />` from the
`@mdx-js/react` package.

```js
import { MDXCodeBlock } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

All props are forwarded to the `<CodeBlock />` component and maintain the same
defaults. See the "Using with fenced code blocks" section below to learn how to
pass options from fenced code blocks into the `<CodeBlock />` component.

**Usage with MDXProvider**

```js
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { MDXCodeBlock } from '@newrelic/gatsby-theme-newrelic';

const components = {
  // ...
  code: MDXCodeBlock,

  // This is also recommended to avoid nesting a `pre` inside of a `pre` when
  // rendering fenced code blocks
  pre: (props) => props.children,
};

const Markdown = ({ children }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
);

export default Markdown;
```

**Using with fenced code blocks**

The `MDXCodeBlock` will handle mapping options passed to the fenced code block
to the `CodeBlock` component. The following options are available when using
this component.

- `language`: Use a language identifier to enable syntax highlighting for the
  fenced code block.

````md
```js
```
````

- `copyable`: `true` or `false`. Will show a copy button for the code contained
  inside the fenced code block

````md
```js copyable=false
```
````

- `lineHighlight`: Highlight lines of code in the code block.

````md
```js lineHighlight=1,5,7-9
```
````

- `lineNumbers`: `true` or `false`. Determines whether to render line numbers in
  the code block.

````md
```js lineNumbers=true
```
````

- `live`: `true` or `false`. Determines whether to allow the code to be
  live-editable.

````md
```js live=true
```
````

- `preview`: `true` or `false`. Determines whether to show a live preview of the code inside the
  fenced code block.

````md
```js preview=true
```
````

### `NewRelicLogo`

Used to render the New Relic logo.

```js
import { NewRelicLogo } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop        | Type    | Required | Default | Description                                                                                                                                       |
| ----------- | ------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | string  | no       |         | Additional `className` for the component                                                                                                          |
| `omitText`  | boolean | no       | `true`  | Determines whether to only render the logo without the text. Useful for responsible layouts where the logo may only be displayed.                 |
| `size`      | string  | no       |         | Size of the logo. Accepts any CSS sizing value (e.g. `100px`). Defaults to `18px` when `omitText` is `true` and `79px` when `omitText` is `false` |

**Examples**

```js
<NewRelicLogo />
```

### `SearchInput`

Used to an input used for searching content. This component should be used as a
controlled component for best results.

```js
import { SearchInput } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop        | Type     | Required | Default | Description                                                                                                                            |
| ----------- | -------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | string   | no       |         | Additional `className` for the component.                                                                                              |
| `onClear`   | function | yes      |         | Handler used when the user interacts with the clear button. This handler should be responsible for resetting the `value` of the input. |
| `size`      | enum     | no       |         | Size of the input. Must be one of `SearchInput.SIZE.MEDIUM` or `SearchInput.SIZE.LARGE`                                                |
| `style`     | object   | no       |         | Inline styles for the search input                                                                                                     |
| `value`     | string   | no       |         | Value of the search input.                                                                                                             |
| `width`     | string   | no       |         | Width of the input. Accepts any CSS sizing value (e.g. `100px`)                                                                        |

Additional props are forwarded to the underlying `input` element.

**Example**

```js
const Search = () => (
  const [value, setValue] = useState('')

  return (
    <SearchInput
      value={value}
      onClear={() => setValue('')}
      onChange={(e) => setValue(e.target.value)}
    />
  );
);
```

### `Surface`

Used as the foundation for elements in 3D space that sit above other elements,
for example a card.

```js
import { Surface } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop | Type | Required | Description                                                                                                                                                                                                                      |
| ---- | ---- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| base | enum | yes      | Configures the surface when rendered on a variety of base elements. A base of `primary` means the surface is rendered on an element with a primary background. Must either be `Surface.BASE.PRIMARY` or `Surface.BASE.SECONDARY` |

**Example**

```js
<Surface base={Surface.BASE.PRIMARY}>The content inside the surface</Surface>
```

### `Video`

Used to render a video from either YouTube or Wistia.

```js
import { Video } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop        | Type   | Required | Default | Description                                                                                                                    |
| ----------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `className` | string | no       |         | Additional `className` for the component.                                                                                      |
| `id`        | string | yes      |         | The ID of the video from either Wistia or YouTube                                                                              |
| `title`     | string | no       |         | `title` attribute placed on the containing `iframe`                                                                            |
| `type`      | enum   | yes      |         | Determines the source of content. Must be one of `Video.TYPE.YOUTUBE` or `Video.TYPE.WISTIA`                                   |
| `width`     | string | no       |         | The width of the video. Note the player will always render in a 16:9 aspect ratio. Accepts any CSS string value (e.g. `500px`) |

**Examples**

YouTube

```js
<Video id="abcdefg" type={Video.TYPE.WISTIA} width="500px" />
```

## Hooks

### `useClipboard`

Provides a utility for copying text to the user's clipboard.

```js
import { useClipboard } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

Object containing:

- `duration` _(number)_: Sets the duration in milliseconds of the stateful
  value. Default: `1000`

**Returns**

A tuple containing:

- `copied` _(boolean)_: A stateful value indicating the value was copied. Reset after
  `duration` seconds.

- `copy`: _(function)_: A function that receives the text to copy as input.
  Calling it will copy the specified text to the user's clipboard.

**Examples**

```js
const CopyableText = () => {
  const [copied, copy] = useClipboard();

  return (
    <button onClick={() => copy('Hello there!')}>
      {copied ? 'Copied' : 'Copy a fun message'}
    </button>
  );
};
```

Configurable duration

```js
const [copied, copy] = useClipboard({ duration: 500 });
```

### `useFormattedCode`

A hook that runs code formatting using the [`formatCode`](#formatcode) utility
function on a string and returns a new formatted code string.

```js
import { useFormattedCode } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

- `code` _(string)_: The string of code that will be formatted.
- `options` _(object)_: Formatting options forwarded to the
  [`formatCode`](#formatcode) utilty function. See the documentation for
  specific configuration options.

**Returns**

`String` - The new formatted code string

**Examples**

```js
const CodeSnippet = ({ code }) => {
  const formattedCode = useFormattedCode(code);

  return <span>formattedCode<span>;
};
```

With formatting options:

```js
const formattedCode = useFormattedCode(code, { printWidth: 100 });
```

### `useTimeout`

A hook that runs a function after a specified timeout (e.g. `setTimeout`)

```js
import { useTimeout } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

- `callback` _(function)_: Function to be run after `duration` milliseconds
- `duration` _(number)_: Number of milliseconds to wait before the `callback` is
  invoked. Setting this value to `null` will reset the timeout and allow it to
  be used again.

**Returns**

`Void`

**Examples**

```js
const MyComponent = () => {
  useTimeout(() => {
    console.log('1 second has passed');
  }, 1000);

  return null;
};
```

Resetting the timeout

```js
const SpecialButton = () => {
  const [active, setActive] = useState(false);

  useTimeout(
    () => {
      setActive(false);
    },
    active ? 1000 : null
  );

  return (
    <button disabled={active} onClick={() => setActive(true)}>
      {active ? 'Activated' : 'Activate'}
    </button>
  );
};
```

## Utils

### `formatCode`

Utility function that formats a string of code using
[prettier](https://prettier.io).

**Arguments**

- `code` _(string)_: The string of code to be formatted

- `options` _(object)_: Formatting options forwarded to `prettier` when
  formatting the string of code. For a list of all available options, visit the
  [prettier documentation](https://prettier.io/docs/en/options.html).

  **Default:**

  ```js
  import parserBabel from 'prettier/parser-babel';

  const defaultOptions = {
    trailingComma: 'es5',
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    plugins: [parserBabel],
    parser: 'babel',
  };
  ```
