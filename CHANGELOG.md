# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [9.0.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v8.0.0...v9.0.0) (2023-12-06)

- feat!: revert Gatsby 5 changes (#959) ([4271a27](https://github.com/newrelic/gatsby-theme-newrelic/commit/4271a27c539634fe61dd4c93d079c05b9fbbe9d3)), closes [#959](https://github.com/newrelic/gatsby-theme-newrelic/issues/959)

### BREAKING CHANGES

- reverts the Gatsby 5 changes so the theme
  is back on Gatsby 4.

# [8.0.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.2.2...v8.0.0) (2023-11-07)

### Bug Fixes

- Add SEO test ([d81bd2c](https://github.com/newrelic/gatsby-theme-newrelic/commit/d81bd2c1dea5814f667033eaab65a48e53a3f638))
- remove unneeded comment and console log ([0a920f8](https://github.com/newrelic/gatsby-theme-newrelic/commit/0a920f8f17332635c15efd057fcda0459f955ffe))
- rerender feedback form for each test ([c680aac](https://github.com/newrelic/gatsby-theme-newrelic/commit/c680aac298a445199a978556f54bc6c40c3c9735))
- rerender feedback form for each test ([362f131](https://github.com/newrelic/gatsby-theme-newrelic/commit/362f131756ded9768e6df57a0c436464613bf6cb))
- resolve `:nth-child` error ([9a82209](https://github.com/newrelic/gatsby-theme-newrelic/commit/9a82209d50394b408b8b45582fe3774ba22e1e8c))

### chore

- remove unused component ([e77d381](https://github.com/newrelic/gatsby-theme-newrelic/commit/e77d3814e27b34c0322da62c8c06384600a15410))

### Features

- add useHasMounted test ([56f6000](https://github.com/newrelic/gatsby-theme-newrelic/commit/56f60009cedcdf07193f9889031ab6cbd5492aea))
- update gatsby plugin newrelic ([73516ab](https://github.com/newrelic/gatsby-theme-newrelic/commit/73516ab7a03bbb7b4f7e842b01e2661f20d6d703))

### BREAKING CHANGES

- delete AnimatedCard Component

## [7.2.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.2.1...v7.2.2) (2023-09-26)

### Bug Fixes

- clean up `@mdx-js/{mdx,react}` packages ([4f30134](https://github.com/newrelic/gatsby-theme-newrelic/commit/4f301341b4bb0a77ab74d263b4a3f2031116b735))
- remove `remark-mdxjs` dependency ([2287c1a](https://github.com/newrelic/gatsby-theme-newrelic/commit/2287c1a769954128bbafb74c083c42c709595ddd))
- update `remark-mdx`, make gastby-node ESM ([f7be576](https://github.com/newrelic/gatsby-theme-newrelic/commit/f7be5767394dae582ce0c85526e330bfc2e66a53))

## [7.2.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.2.0...v7.2.1) (2023-09-07)

### Bug Fixes

- use `fileAbsolutePath` for `MarkdownRemark` nodes ([e1b5d23](https://github.com/newrelic/gatsby-theme-newrelic/commit/e1b5d23643e1deb6dc01d48b64da4665e484f60e))

# [7.2.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.1.3...v7.2.0) (2023-09-01)

### Bug Fixes

- bump github workflows to node 18 ([a18084d](https://github.com/newrelic/gatsby-theme-newrelic/commit/a18084d139134609eddb7beaa90dedbc7760b7c7))
- Create mdxAST field ([42ec26f](https://github.com/newrelic/gatsby-theme-newrelic/commit/42ec26f73759bd2dd123881efbbc04d8433f6dab))
- make Button `variant` not required ([d60aa36](https://github.com/newrelic/gatsby-theme-newrelic/commit/d60aa36a41dcdb631cf560a27bb65773843cad8c))
- make Tabs.Pages index prop not required ([f445e49](https://github.com/newrelic/gatsby-theme-newrelic/commit/f445e498ca7bb58be81add96b448495f3012c2e9))
- Update slugify function ([80cc35a](https://github.com/newrelic/gatsby-theme-newrelic/commit/80cc35ad09fd602463141051291cf52724cb4010))
- use 'value' prop instead of 'selected' on option element ([d11a777](https://github.com/newrelic/gatsby-theme-newrelic/commit/d11a77721896a36b5cac386fcad8be62702f0d93))

### Features

- Upgrade node and packages ([60db122](https://github.com/newrelic/gatsby-theme-newrelic/commit/60db122d238ac3be1e375d2d33231b4d6dd2e70a))

## [7.1.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.1.2...v7.1.3) (2023-08-31)

### Bug Fixes

- images overflowing main body container ([69cf7ee](https://github.com/newrelic/gatsby-theme-newrelic/commit/69cf7eeb39f87b85384a6aa79de44c50dc98bb2a))

## [7.1.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.1.1...v7.1.2) (2023-08-15)

### Bug Fixes

- h2 and h3 have the same styling within Steps ([c42352c](https://github.com/newrelic/gatsby-theme-newrelic/commit/c42352c79bd172ca82e60eb4857805439e241d8b))

## [7.1.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.1.0...v7.1.1) (2023-07-28)

### Bug Fixes

- Only use live provider around live code ([2bd8986](https://github.com/newrelic/gatsby-theme-newrelic/commit/2bd8986494cf1376671c037017b50880bcf9f22a))

# [7.1.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.0.4...v7.1.0) (2023-05-26)

### Features

- add `sideEffects: false` for tree-shaking ([44e4066](https://github.com/newrelic/gatsby-theme-newrelic/commit/44e406671bdfab1606334b6eb8ce3cc6eb30e3d0))

## [7.0.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.0.3...v7.0.4) (2023-05-22)

### Bug Fixes

- export useDarkMode hook ([44d1601](https://github.com/newrelic/gatsby-theme-newrelic/commit/44d160161a7b50a5347731d0951657011262bfd9))

## [7.0.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.0.2...v7.0.3) (2023-05-12)

### Bug Fixes

- Use menuItem as a tag ([9736092](https://github.com/newrelic/gatsby-theme-newrelic/commit/973609222e6492b22ca22716e3d985d9204dd371))

## [7.0.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.0.1...v7.0.2) (2023-04-20)

### Bug Fixes

- add `height: 100%` to fix overflow ([706e00e](https://github.com/newrelic/gatsby-theme-newrelic/commit/706e00e43b20c6e0d8d7e997a31a6b910ffba8c8))
- hoist height into context & use for Bar ([e88fc5f](https://github.com/newrelic/gatsby-theme-newrelic/commit/e88fc5f72f1357f4496969e0c621e214c1d5e6f1))

## [7.0.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v7.0.0...v7.0.1) (2023-04-19)

### Bug Fixes

- add `overflow-x` hidden to body ([f8aa10c](https://github.com/newrelic/gatsby-theme-newrelic/commit/f8aa10c43ed5cf2c49f140c014f69e9a3ffe6f26))
- Popover offset not working ([1f4b90c](https://github.com/newrelic/gatsby-theme-newrelic/commit/1f4b90cdec301b01aad79362e96ab2837bd463ae))

# [7.0.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.19.2...v7.0.0) (2023-04-18)

### Features

- remove LicenseKey component ([0565bea](https://github.com/newrelic/gatsby-theme-newrelic/commit/0565bea589ae5223453a2b25969cb211359b7847))

### BREAKING CHANGES

- remove LicenseKey component

## [6.19.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.19.1...v6.19.2) (2023-04-17)

### Bug Fixes

- Update feedback styles ([5c6c4fb](https://github.com/newrelic/gatsby-theme-newrelic/commit/5c6c4fb70c0ce7f7127359dc08aadad84ab3fec8))

## [6.19.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.19.0...v6.19.1) (2023-04-12)

### Features

- bump gatsby-plugin-newrelic to 2.3.0 ([88b7627](https://github.com/newrelic/gatsby-theme-newrelic/commit/88b762712cb2047ff35627707664b3db71b155a5))

# [6.19.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.10...v6.19.0) (2023-04-04)

### Bug Fixes

- linting errors, update tests ([2277e02](https://github.com/newrelic/gatsby-theme-newrelic/commit/2277e026be60b2a590db96cf3b4c182c2ebf15c6))

### Features

- add chevron left and right icons ([c889522](https://github.com/newrelic/gatsby-theme-newrelic/commit/c889522a5f4a79ba6acfeebc16b99e2934b877c9))

## [6.18.10](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.9...v6.18.10) (2023-04-03)

### Bug Fixes

- Instrument lightbox clicks ([9bdf833](https://github.com/newrelic/gatsby-theme-newrelic/commit/9bdf833f16582472316dca7e306c0ae990752899))
- Remove link to signup logic ([aa3d74d](https://github.com/newrelic/gatsby-theme-newrelic/commit/aa3d74dd5834bd869d064c2eb61df9d490c7c223))

## [6.18.9](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.8...v6.18.9) (2023-03-24)

### Bug Fixes

- Delete OneTrust ([3fe7a88](https://github.com/newrelic/gatsby-theme-newrelic/commit/3fe7a888bf23d52eee82bdfbc55055a0c2caddbb))
- Swap Osano for OneTrust and add footer button ([1a522e2](https://github.com/newrelic/gatsby-theme-newrelic/commit/1a522e25e194490154063220dbc6c130977f214e))

## [6.18.8](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.7...v6.18.8) (2023-03-24)

### Bug Fixes

- make collapser animation how it used to be ([bd18aab](https://github.com/newrelic/gatsby-theme-newrelic/commit/bd18aab022b0649c2714b2a773a42c6e82c433f4))
- make search return 7 results and not fetch any more ([ef30783](https://github.com/newrelic/gatsby-theme-newrelic/commit/ef30783e3e67942246b0af5bdd53c8f56b1ceb7b))

## [6.18.7](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.5...v6.18.7) (2023-03-17)

### Bug Fixes

- stacked tabs design ([cdf2e0b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cdf2e0ba8fa16078694a0ca973508d061f73082d))
- stacked tabs responsive design ([1b496b0](https://github.com/newrelic/gatsby-theme-newrelic/commit/1b496b06846815a8b83503cd885ff4b9b928cf10))

## [6.18.6](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.5...v6.18.6) (2023-03-17)

**Note:** Version bump only for package gatsby-theme-newrelic

## [6.18.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.4...v6.18.5) (2023-03-16)

### Bug Fixes

- **sitemap:** exclude embed pages from sitemap always ([18689f9](https://github.com/newrelic/gatsby-theme-newrelic/commit/18689f9957b04c561046c86ad9ace175b423d575))

## [6.18.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.3...v6.18.4) (2023-03-13)

**Note:** Version bump only for package gatsby-theme-newrelic

## [6.18.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.2...v6.18.3) (2023-03-10)

### Bug Fixes

- Pass className ([90d67e0](https://github.com/newrelic/gatsby-theme-newrelic/commit/90d67e097840008b3473abdeff231c4ef843ae85))

## [6.18.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.1...v6.18.2) (2023-03-10)

### Bug Fixes

- release for commit 5d36f3b ([d285029](https://github.com/newrelic/gatsby-theme-newrelic/commit/d2850296db88417420a2962281dad184d49c5123))

## [6.18.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.18.0...v6.18.1) (2023-03-08)

**Note:** Version bump only for package gatsby-theme-newrelic

# [6.18.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.17.6...v6.18.0) (2023-03-06)

### Features

- generalize the LicenseKey Popover ([98745e2](https://github.com/newrelic/gatsby-theme-newrelic/commit/98745e2fc655525ae20b135e624687e4556eda2a))

## [6.17.6](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.17.5...v6.17.6) (2023-03-02)

### Bug Fixes

- import useLoggedIn hook to not be default syntax ([f6c4d3b](https://github.com/newrelic/gatsby-theme-newrelic/commit/f6c4d3b9455a66dcd5edf176a3075ccdc9a02d15))
- remove unused export ([54ffb44](https://github.com/newrelic/gatsby-theme-newrelic/commit/54ffb444b3f2c2ab211395c0a5b2854f08f849d1))

## [6.17.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.17.4...v6.17.5) (2023-02-28)

### Bug Fixes

- Use org level bot token ([006503a](https://github.com/newrelic/gatsby-theme-newrelic/commit/006503a6a39cb781223f37aa8804fedba396494e))

## [6.17.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.17.3...v6.17.4) (2023-02-24)

### Bug Fixes

- Move className so it can overwrite css prop ([54f3dd2](https://github.com/newrelic/gatsby-theme-newrelic/commit/54f3dd2894a24dee7e6e0bfb7fb0d9480dc1d572))

## [6.17.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.17.2...v6.17.3) (2023-02-22)

**Note:** Version bump only for package gatsby-theme-newrelic

## [6.17.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.17.1...v6.17.2) (2023-02-22)

### Bug Fixes

- re-enable signup reCaptcha script tag ([231adde](https://github.com/newrelic/gatsby-theme-newrelic/commit/231addeb7c2ae76bcd4ed3ea6a8c782c36389f89))

## [6.17.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.17.0...v6.17.1) (2023-02-16)

### Bug Fixes

- InlineSignup mobile styles ([7eeff29](https://github.com/newrelic/gatsby-theme-newrelic/commit/7eeff2912e690dd23671553dfd48eef889172e41))

# [6.17.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.16.7...v6.17.0) (2023-02-15)

### Bug Fixes

- make height/scrolling more dynamic based on individual pages ([938d709](https://github.com/newrelic/gatsby-theme-newrelic/commit/938d709a5ced3665d7e80f4c208c6d18ed4c5466))
- make it overflow y and adding proptypes for handleHeight function ([1f51d2c](https://github.com/newrelic/gatsby-theme-newrelic/commit/1f51d2c61827d203a70cf217cda45fe6757388ab))
- remove darkmode bottom borders on BarItem, overflow y only ([4d5298f](https://github.com/newrelic/gatsby-theme-newrelic/commit/4d5298f6d03a6db114810c923e37029760e6b32e))
- remove extra LicenseKey ([00a1f61](https://github.com/newrelic/gatsby-theme-newrelic/commit/00a1f615f4e5e3ebc31f00f53d59c58a64c6e937))
- remove unused prop ([033dc68](https://github.com/newrelic/gatsby-theme-newrelic/commit/033dc68b79c3bb00bcd8f0d67951c43f5c50fc11))
- set fixed height and allow content to scroll ([3c6eac7](https://github.com/newrelic/gatsby-theme-newrelic/commit/3c6eac73a34daade756bac674f1035c9a86a84af))
- update css to ensure overflows only occur on stacked Tabs ([e9cec30](https://github.com/newrelic/gatsby-theme-newrelic/commit/e9cec300a5acf34c5e8ce6a1de92ce1cd5604f78))
- update proptypes ([4cb59e2](https://github.com/newrelic/gatsby-theme-newrelic/commit/4cb59e2116a45ed7f048795f162125d497f7c6ff))
- update styles and mobile breakpoint ([10e5d89](https://github.com/newrelic/gatsby-theme-newrelic/commit/10e5d89a864ddab9efb9909cef5cb54cb46d6fca))

### Features

- add `screenreader-only` class ([6ba7f9b](https://github.com/newrelic/gatsby-theme-newrelic/commit/6ba7f9bde7535f0628ff65a6a3c75ded3fd7a339))
- allow custom styling of `RecaptchaFooter` ([64d5864](https://github.com/newrelic/gatsby-theme-newrelic/commit/64d5864c4d959284da96cdaedd67a7ece8a546aa))
- create InlineSignup component ([159d0ad](https://github.com/newrelic/gatsby-theme-newrelic/commit/159d0ad38f9bac82f56f63e2e9116818d0f49fda))
- using 'stacked' prop updates bar ([44e7fe1](https://github.com/newrelic/gatsby-theme-newrelic/commit/44e7fe1f7b27c9447693ae79f7fb09a9b87e2545))

## [6.16.7](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.16.6...v6.16.7) (2023-02-09)

### Bug Fixes

- codeblocks after LicenseKey not rendering properly ([0353707](https://github.com/newrelic/gatsby-theme-newrelic/commit/0353707b6f2e817c562724b4ffe7910bd8fd6164))

## [6.16.6](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.16.5...v6.16.6) (2023-02-09)

### Bug Fixes

- make collapsers not take up height when closed ([e96d05a](https://github.com/newrelic/gatsby-theme-newrelic/commit/e96d05ab350facaa24995c99c06e01c188bf169b))

## [6.16.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.16.4...v6.16.5) (2023-02-08)

### Bug Fixes

- fix wrong codeblock height in collapsers ([811a48a](https://github.com/newrelic/gatsby-theme-newrelic/commit/811a48a27d8f7e3f03df86696a6f125424b2bd82))

## [6.16.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.16.3...v6.16.4) (2023-02-07)

### Bug Fixes

- add `eslint-disable` comment to attribute ([370a209](https://github.com/newrelic/gatsby-theme-newrelic/commit/370a20951606964e0c224c988bd969939a59b9dd))
- use `display` instead of `visibility` ([0ce3a48](https://github.com/newrelic/gatsby-theme-newrelic/commit/0ce3a48f1aaec5ee4f576578df9e4392b582a5dd))

## [6.16.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.16.2...v6.16.3) (2023-02-06)

### Bug Fixes

- popover closing too early ([716cb7a](https://github.com/newrelic/gatsby-theme-newrelic/commit/716cb7a8ce9d3e491c36dfb838cde9c0af1f12b6))
- use `visibility` instead of `overflow` ([05fe6da](https://github.com/newrelic/gatsby-theme-newrelic/commit/05fe6da55687a178d164383bbcccfdc0aa93adc8))

## [6.16.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.16.1...v6.16.2) (2023-02-03)

### Bug Fixes

- Update copy ([1ff9225](https://github.com/newrelic/gatsby-theme-newrelic/commit/1ff922525cf878b0643c3c8edcb1e7aae97afa79))

## [6.16.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.16.0...v6.16.1) (2023-02-03)

### Bug Fixes

- fix LicenseKey z-index and font size ([63c1cbe](https://github.com/newrelic/gatsby-theme-newrelic/commit/63c1cbefa7f5df2e37ba29d65ffcbc6e7fcf8120))

# [6.16.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.15.2...v6.16.0) (2023-02-02)

### Bug Fixes

- **header:** remove unused SignupModal from global header ([4b683e3](https://github.com/newrelic/gatsby-theme-newrelic/commit/4b683e3fcb81c6f91d7761323e763301699f770a))
- remove `stroke` attribute from info icon ([6f9413e](https://github.com/newrelic/gatsby-theme-newrelic/commit/6f9413e31d32c2ebc5346515c25d5d9abfd0b00d))

### Features

- Copy useDarkMode package into repo ([1080904](https://github.com/newrelic/gatsby-theme-newrelic/commit/1080904df9a60cfbc26442862a4f594acdd27180))
- create LicenseKey component ([605f16f](https://github.com/newrelic/gatsby-theme-newrelic/commit/605f16fe30a2b28cc911cecd9b7e37956a32aaa9))

## [6.15.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.15.1...v6.15.2) (2023-01-30)

### Bug Fixes

- Give BarItem a className of isSelected ([5100904](https://github.com/newrelic/gatsby-theme-newrelic/commit/5100904253b75144a7e1429449f7c924ca31c993))
- **SEO:** change hreflang on alt link if default language ([c7fca1c](https://github.com/newrelic/gatsby-theme-newrelic/commit/c7fca1c6e8551f72a5e694cd79db6509601beee6))
- small padding tweak to give content in NavItem space ([351152b](https://github.com/newrelic/gatsby-theme-newrelic/commit/351152b78f94f3977463fc09a6208e60fc4f45cc))
- update PropTypes in BarItem ([9df43a8](https://github.com/newrelic/gatsby-theme-newrelic/commit/9df43a896c60b6f60119fe499b4d043470aa43d6))

## [6.15.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.15.0...v6.15.1) (2023-01-25)

### Bug Fixes

- add default export for `useLoggedIn` ([0012ced](https://github.com/newrelic/gatsby-theme-newrelic/commit/0012ced186a9f459182555693eb76389874c5235))

# [6.15.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.14.0...v6.15.0) (2023-01-24)

### Bug Fixes

- get deepest descendent for mobile tabs ([2ad30b6](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ad30b66a817312d3da12d8e69ee2242bb63c3fd))
- pass `className` prop through to the `button` ([16fb74c](https://github.com/newrelic/gatsby-theme-newrelic/commit/16fb74cb34167592d43bed5d4b5d6ea44239414b))
- reexport `useLoggedIn` from index file ([6f12824](https://github.com/newrelic/gatsby-theme-newrelic/commit/6f12824f86cd043e1cd33552057217dba18a85bb))

### Features

- add `initialTab` prop to `Tabs` ([34dffce](https://github.com/newrelic/gatsby-theme-newrelic/commit/34dffce74a44376bd4fa9b791a632495def0349d))

# [6.14.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.16...v6.14.0) (2023-01-19)

### Bug Fixes

- Account for grid-gap in SideBySide width ([654e487](https://github.com/newrelic/gatsby-theme-newrelic/commit/654e487f10764e728d09a459271403e9cbda77d7))

### Features

- Add TutorialStep components ([900cd32](https://github.com/newrelic/gatsby-theme-newrelic/commit/900cd32433f405b9975dac6ec8cbf38e6e412da2))

## [6.13.16](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.15...v6.13.16) (2023-01-19)

### Features

- create `useLoggedIn` hook and `LoggedInProvider` ([79054a5](https://github.com/newrelic/gatsby-theme-newrelic/commit/79054a5eb986e265b2e5aaf6e7138072d2048bbf))

## [6.13.15](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.14...v6.13.15) (2023-01-18)

### Bug Fixes

- Set darkMode in localStorage on client entry ([9431867](https://github.com/newrelic/gatsby-theme-newrelic/commit/94318675df9883ddc7a4dc388887d0764af37ef9))

## [6.13.14](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.13...v6.13.14) (2023-01-13)

### Bug Fixes

- bump deps in theme to match docs site ([e6c5337](https://github.com/newrelic/gatsby-theme-newrelic/commit/e6c5337e0a638e50fe51c685181dda60c1eab0cf))
- run yarn ([64dff7a](https://github.com/newrelic/gatsby-theme-newrelic/commit/64dff7ad517ae8382731dbc4d16eb198ea9a468f))
- update demo deps ([6aa5a32](https://github.com/newrelic/gatsby-theme-newrelic/commit/6aa5a3241b0eacf7208c4e3ae9e946fff55f6ab3))

## [6.13.13](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.12...v6.13.13) (2023-01-04)

### Bug Fixes

- auto-fill search query from URL ([0cca1d8](https://github.com/newrelic/gatsby-theme-newrelic/commit/0cca1d88edff56a1cf0cf022091ba277b51784e2))
- bump prismjs version ([7aaf54d](https://github.com/newrelic/gatsby-theme-newrelic/commit/7aaf54d63ac5ae9778c107ff3f6e441ae28d7217))
- bump prismjs version ([c151d14](https://github.com/newrelic/gatsby-theme-newrelic/commit/c151d148bccb7bbbce9133876ba95240e3f7ebc8))

## [6.13.12](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.11...v6.13.12) (2022-12-16)

### Bug Fixes

- dedupe gatsby transformer sharp ([a32c803](https://github.com/newrelic/gatsby-theme-newrelic/commit/a32c80323908457ce35ec234b69c812dd7fec4e3))

## [6.13.11](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.10...v6.13.11) (2022-12-06)

### Bug Fixes

- Export feedback const ([7a759c6](https://github.com/newrelic/gatsby-theme-newrelic/commit/7a759c6024a55974a1ece323225fb1297443a59f))

## [6.13.10](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.9...v6.13.10) (2022-12-06)

### Bug Fixes

- Add formType to complexfeedback ([59b25d9](https://github.com/newrelic/gatsby-theme-newrelic/commit/59b25d93987f01c0a673f4b72669294a17076838))
- Export util functions ([4df12c7](https://github.com/newrelic/gatsby-theme-newrelic/commit/4df12c78c4c26ff58fd929c39a87ac0a29f2fa1b))

## [6.13.9](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.8...v6.13.9) (2022-11-29)

### Bug Fixes

- Make fileName in CodeBlock dynamic ([29d042d](https://github.com/newrelic/gatsby-theme-newrelic/commit/29d042de49b24db87b21b03e5942e7218aed4e97))

## [6.13.8](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.7...v6.13.8) (2022-11-29)

### Bug Fixes

- send whole url to feedback service ([c8f770a](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8f770a7c87979395eaf349861ac8e4e5d398047))

## [6.13.7](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.6...v6.13.7) (2022-11-09)

### Bug Fixes

- feedback form UI handles long translation strings ([876aaef](https://github.com/newrelic/gatsby-theme-newrelic/commit/876aaef00c502aef068dfef13069400631d39f2f))
- update simple feedback form to use new feedback form verbiage and variables ([8b20e68](https://github.com/newrelic/gatsby-theme-newrelic/commit/8b20e688f73278b24e1aaf2199fde65f2afe36d1))

## [6.13.6](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.5...v6.13.6) (2022-11-04)

### Bug Fixes

- add feedback data to the gql schema ([5d9392d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5d9392d8669c6404fc3ef789abeb2af93e76a0b6))

## [6.13.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.4...v6.13.5) (2022-11-04)

### Bug Fixes

- Only replace quotes if present and a string ([fcfe5b4](https://github.com/newrelic/gatsby-theme-newrelic/commit/fcfe5b43eda203da60596f6de0cdafd82542119b))
- Properly setting Tessen values from Cookies ([fcfe629](https://github.com/newrelic/gatsby-theme-newrelic/commit/fcfe62927e3bd8808b8c5beb41a41c538132f2b3))

## [6.13.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.3...v6.13.4) (2022-11-03)

### Bug Fixes

- update env variable name for feedback recaptcha token ([d3117fc](https://github.com/newrelic/gatsby-theme-newrelic/commit/d3117fcdbdb8e4b9603f9a3593b3cb7d142a8da6))
- update environment variable name for feedback recaptcha token ([53f5695](https://github.com/newrelic/gatsby-theme-newrelic/commit/53f569553243cdbfd20a4907bea19e23998c4f77))
- update github project API ([3148db5](https://github.com/newrelic/gatsby-theme-newrelic/commit/3148db5b3b8e5fe66fa5cb939e7623c33981e344))
- upgrade to most recent v5 release ([e6a626a](https://github.com/newrelic/gatsby-theme-newrelic/commit/e6a626ae939056852d91477d56563c116682d855))

## [6.13.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.2...v6.13.3) (2022-10-26)

**Note:** Version bump only for package gatsby-theme-newrelic

## [6.13.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.1...v6.13.2) (2022-10-24)

### Bug Fixes

- add test pages for theme 404 ([eb70d95](https://github.com/newrelic/gatsby-theme-newrelic/commit/eb70d95528daaffb72c9030a14ca3d8736e36a0f))
- create more robust conditionals to render 404 pages with basic layout ([e4c1d3f](https://github.com/newrelic/gatsby-theme-newrelic/commit/e4c1d3f1b8f10e2c1a5deb34ad9f14e4ef478f14))
- make user comments optional and update copy ([fee3ecb](https://github.com/newrelic/gatsby-theme-newrelic/commit/fee3ecbf62e96cb4663cdf775f9b0d33b526c82c))
- Pass locale dependent default sources ([fa2ddb5](https://github.com/newrelic/gatsby-theme-newrelic/commit/fa2ddb5fe769bed02548d19a249e46fc84dc5a76))
- update edit copy ([4102087](https://github.com/newrelic/gatsby-theme-newrelic/commit/41020870af49337f7ae1d4558aa44f22a19d41f6))
- update some styles to the edit page button ([df6f3b8](https://github.com/newrelic/gatsby-theme-newrelic/commit/df6f3b8afd7da342ffa0327b88504db1f8b5915e))

## [6.13.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.13.0...v6.13.1) (2022-10-10)

### Bug Fixes

- Pass all props to navlink ([b5b78f4](https://github.com/newrelic/gatsby-theme-newrelic/commit/b5b78f459052bbc39983d14d0e89c7e055cc561a))

# [6.13.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.12.0...v6.13.0) (2022-10-06)

### Bug Fixes

- Fix validation styling ([fb5ec84](https://github.com/newrelic/gatsby-theme-newrelic/commit/fb5ec84ee5f3e290dd2dc00026a09f1ea787fa4c))
- Move isValidEmail into helper and validate feedback ([a0a899c](https://github.com/newrelic/gatsby-theme-newrelic/commit/a0a899c9335911d86f5ae31d9f82ad0135da550c))
- Update nav colors ([250986c](https://github.com/newrelic/gatsby-theme-newrelic/commit/250986ca161faf64b69f94f3ac10d3022d353a7e))

### Features

- Add recaptcha to feedback component ([81b086a](https://github.com/newrelic/gatsby-theme-newrelic/commit/81b086a4edd1dfa42577ee532fe438c342ef369f))
- Post feedback to jira ([23d694e](https://github.com/newrelic/gatsby-theme-newrelic/commit/23d694ef2259c36e056029608fc72edefa9d2265))

# [6.12.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.9...v6.12.0) (2022-09-29)

### Features

- Update layout and header for new LHN styles ([fcbe159](https://github.com/newrelic/gatsby-theme-newrelic/commit/fcbe159d500ea8e09a9e419d5753c69a6e12f5d1))

## [6.11.9](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.8...v6.11.9) (2022-09-20)

### Bug Fixes

- use default value for interactive output ([9ddaccd](https://github.com/newrelic/gatsby-theme-newrelic/commit/9ddaccdf524c193e1d09c12a7242d762d7c40315))

## [6.11.8](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.7...v6.11.8) (2022-09-19)

### Bug Fixes

- give codeblock for interactive form a different configurable id ([8e6a0f1](https://github.com/newrelic/gatsby-theme-newrelic/commit/8e6a0f13766381b0718942dcef8d6f897345b984))
- update type defs for incoming theme options to use shouldUpdateScroll ([ff03d79](https://github.com/newrelic/gatsby-theme-newrelic/commit/ff03d793335c7b919de3d7040e4193cd832e69ee))

## [6.11.7](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.6...v6.11.7) (2022-09-09)

### Bug Fixes

- add option to theme to allow listing certain routes that can allow scrolling via the gatsby api ([9aafba3](https://github.com/newrelic/gatsby-theme-newrelic/commit/9aafba3040a4c86370e0372ddda2445d40408948))
- update shouldUpdateScroll theme option to account specifically for site search and changing pages ([3ef10fa](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ef10fa06a554dd74e67d4a48fa167381ea61b24))
- update the order of conditionals for better performance ([1045fcb](https://github.com/newrelic/gatsby-theme-newrelic/commit/1045fcbae798f4a19b6c3307a9a788d534212e37))

## [6.11.6](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.5...v6.11.6) (2022-09-07)

### Bug Fixes

- update jest snapshot ([e4006b3](https://github.com/newrelic/gatsby-theme-newrelic/commit/e4006b3d16eba6a285df0e0a4a319b4cd55d8cc5))
- update NR logo to new branding ([6b5d937](https://github.com/newrelic/gatsby-theme-newrelic/commit/6b5d9378e7f22733c050a83b2849f7df50f2dd51))

## [6.11.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.4...v6.11.5) (2022-09-02)

### Bug Fixes

- add all terminals to tabs in demo ([5d18020](https://github.com/newrelic/gatsby-theme-newrelic/commit/5d18020d64bfa9258e8a3a7e37a9ad1f9732087b))
- reinstate the Code Block examples ([4a73c5d](https://github.com/newrelic/gatsby-theme-newrelic/commit/4a73c5db1753793a608c187bd00c9a3e653d43f2))
- update styles to hide pages that aren't selected vs removing from DOM ([0e49cff](https://github.com/newrelic/gatsby-theme-newrelic/commit/0e49cff3129e94a4d82e674531f74981ea81fcb3))

## [6.11.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.3...v6.11.4) (2022-08-30)

### Bug Fixes

- move tooltip further left on small screens ([cc7c306](https://github.com/newrelic/gatsby-theme-newrelic/commit/cc7c306de2c7d52339e869fc74ed5c478e08fd83))

## [6.11.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.2...v6.11.3) (2022-08-30)

### Bug Fixes

- remove arbitrary 100px minimum on grid ([bdc1a8c](https://github.com/newrelic/gatsby-theme-newrelic/commit/bdc1a8cfd3e8d3e63d06da36505aed5220be95b7))
- update grid to not allow children to extend parent width ([12c284b](https://github.com/newrelic/gatsby-theme-newrelic/commit/12c284b2a5b23a31b904522cbf2fb40b41914d3e))

## [6.11.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.1...v6.11.2) (2022-08-30)

**Note:** Version bump only for package gatsby-theme-newrelic

## [6.11.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.11.0...v6.11.1) (2022-08-29)

### Bug Fixes

- temporarily remove the complex feedback form ([7509977](https://github.com/newrelic/gatsby-theme-newrelic/commit/75099772b15334757a2af00ce1ea6760a8f82345))

# [6.11.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.10.0...v6.11.0) (2022-08-26)

### Features

- **signup:** swap out link to signup page for signup modal ([54eac44](https://github.com/newrelic/gatsby-theme-newrelic/commit/54eac44c9fca467f7492de595851143c63be183f))

# [6.10.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.9.3...v6.10.0) (2022-08-23)

### Bug Fixes

- Adjust for darkmode ([39a757d](https://github.com/newrelic/gatsby-theme-newrelic/commit/39a757d2152ef97cf87083f4cf859b9d9fc1b0a5))

### Features

- Create complex feedback component and use in demo ([1596e89](https://github.com/newrelic/gatsby-theme-newrelic/commit/1596e89459b7e66e889a162c52add10b3921ecdb))

## [6.9.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.9.2...v6.9.3) (2022-08-01)

### Bug Fixes

- update gatsby version to 4.8.2 ([7589090](https://github.com/newrelic/gatsby-theme-newrelic/commit/7589090cac0e4f75319c5cd86eb8c98383a88d88))

## [6.9.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.9.1...v6.9.2) (2022-07-27)

### Bug Fixes

- update logo viewBox ([757e717](https://github.com/newrelic/gatsby-theme-newrelic/commit/757e7177c8c23d8203496c9f6ef2052190474aa6))

## [6.9.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.9.0...v6.9.1) (2022-07-27)

### Bug Fixes

- Export component and change var name ([3a28389](https://github.com/newrelic/gatsby-theme-newrelic/commit/3a28389d5098358c3abd223ed79cc241bd54e3c2))

# [6.9.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.8.0...v6.9.0) (2022-07-27)

### Bug Fixes

- Add code scrolling ability to custom input ([69eb5dd](https://github.com/newrelic/gatsby-theme-newrelic/commit/69eb5ddb5214678ae93125f8e9a3d661e087d17c))
- resolve linting errors ([d2ed47e](https://github.com/newrelic/gatsby-theme-newrelic/commit/d2ed47e6504ec2450810a287cdd9aed83fb76932))

### Features

- Add walkthrough component ([d1872d8](https://github.com/newrelic/gatsby-theme-newrelic/commit/d1872d8f37efd25ac8c3a4cc76aa751af48323aa))
- **Select:** New Select component added ([078fb72](https://github.com/newrelic/gatsby-theme-newrelic/commit/078fb723525df4c15bf7ee1de3e9ecad5e6383a1))
- **Select:** New Select component added ([f93fd0a](https://github.com/newrelic/gatsby-theme-newrelic/commit/f93fd0a77556ba2da2b64ba5a7138cf579dd2f64))
- **Select:** New Select component added ([fcf9b02](https://github.com/newrelic/gatsby-theme-newrelic/commit/fcf9b028c4cfb7c8f6a39fdc0b1925c4251222b7))
- **Select:** New Select component added ([a40e7dd](https://github.com/newrelic/gatsby-theme-newrelic/commit/a40e7dddd599410729e67c25a3e63377e738561b))
- Add flipcard component ([65b48dd](https://github.com/newrelic/gatsby-theme-newrelic/commit/65b48ddb566f35520cdc92e68766071c8f7e35d3))
- **Select:** New Select component added ([288bc51](https://github.com/newrelic/gatsby-theme-newrelic/commit/288bc519264cfc1d8e7e8712726f59bc4905d170))
- Create interactive form and demo ([c628181](https://github.com/newrelic/gatsby-theme-newrelic/commit/c628181bb9f3c8d0ec3884ed9be18916a14892d5))

# [6.8.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.7.0...v6.8.0) (2022-07-20)

### Features

- Add tab component ([8fcbe25](https://github.com/newrelic/gatsby-theme-newrelic/commit/8fcbe259706b2455820ad303bccd731184c10e7c))
- **SideBySide:** added Side comp & docs ([9a7aa5d](https://github.com/newrelic/gatsby-theme-newrelic/commit/9a7aa5d33f47be6e87760e62db69fba31e1e1329))
- **SideBySide:** new component ([e02743c](https://github.com/newrelic/gatsby-theme-newrelic/commit/e02743c8e1998fa8b433cefe7a5632fa34c5e832))
- **SideBySide:** removed div and fixed component ([09423ab](https://github.com/newrelic/gatsby-theme-newrelic/commit/09423ab0c45b40883b6f5d65864cd17495efa019))

# [6.7.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.6.0...v6.7.0) (2022-07-19)

### Bug Fixes

- add error and url props to CustomInputComponent, update global ::placeholder styles ([cf02285](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf022857ee929b7ecc1b92b4793331392b9f15f4))
- finish touches on animations and transition styling ([ae4dfcd](https://github.com/newrelic/gatsby-theme-newrelic/commit/ae4dfcd4fc95db0663abb2ac17050677482f62a2))
- increase size of icon, add pop up animation on icon ([c9c005c](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9c005c46f6b8a1b7c37910fce899ed1e29e66e5))
- linting error ([4f338e4](https://github.com/newrelic/gatsby-theme-newrelic/commit/4f338e48d7e6bd9352f137554c19faed6be21b79))
- make svg tags self closing, syntax update ([fc3f44b](https://github.com/newrelic/gatsby-theme-newrelic/commit/fc3f44b86735d2407f22ce064f38fc0eff7e72e5))
- remove background change on error state ([6bd326a](https://github.com/newrelic/gatsby-theme-newrelic/commit/6bd326a0c25456b2da0d72f0a2969eef9b5eed80))
- update some styles, add ability to display error message ([8ddfc54](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ddfc54fc647eb744b04b43d157fb8efc2c27492))

### Features

- add docs on layout functionality ([3d0f6d6](https://github.com/newrelic/gatsby-theme-newrelic/commit/3d0f6d6cd3af085fb10981c4c39a6904dee62eec))

# [6.6.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.5.5...v6.6.0) (2022-07-12)

### Bug Fixes

- **Linting:** resolving lint errors ([#715](https://github.com/newrelic/gatsby-theme-newrelic/issues/715)) ([0dc8ec6](https://github.com/newrelic/gatsby-theme-newrelic/commit/0dc8ec693d4232e98bad60c5f6227277ada07df0))

### Features

- Add 200-300 weighted fonts ([addf07d](https://github.com/newrelic/gatsby-theme-newrelic/commit/addf07deff4acd6c1f8bab457458512f2ddcfcb2))

## [6.5.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.5.4...v6.5.5) (2022-07-12)

### Bug Fixes

- **Linting:** resolving lint errors ([#715](https://github.com/newrelic/gatsby-theme-newrelic/issues/715)) ([#722](https://github.com/newrelic/gatsby-theme-newrelic/issues/722)) ([47da07c](https://github.com/newrelic/gatsby-theme-newrelic/commit/47da07cc3c97785742b222d5db0a6eb449b1fec7))

## [6.5.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.5.3...v6.5.4) (2022-07-12)

### Bug Fixes

- Explicitly define the signup schema ([f1a01c1](https://github.com/newrelic/gatsby-theme-newrelic/commit/f1a01c160fa36ce7a78f9ee931c63c0aa359621b))

## [6.5.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.5.2...v6.5.3) (2022-07-12)

### Bug Fixes

- **Dependencies:** Security resolutions ([#713](https://github.com/newrelic/gatsby-theme-newrelic/issues/713)) ([ae7090f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ae7090f3c992c8a55e7d8010391589e8c403d40c))

## [6.5.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.5.1...v6.5.2) (2022-07-08)

**Note:** Version bump only for package gatsby-theme-newrelic

## [6.5.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.5.0...v6.5.1) (2022-07-06)

**Note:** Version bump only for package gatsby-theme-newrelic

# [6.5.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.4.2...v6.5.0) (2022-07-01)

### Features

- **components:** skeleton ([ae0cc89](https://github.com/newrelic/gatsby-theme-newrelic/commit/ae0cc8933b790a2994adb0fba8bec6a1b5347e35))
- **skeleton:** added dark mode ([c34747a](https://github.com/newrelic/gatsby-theme-newrelic/commit/c34747ad6e439cee967435a4e3229eb58400a7de))
- **skeleton:** added docs and export ([db854c5](https://github.com/newrelic/gatsby-theme-newrelic/commit/db854c50b3935955c98e2d6481e2772e98992d3d))

## [6.4.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.4.1...v6.4.2) (2022-06-29)

### Bug Fixes

- add email validation to email input ([7c9278e](https://github.com/newrelic/gatsby-theme-newrelic/commit/7c9278e38e61bc1940048d771917ba034b303721))
- disable linting on regex code ([68ff9fa](https://github.com/newrelic/gatsby-theme-newrelic/commit/68ff9fabcd4e9358f7059590b479a2e00df0a456))
- remove unneeded css ([00b7344](https://github.com/newrelic/gatsby-theme-newrelic/commit/00b7344d9a9d5147d310c7949c49a8b22a05d3d9))
- update eslint rules to allow regex escape characters ([4555bdb](https://github.com/newrelic/gatsby-theme-newrelic/commit/4555bdbc1ecaa3000ac5f6f93734be7f89eea465))
- use storefront recaptcha site key to test that out ([d615279](https://github.com/newrelic/gatsby-theme-newrelic/commit/d615279373c7366b3f989434a040c2a7c0a12407))

## [6.4.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.4.0...v6.4.1) (2022-06-22)

### Bug Fixes

- actually use the modal on the sign up button ([82406e3](https://github.com/newrelic/gatsby-theme-newrelic/commit/82406e31d881b4b2c399988c8086643ed63ff468))
- make sign up button not an External Link ([08cd316](https://github.com/newrelic/gatsby-theme-newrelic/commit/08cd316fff703c4d76562182554c87ee866c62e9))

# [6.4.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.3.1...v6.4.0) (2022-06-22)

### Bug Fixes

- design tweaks ([fba3e63](https://github.com/newrelic/gatsby-theme-newrelic/commit/fba3e636681f59c82bccd58bb4e7c007383a4e7c))

### Features

- migrate functionality for signup over to theme ([5df8a5e](https://github.com/newrelic/gatsby-theme-newrelic/commit/5df8a5e0a3521ad0c9c9238bac7117e102ae3f47))

## [6.3.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.3.0...v6.3.1) (2022-06-22)

### Bug Fixes

- Add to prism default languages ([2f634da](https://github.com/newrelic/gatsby-theme-newrelic/commit/2f634da817ccceccc99203a0ed10c273da39b573))

# [6.3.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.2.0...v6.3.0) (2022-06-17)

### Bug Fixes

- add line lengthening to the transition ([5bf403d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5bf403d6e79e0f07c1d5e1b0cb4569aecc0d77d0))
- move opacity to correct selector ([0f4e241](https://github.com/newrelic/gatsby-theme-newrelic/commit/0f4e241873e3b2e320499a2869930e12a6fc8c0e))
- remove console log ([96a40e1](https://github.com/newrelic/gatsby-theme-newrelic/commit/96a40e12e112535ce671f675248d85f45379eb47))
- remove console.log ([31b79bf](https://github.com/newrelic/gatsby-theme-newrelic/commit/31b79bf30759f03e0603df5958caa5a9591f0c1c))
- remove unneeded curly braces ([cef0345](https://github.com/newrelic/gatsby-theme-newrelic/commit/cef03459f67820b4c22d182b89be180dc8d9a4b3))
- update easeing ([ff8bb4f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ff8bb4ff4eebf0f46c470e4f86033b76e1c3a3cf))
- update icon name, remove console.log ([9cc5e27](https://github.com/newrelic/gatsby-theme-newrelic/commit/9cc5e27ed0ade453ddfe3334d91007633d3523d7))
- update jest snapshot ([270abb3](https://github.com/newrelic/gatsby-theme-newrelic/commit/270abb3eb7660beeb4bafde4e18a6df9a8a5628f))
- Updates to lightbox ([2c363d2](https://github.com/newrelic/gatsby-theme-newrelic/commit/2c363d28fd056b6065f875d8fcfa0c5fe5113584))
- use classname vs darkMode.value for darkMode css ([906bae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/906bae57c769bc787f682d67022509750843184f))
- use localStorage to try and get icon oriented properly on pageload ([a127a38](https://github.com/newrelic/gatsby-theme-newrelic/commit/a127a38261dd14437e648a1940459065431d0fcc))

### Features

- add transition to light/dark mode icon ([40fa84d](https://github.com/newrelic/gatsby-theme-newrelic/commit/40fa84d2bd22a05a7fdf3f5cf369372c74588dfd))

# [6.2.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.1.0...v6.2.0) (2022-06-14)

### Bug Fixes

- remove split test text 'Free Account' ([7e08eac](https://github.com/newrelic/gatsby-theme-newrelic/commit/7e08eacdedcc9d6fc3fd0627a165a6a6abcc4877))
- remove SplitTextButton component and tests ([b808fa1](https://github.com/newrelic/gatsby-theme-newrelic/commit/b808fa107f9ffdd7969f8296a83572806d8912bf))

### Features

- Add lightbox component ([750b3e2](https://github.com/newrelic/gatsby-theme-newrelic/commit/750b3e2883ab6aee09fd348d542272de3fdcd98d))
- Add orientation prop for videos ([ea7ee30](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea7ee307bc2154a0adaa951a0b6a2c2ad8c89b31))

# [6.1.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.0.3...v6.1.0) (2022-05-24)

### Bug Fixes

- optionally align icon left or right via prop ([d415da2](https://github.com/newrelic/gatsby-theme-newrelic/commit/d415da21f3703313bdc66f72c68dec87148ac620))
- removed build steps from workflows, add clean command, please release ([270343f](https://github.com/newrelic/gatsby-theme-newrelic/commit/270343fea1f4fc41a3c8167eba53cf02b44f7ba1))
- trivial change as fix to trigger release ([24d4f99](https://github.com/newrelic/gatsby-theme-newrelic/commit/24d4f9907ff9e9ddbbc1e6ca56410a30cd140c18))

### Features

- **SearchInput:** make search icon optionally clickable to perform search ([ad38d18](https://github.com/newrelic/gatsby-theme-newrelic/commit/ad38d18c3007243de57e6ef356cc5b99f4531870))

## [6.0.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.0.2...v6.0.3) (2022-05-19)

### Bug Fixes

- bump patch version ([c0c39a4](https://github.com/newrelic/gatsby-theme-newrelic/commit/c0c39a4475659d9316c9b1d1045e0f852fdac051))

## [6.0.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.0.1...v6.0.2) (2022-05-19)

### Bug Fixes

- Hide logo text at larger screen width ([8b0b34d](https://github.com/newrelic/gatsby-theme-newrelic/commit/8b0b34d369171765829fedf1337ea52962349108))
- send filter information to tessen for search events ([72f9479](https://github.com/newrelic/gatsby-theme-newrelic/commit/72f9479e930a0e0044d741fb28ea4a1a33d66736))

## [6.0.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v6.0.0...v6.0.1) (2022-05-17)

### Bug Fixes

- update logo width on mobile ([95a1cf3](https://github.com/newrelic/gatsby-theme-newrelic/commit/95a1cf39522bb30429d45d5b54d0d791e8faf3c7))

# [6.0.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.8...v6.0.0) (2022-05-16)

### Features

- Update typography and colors ([5d517a7](https://github.com/newrelic/gatsby-theme-newrelic/commit/5d517a7d986e93ad49d59eef49feeda57e7dfb1d))
- **GlobalHeader:** changed copy ([8108cc6](https://github.com/newrelic/gatsby-theme-newrelic/commit/8108cc615e368d8a88800536500e7b9d55a5d496))
- **GlobalHeader:** window not available at server ([e63dcbf](https://github.com/newrelic/gatsby-theme-newrelic/commit/e63dcbf62ed3fd7e3b6077d2b1b92b77f6bcc0f6))
- **GlobalHeader:** window undefined ([a9adb2a](https://github.com/newrelic/gatsby-theme-newrelic/commit/a9adb2a4cca3e0b14ef9d59ad0d7a361cb8d764c))
- **search:** conditional placeholder ([ce2a315](https://github.com/newrelic/gatsby-theme-newrelic/commit/ce2a31504fd650de8d05c5fa0f6137dcb23a55d0))

### BREAKING CHANGES

- New color theme, requires color var updates

## [5.0.8](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.7...v5.0.8) (2022-05-05)

### Bug Fixes

- downgrade gatsby plugins due to docs site deployment issues ([8b4c411](https://github.com/newrelic/gatsby-theme-newrelic/commit/8b4c411a58a155d7fb34f94a2072e251858f538b))

## [5.0.7](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.6...v5.0.7) (2022-04-29)

### Bug Fixes

- Update sharp plugins ([69c8164](https://github.com/newrelic/gatsby-theme-newrelic/commit/69c816437ec41639de9ddb98dfe09e4f1f7f9ae6))

## [5.0.6](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.5...v5.0.6) (2022-04-27)

### Bug Fixes

- Pass all props to table component ([4b4bd97](https://github.com/newrelic/gatsby-theme-newrelic/commit/4b4bd976fa2b2f9a3680627ab879344e8e3e71be))

## [5.0.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.4...v5.0.5) (2022-04-26)

### Bug Fixes

- when search term is not defined do not error ([7148914](https://github.com/newrelic/gatsby-theme-newrelic/commit/714891435eb86ad48f356bb8742a848110283605))

## [5.0.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.3...v5.0.4) (2022-04-05)

### Bug Fixes

- prevent tessen calls when window.Tessen does not exist ([938d6b7](https://github.com/newrelic/gatsby-theme-newrelic/commit/938d6b70c878d0ebb2cee5393d710e02610a0e5f))
- update demo to report to DocsEng ([f382b61](https://github.com/newrelic/gatsby-theme-newrelic/commit/f382b614c286a40d60c944272536c75dd73f73c9))
- update tessen path to incorporate gatsby withPrefix ([ac08410](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac08410bbdd77f4f0b9365fd6c3e625086c7c136))

## [5.0.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.2...v5.0.3) (2022-03-09)

### Bug Fixes

- Check if an existing page has a locale other than en ([c256342](https://github.com/newrelic/gatsby-theme-newrelic/commit/c2563428995d1ba6ae5ec4691f2133cecf18740b))

## [5.0.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.1...v5.0.2) (2022-02-24)

### Bug Fixes

- **i18n:** add kr to supported locales to fully turn it on ([16da9e4](https://github.com/newrelic/gatsby-theme-newrelic/commit/16da9e48c2bdb8ed3807f8ea07040fbc8a3843ba))

## [5.0.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v5.0.0...v5.0.1) (2022-02-11)

### Bug Fixes

- branch from develop instead of main ([b94d47d](https://github.com/newrelic/gatsby-theme-newrelic/commit/b94d47de04944b1eb9ccb4acdd7333470d3a4b7c))

# [5.0.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.8...v5.0.0) (2022-01-26)

- feat!: Gatsby version 4 upgrade ([0e96867](https://github.com/newrelic/gatsby-theme-newrelic/commit/0e96867bebdfa0f90c80b6960d00eb2c982e07d6))

### Bug Fixes

- linting error from default import for react-helmet ([4b41b53](https://github.com/newrelic/gatsby-theme-newrelic/commit/4b41b534e7858a125d54f5b54f31865c2c9e3617))
- Refactored createSchemaCustomization to require type-defs on load ([f4ebc6d](https://github.com/newrelic/gatsby-theme-newrelic/commit/f4ebc6d729097ea35831371b9bd98c0d70d773e6))

### BREAKING CHANGES

- Removal of `fs` inside lifecycle APIs
  and bumping gatsby version 3.x -> 4.5.x

## [4.1.8](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.7...v4.1.8) (2022-01-19)

### Bug Fixes

- Make year dynamic in global footer ([0f5fe44](https://github.com/newrelic/gatsby-theme-newrelic/commit/0f5fe44068df233fc23a1d82c5f2e65d112a9dd6))

## [4.1.7](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.6...v4.1.7) (2022-01-13)

**Note:** Version bump only for package gatsby-theme-newrelic

## [4.1.6](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.5...v4.1.6) (2021-12-09)

### Bug Fixes

- reorder import to trigger release ([a189fbf](https://github.com/newrelic/gatsby-theme-newrelic/commit/a189fbff76c935148ab37c5d8e6cc08147785d44))
- **lerna:** add flag to bypass unnecessary permissions check lerna does ([c280e18](https://github.com/newrelic/gatsby-theme-newrelic/commit/c280e18b3f1b88274af95677d2bf2ff26a0ded36))

## [4.1.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.4...v4.1.5) (2021-12-08)

### Bug Fixes

- trivial change to trigger patch version when re-releasing ([3fa5e94](https://github.com/newrelic/gatsby-theme-newrelic/commit/3fa5e940dd7e15c9365e35551a9df6961cc6ef31))

## [4.1.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.3...v4.1.4) (2021-12-08)

**Note:** Version bump only for package gatsby-theme-newrelic

## [4.1.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.2...v4.1.3) (2021-12-08)

**Note:** Version bump only for package gatsby-theme-newrelic

## [4.1.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.1...v4.1.2) (2021-12-08)

**Note:** Version bump only for package gatsby-theme-newrelic

## [4.1.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.1.0...v4.1.1) (2021-12-08)

### Bug Fixes

- can't exit search modal on mobile ([1d9c23c](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d9c23c4b3cb036a92f3e23dc628cf5db410d6df))

# [4.1.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.0.5...v4.1.0) (2021-12-08)

### Features

- **link:** add option to disable auto localization of internal links ([faa15be](https://github.com/newrelic/gatsby-theme-newrelic/commit/faa15be5010ab7dbf4341ec9de86435d42c67034))

## [4.0.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.0.4...v4.0.5) (2021-12-01)

**Note:** Version bump only for package gatsby-theme-newrelic

## [4.0.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.0.3...v4.0.4) (2021-11-29)

### Bug Fixes

- adjust header buttons in mobile ([592b326](https://github.com/newrelic/gatsby-theme-newrelic/commit/592b3265a1b9a68f861f8549df237b2233e1f407))

## [4.0.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.0.2...v4.0.3) (2021-11-23)

### Bug Fixes

- add split event for default state ([9ec0cdd](https://github.com/newrelic/gatsby-theme-newrelic/commit/9ec0cdd4cf19c4b967f257cffbd14ae3d92b1e50))
- lint errors ([95aec5b](https://github.com/newrelic/gatsby-theme-newrelic/commit/95aec5b71ef6effe0f398c478785f6cdfe87b78c))
- update some of the documentation to better reflect how to use specific components ([2ed1800](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ed1800813482a4f35097a73e3bcbb321cd7de46))

## [4.0.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.0.1...v4.0.2) (2021-11-22)

### Bug Fixes

- swap eventName & category arguments in link ([0318c34](https://github.com/newrelic/gatsby-theme-newrelic/commit/0318c3497aa679310bc01c0eb3264c6729d3db06))

## [4.0.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v4.0.0...v4.0.1) (2021-11-18)

### Bug Fixes

- fixup warning ([8eff702](https://github.com/newrelic/gatsby-theme-newrelic/commit/8eff702b2c6cc094112fcd90e478873455bc32a3))

# [4.0.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.5.0...v4.0.0) (2021-11-18)

- fix!: issues with Tessen page ([81cce11](https://github.com/newrelic/gatsby-theme-newrelic/commit/81cce11730469fa4dc0be578300af4910672767e))

### Reverts

- Revert "feat!: test" ([710b741](https://github.com/newrelic/gatsby-theme-newrelic/commit/710b741cd2e8257639abf2ada7f85665411387a1))
- Revert "chore(release): publish v3.5.1" ([d7102c6](https://github.com/newrelic/gatsby-theme-newrelic/commit/d7102c655650c04535db29efc870602fde323150))

### BREAKING CHANGES

- with the function signature changes we made to tessen, code changes will be required in order to use (tessen in) subsequent versions of the theme.

# [3.5.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.4.2...v3.5.0) (2021-11-17)

- feat!: tessen updates, breaking changes ([0083118](https://github.com/newrelic/gatsby-theme-newrelic/commit/00831186ada3725acdb92ee3889049b2891a7173))

### Bug Fixes

- get mocks working for unit tests ([b06b51a](https://github.com/newrelic/gatsby-theme-newrelic/commit/b06b51a7aae8652721d981370ac930f37c284da8))
- missed closing quote ([a875031](https://github.com/newrelic/gatsby-theme-newrelic/commit/a875031fc2a4c9d1d5259887f58d93196fd268ec))
- tests require anonymousId and customer_user_id ([8da7e85](https://github.com/newrelic/gatsby-theme-newrelic/commit/8da7e853700007c79375bb6b7ec37a757fcc39cd))
- typo ([e7bc050](https://github.com/newrelic/gatsby-theme-newrelic/commit/e7bc0500bd85973352e6ee4761b9900e21f7976d))
- update all "n/a" to "none" for consistency ([b1a0406](https://github.com/newrelic/gatsby-theme-newrelic/commit/b1a040627b16307df759175fec007354659c007a))
- update verbiage of documentation ([4f7dc5b](https://github.com/newrelic/gatsby-theme-newrelic/commit/4f7dc5bdb810d84b6c5ef26f8a480d9645983b80))
- update verbiage on useScrollFreeze hook ([90954fb](https://github.com/newrelic/gatsby-theme-newrelic/commit/90954fbba18b52b6269a7ba030fe7b24dbeb837c))
- update verbiage on useSyncedRef docs ([04d5a8c](https://github.com/newrelic/gatsby-theme-newrelic/commit/04d5a8ce1983c8e25c9c8da797d0ede926d7a6a5))

### Features

- **tessen:** add segment anonymous id to tessen calls ([11cdeb4](https://github.com/newrelic/gatsby-theme-newrelic/commit/11cdeb48c0ece1a13b332fb336dbdd45fb71a591))
- replacing pageAction with Tessen ([beef149](https://github.com/newrelic/gatsby-theme-newrelic/commit/beef149004fe636e06fb68d590607d1603f98232))

### BREAKING CHANGES

- with the function signature changes we made to tessen, code changes will be required in order to use (tessen in) subsequent versions of the theme.

## [3.4.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.4.1...v3.4.2) (2021-11-11)

### Bug Fixes

- **tessen:** add property to page call for google analytics bounce rate ([282e5e0](https://github.com/newrelic/gatsby-theme-newrelic/commit/282e5e0217eaf061934a6382851b20eca265784c))

## [3.4.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.4.0...v3.4.1) (2021-11-10)

### Bug Fixes

- update the syntax of the sitelink script ([3cb8c1b](https://github.com/newrelic/gatsby-theme-newrelic/commit/3cb8c1b7a9cd234781a5f3d8317eb43d02dec6ea))

# [3.4.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.3.6...v3.4.0) (2021-11-10)

### Bug Fixes

- Make structured data dynamic ([33b76d0](https://github.com/newrelic/gatsby-theme-newrelic/commit/33b76d0f534484214927f0a907102122a1f0871b))
- use site subdomain as dynamic value in copy ([de1439b](https://github.com/newrelic/gatsby-theme-newrelic/commit/de1439beaacbd3bd0e0601490509193d8d2d401e))

### Features

- add sitelink script for docs home page ([b32fb7d](https://github.com/newrelic/gatsby-theme-newrelic/commit/b32fb7da38897ddc5b8ef15b688ef8ca26c7d466))

## [3.3.6](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.3.5...v3.3.6) (2021-11-04)

### Bug Fixes

- update handleExternalLinkClick to pass onClick parameter ([#544](https://github.com/newrelic/gatsby-theme-newrelic/issues/544)) ([46e1211](https://github.com/newrelic/gatsby-theme-newrelic/commit/46e121116da79e26bcca5a2a6100a2353028acdd))

## [3.3.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.3.4...v3.3.5) (2021-11-03)

### Bug Fixes

- Add quickstart label ([628e7ae](https://github.com/newrelic/gatsby-theme-newrelic/commit/628e7aeaf35f9d58c1dc066661fef6fe7e6fedc1))

## [3.3.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.3.3...v3.3.4) (2021-11-01)

### Bug Fixes

- Remove external link localization ([#535](https://github.com/newrelic/gatsby-theme-newrelic/issues/535)) ([0b6817d](https://github.com/newrelic/gatsby-theme-newrelic/commit/0b6817d3bcb30a17ffce440b4782aa02569cd586))

## [3.3.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.3.2...v3.3.3) (2021-10-28)

### Bug Fixes

- add onClick back and update hook to also sent tessen events ([f296cee](https://github.com/newrelic/gatsby-theme-newrelic/commit/f296ceecc288e23a480c954ef3f0db552458bcb4))
- move agent arg to last ([33c5ba8](https://github.com/newrelic/gatsby-theme-newrelic/commit/33c5ba8d38aa8303f2724ddc3310dff01ccc10be))
- move agent arg to last to preserve backward compatibility, provide mock data for tests ([034d9b2](https://github.com/newrelic/gatsby-theme-newrelic/commit/034d9b2bcde9788b4d6818131d67888ef908a57b))
- set correct sitemap url in robots.txt ([f987ec6](https://github.com/newrelic/gatsby-theme-newrelic/commit/f987ec61a5528ed91e6466137149e182aafb5a51))
- update env production value and pass along to track events as well ([b206187](https://github.com/newrelic/gatsby-theme-newrelic/commit/b206187894ae05bd5dc6242741052fd2fbb5fa12))

## [3.3.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.3.1...v3.3.2) (2021-10-26)

**Note:** Version bump only for package gatsby-theme-newrelic

## [3.3.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.3.0...v3.3.1) (2021-10-26)

### Bug Fixes

- explicitly set url path property for tessen page view event ([4734f02](https://github.com/newrelic/gatsby-theme-newrelic/commit/4734f02b957c4661088d518a52a87976a0c3e8f8))

### Features

- Upgrade to node 16 ([b704c9d](https://github.com/newrelic/gatsby-theme-newrelic/commit/b704c9dd3b134508430f465403df96d19cd37979))

# [3.3.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.2.0...v3.3.0) (2021-10-21)

### Features

- new 404 page with search functionality ([b40706d](https://github.com/newrelic/gatsby-theme-newrelic/commit/b40706dc716586860ce3b718e750691de1f7e554))

# [3.2.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.1.3...v3.2.0) (2021-10-19)

### Bug Fixes

- icon breaking nav padding ([abec3e1](https://github.com/newrelic/gatsby-theme-newrelic/commit/abec3e184e932e707c1667269487b4514803b855))

### Features

- **analytics:** add tracking for nav related interactions ([e3fdffc](https://github.com/newrelic/gatsby-theme-newrelic/commit/e3fdffc6ac1f7a0d78cabc45d344e89db28e3349))
- add externalIcon boolean to add icon to links ([6e37723](https://github.com/newrelic/gatsby-theme-newrelic/commit/6e377234232e77f0cede271287ceb48a58df1452))
- add icon to external links ([15483fb](https://github.com/newrelic/gatsby-theme-newrelic/commit/15483fbb275a7ec78f463de3ee1bb58615478e74))

## [3.1.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.1.2...v3.1.3) (2021-10-11)

### Bug Fixes

- Conditionally use the dev segment key when projects run locally ([0312813](https://github.com/newrelic/gatsby-theme-newrelic/commit/0312813e76bfb169db352d802cc5517509c229cf))

## [3.1.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.1.1...v3.1.2) (2021-10-05)

**Note:** Version bump only for package gatsby-theme-newrelic

## [3.1.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.1.0...v3.1.1) (2021-09-30)

### Bug Fixes

- update swiftype filter for quickstarts ([a4bce91](https://github.com/newrelic/gatsby-theme-newrelic/commit/a4bce91b99d87937faad3665eead75c773c752dc))

# [3.1.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v3.0.0...v3.1.0) (2021-09-28)

### Features

- **header:** add IO to nav menu ([5c770c4](https://github.com/newrelic/gatsby-theme-newrelic/commit/5c770c4946e3459b24991980bca88f493e2f3e0c))

# [3.0.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.10.1...v3.0.0) (2021-09-23)

### Features

- **cookies:** deprecate cookie mgmt tooling ([83327a0](https://github.com/newrelic/gatsby-theme-newrelic/commit/83327a0a96a575cd3b9b639773e55433b514d1b1))

### BREAKING CHANGES

- **cookies:** removes `CookieConsentDialog` from exports and requires oneTrustID in site config for new cookie mgmt

## [2.10.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.10.0...v2.10.1) (2021-09-20)

### Bug Fixes

- add amplitude setting when loading tessen ([f55857d](https://github.com/newrelic/gatsby-theme-newrelic/commit/f55857d1f0f462e3c7260e60ada72ce1025d53ee))

# [2.10.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.8.1...v2.10.0) (2021-09-17)

### Bug Fixes

- passing the OneTrust ID in via props ([9cb3462](https://github.com/newrelic/gatsby-theme-newrelic/commit/9cb3462377953ac315e751e4a36146e4072badcc))
- update checks for tessen before trying to get version ([3d616ce](https://github.com/newrelic/gatsby-theme-newrelic/commit/3d616ce1859d4e8af7ea632bab787b940f5c9159))

### Features

- add OneTrust snippet only if set ([f5b7a31](https://github.com/newrelic/gatsby-theme-newrelic/commit/f5b7a3127edd4eaa4acdd28e1daf716bff1ccc42))
- added the _One Trust_ cookie consent snippet ([080cdca](https://github.com/newrelic/gatsby-theme-newrelic/commit/080cdcac6586a8056e14092918b2071f9e13bc64))
- **tessen:** enable sites to optionally update to latest tessen ([85f9d2d](https://github.com/newrelic/gatsby-theme-newrelic/commit/85f9d2dcff32be7fd2ac769ea7185ec90bcf984f))

## [2.8.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.8.0...v2.8.1) (2021-09-15)

### Bug Fixes

- Optionally remove noreferrer from links to NR domain ([3461267](https://github.com/newrelic/gatsby-theme-newrelic/commit/3461267ea3cdd67c56cb76b61dd4931c8d19ec9b))

# [2.8.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.7.0...v2.8.0) (2021-09-14)

### Features

- adding the ability to set the currently active site ([c9e80a6](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9e80a638c388a9fdaa5e47a5fb2073648aa28a2))

# [2.7.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.6.0...v2.7.0) (2021-09-07)

### Bug Fixes

- Pass className to Overlay ([264f46d](https://github.com/newrelic/gatsby-theme-newrelic/commit/264f46dafa4aaca8707e34749f3a336fa5090fcf))

### Features

- add quick_starts to SwiftType filtering in SearchModal ([12185b6](https://github.com/newrelic/gatsby-theme-newrelic/commit/12185b6e5f34a479f55242799ac9c791fa406496))

# [2.6.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.5.2...v2.6.0) (2021-09-02)

### Features

- add plus icon for IO ([fd79f03](https://github.com/newrelic/gatsby-theme-newrelic/commit/fd79f039802e6cc2e2000853a18dfadb339411a8))

## [2.5.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.5.1...v2.5.2) (2021-08-27)

**Note:** Version bump only for package gatsby-theme-newrelic

## [2.5.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.5.0...v2.5.1) (2021-07-28)

**Note:** Version bump only for package gatsby-theme-newrelic

# [2.5.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.4.5...v2.5.0) (2021-07-15)

### Features

- explicitly track previous route as referrer in tessen ([1423aeb](https://github.com/newrelic/gatsby-theme-newrelic/commit/1423aebe7e880e92d89a25a6034f65ca8a321cbc))

## [2.4.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.4.4...v2.4.5) (2021-06-29)

### Bug Fixes

- remove margin pushing caret to the right ([cb22d99](https://github.com/newrelic/gatsby-theme-newrelic/commit/cb22d99cbbbe929c64acf8db441e0472edc68567))

## [2.4.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.4.3...v2.4.4) (2021-06-11)

### Bug Fixes

- add pageaction to track user search terms ([5ea71e9](https://github.com/newrelic/gatsby-theme-newrelic/commit/5ea71e906b75f6c53a5ed35dfd7fe265fc5e9c09))
- empty commit to trigger version bump ([338fe8c](https://github.com/newrelic/gatsby-theme-newrelic/commit/338fe8c5de26d809ba83ed0b08c5aa4dbb67cc69))

## [2.4.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.4.2...v2.4.3) (2021-06-03)

**Note:** Version bump only for package gatsby-theme-newrelic

## [2.4.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.4.1...v2.4.2) (2021-06-01)

### Bug Fixes

- remove mocked storage and use built in option ([e45579a](https://github.com/newrelic/gatsby-theme-newrelic/commit/e45579a594c922db89cd15036bfc7af3ae75dc05))
- remove weighting on fields and use defaults set in swiftype UI ([4e9ae7d](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e9ae7da1577d44ec95ab8973b5a180567ae2468))
- removespecific search fields altogether and use defaults ([9c67f8e](https://github.com/newrelic/gatsby-theme-newrelic/commit/9c67f8e0281bddc0957d478fc730acda0f6fcd3f))

## [2.4.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.4.0...v2.4.1) (2021-05-24)

### Bug Fixes

- handle lack of access to local storage ([c1987e8](https://github.com/newrelic/gatsby-theme-newrelic/commit/c1987e8b59140cb3c5a6f00aa08f0a94bcd81b88))

# [2.4.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.3.0...v2.4.0) (2021-05-20)

### Bug Fixes

- crank z-index up higher ([8d3594e](https://github.com/newrelic/gatsby-theme-newrelic/commit/8d3594e46e30881ac7c9ac02b05e66f5562413ed))
- if link to original image, use straight up a tag and not gatsby link ([b212974](https://github.com/newrelic/gatsby-theme-newrelic/commit/b212974cee9830b89d5cfdb17d4eb581678b093e))

### Features

- Update feedback component functionality and tracking ([6f9b862](https://github.com/newrelic/gatsby-theme-newrelic/commit/6f9b8625f84c3558f5154354cea4fb234be11b1e))

# [2.3.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.2.3...v2.3.0) (2021-05-19)

### Bug Fixes

- Only open the search modal if mounted to prevent weird layout issues for SSR rendering ([c59097d](https://github.com/newrelic/gatsby-theme-newrelic/commit/c59097d63a0ee06d8941ccffecf7be8a6d21e8ce))
- **usePrevious:** Add option to initialize with the value ([c45271d](https://github.com/newrelic/gatsby-theme-newrelic/commit/c45271d08fe63e4282819c5a6e5b5f263dd5108f))
- **useQueryParams:** add deleteQueryParam helper ([d1c6b44](https://github.com/newrelic/gatsby-theme-newrelic/commit/d1c6b4448e07f1dd4b020abb8a2a97159c2f3f03))
- accepts a ref that gets forwarded to underlying link component ([9a11d95](https://github.com/newrelic/gatsby-theme-newrelic/commit/9a11d95d86cfd88b3faebe97d28098a1c93d4a67))
- add a uppercase as a prop to style tag ([b908cd3](https://github.com/newrelic/gatsby-theme-newrelic/commit/b908cd3b1476cbf3b034d334ad9c9a028aaf0e32))
- Add arrow-down, arrow-up, and arrow-right icons ([3239b22](https://github.com/newrelic/gatsby-theme-newrelic/commit/3239b2240ded1cf009ac1b2045d6645e7c8a42fb))
- **Link:** Forward ref to the underlying link component ([d28b3de](https://github.com/newrelic/gatsby-theme-newrelic/commit/d28b3dea70fdda0f51191f05c1a3aa7284928eec))
- add fe-corner-down-left icon ([8fc5135](https://github.com/newrelic/gatsby-theme-newrelic/commit/8fc51359a3ff262b20de1a67795bc54d57f4a334))
- global header renders search modal on focus ([2ad63e5](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ad63e552d06c341be56f648cd8597d165984e54))

### Features

- add SearchModal component ([048811d](https://github.com/newrelic/gatsby-theme-newrelic/commit/048811da781d5c9de56b873ae4062fc6b0dfb449))
- added Backdrop component ([9667fc0](https://github.com/newrelic/gatsby-theme-newrelic/commit/9667fc0e13538ef2895a7b532b28832438723cbe))
- calls to swiftype with usequery ([e72867d](https://github.com/newrelic/gatsby-theme-newrelic/commit/e72867db088a8c58a4473dc93ff52c657130604b))
- can navigate between results ([891cc11](https://github.com/newrelic/gatsby-theme-newrelic/commit/891cc111f14b6e9d6af550aea83ac5203e5cfc85))
- filtering available with search and no results message ([81da39a](https://github.com/newrelic/gatsby-theme-newrelic/commit/81da39a8359876717c1bab4e72c160e8e8e3d793))
- renders content from swiftype ([ab042bf](https://github.com/newrelic/gatsby-theme-newrelic/commit/ab042bf3ab05d5f5819629b2b38ec7acbf0b8a14))
- renders content on the right side ([9a539db](https://github.com/newrelic/gatsby-theme-newrelic/commit/9a539db4348f148c3142d0afa6b37e895758042e))
- shows on this page in the result preview ([d478b4a](https://github.com/newrelic/gatsby-theme-newrelic/commit/d478b4a35452e93ae30b2f91b03d3135ae010531))

### Performance Improvements

- extract result list into own component and wrap in memo to help typing performance ([c538a72](https://github.com/newrelic/gatsby-theme-newrelic/commit/c538a72c221935a332a16e6242d4170e6bbb3475))

## [2.2.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.2.2...v2.2.3) (2021-05-12)

### Bug Fixes

- updating links to allow for dangerouslySetInnerHTML ([3e95145](https://github.com/newrelic/gatsby-theme-newrelic/commit/3e95145a72bac9f6770d2cf7d45fda8a8bbdb5da))

## [2.2.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.2.1...v2.2.2) (2021-05-11)

### Bug Fixes

- **Link:** Ensure className gets forwarded to the underlying link components ([fc36339](https://github.com/newrelic/gatsby-theme-newrelic/commit/fc363395e63a6ca8ba396cffab2f639a81528f61))

## [2.2.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.2.0...v2.2.1) (2021-05-07)

### Bug Fixes

- add 'env' to tessen call ([ea338e6](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea338e628917daf6dcf3ad9c2c0963d4dc6fbd62))
- added `role` to the acceptable attributes for a link ([265c718](https://github.com/newrelic/gatsby-theme-newrelic/commit/265c718ba0334d35f1b73f7d670f74bbb8c9ae79))
- ensuring that link text is present ([b80f1a4](https://github.com/newrelic/gatsby-theme-newrelic/commit/b80f1a466482ccc21e21b42879c203fa05b12f5d))
- only adding valid props to anchor tags ([ff0ca14](https://github.com/newrelic/gatsby-theme-newrelic/commit/ff0ca143c49a3a4a4cadcdded2ee4811a4accf06))
- **sitemap:** update sitemap plugin version and explicitly set output path ([5882f6c](https://github.com/newrelic/gatsby-theme-newrelic/commit/5882f6ca3fed8bacf4353c3f8f15b051367f08a4))

### Reverts

- Revert "chore: using `first-of-type` to suppress warnings" ([9b19caa](https://github.com/newrelic/gatsby-theme-newrelic/commit/9b19caa701dbf4e169de5701a77d1d2e3e290d2c))

# [2.2.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.1.0...v2.2.0) (2021-05-06)

### Bug Fixes

- add proper split.io tracking ([ff25f48](https://github.com/newrelic/gatsby-theme-newrelic/commit/ff25f48b53cf98c81425108c4065c378f616c4fe))

### Features

- **analytics:** track when users agree to cookie usage ([ea27927](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea27927d38a6139b1271d249126ff03af7b3e04e))
- **tessen:** add customer id via segment cookie with all tessen calls ([f38cd08](https://github.com/newrelic/gatsby-theme-newrelic/commit/f38cd08b120aae832dbf7f39180ef333fbd5d9de))

# [2.1.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.0.2...v2.1.0) (2021-05-03)

### Features

- **SplitColorButton:** add split button to header ([f8ef271](https://github.com/newrelic/gatsby-theme-newrelic/commit/f8ef271fb69d85a073c46b50d1ab2828d985d565))

## [2.0.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.0.1...v2.0.2) (2021-04-27)

### Bug Fixes

- Bump react-spring version ([193441b](https://github.com/newrelic/gatsby-theme-newrelic/commit/193441b7977b4492576a5e55b715b1f4a0998b9e))

## [2.0.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.0.0...v2.0.1) (2021-04-23)

### Bug Fixes

- referrer field not being sent on sign up ([6c5fca5](https://github.com/newrelic/gatsby-theme-newrelic/commit/6c5fca597507e10c2d8f50a71e3ddc513d069b7a))

# [2.0.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.39.1...v2.0.0) (2021-04-21)

### Features

- cut 2.0 release ([b8dd06f](https://github.com/newrelic/gatsby-theme-newrelic/commit/b8dd06fa230addb6e49449fe89e1a3d84fd12942))

### BREAKING CHANGES

- Update peer dependencies to Gatsby 3

## [1.39.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.39.0...v1.39.1) (2021-04-20)

### Features

- Upgrade to Gatsby 3 ([df4fd2c](https://github.com/newrelic/gatsby-theme-newrelic/commit/df4fd2cffb9f332660caf8e954237d2a4f93c2c6))

### BREAKING CHANGES

- peer dependencies have all been updated to work with
  Gatsby 3.

# [1.39.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.38.1...v1.39.0) (2021-04-19)

### Bug Fixes

- check for gtm config first before preparing scripts ([a8c3736](https://github.com/newrelic/gatsby-theme-newrelic/commit/a8c373695d884e154f397ec1a290c474e0c82ff1))
- fix linting errors ([7008056](https://github.com/newrelic/gatsby-theme-newrelic/commit/7008056376cc3fb99dc04f6e694bfb1969450625))
- move vars outside of if block so its reachable ([5827236](https://github.com/newrelic/gatsby-theme-newrelic/commit/5827236860adf47520316d67af053a4a788eec81))
- update webpack config to include polyfills ([71c7f38](https://github.com/newrelic/gatsby-theme-newrelic/commit/71c7f38e8b0ce343074a7b8a4893d1f34fc5a51d))

### Features

- update gatsby and related deps ([3cb3ef4](https://github.com/newrelic/gatsby-theme-newrelic/commit/3cb3ef45d75760ac2f47f692cf90091444ac6418))
- **analytics:** add google tracking manually if not using tessen ([66a4995](https://github.com/newrelic/gatsby-theme-newrelic/commit/66a49952aba173f8832f9858de4f16fcabfa1ca8))

## [1.38.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.38.0...v1.38.1) (2021-04-15)

**Note:** Version bump only for package gatsby-theme-newrelic

# [1.38.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.37.1...v1.38.0) (2021-04-14)

### Bug Fixes

- removes utm source from theme ([38e661a](https://github.com/newrelic/gatsby-theme-newrelic/commit/38e661a808dda80a311d8febdd0ce01190a541b8))
- upgrade @wry/equality from 0.3.4 to 0.4.0 ([c85809c](https://github.com/newrelic/gatsby-theme-newrelic/commit/c85809c5f0eafedb89d98d72cf1312ae6b0a827b))

### Features

- Add course to callout variants ([116c9ad](https://github.com/newrelic/gatsby-theme-newrelic/commit/116c9adaf6f71c04c53b83c9425c572f77578fa1))

## [1.37.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.37.0...v1.37.1) (2021-04-05)

### Bug Fixes

- **tessen:** enable all segment integrations via tessen ([3130532](https://github.com/newrelic/gatsby-theme-newrelic/commit/31305329175ee01e7021f5c1b6a6b9eca17bc424))

# [1.37.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.36.1...v1.37.0) (2021-03-22)

### Features

- **search:** only search for pages in current locale's language ([824b4ae](https://github.com/newrelic/gatsby-theme-newrelic/commit/824b4ae123f6c0ec1a41b059ddf0ca2ae3438a4d))
- **search:** support searching docs jp content ([d975db6](https://github.com/newrelic/gatsby-theme-newrelic/commit/d975db6638147b9c0769efaf96545f66d7fc0722))

## [1.36.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.36.0...v1.36.1) (2021-03-18)

### Bug Fixes

- **Collapser:** Show a link icon to make it easier to deep link to the collapser ([650fc0e](https://github.com/newrelic/gatsby-theme-newrelic/commit/650fc0e0ac073c9120272ba1c56eef05071c213e))
- Add fe-link-2 icon ([9b0a4a6](https://github.com/newrelic/gatsby-theme-newrelic/commit/9b0a4a62ae8cb253a4e7962cbef529b9d3a2348f))
- Add optional issueLabels prop to global footer ([faaf00d](https://github.com/newrelic/gatsby-theme-newrelic/commit/faaf00dc06f7819fd0aaae226a05fdf7411df2cb))

# [1.36.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.35.2...v1.36.0) (2021-03-11)

### Bug Fixes

- **SEO:** fix linting errors ([bd54295](https://github.com/newrelic/gatsby-theme-newrelic/commit/bd542957609e1b31f11af9fec5b7277c2b8818d0))

### Features

- **SEO:** add swiftype type field for nr subdomain sites and their locales ([3285f88](https://github.com/newrelic/gatsby-theme-newrelic/commit/3285f88916927fe8bab44c12dca83c1b913a9020))

## [1.35.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.35.1...v1.35.2) (2021-03-08)

### Bug Fixes

- **ContributingGuidelines:** Add an issueLabels prop to forward to CreateIssueButton ([4352335](https://github.com/newrelic/gatsby-theme-newrelic/commit/43523353894f45d4ad4fc67a8c15c85ac02b5187))
- **Link:** Ensure links to locations with extensions do not add trailing slash ([225540f](https://github.com/newrelic/gatsby-theme-newrelic/commit/225540fb306f49a7f326e74ffc2a8657cc2cb70a))

## [1.35.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.35.0...v1.35.1) (2021-03-08)

### Bug Fixes

- now tracks all tessen page views ([366c408](https://github.com/newrelic/gatsby-theme-newrelic/commit/366c40888f290cb4529082f552caed5c17e9ca74))
- use initialization variable ([2ff63de](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ff63de576e93247ec48bcf37566f2a01e4bd52c))

# [1.35.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.34.0...v1.35.0) (2021-03-05)

### Bug Fixes

- **Link:** Ensure sign up links add the utm_source ([d4bc1d2](https://github.com/newrelic/gatsby-theme-newrelic/commit/d4bc1d2960b4a3040ac75a0569c5876e3b518f75))
- **Link:** Proxy the event through to the onClick handler when the event is instrumented via tessen. ([cd9961b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cd9961b020d69cf5da430dc754c445a1d4d89a39))
- **SEO:** Set the lang on the html, set a canonical link, and fix the hrefLang for Japanese ([355c574](https://github.com/newrelic/gatsby-theme-newrelic/commit/355c574cd2d64d1e37ff9467378973f6d6b8ceec))

### Features

- Revamp the locale data. Remove localePath and rely on locale directly. ([c79b2aa](https://github.com/newrelic/gatsby-theme-newrelic/commit/c79b2aaf3066f9e77ce2ddd1163b2f3651771581))
- **Link:** Honor forceTrailingSlashes config and append a trailing slash when needed ([e330a33](https://github.com/newrelic/gatsby-theme-newrelic/commit/e330a3301fc3beb1f64e3e572e66ace7cbaa715d))
- add option to force trailing slashes ([4c05933](https://github.com/newrelic/gatsby-theme-newrelic/commit/4c0593359bc4c0b62b9c30be5bd3dc2dd73f9129))

# [1.34.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.33.1...v1.34.0) (2021-03-04)

### Bug Fixes

- **global-search:** now when cancelling a search the search input is cleared ([66abfc9](https://github.com/newrelic/gatsby-theme-newrelic/commit/66abfc97e7c05d645ec4c6a65d061c8ee50e3059))
- **markdown:** last li>p element should not have a bottom margin ([309c561](https://github.com/newrelic/gatsby-theme-newrelic/commit/309c56127f00526e3f7108bd8f596565ed2c85d9))
- **nav:** on search the item collapse should work ([bdb50eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/bdb50ebe0df82713bbb07b9f311b898f0ca8e08f))
- **search:** bad css ([3a969fb](https://github.com/newrelic/gatsby-theme-newrelic/commit/3a969fba9edb02dc366e7bf8ffd059dc14195dfa))

### Features

- tracks tessen for sign up links and allows to specify component ([9360241](https://github.com/newrelic/gatsby-theme-newrelic/commit/9360241483445b83ac09d390fe50b8d6c6b289b1))

## [1.33.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.33.0...v1.33.1) (2021-03-03)

### Bug Fixes

- **CreateIssueButton:** Remove duplicate doc information heading ([cf9d8a9](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf9d8a9a4c356979097b2d445cd3d68b8dcae47f))
- handles localized home link ([ad61ac4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ad61ac4cea1884c8426432ab242c21c01aa0f899))
- uses link from theme rather than gatsby ([e989335](https://github.com/newrelic/gatsby-theme-newrelic/commit/e989335a092075c8253920f0fd2f22109aeaf641))

# [1.33.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.32.3...v1.33.0) (2021-03-02)

### Bug Fixes

- **Collapser:** Open the collapser if navigating to it via a hash link ([d3bc0fb](https://github.com/newrelic/gatsby-theme-newrelic/commit/d3bc0fbc5f8c00fcc71d31680146980d3c3aec4d))
- **CookieConsentDialog:** Don't show cookie consent until the client has rendered ([fabf8e8](https://github.com/newrelic/gatsby-theme-newrelic/commit/fabf8e8018629f2da81c27944837fc02796f41f7))

### Features

- localizes paths for newrelic.com ([32f488e](https://github.com/newrelic/gatsby-theme-newrelic/commit/32f488e37859874871ffee7747ee84c904675d4e))

## [1.32.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.32.2...v1.32.3) (2021-02-27)

### Bug Fixes

- Standardize issue button template with yes/no template ([b969984](https://github.com/newrelic/gatsby-theme-newrelic/commit/b96998442eb016850ef109d4eed6b5dbe1bbda3b))

## [1.32.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.32.1...v1.32.2) (2021-02-26)

### Bug Fixes

- **Table:** Vertically align the text in cells to the top of the cell instead of the center ([b7fd46f](https://github.com/newrelic/gatsby-theme-newrelic/commit/b7fd46fc0c0e5e6321f2ff1e03658303aa840b73))
- Update Japanese translation for sign up button ([b52a60f](https://github.com/newrelic/gatsby-theme-newrelic/commit/b52a60f9aa2fc18a9bc3fe200927bd0e4e704938))
- **TableOfContents:** Add Japanese translation for title ([4061bd4](https://github.com/newrelic/gatsby-theme-newrelic/commit/4061bd423dba5a0cccf7beb25ea07ec113d39fbd))

## [1.32.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.32.0...v1.32.1) (2021-02-25)

### Bug Fixes

- Add support for Japanese and add translation strings ([f68bb53](https://github.com/newrelic/gatsby-theme-newrelic/commit/f68bb534454651a2c1715c3e1ec079208b7fee93))
- **Dropdown:** Add ability to disable chevron and add className support to Dropdown.Toggle ([2cccfac](https://github.com/newrelic/gatsby-theme-newrelic/commit/2cccfac172091d536e6feb1f6cff89d486b16e27))
- **Dropdown:** Add className support ([a64d250](https://github.com/newrelic/gatsby-theme-newrelic/commit/a64d2507a096d22e67daab464e0fdf811e9a8fd0))
- **GlobalHeader:** Better mobile styles ([c99a851](https://github.com/newrelic/gatsby-theme-newrelic/commit/c99a85150ee7ed5001aaa6a00232afbb53cf48d5))
- Add log-in feather icon ([be18586](https://github.com/newrelic/gatsby-theme-newrelic/commit/be18586a813f9fde15d86162efb021d4e34c5731))
- **GlobalHeader:** remove flash of unstyled content by using media queries instead of JS for search box ([cc333a1](https://github.com/newrelic/gatsby-theme-newrelic/commit/cc333a18402e488d59c0fb730c590c30b721a00a))
- **TableOfContents:** Instrument clicks on headings ([3ac7a9e](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ac7a9e3407447283133b262cb5c1b9c38bbf20a))
- **useKeyPress:** Maintain casing when checking against pressed keys since casing does matter on some keys (i.e. `ArrowUp` and `ArrowDown`) ([79110de](https://github.com/newrelic/gatsby-theme-newrelic/commit/79110de59e5da0b0c138ea5ef70ba029fe75be76))
- Fix reference to undefined variable ([30e0347](https://github.com/newrelic/gatsby-theme-newrelic/commit/30e03474416ecf8e098bed28044ea01be3a489f5))
- Minor style updates for search to reduce spacing ([fad4035](https://github.com/newrelic/gatsby-theme-newrelic/commit/fad40356d6d63712ebca30e1b1af57d9663443e2))

# [1.32.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.31.2...v1.32.0) (2021-02-23)

### Features

- update cookie consent to disable tessen until consent is given ([c7682d1](https://github.com/newrelic/gatsby-theme-newrelic/commit/c7682d1040caf50318f898af88508f7dbe36d4b1))

## [1.31.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.31.1...v1.31.2) (2021-02-22)

**Note:** Version bump only for package gatsby-theme-newrelic

## [1.31.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.31.0...v1.31.1) (2021-02-18)

**Note:** Version bump only for package gatsby-theme-newrelic

# [1.31.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.30.1...v1.31.0) (2021-02-18)

### Bug Fixes

- **404:** Instrument hits to the 404 page ([6a8f6bf](https://github.com/newrelic/gatsby-theme-newrelic/commit/6a8f6bf98c82d622c9dfeb509a48f824b1be8b9c))
- **CodeBlock:** Instrument copy button clicks ([c30d11c](https://github.com/newrelic/gatsby-theme-newrelic/commit/c30d11c9db67156f0152f6670dd5f6bcdc198ac9))
- **CreateIssueButton:** Instrument the click action ([1aa0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/1aa0e76639c241fc6dcf6b28320f5ff4f5ee45f2))
- **ExternalLink:** Instrument clicks ([e5f01a8](https://github.com/newrelic/gatsby-theme-newrelic/commit/e5f01a8fb79d205222f67043b701360c1d02ccdc))
- **HamburgerMenu:** add active styles when the button is pressed ([a6fdc08](https://github.com/newrelic/gatsby-theme-newrelic/commit/a6fdc08957a6ff8266342e481fc44397f5690784))
- **HamburgerMenu:** update design ([5f6999a](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f6999a40d4f3fe2b39417ffbf3dabad7f9522d7))
- **Link:** Instrument clicks ([6ddd4a6](https://github.com/newrelic/gatsby-theme-newrelic/commit/6ddd4a6a16d29e0654313b9ee04752b5d269dd10))
- **NavItem:** Add mobile styles ([3ad70fa](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ad70fa840fc062d48474959e5683d9bc521b0b0))
- **NavLink:** Properly horizontal align the external link and chevron icons in the nav ([3df02e0](https://github.com/newrelic/gatsby-theme-newrelic/commit/3df02e0a0f3945790d8f9666ad02807045bdebf3))
- **ResultView:** Instrument clicks on links ([79554e5](https://github.com/newrelic/gatsby-theme-newrelic/commit/79554e539c426a34e16526d0798c6f47917b9165))
- **SimpleFeedback:** Instrument clicks for feedback buttons ([d69915f](https://github.com/newrelic/gatsby-theme-newrelic/commit/d69915f38bd58f8b7eb0cbdecf8b1f50eed3e6bb))
- **SwiftypeSearch:** Instrument searches ([7f69177](https://github.com/newrelic/gatsby-theme-newrelic/commit/7f6917792ba5b7f687c4e7d6968f98784a1acbbb))
- add mobileBreakpoint to layout configuration ([2abd0b5](https://github.com/newrelic/gatsby-theme-newrelic/commit/2abd0b5373886897546a697745bfce10722ff787))
- add newrelic logo to logo icons ([9f5b21e](https://github.com/newrelic/gatsby-theme-newrelic/commit/9f5b21eaf010cdc8aa906671cc5c954ebc035cfe))
- update HamburgerMenu design ([0a12364](https://github.com/newrelic/gatsby-theme-newrelic/commit/0a12364b8e32f3aedad62edc5f6d4bcbfc405677))
- upgrade gatsby-plugin-newrelic ([adeebe4](https://github.com/newrelic/gatsby-theme-newrelic/commit/adeebe43133deb8145d061729925e8f0a21b089f))

### Features

- add a useInstrumentedData hook ([707e789](https://github.com/newrelic/gatsby-theme-newrelic/commit/707e78933b4fe2d82f168a1a24eb0e55ca231a2a))
- add a useInstrumentedHandler hook to easily instrument a handler with New Relic browser ([3e27459](https://github.com/newrelic/gatsby-theme-newrelic/commit/3e27459540e96e45790a9f3fdaa6f9a2c3359970))
- add a useScrollFreeze hook ([de064cc](https://github.com/newrelic/gatsby-theme-newrelic/commit/de064cce3737a7d543d93a22da708d0bf2af7371))
- add a useWarning hook ([c59bd74](https://github.com/newrelic/gatsby-theme-newrelic/commit/c59bd74cbf24d38140b6cc49ef04cc396f0d8c96))
- adds custom attribute to components ([20f1fbb](https://github.com/newrelic/gatsby-theme-newrelic/commit/20f1fbb1311a01f1aacb544b9241100442ff95c4))
- Create a MobileHeader component ([525989c](https://github.com/newrelic/gatsby-theme-newrelic/commit/525989c329229a7bbd7eba5619f676fe3e1d4c9d))
- create a MobileNavigation component ([cfe9953](https://github.com/newrelic/gatsby-theme-newrelic/commit/cfe9953a70ac24d16dc52af01015c710ce608606))
- Create an EditPageButton component ([3aafd45](https://github.com/newrelic/gatsby-theme-newrelic/commit/3aafd45f3a5138033d00e9b4ae9bea84ed667497))

## [1.30.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.30.0...v1.30.1) (2021-02-12)

### Bug Fixes

- allow className on RelatedResources component ([d4e421b](https://github.com/newrelic/gatsby-theme-newrelic/commit/d4e421b18aa573a2fd3f21b99eedef79212fe483))

# [1.30.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.29.0...v1.30.0) (2021-02-12)

### Bug Fixes

- **NavItem:** Filter nav items based on search term ([ce64f3d](https://github.com/newrelic/gatsby-theme-newrelic/commit/ce64f3d594ea43b9d6fb66ff7b025256d1ab4255))
- **SearchInput:** Horizontal spacing adjustments for small search inputs ([2e88011](https://github.com/newrelic/gatsby-theme-newrelic/commit/2e88011ec2423eb7a8499e19bdf625c0bad69109))

### Features

- Create a TextHighlight component ([8740878](https://github.com/newrelic/gatsby-theme-newrelic/commit/87408784605c24cb54f9c3efa3742145b3a4027a))
- create new Navigation component ([5aba671](https://github.com/newrelic/gatsby-theme-newrelic/commit/5aba671fb7f2295c6b96c38b7a05ee36186389d2))

# [1.29.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.28.0...v1.29.0) (2021-02-12)

### Bug Fixes

- **ContributingGuidelines:** Update design treatment ([3a2ab5c](https://github.com/newrelic/gatsby-theme-newrelic/commit/3a2ab5cd26ab4e3d154c9169bd64897701751370))
- **GlobalFooter:** Swap order of GitHub buttons to match contributing guidelines ([72df860](https://github.com/newrelic/gatsby-theme-newrelic/commit/72df86088958c2a1167e7c928d010f7f17c15427))
- **GlobalStyles:** lighten mark background in dark mode and darken links inside marks ([bd6bf10](https://github.com/newrelic/gatsby-theme-newrelic/commit/bd6bf103fd07e3c6cc6c51a7b2e41078026013d7))
- **GlobalStyles:** make var more like a code tag ([1614ad4](https://github.com/newrelic/gatsby-theme-newrelic/commit/1614ad46850a7aafb228de0822c26ea42fb3f6c8))
- **GlobalStyles:** tighten up spacing on headers and add some spacing between headers on pages ([67465cc](https://github.com/newrelic/gatsby-theme-newrelic/commit/67465cc53987e1612d50f9dbdaa10b9570e988ef))
- **Icon:** add arrow-left feather icon ([fac2552](https://github.com/newrelic/gatsby-theme-newrelic/commit/fac2552950bcfb7c1813f7138890965711fcab8d))
- **SimpleFeedback:** Update design treatment ([c3d8083](https://github.com/newrelic/gatsby-theme-newrelic/commit/c3d8083600f40370b96c9436860c6b2b68b5cfb2))
- make a minor change to the contributing guide verbiage ([9f1c3e2](https://github.com/newrelic/gatsby-theme-newrelic/commit/9f1c3e2ff5e0f143f5f50274ace9252aba049032))
- remove Feedback component that is not used nor should be used. Use SimpleFeedback instead ([5e4082b](https://github.com/newrelic/gatsby-theme-newrelic/commit/5e4082be0b7e0e374899b3c11e875a6f170522c2))
- update tests to include LocationProvider to fix test failures ([5c601e6](https://github.com/newrelic/gatsby-theme-newrelic/commit/5c601e6bf47fc6b3864e96dc17eab7236020c3b4))
- Use terser language on GitHub buttons ([0a53b66](https://github.com/newrelic/gatsby-theme-newrelic/commit/0a53b661e5902df05b2851f8c03be68c72352811))

### Features

- add a useActiveHash hook ([b97d09f](https://github.com/newrelic/gatsby-theme-newrelic/commit/b97d09f471e603b4e0dcc227be4c417e5d5db173))
- Create a CreateIssue button ([55e6a90](https://github.com/newrelic/gatsby-theme-newrelic/commit/55e6a90cb62e629d8e20a6eeedf943ab64f94806))
- create a GitHubIssue button component to make it easy to create a new GitHub issue with params ([848a1d3](https://github.com/newrelic/gatsby-theme-newrelic/commit/848a1d36b55fd0d8f40aba71a02e1ce9a586b5d2))
- Create a TableOfContents component ([9c18c32](https://github.com/newrelic/gatsby-theme-newrelic/commit/9c18c3252cc46d7e449860d55d6628fa7555dc26))
- support opening collapsers by default via query param ([3017a82](https://github.com/newrelic/gatsby-theme-newrelic/commit/3017a82a1e32e7f17c94c161121b0b1e69d7a742))

# [1.28.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.27.0...v1.28.0) (2021-02-06)

### Bug Fixes

- **GlobalHeader:** ensure site links are full header width ([c65d5bf](https://github.com/newrelic/gatsby-theme-newrelic/commit/c65d5bfc2052a8cc5049945ebb0fd1fbcaf1e4ca))
- **GlobalNavLink:** make the background a bit lighter to remove the low contrast ([25af6b5](https://github.com/newrelic/gatsby-theme-newrelic/commit/25af6b5c9c7b701df6f644d54e44c57c638599c7))
- **GlobalStyles:** add figcaption styles ([284f3c3](https://github.com/newrelic/gatsby-theme-newrelic/commit/284f3c35d26624e266b0bc62176584c9928d21a8))
- **GlobalStyles:** links now use text decoration ([d0cd6a5](https://github.com/newrelic/gatsby-theme-newrelic/commit/d0cd6a50f116dbd7f65c634e5723274201a2b908))
- **MarkdownContainer:** add figcaption styles ([4e718c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e718c9a7a3fb900f74b577198dbc61b22f1b8bf))
- add tessen library and load it in head ([d6b3e6f](https://github.com/newrelic/gatsby-theme-newrelic/commit/d6b3e6ff57505a8f59bed4d05c55c0523a56ef9d))
- add the ability to resolve the environment name via config. ([cff9b3e](https://github.com/newrelic/gatsby-theme-newrelic/commit/cff9b3ef7ae0b06185ebeb881f921c9cd9a2107f))
- copy tessen library to static folder of site when bootstrapping the site ([9fbe124](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fbe12449adb2e535ba8947d275293198c591b9b))
- load tessen as external so you can import it like a module via 'tessen' ([97dc03a](https://github.com/newrelic/gatsby-theme-newrelic/commit/97dc03a4b13715ca0264e068d3a43fd4475a10b2))
- make link color a shade lighter in light mode ([3ce3a23](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ce3a23cd8b31eabd44013dc6bc3e5c13ddf2b66))

### Features

- add a useTessen hook to track tessen actions ([2c93396](https://github.com/newrelic/gatsby-theme-newrelic/commit/2c93396f89a3e87c83bec8957c945173cc14fc93))
- add ability to auto track page views via tessen on route updates ([635fe8f](https://github.com/newrelic/gatsby-theme-newrelic/commit/635fe8f9b9d13e777dcbdc63b241de1359c32ebd))

# [1.27.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.26.1...v1.27.0) (2021-02-04)

### Features

- add a NewRelicThemeConfig field to the GraphQL schema ([4e6ba5b](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e6ba5b6fbba548b2731bad7b9e71b054223b290))
- Always allow related resources from frontmatter. Add ability to selectively fetch related resources from swiftype ([f6d93be](https://github.com/newrelic/gatsby-theme-newrelic/commit/f6d93be832c99bfa8c3b0259fd2832a8335d90a7))
- automatically filter out frontmatter resources and redirects in swiftype query ([840ac82](https://github.com/newrelic/gatsby-theme-newrelic/commit/840ac82c594baa29a9d966a6b534ffe1eec8a70b))
- Create a RelatedResources comnponent to use with PageTools ([4c73365](https://github.com/newrelic/gatsby-theme-newrelic/commit/4c73365a4e369bdd522e2eab69a1bffa8a899e6a))

## [1.26.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.26.0...v1.26.1) (2021-02-03)

### Bug Fixes

- **CodeBlock:** ensure anchor tags copy over the href ([1c920c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c920c90cd652ed050c27f3ed140190cacf39c1d))
- **CodeBlock:** ensure copied text does not contain var, mark, or anchor tags ([2ffaebf](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ffaebf81aadd23f5e6c8d953228d1fc068d1fda))
- **CodeBlock:** remove table display causing weird issues with inline-block elements ([eea664f](https://github.com/newrelic/gatsby-theme-newrelic/commit/eea664f0086590334bf22cc2f250bd570e8b717f))
- **GlobalStyles:** make var and mark tags inline elements ([a9af5fe](https://github.com/newrelic/gatsby-theme-newrelic/commit/a9af5fe53f5edf04dace29ab91d44f6723b60552))
- **Table:** add className to outer wrapper ([eee903f](https://github.com/newrelic/gatsby-theme-newrelic/commit/eee903f6a4bfcad08814c258eb9a5b34abea9e25))

# [1.26.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.25.1...v1.26.0) (2021-02-03)

### Bug Fixes

- **CodeBlock:** add embedded var/mark styles ([7aa8d3c](https://github.com/newrelic/gatsby-theme-newrelic/commit/7aa8d3c92b139e5b2ffab997a5fc696be874a416))
- **GlobalStyles:** add var and mark styles ([1396f8e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1396f8e00fcd2cb6f73da437967fe987e994bb12))
- **Table:** add min-width to table cells and ensure the table can scroll horizontally ([78718f2](https://github.com/newrelic/gatsby-theme-newrelic/commit/78718f2293bd45bcf8b7a12695f05355eb2c611d))
- add support for yaml syntax highlighting ([3596258](https://github.com/newrelic/gatsby-theme-newrelic/commit/3596258f8ddb9c1758570919f835dccb4b758702))

### Features

- **CodeBlock:** allow var, mark, and anchor tags within code blocks ([a916fbb](https://github.com/newrelic/gatsby-theme-newrelic/commit/a916fbb0982a33067308f5b81d7db30df16f6baf))

## [1.25.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.25.0...v1.25.1) (2021-01-29)

**Note:** Version bump only for package gatsby-theme-newrelic

# [1.25.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.24.1...v1.25.0) (2021-01-28)

### Bug Fixes

- add leading slash to localized links if it is missing ([fc46b9c](https://github.com/newrelic/gatsby-theme-newrelic/commit/fc46b9cc92067fe46febbee0fd2d15ae635c0207))
- Ensure createPage is not called again when creating additional pages for each locale if it already exists ([499d427](https://github.com/newrelic/gatsby-theme-newrelic/commit/499d427f1fe61e3804aa71bb59e1ef676c2a13c2))
- fix deprecated icon warning ([677c29a](https://github.com/newrelic/gatsby-theme-newrelic/commit/677c29a421fffd8a1711fc88b5def222a33e59c3))
- **Callout:** add className support ([a4bbf87](https://github.com/newrelic/gatsby-theme-newrelic/commit/a4bbf87ff731b0681e92aa94b1e192275c6f7a9f))
- **Callout:** Remove spacing around element. Use MDXCallout instead ([f30e895](https://github.com/newrelic/gatsby-theme-newrelic/commit/f30e895fb2594d1dd4ec9ac793aa36dfd8d9154a))
- **CollapserGroup:** add className support ([5c63fd6](https://github.com/newrelic/gatsby-theme-newrelic/commit/5c63fd628560a553ec9f2b1ff4ee2eb6db3daa09))
- **Dropdown.Toggle:** fix prop type warning ([d05dde0](https://github.com/newrelic/gatsby-theme-newrelic/commit/d05dde04e02dceee966180f406777e190c93dbf9))
- **GlobalStyles:** Add --paragraph-spacing CSS var ([ec68df3](https://github.com/newrelic/gatsby-theme-newrelic/commit/ec68df3ee318ba57c3bd24a45fae870e832da810))
- **GlobalStyles:** adjust line height and spacing on paragraphs for better readability ([8feab22](https://github.com/newrelic/gatsby-theme-newrelic/commit/8feab22ccb3de2c394d286f829cce78b089eb38c))
- **GlobalStyles:** adjust line height on large headings for readability ([695e402](https://github.com/newrelic/gatsby-theme-newrelic/commit/695e4025f29b8d972006b2931b84fc805ba8c56f))
- **GlobalStyles:** adjust spacing and font weights for all headings ([8d5f8ac](https://github.com/newrelic/gatsby-theme-newrelic/commit/8d5f8acb7c3794e327bef187ba646a17079b4276))
- **GlobalStyles:** adjust spacing for lists ([9c2f91e](https://github.com/newrelic/gatsby-theme-newrelic/commit/9c2f91e8400ab9010a05be475b2b8cc2ae4bd276))
- **GlobalStyles:** change the list item marker color ([7383534](https://github.com/newrelic/gatsby-theme-newrelic/commit/7383534eedb69978a1c91729597f720b60a5177a))
- **GlobalStyles:** maintain the same font size on inline code elements in a header ([3395db4](https://github.com/newrelic/gatsby-theme-newrelic/commit/3395db46770089ed1b8a90c21fa1cafb76fcb00d))
- **GlobalStyles:** Tweak blockquote styles ([9388ce6](https://github.com/newrelic/gatsby-theme-newrelic/commit/9388ce6fe74329a31176a6755b4f35ca7d5880e0))
- **Link:** make GatsbyLink the default case ([f1e31b9](https://github.com/newrelic/gatsby-theme-newrelic/commit/f1e31b9c9950ccd195a9bbd7338441a8f956dfbc))
- **MDXCodeBlock:** add bottom margin ([b99f88d](https://github.com/newrelic/gatsby-theme-newrelic/commit/b99f88d77ee67fdfd36645750926302f897726bd))
- **Table:** add className support ([3f01aae](https://github.com/newrelic/gatsby-theme-newrelic/commit/3f01aaeec25ea7d84cae0651cf6d74a30b5172fb))
- **Terminal:** add className support ([64bd0a7](https://github.com/newrelic/gatsby-theme-newrelic/commit/64bd0a7ada366388d1e5acac8e746676ce4d66bf))

### Features

- add an MDXCallout component ([5829c84](https://github.com/newrelic/gatsby-theme-newrelic/commit/5829c847ef15aa2439a7f5e77b111822bc7949d7))
- Create a MarkdownContainer to wrap markdown content ([baa01b4](https://github.com/newrelic/gatsby-theme-newrelic/commit/baa01b44b5bbf41ce6cbfc9acf3615922f32f925))
- Create an InlineCode component ([ab07ab3](https://github.com/newrelic/gatsby-theme-newrelic/commit/ab07ab3ada18216459ed16f209afae110698fa7e))
- Create an MDX component to render MDX content with default mapped components ([210f5bd](https://github.com/newrelic/gatsby-theme-newrelic/commit/210f5bdb9144d06c3c6d0b81bf9cc2911d5c98f3))
- Create an MDXCollapserGroup component ([6dde701](https://github.com/newrelic/gatsby-theme-newrelic/commit/6dde701682d48d65e764a0ae2df0b353f82f4c85))
- Create an MDXLink component ([f7b0ea7](https://github.com/newrelic/gatsby-theme-newrelic/commit/f7b0ea7a53e621edeaaffe20b453730e34b6f8ab))
- create an MDXTable component ([3bc0778](https://github.com/newrelic/gatsby-theme-newrelic/commit/3bc0778645b004ac78c126f8ad2518d9d15e7d38))
- Create an MDXVideo component that wraps a Video for MDX content ([a46d4cb](https://github.com/newrelic/gatsby-theme-newrelic/commit/a46d4cb8bdb22324d77101a0d53638aa2f194415))

## [1.24.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.24.0...v1.24.1) (2021-01-23)

### Bug Fixes

- **SearchInput:** fix emotion warning about stringified function ([7ec637b](https://github.com/newrelic/gatsby-theme-newrelic/commit/7ec637ba2eb3e4ffe50c93f79740a676807b1efd))

# [1.24.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.23.3...v1.24.0) (2021-01-22)

### Bug Fixes

- **GlobalFooter:** Hide the GitHub buttons if a repository is not configured ([1372f4e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1372f4e1b9ee4204c5e14ab58211afb5771b4bd3))
- **GlobalStyles:** add styles for anchor icon next to autolinked headers ([5a20f44](https://github.com/newrelic/gatsby-theme-newrelic/commit/5a20f447e82eac4f84f5a77cfc08f25ef315a248))
- **GlobalStyles:** fix placeholder styles for light/dark modes ([267459d](https://github.com/newrelic/gatsby-theme-newrelic/commit/267459da18c56974a39a619de0b274c802a7e3aa))
- **SearchInput:** allow a focus hotkey to be specified to focus the input ([8075efd](https://github.com/newrelic/gatsby-theme-newrelic/commit/8075efda5217918d7bd66cd05e8ab4a6e64aac43))
- **SearchInput:** ensure clear button has dark theme styles ([e5478c5](https://github.com/newrelic/gatsby-theme-newrelic/commit/e5478c55c0043bb6df2a9337475ff424bb256c15))
- **useKeyPress:** add matching on modifier keys ([8fccbe2](https://github.com/newrelic/gatsby-theme-newrelic/commit/8fccbe2402520161d2ed328492dd95947aead554))
- **useKeyPress:** By default, do not trigger handler when typing in an input ([8d0a712](https://github.com/newrelic/gatsby-theme-newrelic/commit/8d0a7125959f9115d6afa0ef10239019a4e30e4e))
- add the ability to disable sitemaps ([aa9a05c](https://github.com/newrelic/gatsby-theme-newrelic/commit/aa9a05c7f2a8fd384b49a6cfecb27bf25b6a4f71))

### Features

- **GlobalStyles:** Define box shadows ([d86cf31](https://github.com/newrelic/gatsby-theme-newrelic/commit/d86cf31def1bf4d9b793fc20bb65fec2f3480e39))
- **useKeyPress:** Allow multiple key combinations to be specified ([bce720d](https://github.com/newrelic/gatsby-theme-newrelic/commit/bce720decd603d44c854a301b90e0f5ded343b6d))
- add a Collapser component ([1f5de9d](https://github.com/newrelic/gatsby-theme-newrelic/commit/1f5de9de927f2f8b84db012c54a76d28464f307c))
- create a CollapserGroup component ([e2704c6](https://github.com/newrelic/gatsby-theme-newrelic/commit/e2704c6d8e633a0586aaad44d8695cc36187f576))

## [1.23.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.23.2...v1.23.3) (2021-01-21)

### Bug Fixes

- add android icon ([26e3482](https://github.com/newrelic/gatsby-theme-newrelic/commit/26e34820f57c3ae22e86be62e9df82d22398268a))
- add apple logo ([8ab0352](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ab0352e301f03495e319aa124bb8e64782b7107))

## [1.23.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.23.1...v1.23.2) (2021-01-15)

### Bug Fixes

- **GlobalStyles:** add layout max width and content padding as CSS variables ([3c7a469](https://github.com/newrelic/gatsby-theme-newrelic/commit/3c7a469fa86f0dd0c303a7054aa4dc68265e936f))
- **GlobalStyles:** add scroll-margin-top for all headings ([f753bcb](https://github.com/newrelic/gatsby-theme-newrelic/commit/f753bcb9fd424390e81b8e4203cc50c4e5db9332))

## [1.23.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.23.0...v1.23.1) (2021-01-15)

### Bug Fixes

- ensure title and titleTemplate fields are defined on SiteSiteMetadata type ([cebffa0](https://github.com/newrelic/gatsby-theme-newrelic/commit/cebffa00fe14f872cc1a1b4a23339d6afcfb6599))
- use proper casing on hrefLang prop ([ffdacb2](https://github.com/newrelic/gatsby-theme-newrelic/commit/ffdacb29804ffbe88bb6ffc0ac91bee4912208e2))

# [1.23.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.22.3...v1.23.0) (2021-01-12)

### Bug Fixes

- make hreflang tag off siteUrl metadata ([334e658](https://github.com/newrelic/gatsby-theme-newrelic/commit/334e658fc9e0c3699683610cae3bce5e418379a2))
- only create nodes if we have access to the correct functions ([0b4d596](https://github.com/newrelic/gatsby-theme-newrelic/commit/0b4d596e1bce256ed456994eb0e17290adc10818))
- remove double declared createNodeByType and add titleTemplate to SEO component ([567c4e5](https://github.com/newrelic/gatsby-theme-newrelic/commit/567c4e55a023784380ba58f69303c34e17dc415c))

### Features

- SEO component added to theme and adds hreflang tags ([b210d7d](https://github.com/newrelic/gatsby-theme-newrelic/commit/b210d7d1530eece5eb38187ae05cc41a715749f8))

## [1.22.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.22.2...v1.22.3) (2021-01-11)

### Bug Fixes

- adding missing helper function ([417eaf0](https://github.com/newrelic/gatsby-theme-newrelic/commit/417eaf089021ecd39d8bea3aa2ebe5e55d7b4435))

## [1.22.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.22.1...v1.22.2) (2021-01-11)

### Bug Fixes

- update options variables for consistency ([6ddebba](https://github.com/newrelic/gatsby-theme-newrelic/commit/6ddebba070be1d912817191f932729db36cb2ab7))

## [1.22.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.22.0...v1.22.1) (2021-01-11)

### Bug Fixes

- **NavItem:** Ensure children are matched against the localized URL ([f80e5a2](https://github.com/newrelic/gatsby-theme-newrelic/commit/f80e5a2122fe8e8fe45fc7e1023aa2762fb6dc76))

# [1.22.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.21.0...v1.22.0) (2021-01-09)

### Bug Fixes

- **MenuItem:** add support for as prop ([cdca5ad](https://github.com/newrelic/gatsby-theme-newrelic/commit/cdca5adcde4b3356c1d86baa6360d0123da4f95d))
- **NavItem:** match on trailing slash and localized links ([08e7f28](https://github.com/newrelic/gatsby-theme-newrelic/commit/08e7f28247fb56d6c32c37531cb0189625f19670))
- add localizedPath to Locale nodes ([089e59a](https://github.com/newrelic/gatsby-theme-newrelic/commit/089e59ac76279a528e503e9b7ae21de862b095ad))
- apply translations for all components ([408657e](https://github.com/newrelic/gatsby-theme-newrelic/commit/408657e0986427d7fa0373b3e6d83968156149a3))
- let the browser navigate to relative links on the page ([09781d2](https://github.com/newrelic/gatsby-theme-newrelic/commit/09781d20b225a6fdb4829105a3f1c7e68001009f))
- Link will automatically localize paths ([b35e344](https://github.com/newrelic/gatsby-theme-newrelic/commit/b35e3442e5834cfc151d732b49f14c645e506200))

### Features

- add a default 404 page ([bffc8a9](https://github.com/newrelic/gatsby-theme-newrelic/commit/bffc8a9a7208be3fc0a63ddc2617e0cafccb16a9))
- add a useLocale hook ([7d4ceb6](https://github.com/newrelic/gatsby-theme-newrelic/commit/7d4ceb68e96d6a33a411780680c0bb5a994ba858))
- allow layout component to be configured to automatically configure gatsby-plugin-layout ([39141e2](https://github.com/newrelic/gatsby-theme-newrelic/commit/39141e2c7b5423a9698671a7d9f57a3dfb740b7c))

# [1.21.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.20.0...v1.21.0) (2021-01-08)

### Bug Fixes

- source locales as nodes instead of via resolvers ([ce523e6](https://github.com/newrelic/gatsby-theme-newrelic/commit/ce523e6460cd242c0b7787959be131e77ac4d8bc))
- **CodeBlock:** use translated strings for the copy button ([860f305](https://github.com/newrelic/gatsby-theme-newrelic/commit/860f3056ebc7116abcedddceeb762fd455a56025))
- **Terminal:** use translated strings for the copy button ([af335ec](https://github.com/newrelic/gatsby-theme-newrelic/commit/af335ecdce54ae5855b2e4c08b9b0e6609687c48))

### Features

- automatically create translation files for each supported language and namespace ([e82fbfb](https://github.com/newrelic/gatsby-theme-newrelic/commit/e82fbfb49643a5458aedc3acb60d4d0397be09fd))
- re-export all modules from react-i18next ([448a4bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/448a4bc20603df425a338fdb4aa3fb21d210198f))
- set locale in page context if its not already set ([3baa726](https://github.com/newrelic/gatsby-theme-newrelic/commit/3baa7264044ba13ab4899e4242e3d7b190b517b1))
- wrap page element with initialized i18n instance and provider ([d4c2aba](https://github.com/newrelic/gatsby-theme-newrelic/commit/d4c2abab29a56134ef68c539fe4d742ed204793e))

# [1.20.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.19.1...v1.20.0) (2021-01-06)

### Features

- builds pages based on file relative path ([517df7c](https://github.com/newrelic/gatsby-theme-newrelic/commit/517df7c581047032e80cedc48fdd991d427686b9))

## [1.19.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.19.0...v1.19.1) (2021-01-06)

### Bug Fixes

- do not automatically create pages for additional locales ([de88460](https://github.com/newrelic/gatsby-theme-newrelic/commit/de88460a7e4efee4f36a27087df947dd97faaf12))

# [1.19.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.18.1...v1.19.0) (2021-01-06)

### Bug Fixes

- ensure mdx code block tests if language is a shell language ([8faf181](https://github.com/newrelic/gatsby-theme-newrelic/commit/8faf1816d64764b3f2e5cf29011342753e50fe03))
- remove translation on button hover styles ([b62a52a](https://github.com/newrelic/gatsby-theme-newrelic/commit/b62a52ae9eb97d0a89ce0f8f01215d85657117d4))

### Features

- add locale configuration to GraphQL ([2ed004b](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ed004b408068af01db99c8ff5e906625914b7bc))
- added signup button logic ([6c4ed43](https://github.com/newrelic/gatsby-theme-newrelic/commit/6c4ed43b37ab1e3b350f06de2dbe817b91881f65))
- adding the ability to specify swiftype options ([024a55b](https://github.com/newrelic/gatsby-theme-newrelic/commit/024a55b51b07fc51146b1b85135a5058c62cb765))
- create a Dropdown component ([9fcb802](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fcb8029a3aafd966fc09fb9ede2955e41916f32))
- create localized routes for pages in src/pages ([da7b7d4](https://github.com/newrelic/gatsby-theme-newrelic/commit/da7b7d4a23c4a27824af605b0b2425972200a841))
- resolved feedback ([c21a9ab](https://github.com/newrelic/gatsby-theme-newrelic/commit/c21a9abe032ec0aef7c8654233696e60cacd21de))
- update GlobalHeader to show available locales ([13ac4c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/13ac4c9a9d5d1ec142e6bd249e4eaac2115b9266))

## [1.18.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.18.0...v1.18.1) (2020-12-28)

### Bug Fixes

- ensure anchor links are treated the same as relative links ([815d31e](https://github.com/newrelic/gatsby-theme-newrelic/commit/815d31e136801e80c476e6a231c3b47b9c9d02dd))

# [1.18.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.17.2...v1.18.0) (2020-12-18)

### Bug Fixes

- **CodeBlock:** set the language as jsx for all javascript code blocks ([6452e36](https://github.com/newrelic/gatsby-theme-newrelic/commit/6452e3641cd0e37f2c4109bb1d5d0155744708ef))

### Features

- add scss syntax highlighting support ([9122320](https://github.com/newrelic/gatsby-theme-newrelic/commit/912232031473529007f2360269907834eebc6b92))
- **formatCode:** auto detect parser based on the language ([1653fca](https://github.com/newrelic/gatsby-theme-newrelic/commit/1653fcaa6bd1c45444edbc838882159574cdc760))
- add sass syntax highlighting support ([3cea9d8](https://github.com/newrelic/gatsby-theme-newrelic/commit/3cea9d8138e65e9ae91af743e7c4dd4556b230c1))
- **CodeBlock:** add the ability to disable auto formatting ([429cc2a](https://github.com/newrelic/gatsby-theme-newrelic/commit/429cc2ac2c38d7cebf959b9106b730657095e4ed))
- **CodeBlock:** enable auto formatting for particular languages if not supplied ([8b844bb](https://github.com/newrelic/gatsby-theme-newrelic/commit/8b844bb8f90ce3afd3387b30031d0371cab3a4f0))
- **formatCode:** support code formatting for more languages ([dac0370](https://github.com/newrelic/gatsby-theme-newrelic/commit/dac0370abdbe809e5644d4a4a0c55568f983dc65))
- **MDXCodeBlock:** automatically render a Terminal component if the language is a shell language ([ac24e4f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac24e4ffb8ffc2bceeb6e6df83b6c65805d9ed1e))
- Add a Terminal component that can be used to display shell output ([d21b3df](https://github.com/newrelic/gatsby-theme-newrelic/commit/d21b3df2516faaede4d6be325029233d31419eae))

## [1.17.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.17.1...v1.17.2) (2020-12-17)

### Bug Fixes

- add a fileRelativePath field to MarkdownRemark nodes ([4805646](https://github.com/newrelic/gatsby-theme-newrelic/commit/4805646fd2262f8bbbc66b7294582f4c4a3dd3aa))

## [1.17.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.17.0...v1.17.1) (2020-12-15)

**Note:** Version bump only for package gatsby-theme-newrelic

# [1.17.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.16.3...v1.17.0) (2020-12-15)

### Features

- added SimpleFeedback component ([2ea622b](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ea622b53bdc56c398fbee70f80e5836fb82c0c7))
- **search:** focus search input when search overlay opens ([3f1b69a](https://github.com/newrelic/gatsby-theme-newrelic/commit/3f1b69ac0518930648c62f52ad83a5d932e34e67))

## [1.16.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.16.2...v1.16.3) (2020-12-05)

### Bug Fixes

- added career link to footer ([91ac835](https://github.com/newrelic/gatsby-theme-newrelic/commit/91ac835feb31e82833a4e39d2d04a9731cda5630))

## [1.16.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.16.1...v1.16.2) (2020-12-03)

**Note:** Version bump only for package gatsby-theme-newrelic

## [1.16.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.16.0...v1.16.1) (2020-12-01)

### Bug Fixes

- adding missing imports ([a5e69bd](https://github.com/newrelic/gatsby-theme-newrelic/commit/a5e69bd9e9c9833ffa8668445108092f1702ce65))
- moved wrapRootElement to each file ([10a0691](https://github.com/newrelic/gatsby-theme-newrelic/commit/10a0691026b0a7341938df73b2280a7c8ba06dcd))

# [1.16.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.15.1...v1.16.0) (2020-11-24)

### Features

- table component added to the theme ([02a23b9](https://github.com/newrelic/gatsby-theme-newrelic/commit/02a23b90494367c7af9969be8834d7d9d0019b66))

## [1.15.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.15.0...v1.15.1) (2020-11-06)

### Bug Fixes

- filter out menu pages for docs results ([c5ca83b](https://github.com/newrelic/gatsby-theme-newrelic/commit/c5ca83ba887a2ad22f6067af0287193be4b43b3a))

# [1.15.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.14.0...v1.15.0) (2020-11-05)

### Bug Fixes

- prefix all icons depending on the library it comes from ([bc109a8](https://github.com/newrelic/gatsby-theme-newrelic/commit/bc109a8deaf03c0d0f2f95581875c2b1d03d8e67))
- **PageTools:** remove layout-specific styles ([b998aa0](https://github.com/newrelic/gatsby-theme-newrelic/commit/b998aa0c82ec0396706ae8890c7b9fceff5cf908))
- add chevron-down icon ([9fcecc1](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fcecc19d816159fc639f3820b832d4d88e44912))

### Features

- Add a Layout component + subcomponents to easily create layouts ([da12b3d](https://github.com/newrelic/gatsby-theme-newrelic/commit/da12b3d4ba274f87eabee6fdad734b2fbe82121a))
- add a Link component that acts as a smart link for ([8a17930](https://github.com/newrelic/gatsby-theme-newrelic/commit/8a17930454f82c9c915f28b441cf976211014704))
- add a NavItem component ([5c6cb80](https://github.com/newrelic/gatsby-theme-newrelic/commit/5c6cb80047c7f2df51cb7ac868737e8d1519c5c7))
- add newrelic icon set with tdp, fso, and ai icons ([bab4b8a](https://github.com/newrelic/gatsby-theme-newrelic/commit/bab4b8ad4d48fd3a2e398d175b52b93f83d9dda8))
- export FeatherSVG to use for shadowing ([f3b6ba0](https://github.com/newrelic/gatsby-theme-newrelic/commit/f3b6ba058a15c02c92c800abecdf23532197fb5e))
- **Button:** add a plain variant ([8aa5e75](https://github.com/newrelic/gatsby-theme-newrelic/commit/8aa5e75c76403be0eda3abfee68c38a256232a5d))
- wrap root element with layout context with layout options from config. Add useLayout hook ([eee0b2d](https://github.com/newrelic/gatsby-theme-newrelic/commit/eee0b2da3958a402358b59789b4baa2acb5caba3))

# [1.14.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.13.0...v1.14.0) (2020-11-02)

### Bug Fixes

- add contributingUrl to siteMetadata ([0a8555a](https://github.com/newrelic/gatsby-theme-newrelic/commit/0a8555abb96811b114e014f27b569c8fb09fb06f))
- add global header height as a global css variable ([6627544](https://github.com/newrelic/gatsby-theme-newrelic/commit/662754458cf327ae32c904578522721a02b00d74))
- changes for cookie component ([48ee639](https://github.com/newrelic/gatsby-theme-newrelic/commit/48ee639ad0b526c99a4aa3aed5093cc64d135d1a))
- ensure the repository field is always available in the site metadata type ([0ce7fa7](https://github.com/newrelic/gatsby-theme-newrelic/commit/0ce7fa715d93d93cda686dc71860dca3a320eda5))
- grammar haha ([d27de1b](https://github.com/newrelic/gatsby-theme-newrelic/commit/d27de1bd768d5a0964a96a7a6bb451c407c9ea0a))
- proper casing on search input placeholder ([66eca33](https://github.com/newrelic/gatsby-theme-newrelic/commit/66eca33a2c47efdeae72b854e5a262d3a1adb1e8))

### Features

- add a ContributingGuidelines component to use with the PageTools component ([5ec5689](https://github.com/newrelic/gatsby-theme-newrelic/commit/5ec5689c546d83dacc4d2275aeabe0fed1e900d5))
- added documentation for Cookie Consent Dialog ([20a8273](https://github.com/newrelic/gatsby-theme-newrelic/commit/20a827330721b70c7a576d135898bd937aa02c24))
- adds cookie consent dialog box and gdpr plugin to theme ([09057ca](https://github.com/newrelic/gatsby-theme-newrelic/commit/09057ca1667360d407b8a0ba2d299f6c8d8c23c2))
- create a PageTools component that can be used to display page-specific UI ([d8f8f38](https://github.com/newrelic/gatsby-theme-newrelic/commit/d8f8f38a3b9c5c467b88a651aadc881ffe7b1847))
- documentation for usePrevious hook ([38c5c1e](https://github.com/newrelic/gatsby-theme-newrelic/commit/38c5c1e6c385e9efdacce32c79b6b668e40d6e14))

# [1.13.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.12.0...v1.13.0) (2020-10-30)

### Features

- **search:** change placeholder text of global search ([fca54aa](https://github.com/newrelic/gatsby-theme-newrelic/commit/fca54aade95e1f93f10310a2527669b1c0374aa6))
- **search:** change placeholder value for new search bar ([a39a2ee](https://github.com/newrelic/gatsby-theme-newrelic/commit/a39a2ee7c0beea2938633f2d247f25aa5fe30cc1))
- add optional prop to specify icon ([e2be8a7](https://github.com/newrelic/gatsby-theme-newrelic/commit/e2be8a797ce6a4e251970e1173fa2d3d55ec2e85))
- **search:** add facet components for filtering by site source ([0628f75](https://github.com/newrelic/gatsby-theme-newrelic/commit/0628f7553abf85aa56a47b3a1e08aa877c97a343))
- **search:** filter results to 3 specific sites and allow user to change filter ([b152665](https://github.com/newrelic/gatsby-theme-newrelic/commit/b152665dbe39304c25dc4caad2f40203717bdbd2))

# [1.12.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.11.1...v1.12.0) (2020-10-29)

### Bug Fixes

- make gatsby-plugin-mdx a peer dependency ([6eaa1b2](https://github.com/newrelic/gatsby-theme-newrelic/commit/6eaa1b273008c09028397d60d82ca765f75b1efd))
- remove mdx config from theme ([112f4cf](https://github.com/newrelic/gatsby-theme-newrelic/commit/112f4cf5103a74b19ef2ea1c06924117a6138a00))

### Features

- automatically add fileRelativePath to mdx nodes and pages ([6e91cd6](https://github.com/newrelic/gatsby-theme-newrelic/commit/6e91cd680fb6b33af1ccff0546e183a3741350ea))

## [1.11.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.11.0...v1.11.1) (2020-10-28)

### Bug Fixes

- **GlobalFooter:** ensure width honors the layout max width ([57ddd54](https://github.com/newrelic/gatsby-theme-newrelic/commit/57ddd54672ef3ab0facf11b701fa224fda1ad7b5))
- **GlobalFooter:** set logo width and add responsive styles ([84e8030](https://github.com/newrelic/gatsby-theme-newrelic/commit/84e8030bf772f9d733f3c46e2d47bb951da492fc))
- fix missing key warning on head element ([fdd4aed](https://github.com/newrelic/gatsby-theme-newrelic/commit/fdd4aedfb9347f8708f1df6cc362e0dd6cf46097))
- use the New Relic logo as the default Logo implementation ([deeb226](https://github.com/newrelic/gatsby-theme-newrelic/commit/deeb2265ef73e7a4400c45796b574d1d5f80f031))

# [1.11.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.10.3...v1.11.0) (2020-10-28)

### Bug Fixes

- **Callout:** allow the user to disable the title completely ([0eba6db](https://github.com/newrelic/gatsby-theme-newrelic/commit/0eba6db21168c2404868a97a4aee34141d74a45c))
- **Callout:** ensure there is no title padding inside callout. Adjust spacing ([2e0bbf3](https://github.com/newrelic/gatsby-theme-newrelic/commit/2e0bbf35f127b8531b11b5d07d2babc8a5d6f784))

### Features

- add a Spinner component ([835a0cb](https://github.com/newrelic/gatsby-theme-newrelic/commit/835a0cb14acd59fbd6d03a2df728a27cafcfb8e4))
- added a footer component ([4b0c0a1](https://github.com/newrelic/gatsby-theme-newrelic/commit/4b0c0a13aafdcd788213f8fc7173691179627c33))
- added a logo that can be extended ([0222147](https://github.com/newrelic/gatsby-theme-newrelic/commit/0222147c95e8fd9da2282b8d2f454b19c146d8ba))
- put the utm source in graphql and allow it to be overridden in siteMetadata ([f2c4baa](https://github.com/newrelic/gatsby-theme-newrelic/commit/f2c4baac467f675d0984153f10e110a2ae96b605))
- **GlobalHeader:** Remove split treatment and tracking. Remove old GitHub links. ([6826de7](https://github.com/newrelic/gatsby-theme-newrelic/commit/6826de71190512b84c9a19a790ff909ab9e8417e))
- **GlobalHeader:** replace the search icon with a search input on larger screens ([6fb11a9](https://github.com/newrelic/gatsby-theme-newrelic/commit/6fb11a9057fa68d10159e12a6b48adc9c6711b24))
- **SearchInput:** add a small size ([a31692b](https://github.com/newrelic/gatsby-theme-newrelic/commit/a31692bde9f95e5a88a86e6246fe3038ad628c12))
- **SearchInput:** allow refs to be attached ([75e1d88](https://github.com/newrelic/gatsby-theme-newrelic/commit/75e1d8898e8875ce49eaff4caf184e06ccad5057))
- **SearchInput:** make it easier to detect when user has submitted search ([8c53c02](https://github.com/newrelic/gatsby-theme-newrelic/commit/8c53c02bfc2d22f652b27bffcbbeecf132142e22))
- add login link to the global header ([d324fcc](https://github.com/newrelic/gatsby-theme-newrelic/commit/d324fcc5590d130340eb5095d9d6d4704c2e7109))

## [1.10.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.10.2...v1.10.3) (2020-10-23)

### Bug Fixes

- make callout colors more subtle ([1893b77](https://github.com/newrelic/gatsby-theme-newrelic/commit/1893b77bcc1422153c13f7799425566c7920847e))
- upgrade @wry/equality from 0.2.0 to 0.3.0 ([7ba00f3](https://github.com/newrelic/gatsby-theme-newrelic/commit/7ba00f33ad4b48011104d61ad05950e18b78df22))

## [1.10.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.10.1...v1.10.2) (2020-10-16)

### Bug Fixes

- **CodeBlock:** lighten line highlight color and dont cover line numbers ([7a1e12f](https://github.com/newrelic/gatsby-theme-newrelic/commit/7a1e12f2e53a9c05369ff4a0f87a3a8abd9debbe))

## [1.10.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.10.0...v1.10.1) (2020-09-25)

### Bug Fixes

- bump gatsby-plugin-newrelic ([ade95db](https://github.com/newrelic/gatsby-theme-newrelic/commit/ade95db49a008d23d15b4ca47985f0c15210d6a3))

# [1.10.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.9.5...v1.10.0) (2020-09-25)

### Features

- Add a callout component ([7edef05](https://github.com/newrelic/gatsby-theme-newrelic/commit/7edef0553c5a3052395ddcae124bb4ca246a81b5))

## [1.9.5](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.9.4...v1.9.5) (2020-09-23)

### Bug Fixes

- identify banners by slug and date, rather than ID ([282a120](https://github.com/newrelic/gatsby-theme-newrelic/commit/282a12059be0016dbd8d7f142304d1cdd6b0c7b6))

## [1.9.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.9.3...v1.9.4) (2020-09-16)

**Note:** Version bump only for package gatsby-theme-newrelic

## [1.9.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.9.2...v1.9.3) (2020-09-16)

**Note:** Version bump only for package gatsby-theme-newrelic

## [1.9.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.9.1...v1.9.2) (2020-09-09)

### Bug Fixes

- fallback for btoa so that sites can build ([7bbfec0](https://github.com/newrelic/gatsby-theme-newrelic/commit/7bbfec0fe7e0d03549a3c172d1b857c6f89f102b))

## [1.9.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.9.0...v1.9.1) (2020-09-08)

### Bug Fixes

- **Icon:** add ability to specify defs for an icon ([99e40cb](https://github.com/newrelic/gatsby-theme-newrelic/commit/99e40cbcdf40418d924f86b94e8a8fb597f8e6b7))

# [1.9.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.8.2...v1.9.0) (2020-09-08)

### Bug Fixes

- more correct with initial state ([df304c4](https://github.com/newrelic/gatsby-theme-newrelic/commit/df304c4a58666238910305f5adb101fb92a75482))

### Features

- add ability to specify mdx configuration for gatsby-plugin-mdx ([c450f5d](https://github.com/newrelic/gatsby-theme-newrelic/commit/c450f5d67b27115ea6094e772d2499789063fd0b))
- **AnnouncementBanner:** add Icon and link styles ([9184766](https://github.com/newrelic/gatsby-theme-newrelic/commit/91847663f78debe9f9a419336ae2132d93b04d9e))
- add the announcement banner to the global header ([a7505c8](https://github.com/newrelic/gatsby-theme-newrelic/commit/a7505c8a3229e29a0834171a94b7b8c7dd1c6f4c))
- create an AnnouncementBanner component that composes the Banner ([a9819ce](https://github.com/newrelic/gatsby-theme-newrelic/commit/a9819ceb2292c45bbe37d93076279cf97542c285))
- dismisses banner persists ([8ad855f](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ad855f8f9ce455947f369e405b225a88f05e728))
- get announcement via mdx file in place ([4da7bf8](https://github.com/newrelic/gatsby-theme-newrelic/commit/4da7bf8645d681b9e00cd4990e0f6e5bb8e52263))
- marketing banner component ([e9e2457](https://github.com/newrelic/gatsby-theme-newrelic/commit/e9e2457ea12b5831346962f2bc1b7ddc4f700f13))
- update AnnouncementBanner to handle sourcing announcements ([e69fb4c](https://github.com/newrelic/gatsby-theme-newrelic/commit/e69fb4c00ee5edc113e3915e679d7f811e448345))

## [1.8.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.8.1...v1.8.2) (2020-09-03)

### Bug Fixes

- **Button:** ensure all buttons are the same size regardless of border ([efeb5fe](https://github.com/newrelic/gatsby-theme-newrelic/commit/efeb5fec31344dd0ef0c6539ffd238b21947466c))
- track clicks to all actions in the global header under a common event ([314c365](https://github.com/newrelic/gatsby-theme-newrelic/commit/314c365877c1ad1ae615dd5be870041b40c9214a))

## [1.8.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.8.0...v1.8.1) (2020-09-03)

### Bug Fixes

- do not fall back to development settings when resolving env options ([1778665](https://github.com/newrelic/gatsby-theme-newrelic/commit/1778665b8bc3c528534eec3fcf27b8118f7aafbc))

# [1.8.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.7.3...v1.8.0) (2020-09-02)

### Bug Fixes

- always enable search ([f43f226](https://github.com/newrelic/gatsby-theme-newrelic/commit/f43f2266409fd1c4d81d72c62ea2814faf799d7f))
- small tweak to button transition ([5fba04a](https://github.com/newrelic/gatsby-theme-newrelic/commit/5fba04a31ae63d5efe3594bfc4cb00281d13ee0a))
- track clicks to the global header links ([de5a52c](https://github.com/newrelic/gatsby-theme-newrelic/commit/de5a52c5a6a2536f5529223b26d492eb59ed1be4))

### Features

- **Button:** add a new outline variant ([da8fdbd](https://github.com/newrelic/gatsby-theme-newrelic/commit/da8fdbdc18c4b2019e89f577aa8e6643bc06a839))
- add a useSplitTreatment hook to make getting a treatment easier ([4293736](https://github.com/newrelic/gatsby-theme-newrelic/commit/4293736f0b7d9bb7aa7883e7f43d98dfa7dc22ca))
- add a useUserId hook to generate a unique ID for the browser ([d1f4f79](https://github.com/newrelic/gatsby-theme-newrelic/commit/d1f4f792f84cbcd9331b6499601d1fdb531838d4))
- add a utility for generating UUIDs ([cb23131](https://github.com/newrelic/gatsby-theme-newrelic/commit/cb23131f05d588ed43a2edf6aeba5b39b2844395))
- add back github buttons using split treatment ([b06a841](https://github.com/newrelic/gatsby-theme-newrelic/commit/b06a841ffcec675b9026d0376b288f7b27317d23))
- create a SplitIOProvider component to wrap the site ([ea76dda](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea76ddae2372e5cf4df4664e86c8096625a1038a))
- wrap the root element with splitio config if splitio config is defined ([e237db1](https://github.com/newrelic/gatsby-theme-newrelic/commit/e237db1f374e8817c706b2848eaa6b494fcf2191))

## [1.7.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.7.2...v1.7.3) (2020-08-21)

### Bug Fixes

- use divider color for hr tags ([6808140](https://github.com/newrelic/gatsby-theme-newrelic/commit/68081401583b804c1cac1281483ed10bb960ae4d))

## [1.7.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.7.1...v1.7.2) (2020-08-20)

### Bug Fixes

- **Overlay:** bump the z-index to ensure it sits on top of everything ([b6be442](https://github.com/newrelic/gatsby-theme-newrelic/commit/b6be442f6c2f36188596f072ce5bbe6d204d1631)), closes [/github.com/newrelic/opensource-website/pull/608#issuecomment-676723812](https://github.com//github.com/newrelic/opensource-website/pull/608/issues/issuecomment-676723812)

## [1.7.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.7.0...v1.7.1) (2020-08-18)

### Bug Fixes

- make spacing between sign up and dark mode uniform ([487abbe](https://github.com/newrelic/gatsby-theme-newrelic/commit/487abbe4ce293c9d053ce7c13250b56bbacabd5e))
- remove cloud icon from sign up button ([b17528c](https://github.com/newrelic/gatsby-theme-newrelic/commit/b17528cc3182bcb1426e69c759057c45a9298ccc))
- remove keyframes for CSS that is not included in search experience ([e207f43](https://github.com/newrelic/gatsby-theme-newrelic/commit/e207f43eb0dca9706bfe7e74b729e1f26003e536))

# [1.7.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.6.0...v1.7.0) (2020-08-17)

### Bug Fixes

- add cloud icon ([37a936a](https://github.com/newrelic/gatsby-theme-newrelic/commit/37a936aa86e2f8e8bd74548a1f5bcd4ab031957a))
- add global link hover styles ([2253092](https://github.com/newrelic/gatsby-theme-newrelic/commit/22530928a825b40b26e676515f1b973e1e9e31e6))
- better responsive styles for global header ([8090f12](https://github.com/newrelic/gatsby-theme-newrelic/commit/8090f12e1b55fb19a27428b02a24584a87d71a68))
- change the height of the global nav to 36px ([de28d3c](https://github.com/newrelic/gatsby-theme-newrelic/commit/de28d3cdfa16e9e8b3a917d873754eaf34d01b04))
- dont trigger overlay when using / if typing in an input or textarea ([c0d3d98](https://github.com/newrelic/gatsby-theme-newrelic/commit/c0d3d98e0f96fdf561312d5150cb9abcf7a8ad0d))
- make overlay content the same size as the underlying content ([0ff3125](https://github.com/newrelic/gatsby-theme-newrelic/commit/0ff31253ccd8c46d9870dd1c44b3094438023c97))
- more reliable escape listener ([4d69c9b](https://github.com/newrelic/gatsby-theme-newrelic/commit/4d69c9b3a0e5fe1a138300eb5711242b90c46b3b))
- prop type issue on Surface ([edca881](https://github.com/newrelic/gatsby-theme-newrelic/commit/edca88178d460d520a36edb48ed2ea6877b1eb03))

### Features

- **Button:** Deprecate plain button in favor of link button ([9d48498](https://github.com/newrelic/gatsby-theme-newrelic/commit/9d48498bd6a6b5d6a5eb3c642be22cef14ce35cf))
- add ability to summon search with / key ([4f05ff6](https://github.com/newrelic/gatsby-theme-newrelic/commit/4f05ff6e478fe0beb312602cd41a5a0f4200eeb6))
- add sign up button to header ([aac6ac0](https://github.com/newrelic/gatsby-theme-newrelic/commit/aac6ac059986c24e82a354e2cd25902f22918a3c))
- add sign up link to the global header ([69a412e](https://github.com/newrelic/gatsby-theme-newrelic/commit/69a412e7fb01fa58103a93c5825b251297ba21ee))
- export useKeyPress ([ef9e564](https://github.com/newrelic/gatsby-theme-newrelic/commit/ef9e5643c80cdfbb1b0c2c67642ae161c5db7847))
- update global brand colors ([d94717f](https://github.com/newrelic/gatsby-theme-newrelic/commit/d94717f9ab17f90e5c217594a5c3cd3bfaf8b03b))

# [1.6.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.5.1...v1.6.0) (2020-08-07)

### Bug Fixes

- fix double scroll for search results overlay ([8ab69c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ab69c99f43dbafd19aaac40f55ebbab8bef0fba))
- fix enter key by using the query params to drive open/closed state ([215c068](https://github.com/newrelic/gatsby-theme-newrelic/commit/215c068bbd787241e213fa4f68e032db2031912b))

### Features

- add a new useQueryParams hook ([a3d66dd](https://github.com/newrelic/gatsby-theme-newrelic/commit/a3d66dd167a5137f359010c6a2dd9fe455422239))

## [1.5.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.5.0...v1.5.1) (2020-08-06)

### Bug Fixes

- dont render overlay if not search capable ([0401bf3](https://github.com/newrelic/gatsby-theme-newrelic/commit/0401bf3fe820463d75d5b456c7177bd661eafa39))
- fix document undefined error when building the gatsby site ([24fcc75](https://github.com/newrelic/gatsby-theme-newrelic/commit/24fcc753b69a24d86b5d8c9e8bb49b16a5c37b3d))
- lint warning in GlobalHeader component ([45c5e23](https://github.com/newrelic/gatsby-theme-newrelic/commit/45c5e23a8abe0d23dfd1097de521baad77787b3c))
- use pointer cursor on all header icons ([bbaa53c](https://github.com/newrelic/gatsby-theme-newrelic/commit/bbaa53c2a1f4aa6081d59d2c4c3560a724962257))

# [1.5.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.4.0...v1.5.0) (2020-08-06)

### Bug Fixes

- Adjust styling on overlay to prevent bugs ([9fb53e1](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fb53e1903427767db5ad3e5294bf2fade33a508))

### Features

- Add SwiftType site search ([4e23c07](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e23c07c594f349fbdf7631a58a4ec0a78322769))
- add to demo site ([a7019f2](https://github.com/newrelic/gatsby-theme-newrelic/commit/a7019f2741619a6206b3157df3a3e330ca96ac62))
- overlay closes when pressing escape ([1d61aa5](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d61aa514eeaed664051d44c299d8fb56e013477))
- overlay component and search in global nav ([c68a684](https://github.com/newrelic/gatsby-theme-newrelic/commit/c68a68476bcd16c99427b2b19b57b0111dd61bbc))
- portal component and animations on overlay ([192fb7d](https://github.com/newrelic/gatsby-theme-newrelic/commit/192fb7dad444d428dcbe63df2f13ef66055995a6))
- updates URL when in overlay ([607a5a3](https://github.com/newrelic/gatsby-theme-newrelic/commit/607a5a37c21e2c07046f5cfce55324ac330e28bf))

# [1.4.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.3.0...v1.4.0) (2020-08-03)

### Features

- external icon added to feather icon component ([b7c4ba8](https://github.com/newrelic/gatsby-theme-newrelic/commit/b7c4ba83444245d885996057e126ad54c323928e))

# [1.3.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.4...v1.3.0) (2020-08-03)

### Features

- create a Tag component ([e8e742e](https://github.com/newrelic/gatsby-theme-newrelic/commit/e8e742ecd5f9c1aac7f51d025e19cd692a5f6a97))
- create a TagList component ([86afd0f](https://github.com/newrelic/gatsby-theme-newrelic/commit/86afd0f6ac7d0beac814badf1724581d8f8f0ebd))

## [1.2.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.3...v1.2.4) (2020-07-31)

### Bug Fixes

- dont index the header content in swiftype ([bdcd376](https://github.com/newrelic/gatsby-theme-newrelic/commit/bdcd3765e268679e7e1771228b30756d892242bb))

## [1.2.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.2...v1.2.3) (2020-07-28)

### Bug Fixes

- **Surface:** add dark mode box shadow ([4d2a207](https://github.com/newrelic/gatsby-theme-newrelic/commit/4d2a207c7f4e61d35d5b5d847874d6030538adf7))

## [1.2.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.1...v1.2.2) (2020-07-28)

### Bug Fixes

- **Surface:** add prop type for interactive prop ([a7735cf](https://github.com/newrelic/gatsby-theme-newrelic/commit/a7735cfab39d8c71c83702efb20e36d72f54629c))

## [1.2.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.0...v1.2.1) (2020-07-28)

**Note:** Version bump only for package gatsby-theme-newrelic

# [1.2.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.1.10...v1.2.0) (2020-07-28)

### Bug Fixes

- border-radius for code block in light mode ([395a2e7](https://github.com/newrelic/gatsby-theme-newrelic/commit/395a2e7d567f7c3f4b0dbb1e291473d6f7dda8ca))

### Features

- **gatsby-theme-newrelic:** add a Video component that handles wistia and youtube videos ([2bf61f6](https://github.com/newrelic/gatsby-theme-newrelic/commit/2bf61f675606c38c57a69e903060b5bcfd22dcb1))
- add a CodeBlock component ([3ed2ef7](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ed2ef70d7d3081ddde6d1c21209b6e3cd76be0f))
- add a formatCode helper that uses prettier to format the code ([0362e02](https://github.com/newrelic/gatsby-theme-newrelic/commit/0362e02ef65408e2435bc034a78fdf3f3be3e204))
- add a useClipboard hook ([5f70b1d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f70b1d8f4a29e25bf549300220d4ecd06e61da6))
- add a useFormattedCode hook ([1c831bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c831bce1a383f1104c191f6ffd9241055c1e627))
- add a useTimeout hook ([ea19dc4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea19dc40fc8e3748021a4a2ee9f932e6e9cc4002))
- add ability to specify custom className on CodeBlock ([ac690d9](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac690d91b9a448fc007428e383d7c180090026dc))
- add an MDXCodeBlock component for use within MDX ([38f08c1](https://github.com/newrelic/gatsby-theme-newrelic/commit/38f08c1005605106f3e458f0589d6130ab767486))
- add copy icon ([c9ee0eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9ee0ebb8ec8686034ce94f4716d49a4555f783d))
- add range and partition helpers for code highlighting ([1d1d42e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d1d42edeb7bd722ad988a56d585ba425dc0a7ee))
- Add search bar component ([ded596f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ded596f7f6e9862dde70256faca7832cba4f83d3))
- configure default languages and accept language config for prism plugin ([abc0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/abc0e76ef73dd323206d9d5f4da598134dad6cb4))
- create a Surface component for the basis of cards ([c8b803f](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8b803f8beaa2fa5736d2091b6f1c94c7f904b1c))
- documentation for API and configuration ([cf26e0b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf26e0b5a672008e2f817edaf44f329241ebc6d0))
- hamburger menu component ([c477ae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/c477ae5f5909ae4b839be9566cb32159cf906bb3))

# [1.3.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.1.10...v1.3.0) (2020-07-28)

### Bug Fixes

- border-radius for code block in light mode ([395a2e7](https://github.com/newrelic/gatsby-theme-newrelic/commit/395a2e7d567f7c3f4b0dbb1e291473d6f7dda8ca))

### Features

- **gatsby-theme-newrelic:** add a Video component that handles wistia and youtube videos ([2bf61f6](https://github.com/newrelic/gatsby-theme-newrelic/commit/2bf61f675606c38c57a69e903060b5bcfd22dcb1))
- add a CodeBlock component ([3ed2ef7](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ed2ef70d7d3081ddde6d1c21209b6e3cd76be0f))
- add a formatCode helper that uses prettier to format the code ([0362e02](https://github.com/newrelic/gatsby-theme-newrelic/commit/0362e02ef65408e2435bc034a78fdf3f3be3e204))
- add a useClipboard hook ([5f70b1d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f70b1d8f4a29e25bf549300220d4ecd06e61da6))
- add a useFormattedCode hook ([1c831bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c831bce1a383f1104c191f6ffd9241055c1e627))
- add a useTimeout hook ([ea19dc4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea19dc40fc8e3748021a4a2ee9f932e6e9cc4002))
- add ability to specify custom className on CodeBlock ([ac690d9](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac690d91b9a448fc007428e383d7c180090026dc))
- add an MDXCodeBlock component for use within MDX ([38f08c1](https://github.com/newrelic/gatsby-theme-newrelic/commit/38f08c1005605106f3e458f0589d6130ab767486))
- add copy icon ([c9ee0eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9ee0ebb8ec8686034ce94f4716d49a4555f783d))
- add range and partition helpers for code highlighting ([1d1d42e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d1d42edeb7bd722ad988a56d585ba425dc0a7ee))
- Add search bar component ([ded596f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ded596f7f6e9862dde70256faca7832cba4f83d3))
- configure default languages and accept language config for prism plugin ([abc0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/abc0e76ef73dd323206d9d5f4da598134dad6cb4))
- create a Surface component for the basis of cards ([c8b803f](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8b803f8beaa2fa5736d2091b6f1c94c7f904b1c))
- documentation for API and configuration ([cf26e0b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf26e0b5a672008e2f817edaf44f329241ebc6d0))
- hamburger menu component ([c477ae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/c477ae5f5909ae4b839be9566cb32159cf906bb3))

# [1.2.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.1.10...v1.2.0) (2020-07-28)

### Bug Fixes

- border-radius for code block in light mode ([395a2e7](https://github.com/newrelic/gatsby-theme-newrelic/commit/395a2e7d567f7c3f4b0dbb1e291473d6f7dda8ca))

### Features

- **gatsby-theme-newrelic:** add a Video component that handles wistia and youtube videos ([2bf61f6](https://github.com/newrelic/gatsby-theme-newrelic/commit/2bf61f675606c38c57a69e903060b5bcfd22dcb1))
- add a CodeBlock component ([3ed2ef7](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ed2ef70d7d3081ddde6d1c21209b6e3cd76be0f))
- add a formatCode helper that uses prettier to format the code ([0362e02](https://github.com/newrelic/gatsby-theme-newrelic/commit/0362e02ef65408e2435bc034a78fdf3f3be3e204))
- add a useClipboard hook ([5f70b1d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f70b1d8f4a29e25bf549300220d4ecd06e61da6))
- add a useFormattedCode hook ([1c831bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c831bce1a383f1104c191f6ffd9241055c1e627))
- add a useTimeout hook ([ea19dc4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea19dc40fc8e3748021a4a2ee9f932e6e9cc4002))
- add ability to specify custom className on CodeBlock ([ac690d9](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac690d91b9a448fc007428e383d7c180090026dc))
- add an MDXCodeBlock component for use within MDX ([38f08c1](https://github.com/newrelic/gatsby-theme-newrelic/commit/38f08c1005605106f3e458f0589d6130ab767486))
- add copy icon ([c9ee0eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9ee0ebb8ec8686034ce94f4716d49a4555f783d))
- add range and partition helpers for code highlighting ([1d1d42e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d1d42edeb7bd722ad988a56d585ba425dc0a7ee))
- Add search bar component ([ded596f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ded596f7f6e9862dde70256faca7832cba4f83d3))
- configure default languages and accept language config for prism plugin ([abc0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/abc0e76ef73dd323206d9d5f4da598134dad6cb4))
- create a Surface component for the basis of cards ([c8b803f](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8b803f8beaa2fa5736d2091b6f1c94c7f904b1c))
- documentation for API and configuration ([cf26e0b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf26e0b5a672008e2f817edaf44f329241ebc6d0))
- hamburger menu component ([c477ae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/c477ae5f5909ae4b839be9566cb32159cf906bb3))

## 1.1.10 (2020-07-21)

**Note:** Version bump only for package gatsby-theme-newrelic

## 1.1.9 (2020-07-21)

**Note:** Version bump only for package gatsby-theme-newrelic
