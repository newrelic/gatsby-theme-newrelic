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
    - [`gaTrackingId`](#gatrackingid)
    - [`splitio`](#splitio)
      - [Environment-specific configuration](#environment-specific-configuration)
- [Components](#components)
  - [`Banner`](#banner)
  - [`Button`](#button)
  - [`Callout`](#callout)
  - [`CodeBlock`](#codeblock)
  - [`ContributingGuidelines`](#contributingguidelines)
  - [`CookieConsentDialog`](#cookieconsentdialog)
  - [`ExternalLink`](#externallink)
  - [`FeatherSVG`](#feathersvg)
  - [`Feedback`](#feedback)
  - [`GlobalFooter`](#globalfooter)
  - [`GlobalHeader`](#globalheader)
  - [`HamburgerMenu`](#hamburgermenu)
  - [`Icon`](#icon)
    - [Available icons](#available-icons)
    - [Shadowing icons](#shadowing-icons)
  - [`Layout`](#layout-1)
    - [`Layout.Content`](#layoutcontent)
    - [`Layout.Footer`](#layoutfooter)
    - [`Layout.Main`](#layoutmain)
    - [`Layout.PageTools`](#layoutpagetools)
    - [`Layout.Sidebar`](#layoutsidebar)
  - [`Link`](#link)
  - [`MDXCodeBlock`](#mdxcodeblock)
  - [`NavItem`](#navitem)
    - [`Page`](#page)
  - [`NewRelicLogo`](#newreliclogo)
  - [`PageTools`](#pagetools)
    - [`PageTools.Section`](#pagetoolssection)
    - [`PageTools.Title`](#pagetoolstitle)
  - [`SearchInput`](#searchinput)
  - [`Spinner`](#spinner)
  - [`Surface`](#surface)
  - [`Table`](#table)
  - [`Tag`](#tag)
  - [`TagList`](#taglist)
  - [`Video`](#video)
- [Hooks](#hooks)
  - [`useClipboard`](#useclipboard)
  - [`useFormattedCode`](#useformattedcode)
  - [`useKeyPress`](#usekeypress)
  - [`useLayout`](#uselayout)
  - [`useQueryParams`](#usequeryparams)
  - [`useTimeout`](#usetimeout)
  - [`useUserId`](#useuserid)
  - [`usePrevious`](#useprevious)
- [Announcements](#announcements)
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
npm install @newrelic/gatsby-theme-newrelic @emotion/core @emotion/styled @mdx-js/mdx @mdx-js/react @splitsoftware/splitio-react gatsby-plugin-mdx
```

yarn:

```sh
yarn add @newrelic/gatsby-theme-newrelic @emotion/core @emotion/styled @mdx-js/mdx @mdx-js/react @splitsoftware/splitio-react gatsby-plugin-mdx
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
    branch: 'main',
    utmSource: 'developer-site',
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
        gaTrackingId: 'UA-XXXXXX-XX',
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
- `branch`: The mainline branch for use when constructing "Edit this page" links (defaults to `main`).
- `utmSource`: Name of the site that will be used as the UTM source when linking
  to various mediums within New Relic.
- `contributingUrl`: The URL where a user can find contributing guidelines for
  the site. If this is not specified, it defaults to the `CONTRIBUTING.md` file
  in the repo and branch specified in the `siteMetadata`. If the `repository` is
  not specified, this will return `null`. Set this value to `null` to disable
  the default behavior.

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

#### `gaTrackingId`

Tracking ID for use with Google Analytics. For more details on Google Analytics Tracking IDs, visit [the documentation.](https://support.google.com/analytics/answer/1008080?visit_id=637396929080724679-4016043558&rd=1).

#### `splitio`

Configuration for using [split.io](https://split.io) with the Gatsby site. For
more information on all the available configuration options, visit the [split.io
SDK docs](https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#configuration).

**Default:**

```js
const DEFAULT_CONFIG = {
  core: {
    trafficType: 'user',
  },
};
```

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

### `Banner`

Used to add a marketing banner to a page.

```js
import { Banner } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop       | Type     | Required | Default | Description                                                |
| ---------- | -------- | -------- | ------- | ---------------------------------------------------------- |
| `children` | node     | yes      |         | Content to be displayed in the banner.                     |
| `onClose`  | function | yes      |         | Handler called when the user clicks on the "close" button. |
| `visible`  | boolean  | yes      |         | Determines if the banner is visible to the user or not     |

**Example**

```jsx
<Banner visible={visible} onClose={() => setVisible(false)}>
  <h1>Hello, World!</h1>
</Banner>
```

### `Button`

Styled buttons used to draw emphasis on clickable actions.

```js
import { Button } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop    | Type          | Required | Default  | Description                                                                                                                                        |
| ------- | ------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| variant | enum          | yes      |          | Configures the variant of the button. Must be one of `Button.VARIANT.LINK`, `Button.VARIANT.PRIMARY`, `Button.OUTLINE`, or `Button.VARIANT.NORMAL` |
| size    | enum          | no       |          | Configures the size of the button. Can be configured to `Button.SIZE.SMALL`                                                                        |
| as      | React element | no       | `button` | Render the button as a different base element. Useful when you want to style links as buttons.                                                     |

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

### `Callout`

Callouts direct your attention to information of special importance or to information that doesn't fit smoothly into the main text.

- Caution: Screams at you that this could cause a crash or cost you data loss beyond the task at hand.
- Important: Urges awareness that this could impair the task at hand or cost you time if you ignore the text.
- Tip: Whispers to you that this is nice to know, like a shortcut, best practice, or reminder.

```js
import { Callout } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop    | Type | Required | Default | Description                                                                                                                         |
| ------- | ---- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| variant | enum | yes      |         | Configures the variant of the callout. Must be one of `Callout.VARIANT.CAUTION`, `Callout.VARIANT.IMPORTANT`, `Callout.VARIANT.TIP` |
| title   | enum | no       |         | Set the title text. Defaults to variant name. You may hide the title by passing `null` as the value.                                |

**Examples**

```js
<Callout variant={Callout.VARIANT.CAUTION}>Be careful!</Callout>
```

Hide the title

```js
<Callout variant={Callout.VARIANT.CAUTION} title={null}>
  Be careful!
</Callout>
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

### `ContributingGuidelines`

Used to display contributing information for the current page. This is meant to
be used as a section inside of the [`PageTools`](#pagetools) component.

To ensure this component leverages its full potential, please ensure the
following [`siteMetadata`](#site-metadata) fields are configured:

- `branch`
- `contributingUrl`
- `repository`

**NOTE:** If the `contributingUrl` is not configured, it will use the default
value as specified in the [`siteMetadata`](#site-metadata) section.

```js
import { ContributingGuidelines } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop               | Type   | Required | Default | Description                                                                                 |
| ------------------ | ------ | -------- | ------- | ------------------------------------------------------------------------------------------- |
| `fileRelativePath` | string | no       |         | The relative file path of the current page. This will be used by the "Edit this page" link. |

**Examples**

```js
<PageTools>
  <ContributingGuidelines fileRelativePath="src/pages/index.js" />
</PageTools>
```

### `CookieConsentDialog`

A dialog box that pops up asking for cookie consent. This component renders at the bottom of the screen and provides options for accepting or denying cookies.

```js
import { CookieConsentDialog } from '@newrelic/gatsby-theme-newrelic';
```

**Example**

```js
const MyLayout = () => (
  <>
    <GlobalHeader />
    <GlobalFooter />
    <CookieConsentDialog />
  </>
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

### `FeatherSVG`

SVG wrapper for [feather icons](https://feathericons.com/). This is useful when
[shadowing feather icons](#shadowing-icons) to ensure all feather icons have
consistent props/styles applied to them.

**NOTE:** When using this component, you should to spread all props to it.

```js
import { FeatherSVG } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop       | Type | Required | Default | Description                                |
| ---------- | ---- | -------- | ------- | ------------------------------------------ |
| `children` | node | yes      |         | The "guts" of the feather `svg` definition |

Additional props are forwarded to the `svg` tag.

**Example**

```jsx
const ChevronDownIcon = (props) => (
  <FeatherSVG {...props}>
    <polyline points="6 9 12 15 18 9" />
  </FeatherSVG>
);
```

### `Feedback`

Renders feedback controls that can be used to collect user sentiment about a page. Feedback can only be submitted once per page load.

```js
import { Feedback } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop              | Type     | Required | Default                | Description                                                                                                                                                             |
| ----------------- | -------- | -------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `align`           | enum     | no       | `Feedback.ALIGN.LEFT`  | Configures the alignment of the feedback component. Must be one of `Feedback.ALIGNMENT.LEFT` or `Feedback.ALIGNMENT.CENTER`.                                            |
| `onSubmit`        | function | yes      |                        | Handler that is called once feedback is provided. The user must supply a sentiment, a comment, or both. An object containing the `sentiment` and `comment` is returned. |
| `onPositiveClick` | function | no       |                        | Handler that is called when the positive feedback button is clicked (for analytics or when using without commenting).                                                   |
| `onNegativeClick` | function | no       |                        | Handler that is called when the negative feedback button is clicked (for analytics or when using without commenting).                                                   |
| `message`         | string   | no       | Was this page helpful? | Message to be displayed above the buttons.                                                                                                                              |
| `showComment`     | boolean  | no       | true                   | Whether or not to show the free-form comment section.                                                                                                                   |

**Example**

```jsx
<Feedback
  message="Tell us what you think!"
  onSubmit={({ sentiment, comment }) => {
    alert('${sentiment} feedback recieved: ${comment}');
  }}
/>
```

### `GlobalFooter`

Renders the global footer used on all New Relic Gatsby sites. This component utilizes the [`layout` configuration](#layout) from the theme to size itself and the `siteMetadata` for the repository URL.

_NOTE_: The logo displayed in the footer is a generic to New Relic logo, but can be changed with [shadowing](https://www.gatsbyjs.com/docs/themes/shadowing).

```js
import { GlobalFooter } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop               | Type   | Required | Default | Description                                                                                                   |
| ------------------ | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| `className`        | string | no       |         | Additional `className` for the component.                                                                     |
| `fileRelativePath` | string | no       |         | The relative path to the markdown file for the current page. If not supplied, the edit link will not be shown |

**Example**

```jsx
<GlobalFooter fileRelativePath={'/src/content/foobar.md'} />
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

| Prop   | Type   | Required | Default | Description                                                                                                                                  |
| ------ | ------ | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `name` | enum   | yes      |         | The name of the icon that will be rendered. See the full list of available icons in the ["Available icons"](#available-icons) section below. |
| `size` | string | no       | `1em`   | The size of the icon. The value can be any CSS sizing value.                                                                                 |

Additional props are forwarded to the underlying `svg` element.

#### Available icons

**Feather**

- `fe-chevron-down`
- `fe-cloud`
- `fe-copy`
- `fe-edit`
- `fe-external-link`
- `fe-filter`
- `fe-github`
- `fe-loader`
- `fe-moon`
- `fe-pen`
- `fe-search`
- `fe-sun`
- `fe-thumbsdown`
- `fe-thumbsup`
- `fe-x`

**New Relic**

- `nr-tdp`
- `nr-fso`
- `nr-ai`

#### Shadowing icons

Because this theme only provides a subset of the feather icon set, you may need
to add additional icons for use in your website. You can use [component
shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/) to do so. When
shadowing the icon set, **YOU MUST** include the default set of icons in order
for the built-in components to work properly.

When shadowing an icon set, defined the icons using the unprefixed name. The
gatsby theme will automatically prefix the icons for you depending on the icon
set. For example, to add the
[`chevron-right`](https://feathericons.com/?query=chevron-right) icon, define
its name as `chevron-right`, not `fe-chevron-right`. This icon will be available
to the `Icon` component as `fe-chevron-right`.

The following icons sets can be shadowed:

- Feather
  - File path: `src/@newrelic/gatsby-theme-newrelic/icons/feather.js`
  - Prefix: `fe`
- New Relic
  - File path: `src/@newrelic/gatsby-theme-newrelic/icons/newrelic.js`
  - Prefix: `nr`

```js
// src/@newrelic/gatsby-theme-newrelic/icons/feather.js
import React from 'react';
import defaultIcons from '@newrelic/gatsby-theme-newrelic/src/icons/feather';
import { FeatherSVG } from '@newrelic/gatsby-theme-newrelic';

export default {
  ...defaultIcons,
  'chevron-right': (props) => (
    <FeatherSVG {...props}>
      <polyline points="9 18 15 12 9 6" />
    </FeatherSVG>
  ),
};

// To use this icon, use the prefixed name:
<Icon name="fe-chevron-right" />;
```

**Example**

```js
<Icon name="fe-copy" size="1rem" />
```

### `Layout`

Layout components used to wrap the page content. Used as a container for the
layout subcomponents.

For more information on the layout subcomponents, see the following for more
details:

- [`Layout.Content`](#layoutcontent)
- [`Layout.Footer`](#layoutfooter)
- [`Layout.Main`](#layoutmain)
- [`Layout.PageTools`](#layoutpagetools)
- [`Layout.Sidebar`](#layoutsidebar)

```js
import { Layout } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop        | Type   | Required | Default | Description                                                        |
| ----------- | ------ | -------- | ------- | ------------------------------------------------------------------ |
| `className` | string | no       |         | Additional `className` for the component.                          |
| `children`  | node   | no       |         | Content used for the layout. These should be layout subcomponents. |

**Examples**

```js
<Layout>
  <Layout.Sidebar>
    <Logo />
    <MyNavigation />
  </Layout.Sidebar>
  <Layout.Main
    css={css`
      display: grid;
      grid-template-columns: minmax(0, 1fr) 320px;
      grid-template-areas: 'content page-tools';
      grid-gap: ${contentPadding};
    `}
  >
    <Layout.Content>
      <h1>Hello, world</h1>
    </Layout.Content>
    <Layout.PageTools>
      <ContributingGuidelines fileRelativePath={fileRelativePath} />
    </Layout.PageTools>
  </Layout.Main>
  <Layout.Footer fileRelativePath={fileRelativePath} />
</Layout>
```

#### `Layout.Content`

Used for displaying the body of the page. It has a `grid-area` set to `content`
to allow for grid customization.

**Props**

| Prop        | Type   | Required | Default | Description                                                        |
| ----------- | ------ | -------- | ------- | ------------------------------------------------------------------ |
| `className` | string | no       |         | Additional `className` for the component.                          |
| `children`  | node   | no       |         | Content used for the layout. These should be layout subcomponents. |

**Examples**

```js
<Layout.Content>
  <h1>Hello, world</h1>
</Layout.Content>
```

#### `Layout.Footer`

Wraps the [`GlobalFooter`](#globalfooter) component for use inside the layout.

**Props**

All props are forwarded to the [`GlobalFooter`](#globalfooter) component.

**Examples**

```js
<Layout.Footer fileRelativePath={fileRelativePath} />
```

#### `Layout.Main`

Wraps the main content area in the layout.

**NOTE:** For single-column pages, the [`Layout.Content`](#layoutcontent)
component should be used as the single child of this component to ensure the
props Swifttype attributes are added for the body of the content. For layouts
that use [`Layout.PageTools`](#layoutpagetools), you will need to specify the
grid used for the layout.

**Props**

| Prop        | Type   | Required | Default | Description                                                                                                              |
| ----------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `className` | string | no       |         | Additional `className` for the component.                                                                                |
| `children`  | node   | no       |         | Content displayed inside the main content area. For single-colum layouts, the `Layout.Content` should be the only child. |

**Examples**

```js
<Layout.Main>
  <Layout.Content>
    <h1>Hello, world</h1>
    <p>Here is where the main content of the page goes!</p>
  </Layout.Content>
</Layout.Main>
```

Layout with page tools

```js
<Layout.Main
  css={css`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: 'content page-tools';
  `}
>
  <Layout.Content>
    <h1>Hello, world</h1>
    <p>Here is where the main content of the page goes!</p>
  </Layout.Content>
  <Layout.PageTools>
    <ContributingGuidelines fileRelativePath={fileRelativePath} />
  </Layout.PageTools>
</Layout.Main>
```

#### `Layout.PageTools`

Wraps the [`PageTools`](#pagetools) component for use inside the layout.

**Props**

All props are forwarded to the [`PageTools`](#pagetools) component.

**Examples**

```js
<Layout.PageTools>
  <ContributingGuidelines fileRelativePath={fileRelativePath} />
</Layout.PageTools>
```

#### `Layout.Sidebar`

Sidebar displayed inside the layout. This should contain the primary navigation
used for the site.

**Props**

| Prop        | Type   | Required | Default | Description                                                                                                              |
| ----------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `className` | string | no       |         | Additional `className` for the component.                                                                                |
| `children`  | node   | no       |         | Content displayed inside the main content area. For single-colum layouts, the `Layout.Content` should be the only child. |

**Examples**

```js
<Layout.Sidebar>
  <Logo />
  <MyNavigation />
</Layout.Sidebar>
```

### `Link`

Provides a "smart" link to link to other URLs. This provides a unified component
between a [Gatsby `Link`](https://www.gatsbyjs.com/docs/gatsby-link/) and an
external link. This component will pick between a regular anchor tag and a
Gatsby link depending on whether the URL is a relative or external url.

This component will automatically convert absolute URLs that link to pages
within the same site to relative links. This ensures a smooth user experience
for all linked pages on the site.

This component can be used as a replacement for the built-in `Link` component in
Gatsby since it wraps it.

```js
import { Link } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop | Type   | Required | Default | Description                                                                                                                                          |
| ---- | ------ | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `to` | string | yes      |         | The URL to link to. If this is a relative path, it will use the Gatsby `Link` component. If it is an external URL, it will use a regular anchor tag. |

All additional props are forwarded to either the
[`Link`](https://www.gatsbyjs.com/docs/gatsby-link/) component or the anchor tag
depending on whether it is a relative or absolute URL.

**Examples**

```js
// Can be used as a relative link to other pages in the site
<Link to="/page-2">

// Can also be used to link to external URLs
<Link to="https://gatsbyjs.com">

// If the link is absolute, but the origin matches the `siteMetadata.siteUrl`,
// it will smartly convert this to a relative path.
<Link to="https://developer.newrelic.com/page-2">
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

### `NavItem`

A component used for displaying nav items in the [sidebar](#layoutsidebar).

```js
import { NavItem } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop   | Type   | Required | Default | Description                                                                                     |
| ------ | ------ | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| `page` | `page` | yes      |         | The page data used to for the nav link. See the [page](#page) type documentation for more info. |

#### `Page`

The `NavItem` expects a page type that represents a hierarchy of nav links.

The following properties can be used:

- `title` _(string)_ **Required**: The title that will show up for the nav item.
- `url` _(string)_: Can be either a relative path or an external URL. If the
  `url` is omitted, the nav item will act as a toggle for its children.
- `icon` _(string)_: Name of the icon to be displayed for the nav item. This
  must match a name from the [available icons](#available-icons) list. If the
  icons are shadowed, this may be the name of a shadowed icon as well.
- `pages` _([page])_: A list of child pages that will be rendered as children of
  the current page.

**Examples**

```js
const nav = [
  {
    url: '/docs/intro-to-tdp',
    title: 'Introduction to Telemetry Data Platform',
    icon: 'nr-tdp',
    pages: [
      { url: '/docs/tdp/collect-data', title: 'Collect data in TDP' },
      { url: '/docs/tdp/understand-data', title: 'Understand data' },
    ],
  },
];

const Navigation = () => {
  return nav.map((page) => <NavItem key={page.url} page={page} />);
};
```

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

### `PageTools`

Used as a "right rail" container to display content related to the current page.
To build modules contained inside this component, see the
[`PageTools.Section`](#pagetoolssection) and [`PageTools.Title`](#pagetoolstitle)
documentation.

```js
import { PageTools } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop        | Type   | Required | Default | Description                                          |
| ----------- | ------ | -------- | ------- | ---------------------------------------------------- |
| `className` | string | no       |         | Additional `className` for the component.            |
| `children`  | node   | no       |         | Content to be displayed in the `PageTools` component |

**Example**

```jsx
<PageTools>
  <PageTools.Section>
    <PageTools.Title>How to use</PageTools.Title>
    <p>
      Use the `PageTools` component to render content related to the current
      page.
    </p>
  </PageTools.Section>
</PageTools>
```

#### `PageTools.Section`

A component used as a building block for creating content displayed inside of
the [`PageTools`](#pagetools) component. This is a container for the content
inside a section of the `PageTools`.

**Props**

| Prop        | Type   | Required | Default | Description                                                  |
| ----------- | ------ | -------- | ------- | ------------------------------------------------------------ |
| `className` | string | no       |         | Additional `className` for the component.                    |
| `children`  | node   | no       |         | Content to be displayed in the `PageTools.Section` component |

**Example**

```jsx
<PageTools>
  <PageTools.Section>
    Use the `PageTools.Section` component as a container around content to be
    displayed in a section of the `PageTools`.
  </PageTools.Section>
  <PageTools.Section>
    This will be displayed as its own section inside `PageTools`
  </PageTools.Section>
</PageTools>
```

#### `PageTools.Title`

A component used as a building block for creating content displayed inside of
the [`PageTools`](#pagetools) component. This is used to display a title for the
section of content inside of `PageTools`. Render this inside of a
[`PageTools.Section`](#pagetoolssection) component.

```jsx
<PageTools.Section>
  <PageTools.Title>Related resources</PageTools.Title>
</PageTools.Section>
```

**Props**

| Prop        | Type   | Required | Default | Description                                              |
| ----------- | ------ | -------- | ------- | -------------------------------------------------------- |
| `className` | string | no       |         | Additional `className` for the component.                |
| `children`  | node   | no       |         | Title to be displayed in the `PageTools.Title` component |

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
| `iconName`  | enum     | no       |         | Specify icon to use. Must be one of `SearchInput.ICONS.SEARCH` or `SearchInput.ICONS.FILTER` Defaults to search magnifying glass.        |

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

### `Spinner`

A spinner that can be used to indicate a loading state.

```js
import { Spinner } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop     | Type    | Required | Default | Description                                                                                                             |
| -------- | ------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `inline` | boolean | no       | `false` | Determines whether the spinner should be rendered inline. By default this will center the spinner inside its container. |

**Example**

```js
const View = () => (
  return <Spinner />;
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

### `Table`

Used to render a table with predefined styles.

```js
import { Table } from '@newrelic/gatsby-theme-newrelic';
```

| Prop       | Type | Required | Default | Description                                                                                                 |
| ---------- | ---- | -------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `children` | node | no       |         | Children should be a combination of `tbody`, `td`, `th`, `tr` tags with appropriate content nested beneath. |

**Examples**

```js
<Table>
  <tbody>
    <tr>
      <td>String</td>
    </tr>

    <tr>
      <th>Default</th>

      <td>`""`</td>
    </tr>
  </tbody>
</Table>
```

### `Tag`

Used to render a keyword or tag.

```js
import { Tag } from '@newrelic/gatsby-theme-newrelic';
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

### `useLayout`

A hook that gets information about the layout. Pulls data from the [layout
gatsby config](#layout). Useful to provide consistency for layout styles (such
as `maxWidth` and `contentPadding`.)

```js
import { useLayout } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

n/a

**Returns**

`Object`

Contains the values defined in the Gatsby [`layout`](#layout) config.

**Examples**

```js
const MyComponent = () => {
  const { contentPadding } = useLayout();

  return (
    <Sidebar
      css={css`
        padding: ${contentPadding};
      `}
    >
      <Logo />
    </Sidebar>
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

### `useUserId`

A hook that gets a generated user ID for the user browsing the site. Useful to
provide a stable ID for integration with Google Analytics or split.io.

```js
import { useUserId } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

none

**Returns**

`String` - The `id` of the user browsing the site.

**Examples**

```js
const MyComponent = () => {
  const userId = useUserId();

  useEffect(() => {
    const trackingId = 'UA-1284...';

    ReactGA.initialize(trackingId, {
      gaOptions: {
        userId,
      },
    });
  }, []);

  return null;
};
```

### `usePrevious`

A hook that gets the previous state of a stateful value. Useful to compare if the state has changed between render cycles.

```js
import { usePrevious } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

- `value` _(any)_: Value to track its previous state.

**Returns**

`any` - The previous value.

**Examples**

```js
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <span>{`current count is ${count}, previous count is ${prevCount}`}
      <button onClick ={()=>setCount(count + 1)}>
    </div>
  )
}
```

## Announcements

Sites that utilize this theme can specify accouncements that appear at the top
of the site (using the [Banner](#banner) component under the hood).
Announcements can be added by creating `.mdx` files in the `src/announcements`
directory. The first announcement that matches the current date will be shown.
Because announcements use `mdx` under the hood, you **must** ensure that
`gatsby-plugin-mdx` is installed and configured.

**NOTE:** If the `src/announcements` directory does not exist, the theme will
create it automatically.

**Frontmatter**

| key         | Required | Format       | Description                                                        |
| ----------- | -------- | ------------ | ------------------------------------------------------------------ |
| `startDate` | Yes      | `YYYY-MM-DD` | The date that the announcement banner should start showing.        |
| `endDate`   | Yes      | `YYYY-MM-DD` | The date the announcement banner should stop showing (end of day). |

**Example**

```mdx
---
startDate: 2020-09-01
endDate: 2020-10-20
---

# Example header!

This is some _example_ text.
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
