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
- [Components](#components)
  - [`Button`](#button)
  - [`Surface`](#surface)

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

## Components

### `Button`

Styled buttons used to draw emphasis on clickable actions.

```js
import { Button } from '@newrelic/gatsby-theme-newrelic'`
```

**Props**

| Prop    | Type          | Required | Default  | Description                                                                                                                       |
| ------- | ------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| variant | string        | yes      |          | Configures the variant of the button. Must either be `Button.VARIANT.PLAIN`, `Button.VARIANT.PRIMARY`, or `Button.VARIANT.NORMAL` |
| size    | string        | no       |          | Configures the size of the button. Can be configured to `Button.SIZE.SMALL`                                                       |
| as      | React element | no       | `button` | Render the button as a different base element. Useful when you want to style links as buttons.                                    |

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

<Button as={Link} variant={Button.VARIANT.PRIMARY}>
  Page 2
</Button>;
```

### `Surface`

Used as the foundation for elements in 3D space that sit above other elements,
for example a card.

```js
import { Surface } from '@newrelic/gatsby-theme-newrelic';
```

**Props**

| Prop | Type   | Required | Description                                                                                                                                                                                                                      |
| ---- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| base | string | yes      | Configures the surface when rendered on a variety of base elements. A base of `primary` means the surface is rendered on an element with a primary background. Must either be `Surface.BASE.PRIMARY` or `Surface.BASE.SECONDARY` |

**Example**

```js
<Surface base={Surface.BASE.PRIMARY}>The content inside the surface</Surface>
```
