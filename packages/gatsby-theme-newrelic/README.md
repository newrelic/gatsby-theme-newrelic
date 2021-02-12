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
    - [`sitemap`](#sitemap)
    - [`newrelic`](#newrelic)
    - [`robots`](#robots)
    - [`relatedResources`](#relatedresources)
    - [`tessen`](#tessen)
    - [`resolveEnv`](#resolveenv)
    - [`i18n`](#i18n)
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
  - [`Collapser`](#collapser)
  - [`CollapserGroup`](#collapsergroup)
  - [`ContributingGuidelines`](#contributingguidelines)
  - [`CookieConsentDialog`](#cookieconsentdialog)
  - [`CreateIssueButton`](#createissuebutton)
  - [`Dropdown`](#dropdown)
    - [`Dropdown.Toggle`](#dropdowntoggle)
    - [`Dropdown.Menu`](#dropdownmenu)
    - [`Dropdown.MenuItem`](#dropdownmenuitem)
  - [`ExternalLink`](#externallink)
  - [`FeatherSVG`](#feathersvg)
  - [`GitHubIssueButton`](#githubissuebutton)
    - [Environment information](#environment-information)
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
  - [`MarkdownContainer`](#markdowncontainer)
  - [`MDX`](#mdx)
    - [Using `MDX`](#using-mdx)
    - [Default components](#default-components)
  - [`MDXCodeBlock`](#mdxcodeblock)
  - [`Navigation`](#navigation)
  - [`NavItem`](#navitem)
    - [`Page`](#page)
  - [`NewRelicLogo`](#newreliclogo)
  - [`PageTools`](#pagetools)
    - [`PageTools.Section`](#pagetoolssection)
    - [`PageTools.Title`](#pagetoolstitle)
  - [`RelatedResources`](#relatedresources-1)
  - [`SearchInput`](#searchinput)
  - [`SEO`](#seo)
  - [`SimpleFeedback`](#simplefeedback)
  - [`Spinner`](#spinner)
  - [`Surface`](#surface)
  - [`Table`](#table)
  - [`TableOfContents`](#tableofcontents)
  - [`Tag`](#tag)
  - [`TagList`](#taglist)
  - [`Terminal`](#terminal)
  - [`TextHighlight`](#texthighlight)
  - [`Video`](#video)
- [MDX Component variants](#mdx-component-variants)
- [Hooks](#hooks)
  - [`useActiveHash`](#useactivehash)
  - [`useClipboard`](#useclipboard)
  - [`useFormattedCode`](#useformattedcode)
  - [`useKeyPress`](#usekeypress)
  - [`useLayout`](#uselayout)
  - [`useQueryParams`](#usequeryparams)
  - [`useTessen`](#usetessen)
  - [`useTimeout`](#usetimeout)
  - [`useUserId`](#useuserid)
  - [`usePrevious`](#useprevious)
- [I18n](#i18n-1)
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
        sitemap: true,
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
        i18n: {
          translationsPath: `${__dirname}/src/i18n/translations`,
          additionalLocales: [{ name: '日本語', locale: 'jp' }],
        }
        robots: {
          policy: [{ userAgent: '*', allow: '/' }],
        },
        splitio: {
          core: {
            authorizationKey: 'my-auth-key',
          },
        },
        tessen: {
          product: 'DEMO',
          subproduct: 'DEMO',
        },
        relatedResources: {
          labels: {
            'https://my.website': 'my-website'
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

#### `sitemap`

Toggles the automatic creation of a sitemap. Set this value to
`false` to disable sitemaps.

**Default:** `true`

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

#### `relatedResources`

Optional configuration for related resources used in the right rail. Currently
only `Mdx` nodes are supported.

The related resources component is controlled by specific front matter slugs
that are defined on a page by setting the front matter for `resources`. If no
resources are available in the page front matter, the component will backfill
use the related resource items using Swiftype. See the `swiftype` options below
for more information on customizing the search behavior.

In short, the order of priority for populating content is driven by:

1. Resources defined via the `resources` front matter item.
2. Resources defined from executing a Swiftype search for the page.

**Options:**

- `labels` _(object)_: Map of URLs to their label. This is used to match
  results displayed in the right rail with the label in the tag displayed
  underneath the link. Use this to add additional labels not covered by the
  default set of labels.

- `swiftype` _(object | false)_: Configuration used for fetching results from
  Swiftype for an `Mdx` node. Set this to `false` (the default) to disable
  fetching related resources through Swiftype. If this is disabled, related
  resources can only be sourced via front matter. If enabled, this takes the
  following configuration:

  - `resultsPath` _(string)_ **required**: Path to the file where Swiftype
    results will be stored. If the `refetch` option is set to `false` (the
    default), this file will be used to read related resource values for each
    `Mdx` node. This file is only written to when `refetch` is set to `true`.

  - `refetch` _(boolean)_: Determines whether to refetch results from Swiftype
    for every `Mdx` node during a build. It's a good idea to only set this on a
    special build (e.g. a build that happens on a cron job) so that Swiftype is
    not searched on development or every build on the site.

    - **Default**: `false`

  - `engineKey` _(string)_ **required**: Swiftype's engine key used to fetch
    results from a Swiftype search engine.

  - `getSlug` _(function)_: Function to get the slug for an `Mdx` node.
    Useful if the slug is set from something other than the filesystem. By
    default, this will use the `createFilePath` helper to generate the slug for
    the `Mdx` node. This function should accept an object as its only argument
    with a key of `node` (i.e. `getSlug: ({ node }) => { /* do something */ }`)

  - `filter` _(function)_: Function to determine whether Swfitype should be
    queried for the `Mdx` node. Useful if you only need to get related resources
    for a subset of nodes on the site. By default, all `Mdx` nodes are fetched.
    This function should accept an object as its only argument with a key of
    `node` and a key of `slug` (i.e. `filter: ({ node, slug }) => { /* do something */ }`).

  - `getParams` _(function)_: Function that allows you to specify additional
    params passed to Swiftype when running a search query. Useful if you want to
    provide additional filters or field boosts. This function should accept an
    object as its only argument with a key of `node` and a key of `slug`.

  - `limit` _(integer)_: The limit of related resources that should be fetched
    from Swiftype.

    - **Default**: `5`

#### `tessen`

Optional configuration for Tessen tracking.

- `product` _(string)_ **required**: The 4-character product set as `nr_product`
- `subproduct` _(string)_ **required**: The 4-character subproduct set as `nr_subproduct`
- `segmentWriteKey` _(string)_ **required**: The write key used for Segment
  integration.
- `trackPageViews` _(boolean)_: Determines whether to track page views via
  Tessen's `tessen.page` action. If this is enabled, you **MUST** configure the
  `pageView` settings to ensure the `name` and `category` are propertly
  instrumented.
  - **Default**: `false`
- `pageView` _(object)_: Configuration for automatic page view tracking. If
  `trackPageViews` is enabled, this **MUST** be configured to properly
  instrument page views. If this is not configured, calls to page views will
  result in a no-op. This takes the following configuration:
  - `name` _(string)_ **required**: The name of the page view action. This is
    passed to `tessen.page` to track page views.
  - `category` _(string)_ **required**: The category of the page view action.
    This is passed tot `tessen.page` to track page views.
  - `getProperties` _(function)_: Function that allows you to specify additional
    properties that should be instrumented as part of the page view. Takes an
    object as its only argument with both the `location` and `env` as properties
    on that object. The `env` is determined by the result of the
    [`resolveEnv`](#resolvenv) configuration.
  - `...rest`: All other properties will be added as `properties` to
    `tessen.page`.
- `env` _(object)_: Environment-specific configuration. This takes the same
  properties as listed above. These values override the values set above. Useful
  if you have environment overrides you'd like to apply. The environment is
  determined based on the valued returned from [`resolveEnv`](#resolveenv).

**Example**

```js
const config = {
  tessen: {
    product: 'DEMO',
    subproduct: 'DEMO',
    trackPageViews: true,
    pageView: {
      name: 'pageView',
      category: 'DemoPageView',
      getProperties: ({ location, env }) => ({
        env: env === 'production' ? 'prod' : env,
      }),
    },
    env: {
      development: {
        trackPageViews: false,
      },
    },
  },
};
```

#### `resolveEnv`

Optional function to determine the environment. Useful to provide a fine-tuned
environment name for environment-specific configuration like [`tessen`](#tessen).

**Default**:

```js
const defaultResolveEnv = () =>
  process.env.GATSBY_NEWRELIC_ENV ||
  process.env.GATSBY_ACTIVE_ENV ||
  process.env.NODE_ENV ||
  'development';
```

#### `i18n`

Optional configuration for internationalization (i18n).

- `additionalLocales`: Can be supplied to add support for languages other than English (the default language). Each locale needs a `name` (used for display in the UI) and a `locale` (used by Gatsby and display in the UI on smaller screens).
- `translationsPath`: The directory path where the translations will be stored.
- `i18nextOptions`: Additional options to pass into [`i18next`](https://www.i18next.com/) that will override the defaults.

These values are used to generate locale-specific pages and to populate a dropdown in the `<GlobalHeader />` component.

**Example**

```js
{
  i18n: {
    additionalLocales: [
      { name: '日本語', locale: 'jp' },
      { name: 'Korean', locale: 'ko' },
    ];
  }
}
```

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

These values are also available as global CSS variables. You can access them as:

- `maxWidth`: `var(--site-max-width)`
- `contentPadding`: `var(--site-content-padding)`

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
- `sass`
- `scss`

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

| Prop        | Type   | Required | Default | Description                                                                                                                         |
| ----------- | ------ | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `className` | string | no       |         | Adds a `className` to the callout. Useful if you need to position the callout within its parent element.                            |
| `variant`   | enum   | yes      |         | Configures the variant of the callout. Must be one of `Callout.VARIANT.CAUTION`, `Callout.VARIANT.IMPORTANT`, `Callout.VARIANT.TIP` |
| `title`     | enum   | no       |         | Set the title text. Defaults to variant name. You may hide the title by passing `null` as the value.                                |

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

| Prop               | Type    | Required | Default  | Description                                                                                                                                                                                                                                                                |
| ------------------ | ------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoFormat`       | boolean | no       | `true`\* | Determines whether to auto format the code using prettier. `true` will force code formatting to occur. `false` will force disable code formatting. If left empty, code formatting will only run on a subset of supported languages (see below)                             |
| `children`         | string  | yes      |          | The code to be rendered in the code block                                                                                                                                                                                                                                  |
| `className`        | string  | no       |          | Adds a `className` to the outer container of the code block. Useful if you need to position the code block within its parent element.                                                                                                                                      |
| `components`       | object  | no       |          | Swap out the elements used when rendering various elements of the code block. See the "Configurable components" guide below to learn more about this prop.                                                                                                                 |
| `copyable`         | boolean | no       | `true`   | Determines whether to render a copy button for the content inside the code block.                                                                                                                                                                                          |
| `fileName`         | string  | no       |          | The file name associated with the code rendered by the code block. Useful if the code block is used as part of tutorial.                                                                                                                                                   |
| `formatOptions`    | object  | no       |          | Configuration options given to the [`formatCode`](#formatcode) utility function to auto-format the code block.                                                                                                                                                             |
| `highlightedLines` | string  | no       |          | Specifies which lines in the code block should be highlighted. See the examples below on for information on how to format this string.                                                                                                                                     |
| `language`         | string  | no       |          | Configures the language used for syntax highlighting. Must match one of the languages or its aliases from [`prismjs`](https://prismjs.com/#supported-languages). To learn more about configuring supported languages, visit the [`prism` configuration section](#prism).   |
| `lineNumbers`      | boolean | no       | `false`  | Determines whether to show line numbers inside the code block.                                                                                                                                                                                                             |
| `live`             | boolean | no       | `false`  | Determines whether the code block is live-editable or not. Useful when used in conjunction with the `preview` option, though not required.                                                                                                                                 |
| `preview`          | boolean | no       | `false`  | Determines whether a live preview is displayed using the value in the code block. Useful in conjunction with the `live` option to allow the user to edit the code snippet.                                                                                                 |
| `scope`            | object  | no       |          | Configures the variables available as globals for the live preview. By default, only `React` is injected. To find out more about how the `scope` prop works, visit the [`react-live` documentation](https://github.com/FormidableLabs/react-live#how-does-the-scope-work). |

**Auto code formatting**

Out of the box, the `CodeBlock` component will use prettier to format code for a
subset of languages. These include:

- `jsx`/`javascript`
- `html`
- `graphql`
- `json`
- `css`/`sass`/`scss`

To force formatting for another language, set the `autoFormat` prop value to
`true`. To force disable code formatting, set the `autoFormat` prop value to
`false`.

**NOTE:** If you choose to force enable code formatting for a language not
listed above, you may need to use the `formatOptions` prop to set the proper
[`plugins`](https://prettier.io/docs/en/browser.html#plugins).

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

### `Collapser`

This element is used to reveal or hide content associated with it. Use in
conjunction with a [`CollapserGroup`](#collapsergroup) when using multiple
`Collapser`s in tandom.

```js
import { Collapser } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop          | Type                    | Required | Default | Description                                                                                                                  |
| ------------- | ----------------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `children`    | node                    | yes      |         | The content that will be hidden or revealed when the user interacts with the `Collapser`.                                    |
| `defaultOpen` | boolean                 | yes      | false   | Determines if the `Collapser` should default to its open state.                                                              |
| `id`          | string                  | no       |         | An HTML `id` attribute that will be attached to the `Collapser` `title`. Useful if you want to deep link to the `Collapser`. |
| `title`       | string \| React element | yes      |         | The text that will be rendered on the interactive button used to toggle the open state on the `Collapser`.                   |

**Examples**

```js
import { Collapser } from '@newrelic/gatsby-theme-newrelic';

<Collapser title="The Ruby Agent API">
  This is some information about the Ruby Agent. You'll have to interact with
  the Collapser to see me.
</Collapser>;
```

**Multiple collapsers**

```js
import { Collapser, CollapserGroup } from '@newrelic/gatsby-theme-newrelic';

<CollapserGroup>
  <Collapser title="Collapser 1">
    The first collapser! I will be hidden by default.
  </Collapser>
  <Collapser title="Collapser 2" defaultOpen>
    The second collapser! The user will see this content by default.
  </Collapser>
</CollapserGroup>;
```

### `CollapserGroup`

Used in conjunction with multiple `Collapser`s to group them together.

```js
import { Collapser, CollapserGroup } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop        | Type          | Required | Default | Description                                                                                                              |
| ----------- | ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `className` | string        | no       |         | Adds a `className` to the collapser group. Useful if you need to position the collapser group within its parent element. |
| `children`  | React element | yes      |         | The set of `Collapser` elements that will be rendered as part of the `CollapserGroup`.                                   |

**Examples**

```js
import { Collapser, CollapserGroup } from '@newrelic/gatsby-theme-newrelic';

<CollapserGroup>
  <Collapser title="Collapser 1">
    The first collapser! I will be hidden by default.
  </Collapser>
  <Collapser title="Collapser 2" defaultOpen>
    The second collapser! The user will see this content by default.
  </Collapser>
</CollapserGroup>;
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
| `pageTitle`        | string | no       |         | The title of the current page for use in a new GitHub issue.                                |

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

### `CreateIssueButton`

Pre-defined [`GitHubIssueButton`](#githubissuebutton) used specifically for the
"Create issue" button in the [`ContributingGuidelines`](#contributingguidelines)
and [`GlobalFooter`](#globalfooter) components.

```js
import { CreateIssueButton } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop        | Type   | Required | Default | Description                                                                                         |
| ----------- | ------ | -------- | ------- | --------------------------------------------------------------------------------------------------- |
| `pageTitle` | string | no       |         | Title of the page where the user clicked the "Create issue" button. Used to pre-populate the issue. |

All other props are forwarded to [`Button`](#button) component.

**Example**

```jsx
import { Button, CreateIssueButton } from '@newrelic/gatsby-theme-newrelic';

<CreateIssueButton
  pageTitle="Demo"
  size={Button.SIZE.SMALL}
  variant={Button.VARIANT.OUTLINE}
/>;
```

### `Dropdown`

Used in combination with [`Dropdown.Toggle`](#dropdowntoggle), [`Dropdown.Menu`](#dropdownmenu), and [`Dropdown.MenuItem`](#dropdownmenuitem) to create a dropdown.

```js
import { Dropdown } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop       | Type | Required | Default | Description                                                                  |
| ---------- | ---- | -------- | ------- | ---------------------------------------------------------------------------- |
| `align`    | enum | no       | "left"  | The position of the menu arrow. Must be either `left`, `right`, or `center`. |
| `children` | node | yes      |         | Components used for the dropdown.                                            |

```jsx
import { DropDown, Button } from '@newrelic/gatsby-theme-newrelic';

const Example = (
  <Dropdown align="right">
    <Dropdown.Toggle variant={Button.VARIANT.NORMAL}>Menu</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.MenuItem>Item 1</Dropdown.MenuItem>
      <Dropdown.MenuItem>Item 2</Dropdown.MenuItem>
      <Dropdown.MenuItem>Item 3</Dropdown.MenuItem>
    </Dropdown.Menu>
  </Dropdown>
);
```

#### `Dropdown.Toggle`

Used within a [`Dropdown`](#dropdown) component to render a button that can toggle whether or not the dropdown menu is visible.

**Props**

| Prop       | Type | Required | Default | Description                                                          |
| ---------- | ---- | -------- | ------- | -------------------------------------------------------------------- |
| `size`     | enum | no       |         | The `size` prop for the underlying [`Button`](#button) component.    |
| `variant`  | enum | yes      |         | The `variant` prop for the underlying [`Button`](#button) component. |
| `children` | node | no       |         | Content used to render the toggle                                    |

#### `Dropdown.Menu`

Used within a [`Dropdown`](#dropdown) component to render the _menu_ that is shown when the dropdown is open.

**Props**

| Props      | Type | Required | Default | Description                                                                                  |
| ---------- | ---- | -------- | ------- | -------------------------------------------------------------------------------------------- |
| `children` | node | yes      |         | Content rendered inside the dropdown menu. Should consist of `Dropdown.MenuItem` components. |

#### `Dropdown.MenuItem`

Used within a [`Dropdown.Menu`](#dropdownmenu) component (within a [`Dropdown`](#dropdown) component) to render an individual dropdown menu item.

**Props**

| Props      | Type     | Required | Default | Description                                                                     |
| ---------- | -------- | -------- | ------- | ------------------------------------------------------------------------------- |
| `href`     | string   | no       |         | A path that, if supplied, will be used as a [`Link`](#link).                    |
| `onClick`  | function | no       |         | An optional click event handler that is triggerd when the component is clicked. |
| `children` | node     | yes      |         | Content for the `MenuItem`.                                                     |

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

### `GitHubIssueButton`

Button used to create issues on GitHub. This component depends on the
`repository` and `siteUrl` fields configured in [site metadata](#site-metadata).

```js
import { GitHubIssueButton } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop         | Type     | Required | Default | Description                                                                                                                       |
| ------------ | -------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `labels`     | string[] | no       |         | Labels that should be prepopulated for the issue. NOTE: This labels must be created in the repository where this button links to. |
| `issueTitle` | string   | no       |         | The value that will pre-populate the issue title.                                                                                 |
| `issueBody`  | string   | no       |         | The value that will pre-populate the issue body.                                                                                  |

All other props are forwarded to [`Button`](#button)

#### Environment information

As a convenience, this component attaches environment information to the issue
body to allow for easier debugging. This eliminates the need for a section in
the issue body asking for environment information from the user filing the
issue.

The information gathered is:

- Page URL
- Browser name and version
- Operating system name and version
- Device type (mobile, tablet, etc.), vendor and model

If the browser environment is unable to be determined, these values are simply
set to "Unknown".

**Example**

```jsx
import { Button, GitHubIssueButton } from '@newrelic/gatsby-theme-newrelic';

const ISSUE_BODY = `
## Description

[NOTE]: # (Tell us some information!)
`

<GitHubIssueButton
  labels={['bug']}
  issueTitle="Bug found"
  issueBody={ISSUE_BODY}
  size={Button.SIZE.SMALL}
  variant={Button.VARIANT.OUTLINE}
>
  Found a bug!
</GitHubIssueButton>
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
| `pageTitle`        | string | no       |         | The title of the current page for use in a new GitHub issue.                                                  |

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

**Logos**

- `logo-apple`
- `logo-android`

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

### `MarkdownContainer`

Container used to wrap markdown content. Provides spacing and additional styles
necessary for documents rendered via markdown or MDX.

```js
import { MarkdownContainer } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop                      | Type   | Required | Default | Description                                                                                                        |
| ------------------------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `children`                | node   | yes      |         | Content that will be rendered inside the markdown container. This is usually an [`MDX`](#mdx) component.           |
| `className`               | string | no       |         | Additional className for the `MarkdownContainer`                                                                   |
| `dangerouslySetInnerHTML` | string | no       |         | Same as React's `dangerouslySetInnerHTML`. Useful when rendering a compiled markdown string inside this container. |

**Example**

MDX

```jsx
<MarkdownContainer>
  <MDX body={body} />
</MarkdownContainer>
```

Markdown

```jsx
<MarkdownContainer dangerouslySetInnerHTML={markdown} />
```

### `MDX`

Utility to render MDX content on a page. Provides out-of-the-box shortcodes for
commonly used components.

```js
import { MDX } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop         | Type   | Required | Default | Description                                                                                                                                                                        |
| ------------ | ------ | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `body`       | string | yes      |         | The compiled MDX string to be rendered for the page. This is usually the `body` property on an `MDX` node in Gatsby.                                                               |
| `components` | object | no       |         | Provides [shortcodes](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#shortcodes) for MDX documents. Use this to add additional components or override the default components. |

#### Using `MDX`

When using `MDX`, it is **HIGHLY RECOMMENDED** to wrap the content with the
[`MarkdownContainer`](#markdowncontainer) component to provide the additional
styles and proper spacing. If you would like to render additional components
within the `MarkdownContainer` and want to match spacing, use the following CSS
variables:

- `--block-element-spacing`: Provides proper spacing for block elements
  (callouts, code blocks, etc.)
- `--text-spacing`: Spacing used between paragraphs of text. Use this for
  textual elements in the document (i.e. unordered/ordered lists)

#### Default components

The `MDX` component ships with a set of default mapped components. Where
possible, this component uses the [MDX component variants](#mdx-variants) for
block level components to provide proper spacing.

For more information on the
set of available shortcodes mapped to built-in elements (such as `a`), see the
[MDX documentation](https://mdxjs.com/table-of-components#table-of-components)

The following shortcodes are available by default:

- `a`
- `code`
- `pre`
- `table`
- [`Button`](#button)
- [`ButtonLink`](#button)
- [`Callout`](#callout)
- [`Collapser`](#collapser)
- [`CollapserGroup`](#collapsergroup)
- [`Icon`](#icon)
- `InlineCode`
- [`Link`](#link)
- [`Video`](#video)

**Example**

```jsx
<MarkdownContainer>
  <MDX body={body} />
</MarkdownContainer>
```

Overriding components

```jsx
const components = {
  h1: (props) => <h1 style={{ color: 'purple' }} {...props} />,
};

<MarkdownContainer>
  <MDX body={body} components={components} />;
</MarkdownContainer>;
```

Providing your own components

### `MDXCodeBlock`

Used to render a fenced code block using the [`CodeBlock`](#codeblock) component
or a [`Terminal`](#terminal) component inside of an MDX document. This component
works best in conjunction with the `MDXProvider` component exported from the
`@mdx-js/react` package.

```js
import { MDXCodeBlock } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

All props are forwarded to the either the `CodeBlock` component, or the
`Terminal` component (whichever is rendered based on the language. See below for
more information). This component also maintains the same defaults. See the
"Using with fenced code blocks" section below to learn how options in fenced
code blocks are forwarded to the `CodeBlock` or `Terminal` component.

**Terminals**

This component will automatically render a [`Terminal`](#terminal) component
whenver the language is specified as a shell language (`sh`, `shell`, or
`bash`.) This is to provide a richer experience when rendering shell commands.

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
  fenced code block. If this is a shell language (`sh`, `shell`, or `bash`), a
  `Terminal` component is rendered instead.

````md
```js
```
````

- `animate` (`Terminal` only): Determines whether to animate the shell
  command and terminal output to make it appear as if the command is being
  typed. _NOTE_: This is ignored if the `language` is not set to a shell
  language.

````md
```sh animate

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

### `Navigation`

Used to wrap [`NavItem`](#navitem) components.

```js
import { Navigation } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop         | Type   | Required | Default | Description                                |
| ------------ | ------ | -------- | ------- | ------------------------------------------ |
| `children`   | node   | yes      |         | Nav items to be rendered in the navigation |
| `className`  | string | no       |         | Additional `className` for the component   |
| `searchTerm` | string | no       |         | Search term used to filter nav items       |

**Examples**

```js
import { Navigation } from '@newrelic/gatsby-theme-newrelic';

<Navigation searchTerm="New Relic">
  <NavItem page={page1} />
  <NavItem page={page2} />
</Navigation>;
```

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

### `RelatedResources`

Used to display related resources for the current page. This is meant to be used
as a section inside of the [`PageTools`](#pagetools) component.

```js
import { RelatedResources } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop        | Type       | Required | Default             | Description                                          |
| ----------- | ---------- | -------- | ------------------- | ---------------------------------------------------- |
| `className` | string     | no       |                     | Additional `className` for the component             |
| `resources` | Resource[] | yes      |                     | Array of resources to be displayed in the component. |
| `title`     | string     | no       | 'Related resources' | Title to be displayed as the title for this section  |

```ts
type Resource = {
  url: string;
  title: string;
};
```

**Examples**

```js
<PageTools>
  <RelatedResources resources={relatedResources} />
</PageTools>
```

### `SearchInput`

An input element used for searching content.

```js
import { SearchInput } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop              | Type     | Required | Default | Description                                                                                                                               |
| ----------------- | -------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `className`       | string   | no       |         | Additional `className` for the component.                                                                                                 |
| `onClear`         | function | yes      |         | Handler called when the user interacts with the clear button. This handler should be responsible for resetting the `value` of the input.  |
| `size`            | enum     | no       |         | Size of the input. Must be one of `SearchInput.SIZE.MEDIUM` or `SearchInput.SIZE.LARGE`                                                   |
| `style`           | object   | no       |         | Inline styles for the search input                                                                                                        |
| `value`           | string   | no       |         | Value of the search input.                                                                                                                |
| `width`           | string   | no       |         | Width of the input. Accepts any CSS sizing value (e.g. `100px`)                                                                           |
| `iconName`        | enum     | no       |         | Specify icon to use. Must be one of `SearchInput.ICONS.SEARCH` or `SearchInput.ICONS.FILTER` Defaults to search magnifying glass.         |
| `focusWithHotKey` | string   | no       |         | Adds a listener to focus the input with a hotkey. For example, to focus the search input using the `/` key, specify `focusWithHotKey="/"` |

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
      focusWithHotKey="/"
    />
  );
);
```

### `SEO`

A component that injects meta-tags, links, and other relevant tags for search engine optimization.

```js
import { SEO } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop       | Type   | Required | Default | Description                                                                                                          |
| ---------- | ------ | -------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `location` | string | yes      |         | The location object of the page where this is rendered. This object must have properties of `pathname` and `origin`. |
| `title`    | string | no       |         | title to be displayed in head.                                                                                       |
| `children` | node   | no       |         | any additional tags to be added to the `<head>` of the page                                                          |

**Example**

```js
const MainLayout = () => (
  return (
    <>
      <SEO location={location} />
      <GlobalHeader/>
      <Layout/>
    </>
  )
);
```

### `SimpleFeedback`

A simplified version of the [`Feedback`](#feedback) component.

```js
import { SimpleFeedback } from '@newrelic/gatsby-theme-newrelic';
```

**Props**
| Prop | Type | Required | Default | Description |
| ------- | ------ | -------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `pageTitle` | string | no | | The current page title, which will be added to the issue title, if supplied. |
| `labels` | array | no | `['feedback']` | An array of label string to be applied to the new issue, in addition to either`feedback-positive`or`feedback-negative`. |

**Example**

```jsx
<SimpleFeedback title="My Cool Page" slug="/my-cool-page" />
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

### `TableOfContents`

Component used to create a table of contents for the page. This is meant to be
used as a section inside of the [`PageTools`](#pagetools) component.

```js
import { TableOfContents } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop       | Type      | Required | Default | Description                                                        |
| ---------- | --------- | -------- | ------- | ------------------------------------------------------------------ |
| `headings` | Heading[] | yes      |         | List of headings that should be rendered in the table of contents. |

**NOTE**: The heading `id` attribute **MUST** be defined on the DOM node that
will be linked to. If not, the table of contents link will not work. Consider
using a plugin such as
[`gatsby-remark-autolink-headers`](https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/)
to handle this for you.

```ts
type Heading = {
  id: string;
  text: string;
};
```

**Example**

```jsx
import { TableOfContents } from '@newrelic/gatsby-theme-newrelic';

const headings = [
  { id: 'code-monkey', text: 'Code monkey' },
  { id: 'code-ninja', text: 'Code ninja' },
]

<TableOfContents
  headings={headings}
/>;
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

### `Terminal`

A nice alternative to the `CodeBlock` when rendering shell commands and terminal
output.

```js
import { Terminal } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop       | Type    | Required | Default | Description                                                                                                                                                                                                        |
| ---------- | ------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `animate`  | boolean | no       | `false` | Determines whether to animate the shell command to make it appear as if it is being typed. This will also animate any terminal output specified. Triggers when the user has scrolled 50% of the way down the page. |
| `children` | string  | yes      |         | The code to be rendered in the code block. See below for examples on how to render terminal output.                                                                                                                |
| `copyable` | boolean | no       | `true`  | Determines whether to render a copy button for the content inside the code block. NOTE: only shell commands will be copied. Terminal output will not be copied to the clipboard.                                   |

**Terminal output**

To render terminal output, prefix the line of code with the `[output]` marker
(include a space after the closing bracket). This tells the `Terminal` to 1)
avoid displaying the prompt for the current line and 2) avoid animating it with
the typing animation. When animation is enabled, the terminal output will be
rendered at various intervals of time to make it appear as if the command is
doing some work.

Terminal output can also be colored. By default it will render as plain text
unless otherwise specified. To color a section of text, prefix the area of text
with a color using curly brackets. For example, if you wanted to render some
text as `blue`, prefix it with `{blue}`. The color of the text will extend unil
the next color marker. You can "reset" the color back to plain text using the
`{plain}` marker.

For example, lets say you have this bit of terminal output that you'd like to
display as colored:

```
✔  Component created successfully!
```

For this example, lets say only the checkmark should be green, while the rest of
the text remain plain. To accomplish this, first specify this line as output
(`[output]`), and add the color markers:

```
[output] {green}✔  {plain}Component created successfully!
```

Here is a more complex example:

```
[output]    {purple}nerdpack {blue}pageviews-app {plain}is available at {green}"./pageviews-app"
```

Here the output will render the text "nerdpack" as `purple`, then the app
identifier as `blue` ("pageviews-app"), reset the text back to plain, and
finally the string as `green`. Also notice how the text is indented after the
`[output]` marker. This will render in the terminal as indented text.

Here is a full list of the colors available:

- `plain`
- `green`
- `red`
- `muted`
- `purple`
- `blue`
- `yellow`

For your convenience, color aliases have been provided to give you some more
semantically meaningful names, and provide better color consistency between
meaningful blocks of text. The following color aliases are available:

- `error` (`red`)
- `identifier` (`blue`)
- `string` (`green`)
- `success` (`green`)
- `timestamp` (`muted`)
- `variable` (`variable`)
- `warning` (`yellow`)

```
[output] {timestamp}2020-01-01 12:00:00 {success}✔ {purple}nerdpack {identifier}pageviews-app {plain} is available at {string}"./pageviews-app"
```

**Example**

```js
const shellCommand = `
cd my-nerdlet
nr1 nerdpack:serve
`;

const Example = () => <Terminal animate>{shellCommand}</Terminal>;
```

With terminal output

```js
const shellCommand = `
nr1 create --type nerdpack --name pageviews-app
[output] {success}✔  {plain}Component created successfully!
[output]    {purple}nerdpack {blue}pageviews-app {plain}is available at {green}"./pageviews-app"
`;

const Example = () => <Terminal>{shellCommand}</Terminal>;
```

### `TextHighlight`

Component used to highlight text matches in a string. Useful if filtering text
and want to show a matched search term.

```js
import { TextHighlight } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop            | Type    | Required | Default | Description                                                 |
| --------------- | ------- | -------- | ------- | ----------------------------------------------------------- |
| `text`          | string  | yes      |         | The text that should be highlighted with the matching term. |
| `match`         | string  | yes      |         | String used as the matching term.                           |
| `caseSensitive` | boolean | no       | `false` | Determines if the match should be case sensitive or not.    |

**Examples**

```js
import { TextHighlight } from '@newrelic/gatsby-theme-newrelic';

<TextHighlight text="New Relic" match="New" />;
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

## MDX Component variants

When working in an MDX document, adding additional styling, such as spacing for
layout, become more difficult. The [`MDX`](#mdx) component provides shortcodes
for the commonly used components from the theme, however, these components
provide no external spacing.

To ease the burden on adding spacing for these components while working in MDX,
many of them have been wrapped by an MDX component variant. These components are
prefixed with `MDX` and mapped as shortcodes instead. For example, the `Callout`
shortcode is mapped to an `MDXCallout` component, which wraps the real `Callout`
component.

These MDX component variants forward all props to its wrapped component. The
following MDX variants are available and mapped inside the `MDX` component:

- `a` --> `MDXLink`
- `code` --> `MDXCodeBlock`
- `table` --> `MDXTable`
- `Callout` --> `MDXCallout`
- `CollapserGroup` --> `MDXCollapserGroup`
- `Video` --> `MDXVideo`

**NOTE**: While all of these components are exported and available for use, its
highly recommended to use these components solely for use in MDX documents. When
working in regular React components, used the regular component instead.

## Hooks

### `useActiveHash`

A hook that determines the active hash ID given the scroll position on the page.

```js
import { useActiveHash } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

- `ids` _(string[])_: List of DOM `id`s that should be monitored. The `id`
  corresponding to the nearest element based on scroll position will be
  returned.

**Returns**

`string` - The `id` of the active hash.

**Examples**

```js
const MyComponent = () => {
  const activeHash = useActiveHash(['code-monkey', 'code-ninja']);

  return (
    <div>
      <h2
        id="code-monkey"
        style={{ color: activeHash === 'code-monkey' ? 'red' : 'currentColor' }}
      >
        Code monkey
      </h2>
      <h2
        id="code-ninja"
        style={{ color: activeHash === 'code-ninja' ? 'red' : 'currentColor' }}
      >
        > Code ninja
      </h2>
    </div>
  );
};
```

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

- `key` _(string | Array<string>)_: The key or keys being listened for
  (i.e. the `event.key` value). This hook also recognizes modifier keys. To add
  a listener for a modifier key, use the format `<modifier key>+<key>` (i.e.
  `CMD+S`). The key is case insensitive and ignores whitespace (i.e. `cmd + s`
  also works.) Pass an array of keys to listen for multiple key combinatations
  in a single listener. The following modifier keys are supported:
  - `CMD` - The OS meta key; `Command ⌘` on macOS and the Windows key on Windows.
    Also maps to `Control` for easier Windows support.
  - `CTRL` - The `Control` key. NOTE: This does not map to the `Command` key on
    macOS. Use this modifier if you explictly want the `Control` key on macOS.
  - `Shift`
  - `Alt`
- `callback` _(function)_ : Callback function called when the keydown event
  matches the key. Takes the `event` as the argument.
- `options` _(object)_: Options for the hook
  - `ignoreTextInput` _(boolean)_: Determines whether the handler should trigger
    when the key matches while typing in an `input` or `textarea`. By default,
    the handler will not be triggered when the user is typing in a text input
    (`true`). Set to `false` to trigger the handler in text inputs.

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

**Modifier keys**

```js
useKeyPress('CMD+S', () => {
  console.log('Save it!');
});
```

**Listen for multiple keys**

```js
useKeyPress(['s', 'h'], (e) => {
  console.log(e.key); // 's' or 'h'
});
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

### `useTessen`

A hook that gets allows you to instrument actions with Tessen. This hook
requires that [`tessen`](#tessen) is configured. If `tessen` is not configured,
calls to each action will result in a no-op.

**NOTE**: Calls to the Tessen actions are pre-configured with the `nr_product`,
and `nr_subproduct` as configured in the [`tessen`](#tessen) configuration.
`location` is also pre-configured as `Public`. Setting these values as
`properties` in the actions will do nothing.

```js
import { useTessen } from '@newrelic/gatsby-theme-newrelic';
```

**Arguments**

none

**Returns**

`Tessen` - The Tessen object that allows you to call actions.

**Types**

```ts
type Tessen = {
  page: (name: string, category: string, properties?: object) => void;
  track: (name: string, category: string, properties?: object) => void;
};
```

**Examples**

```js
const MyComponent = () => {
  const tessen = useTessen();

  return (
    <button onClick={() => tessen.track('copyButtonClicked', 'MyCategory')}>
      Copy
    </button>
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

## I18n

This theme uses [`react-i18next`](https://react.i18next.com/) to handle
translations. All modules are re-exported from this theme so that you can use
them in your site.

Example:

```js
import { useTranslation, Trans } from '@newrelic/gatsby-theme-newrelic';
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

**Front matter**

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

  - `options.language` _(string)_: Tells the function the language of the code
    that will be formatted through prettier. This is used to detect a suitable
    `parser` for the code. This is recommended if you are not setting the
    `parser` option yourself. If no suitable parser is found for the current
    language, or if the `language` option is not specified, this will fall back
    to the `babel` parser. For more info on available
    [plugins](https://prettier.io/docs/en/browser.html#plugins) and
    [parsers](https://prettier.io/docs/en/options.html#parser), see the
    [Prettier](https://prettier.io/) documentation.

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
