[![Community Project header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Community_Project.png)](https://opensource.newrelic.com/oss-category/#community-project)

# gatsby-theme-newrelic

This repo contains Gatsby themes used by New Relic Gatsby sites, including the
[developer](https://developer.newrelic.com) and [open source websites](https://opensource.newrelic.com).

- [Installation](#installation)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Options](#options)
- [Components](#components)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
git clone git@github.com:newrelic/gatsby-theme-newrelic.git
cd gatsby-theme-newrelic
yarn
```

## Getting started

You can use the demo site to test out changes to the theme. To run the demo
site, run the following command:

```sh
yarn workspace demo develop
```

To browse the demo site, visit [http://localhost:8001](http://localhost:8001) in
your browser.

## Configuration

You can configure `gatsby-theme-newrelic` for use with any set of docs using the provided configuration options.

## Options

| Option name | Type   | Required | Description                                                                                                                                                                                                                                                                          |
| ----------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| newrelic    | object | No       | Configurations for `gatsby-plugin-newrelic`. More details for the configuration can be found in [the repo](https://github.com/newrelic/gatsby-plugin-newrelic) for the plugin.                                                                                                       |
| robot       | object | No       | `robot` options are forwarded to the `gatsby-plugin-robots-txt` plugin. The default value is `policy: [{ userAgent: '*', allow: '/' }],`. More details about robots.txt and configuring the plugin can be [found here](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/). |

## Components

### `Button`

Easily create buttons in different styles.

| Prop    | Type   | Required | Description                                                                                                                       |
| ------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| variant | string | yes      | Configures the variant of the button. Must either be `Button.VARIANT.PLAIN`, `Button.VARIANT.PRIMARY`, or `Button.VARIANT.NORMAL` |
| size    | string | no       | Configures the size of the button. Can be configured to `Button.SIZE.SMALL`                                                       |

### `Surface`

Used as the foundation for elements in 3D space that sit above other elements,
for example a card.

| Prop | Type   | Required | Description                                                                                                                                                                                                                      |
| ---- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| base | string | yes      | Configures the surface when rendered on a variety of base elements. A base of `primary` means the surface is rendered on an element with a primary background. Must either be `Surface.BASE.PRIMARY` or `Surface.BASE.SECONDARY` |

## Testing

We're currently developing this package, and will provide test information as
we build out the library.

<!--
## Support

New Relic hosts and moderates an online forum where customers can interact with
New Relic employees as well as other customers to get help and share best
practices. Like all official New Relic open source projects, there's a related
Community topic in the New Relic Explorers Hub. You can find this project's
topic/threads here:
-->

## Contributing

We encourage your contributions to improve gatsby-theme-newrelic! Keep in mind
when you submit your pull request, you'll need to sign the CLA via the
click-through using CLA-Assistant. You only have to sign the CLA one time per
project. If you have any questions, or to execute our corporate CLA, required
if your contribution is on behalf of a company, please drop us an email at
opensource@newrelic.com.

## License

gatsby-theme-newrelic is licensed under the [Apache
2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.

> The gatsby-theme-newrelic also uses source code from third-party libraries.
> You can find full details on which libraries are used and the terms under
> which they are licensed in the third-party notices document.
