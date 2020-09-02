[![Community Project header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Community_Project.png)](https://opensource.newrelic.com/oss-category/#community-project)

# `gatsby-theme-newrelic`

This theme contains contains common configuration and shared components used
across New Relic Gatsby sites. It is primarily used on the
[developer](https://developer.newrelic.com) and [open source
websites](https://opensource.newrelic.com).

<!-- TOC GFM -->

- [Installation](#installation)
- [Configuration](#configuration)
  - [Site metadata](#site-metadata)
  - [Options](#options)
    - [`newrelic`](#newrelic)
    - [`robots`](#robots)
    - [`layout`](#layout)
    - [`prism`](#prism)
    - [`splitio`](#splitio)
      - [Environment-specific configuration](#environment-specific-configuration)
- [Components](#components)
  - [`Button`](#button)
  - [`CodeBlock`](#codeblock)
  - [`ExternalLink`](#externallink)
  - [`Feedback`](#feedback)
  - [`GlobalHeader`](#globalheader)
  - [`HamburgerMenu`](#hamburgermenu)
  - [`Icon`](#icon)
  - [`MDXCodeBlock`](#mdxcodeblock)
  - [`NewRelicLogo`](#newreliclogo)
  - [`SearchInput`](#searchinput)
  - [`Surface`](#surface)
  - [`Tag`](#tag)
  - [`TagList`](#taglist)
  - [`Video`](#video)
- [Hooks](#hooks)
  - [`useClipboard`](#useclipboard)
  - [`useFormattedCode`](#useformattedcode)
  - [`useKeyPress`](#usekeypress)
  - [`useQueryParams`](#usequeryparams)
  - [`useTimeout`](#usetimeout)
- [Utils](#utils)
  - [`formatCode`](#formatcode)
- [Testing](#testing)
  - [Changes to Jest config](#changes-to-jest-config)
  - [Mocking `ReactDOM.createPortal` for snapshot testing](#mocking-reactdomcreateportal-for-snapshot-testing)

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
yarn add @newrelic/gatsby-theme-newrelic @emotion/core @emotion/styled
```

## Configuration

You can configure `gatsby-theme-newrelic` using the following configuration
options:

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
        splitio: {
          core: {
            authorizationKey: 'my-auth-key',
          },
        },
      },
    },
  ],
};
```

### Site metadata

`gatsby-theme-newrelic` makes use of several `siteMetadata` options. While these
are optional, they are highly recommended.

- `siteUrl`: Production URL for the site (e.g. `https://developer.newrelic.com`)
- `repository`: The URL for the public GitHub repository hosting the source code
  for the site.

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
These options will be shallow merged with the default value. For more details on
the available configuration options, visit [the
documentation.](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/)

**Default**: `{ policy: [{ userAgent: '*', allow: '/' }] }`

#### `layout`

Configuration for the layout.

**Options:**

- `maxWidth` _(string)_: Sets the max width of the layout. Accepts any CSS
  sizing value (e.g. `1280px`).
- `contentPadding` _(string)_: Sets the padding value for the content. Accepts
  any CSS sizing value (e.g. `2rem`)

**Default**: `{ maxWidth: null, contentPadding: null }`

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

- `languages` _([string])_: Configure additional languages used for syntax highlighting.
  These languages will be appended to the list of default supported languages in
  the theme. For a full list of supported languages, visit the [prism
  documentation](https://prismjs.com/#supported-languages).

Default supported languages:

- `css`
- `graphql`
- `hcl`
- `javascript`
- `json`
- `jsx`
- `ruby`
- `shell`
- `sql`

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

#### `splitio`

Configuration for using [split.io](https://split.io) with the Gatsby site. For
more information on all the available configuration options, visit the [split.io
SDK docs](https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#configuration).

**Default:** `null`

**NOTE:** The `core.key` configuration option is generated by the theme and
therefore ignored. Setting this value will do nothing.

##### Environment-specific configuration

Use the `env` option to define environment-specific configuration. The
environment configuration will be merged with the top-level configuration.

```js
module.exports = {
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        splitio: {
          core: {
            trafficType: 'user',
          },
          env: {
            development: {
              core: {
                authorizationKey: 'my-development-key',
              },
            },
            production: {
              core: {
                authorizationKey: 'my-prod-key',
              },
            },
          },
        },
      },
    },
  ],
};
```

The `env` key will be taken from `process.env.GATSBY_ACTIVE_ENV` first (see
[Gatsby environment
variables](https://www.gatsbyjs.com/docs/environment-variables/) for more
information on this variable), falling back to `process.env.NODE_ENV`. When this
is not available, then it defaults to `development`.

You can resolve the `env` by using the `resolveEnv` function:

```js
module.exports = {
  plugins: [
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        splitio: {
          // ...
          resolveEnv: () => process.env.BUILD_ENV,
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

| Prop    | Type          | Required | Default  | Description                                                                                                                      |
| ------- | ------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| variant | enum          | yes      |          | Configures the variant of the button. Must be one of `Button.VARIANT.LINK`, `Button.VARIANT.PRIMARY`, or `Button.VARIANT.NORMAL` |
| size    | enum          | no       |          | Configures the size of the button. Can be configured to `Button.SIZE.SMALL`                                                      |
| as      | React element | no       | `button` | Render the button as a different base element. Useful when you want to style links as buttons.                                   |

Additional props are forwarded to the underlying element specified by the `as`
prop.

**Examples**

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

| Prop               | Type    | Required | Default | Description                                                                                                                                                                                                                                                                |
| ------------------ | ------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`         | string  | yes      |         | The code to be rendered in the code block                                                                                                                                                                                                                                  |
| `className`        | string  | no       |         | Adds a `className` to the outer container of the code block. Useful if you need to position the code block within its parent element.                                                                                                                                      |
| `components`       | object  | no       |         | Swap out the elements used when rendering various elements of the code block. See the "Configurable components" guide below to learn more about this prop.                                                                                                                 |
| `copyable`         | boolean | no       | `true`  | Determines whether to render a copy button for the content inside the code block.                                                                                                                                                                                          |
| `fileName`         | string  | no       |         | The file name associated with the code rendered by the code block. Useful if the code block is used as part of tutorial.                                                                                                                                                   |
| `formatOptions`    | object  | no       |         | Configuration options given to the [`formatCode`](#formatcode) utility function to auto-format the code block.                                                                                                                                                             |
| `highlightedLines` | string  | no       |         | Specifies which lines in the code block should be highlighted. See the examples below on for information on how to format this string.                                                                                                                                     |
| `language`         | string  | no       |         | Configures the language used for syntax highlighting. Must match one of the languages or its aliases from [`prismjs`](https://prismjs.com/#supported-languages). To learn more about configuring supported languages, visit the [`prism` configuration section](#prism).   |
| `lineNumbers`      | boolean | no       | `false` | Determines whether to show line numbers inside the code block.                                                                                                                                                                                                             |
| `live`             | boolean | no       | `false` | Determines whether the code block is live-editable or not. Useful when used in conjunction with the `preview` option, though not required.                                                                                                                                 |
| `preview`          | boolean | no       | `false` | Determines whether a live preview is displayed using the value in the code block. Useful in conjunction with the `live` option to allow the user to edit the code snippet.                                                                                                 |
| `scope`            | object  | no       |         | Configures the variables available as globals for the live preview. By default, only `React` is injected. To find out more about how the `scope` prop works, visit the [`react-live` documentation](https://github.com/FormidableLabs/react-live#how-does-the-scope-work). |

**Configurable components**

The `CodeBlock` is a component made up of several underlying components.
There are cases where the default components may not be suitable for the needs
of the site. The `components` prop allows you to specify your own custom
components in place of the defaults to tailor component rendering for that
component.

Each custom component is given all the props that would otherwise be passed to
the default component. It is **highly recommended** to use the props given to
the custom component.

The following components can be customized:

**`Preview`**

By default, the built-in `Preview` component uses the `LivePreview` component
from [`react-live`](https://github.com/FormidableLabs/react-live). Overriding
this component may be useful if you need to, for example, render the preview
inside of a shadow DOM root element which allows style isolation without
polluting the global CSS namespace.

It is **highly recommended** that you render the `LivePreview` component within
your custom component. It will be very difficult to see the live preview
otherwise.

| Prop        | Type     | Description                                                                                                                              |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `string` | Includes the default styles for the preview pane. Forward this prop to the root of your custom component to maintain a consistent style. |

**Examples**

```jsx
const codeExample = `
import React from 'react'

const Button = (props) => (
  <button className='button' {...props} />
)
`;

const Documentation = () => (
  <CodeBlock language="jsx" fileName="src/components/Button.js">
    {codeExample}
  </CodeBlock>
);
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
`;

const Documentation = () => (
  /*
   * Highlight multiple lines by comma-separating the line numbers.
   * Include a range of lines by using a `-` between the line numbers.
   */
  <CodeBlock language="jsx" highlightedLines="1,6,10-12">
    {codeExample}
  </CodeBlock>
);
```

Custom Preview component

```jsx
import { LivePreview } from 'react-live';
import root from 'react-shadow';

const styles = `
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background: none;
  cursor: pointer;
}
`;

// This component will be used in place of the default `Preview` component in
// the `CodeBlock`. Here we are using the shadow DOM to provide style isolation
// for the `button` class defined by the CSS in the `styles` variable above.
const CustomPreview = ({ className }) => (
  <root.div>
    <style type="text/css">{styles}</style>
    <LivePreview className={className} />
  </root.div>
);

// The button implementation we will be using when rendering the live preview,
// provided via the `scope` prop.
const Button = ({ children, ...props }) => (
  <button className="button">{children}</button>
);

const codeSample = `
<Button>Click me</Button>
`;

const Documentation = () => (
  <CodeBlock
    preview={true}
    components={{ Preview: CustomPreview }}
    scope={{ Button }}
  >
    {codeSample}
  </CodeBlock>
);
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

### `Feedback`

Renders feedback controls that can be used to collect user sentiment about a page. Feedback can only be submitted once per page load.

```js
import { Feedback } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop       | Type     | Required | Default                | Description                                                                                                                                                             |
| ---------- | -------- | -------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `align`    | enum     | no       | `Feedback.ALIGN.LEFT`  | Configures the alignment of the feedback component. Must be one of `Feedback.ALIGNMENT.LEFT` or `Feedback.ALIGNMENT.CENTER`.                                            |
| `onSubmit` | function | yes      |                        | Handler that is called once feedback is provided. The user must supply a sentiment, a comment, or both. An object containing the `sentiment` and `comment` is returned. |
| `message`  | string   | no       | Was this page helpful? | Message to be displayed above the buttons.                                                                                                                              |

**Example**

```jsx
<Feedback
  message="Tell us what you think!"
  onSubmit={({ sentiment, comment }) => {
    alert('${sentiment} feedback recieved: ${comment}');
  }}
/>
```

### `GlobalHeader`

Renders the global header used on all New Relic Gatsby sites. This component
utilizes the [`layout` configuration](#layout) from the theme to size itself.

```js
import { GlobalHeader } from '@newrelic/gatsby-theme-newrelic';
```

**Props**
| Prop | Type | Required | Default | Description |
| --------- | ------ | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `editUrl` | string | no | | Used by the edit page link in the global header to link to a GitHub URL where a user can edit the page's source. If omitted, the edit page link will be excluded. |

**Gatsby configuration**

The `GlobalHeader` component consumes configuration defined for the theme. In
order to make the most of the `GlobalHeader` component, it is recommended that
you configure the following values in `gatsby-config.js`:

```js
// gatsby-config.js

module.exports = {
  siteMetadata: {
    // Used to set the link that matches the current site as active
    siteUrl: 'https://developer.newrelic.com',
    // Used to create a link to the issues page from the global header
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

Used as the toggle for mobile views to show and hide the mobile navigation.

```js
import { HamburgerMenu } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop        | Type     | Required | Default | Description                                                                                                                                               |
| ----------- | -------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | string   | no       |         | Additional `className` for the component.                                                                                                                 |
| `isOpen`    | boolean  | yes      | `false` | Determines whether the `HamburgerMenu` is considered open or closed.                                                                                      |
| `onToggle`  | function | yes      |         | Handler called when the user interacts with the hamburger menu. This handler should be responsible for toggling the `isOpen` state of the hamburger menu. |

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

Used to render icons on the website. This component utilizes a subset of the
[Feather icon set](https://feathericons.com/). To add additional icons for use
in your website, use [component
shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/). See the "Shadowing"
section below for an explanation on how to use this feature.

```js
import { Icon } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop   | Type   | Required | Default | Description                                                                                                              |
| ------ | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `name` | enum   | yes      |         | The name of the icon that will be rendered. See the full list of available icons in the "Available icons" section below. |
| `size` | string | no       | `1em`   | The size of the icon. The value can be any CSS sizing value.                                                             |

Additional props are forwarded to the underlying `svg` element.

**Available icons**

- `Icon.TYPE.COPY`
- `Icon.TYPE.EDIT`
- `Icon.TYPE.GITHUB`
- `Icon.TYPE.MOON`
- `Icon.TYPE.SEARCH`
- `Icon.TYPE.SUN`
- `Icon.TYPE.X`

**Shadowing**

Because this theme only provides a subset of the Feather icon set, you may need
to add additional icons for use in your website. You can use [component
shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/) to do so. When
shadowing the icon set, **YOU MUST** include the default set of icons in order
for the built-in components to work properly.

When shadowing an icon set, the `Icon` component will automatically create a
constant value for each icon by constantizing the value of its key. This allows
you to continue to use the constant pattern for the `name` prop. For example, if
you add a `chevron-right` icon to the icon set, you can use it via
`Icon.TYPE.CHEVRON_RIGHT`.

```js
// src/@newrelic/gatsby-theme-newrelic/icons/feather.js
import React from 'react';
import defaultIcons from '@newrelic/gatsby-theme-newrelic/src/icons/feather';

export default {
  ...defaultIcons,
  // Only include the "guts" of the SVG and omit the surrounding `svg` tag.
  // The `Icon` component will automatically wrap this with an `svg` tag
  // configured with the proper `viewBox` and feather icon styles.
  'chevron-right': <polyline points="9 18 15 12 9 6" />,
};
```

**Example**

```js
<Icon name={Icon.TYPE.COPY} size="1rem" />
```

### `MDXCodeBlock`

Used to render a fenced code block using the [`CodeBlock`](#codeblock) component
inside of an MDX document. This component works best in conjunction with the
`MDXProvider` component exported from the `@mdx-js/react` package.

```js
import { MDXCodeBlock } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

All props are forwarded to the `CodeBlock` component. This component also
maintains the same defaults. See the "Using with fenced code blocks" section
below to learn how options in fenced code blocks are forwarded to the
`CodeBlock` component.

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

The `MDXCodeBlock` maps options from a fenced code block to the `CodeBlock`
component. The following options are available for fenced code blocks when using
this component.

- `language`: Use a language identifier to enable syntax highlighting for the
  fenced code block.

````md
```js
```
````

- `copyable`: `true` or `false`. Determines whether to show a copy button for
  the content inside of the fenced code block.

````md
```js copyable=false
```
````

- `lineHighlight`: Highlight lines of code in the code block using the same
  format as described in the [`CodeBlock` documentation](#codeblock)

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

- `live`: `true` or `false`. Determines whether the code block will be
  live-editable.

````md
```js live=true
```
````

- `preview`: `true` or `false`. Determines whether to show a live preview using
  the code inside of the fenced code block.

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

An input element used for searching content.

```js
import { SearchInput } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop        | Type     | Required | Default | Description                                                                                                                              |
| ----------- | -------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | string   | no       |         | Additional `className` for the component.                                                                                                |
| `onClear`   | function | yes      |         | Handler called when the user interacts with the clear button. This handler should be responsible for resetting the `value` of the input. |
| `size`      | enum     | no       |         | Size of the input. Must be one of `SearchInput.SIZE.MEDIUM` or `SearchInput.SIZE.LARGE`                                                  |
| `style`     | object   | no       |         | Inline styles for the search input                                                                                                       |
| `value`     | string   | no       |         | Value of the search input.                                                                                                               |
| `width`     | string   | no       |         | Width of the input. Accepts any CSS sizing value (e.g. `100px`)                                                                          |

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

| Prop          | Type    | Required | Default | Description                                                                                                                                                                                                                                    |
| ------------- | ------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `base`        | enum    | yes      |         | Tells the `Surface` what kind of base element the surface is rendered on. For example, a primary base means the surface is rendered on an element with a primary background. Must be one of `Surface.BASE.PRIMARY` or `Surface.BASE.SECONDARY` |
| `interactive` | boolean | no       | `false` | Determines whether the surface is interactive (e.g. if the entire surface is a link).                                                                                                                                                          |

**Example**

```js
<Surface base={Surface.BASE.PRIMARY}>The content inside the surface</Surface>
```

### `Tag`

Used to render a keyword or tag.

```js
import { Surface } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop          | Type    | Required | Default | Description                                                                |
| ------------- | ------- | -------- | ------- | -------------------------------------------------------------------------- |
| `interactive` | boolean | no       | `false` | Determines whether the tag is interactive (e.g. if the tag is also a link) |

**Examples**

```js
<Tag>React</Tag>
```

Interactive tag

```js
<Tag interactive onClick={() => console.log('You clicked the tag!')}>
  React
</Tag>
```

### `TagList`

Wraps a list of tags to space them out.

```js
import { TagList } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop       | Type | Required | Default | Description                             |
| ---------- | ---- | -------- | ------- | --------------------------------------- |
| `children` | node | no       |         | Children should all be `Tag` components |

**Example**

```js
<TagList>
  <Tag>React</Tag>
  <Tag>JavaScript</Tag>
  <Tag>Gatsby</Tag>
</TagList>
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
<Video id="abcdefg" type={Video.TYPE.YOUTUBE} width="500px" />
```

Wistia

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

A 2-element tuple.

- `[0]` _(boolean)_: A stateful value indicating whether the value was copied.
  Reset after `duration` seconds.

- `[1]`: _(function)_: A function that receives the text to copy as input.
  Invoking the function will copy the specified text to the user's clipboard.

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

A hook that runs code formatting on a string using the
[`formatCode`](#formatcode) utility function.

```js
import { useFormattedCode } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

- `code` _(string)_: The string of code that will be formatted.
- `options` _(object) - optional_: Formatting options forwarded to the
  [`formatCode`](#formatcode) utilty function. See the [`formatCode`
  documentation](#formatcode) for specific configuration options.

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

### `useKeyPress`

A hook that runs a handler function when a keydown event matches a specified
key.

```js
import { useKeyPress } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

- `key` _(string)_: The key being listened for (i.e. the `event.key` value)
- `callback` _(function)_ : Callback function called when the keydown event
  matches the key. Takes the `event` as the argument.

**Returns**

`Void`

**Examples**

```js
const Modal = ({ code }) => {
  const [isOpen, setIsOpen] = useState(false);

  useKeyPress('Escape', (e) => {
    setIsOpen(false);
  });

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen ? <div className="modal">Modal content</div> : null}
    </>
  );
};
```

### `useQueryParams`

A hook that gets the URL's query params and allows you to set them.

```js
import { useQueryParams } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

There are no arguments for this hook.

**Returns**

`Object`

- `queryParams` - an instance of [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- `setQueryParam` - a function to update a query parameter in the URL.
  Anologous to `queryParams.set(...)` but this will also navigate for you.

**Examples**

```js
const SearchInput = () => {
  const { queryParams, setQueryParam } = useQueryParams();

  return (
    <input
      type="text"
      value={queryParams.get('q')}
      onChange={(e) => {
        setQueryParam('q', e.target.value);
      }}
    />
  );
};
```

### `useTimeout`

A hook that runs a function after a specified timeout (i.e. `setTimeout`)

```js
import { useTimeout } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

- `callback` _(function)_: Function to be run after `duration` milliseconds.
- `duration` _(number)_: Number of milliseconds to wait before the `callback` is
  invoked. Setting this value to `null` will reset the timeout to allow it to
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

- `options` _(object) - optional_: Formatting options forwarded to `prettier`
  when formatting the string of code. For a list of all available options, visit
  the [prettier documentation](https://prettier.io/docs/en/options.html).

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

## Testing

If you are using [Jest](https://jestjs.io) to write tests for your Gatsby site,
you may consider adding some additional configuration to ensure your tests run
successfully.

### Changes to Jest config

`@newrelic/gatsby-theme-newrelic` uses
[`@elastic/search-ui`](https://github.com/elastic/search-ui) to power its search
experience. When running tests, you may encounter the following error:

```
Test suite failed to run

Jest encountered an unexpected token

This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

Here's what you can do:
  • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
  • If you need a custom transformation specify a "transform" option in your config.
  • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

You'll find more details and examples of these config options in the docs:
https://jestjs.io/docs/en/configuration.html

Details:

/your-site/node_modules/@elastic/react-search-ui-views/es/view-helpers/index.js:1
export { default as getFilterValueDisplay } from "./getFilterValueDisplay";
^^^^^^

SyntaxError: Unexpected token 'export'
```

This is due to the fact that `@elastic/search-ui` uses ES Modules under the
hood. To fix this, you need to tell Jest to ignore transformations on this package.

Add the following to your jest config:

```js
// jest.config.js

module.exports = {
  // ...
  transformIgnorePatterns: [
    'node_modules/(?!(@elastic/react-search-ui-views)/)',
  ],
};
```

If you previously followed the Gatsby [unit testing
guide](https://www.gatsbyjs.com/docs/unit-testing/), you will likely have
`transformIgnorePatterns` already defined. In this case, modify the
configuration to look like the following:

```js
// jest.config.js

module.exports = {
  // ...
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby||@elastic/react-search-ui-views)/)',
  ],
};
```

### Mocking `ReactDOM.createPortal` for snapshot testing

If you are testing your components using [snapshot
tests](https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest)
while using
[`react-test-renderer`](https://reactjs.org/docs/test-renderer.html), you may
encounter the following error while trying to render components that use a
[portal](https://reactjs.org/docs/portals.html) (such as the `Overlay`
component):

```
Warning: An invalid container has been provided. This may indicate that another renderer is being used in addition to the test renderer. (For example, ReactDOM.createPortal inside of a ReactTestRenderer tree.) This is not supported.
```

As of this writing, there is an outstanding
[issue](https://github.com/facebook/react/issues/11565) that has not been
addressed in `react-test-renderer`. To fix this, you will need to create
a mock for `react-dom` to mock the `createPortal` API. Add the following to your
project:

```js
// __mocks__/react-dom.js

module.exports = {
  ...jest.requireActual('react-dom'),
  createPortal: (element) => element,
};
```
