# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.9.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v2.8.1-io.1...v2.9.0) (2021-09-16)


### Features

* added the _One Trust_ cookie consent snippet ([8024995](https://github.com/newrelic/gatsby-theme-newrelic/commit/80249951cc037f6e6efd9913a4778e4cf444c26d))





# 2.0.0 (2021-09-16)


### Bug Fixes

* accepts a ref that gets forwarded to underlying link component ([9a11d95](https://github.com/newrelic/gatsby-theme-newrelic/commit/9a11d95d86cfd88b3faebe97d28098a1c93d4a67))
* add 'env' to tessen call ([ea338e6](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea338e628917daf6dcf3ad9c2c0963d4dc6fbd62))
* add a uppercase as a prop to style tag ([b908cd3](https://github.com/newrelic/gatsby-theme-newrelic/commit/b908cd3b1476cbf3b034d334ad9c9a028aaf0e32))
* Add fe-link-2 icon ([9b0a4a6](https://github.com/newrelic/gatsby-theme-newrelic/commit/9b0a4a62ae8cb253a4e7962cbef529b9d3a2348f))
* Add optional issueLabels prop to global footer ([faaf00d](https://github.com/newrelic/gatsby-theme-newrelic/commit/faaf00dc06f7819fd0aaae226a05fdf7411df2cb))
* add pageaction to track user search terms ([5ea71e9](https://github.com/newrelic/gatsby-theme-newrelic/commit/5ea71e906b75f6c53a5ed35dfd7fe265fc5e9c09))
* add proper split.io tracking ([ff25f48](https://github.com/newrelic/gatsby-theme-newrelic/commit/ff25f48b53cf98c81425108c4065c378f616c4fe))
* added `role` to the acceptable attributes for a link ([265c718](https://github.com/newrelic/gatsby-theme-newrelic/commit/265c718ba0334d35f1b73f7d670f74bbb8c9ae79))
* Bump react-spring version ([193441b](https://github.com/newrelic/gatsby-theme-newrelic/commit/193441b7977b4492576a5e55b715b1f4a0998b9e))
* check for gtm config first before preparing scripts ([a8c3736](https://github.com/newrelic/gatsby-theme-newrelic/commit/a8c373695d884e154f397ec1a290c474e0c82ff1))
* crank z-index up higher ([8d3594e](https://github.com/newrelic/gatsby-theme-newrelic/commit/8d3594e46e30881ac7c9ac02b05e66f5562413ed))
* empty commit to trigger version bump ([338fe8c](https://github.com/newrelic/gatsby-theme-newrelic/commit/338fe8c5de26d809ba83ed0b08c5aa4dbb67cc69))
* ensuring that link text is present ([b80f1a4](https://github.com/newrelic/gatsby-theme-newrelic/commit/b80f1a466482ccc21e21b42879c203fa05b12f5d))
* fix linting errors ([7008056](https://github.com/newrelic/gatsby-theme-newrelic/commit/7008056376cc3fb99dc04f6e694bfb1969450625))
* handle lack of access to local storage ([c1987e8](https://github.com/newrelic/gatsby-theme-newrelic/commit/c1987e8b59140cb3c5a6f00aa08f0a94bcd81b88))
* handles localized home link ([ad61ac4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ad61ac4cea1884c8426432ab242c21c01aa0f899))
* if link to original image, use straight up a tag and not gatsby link ([b212974](https://github.com/newrelic/gatsby-theme-newrelic/commit/b212974cee9830b89d5cfdb17d4eb581678b093e))
* move vars outside of if block so its reachable ([5827236](https://github.com/newrelic/gatsby-theme-newrelic/commit/5827236860adf47520316d67af053a4a788eec81))
* now tracks all tessen page views ([366c408](https://github.com/newrelic/gatsby-theme-newrelic/commit/366c40888f290cb4529082f552caed5c17e9ca74))
* only adding valid props to anchor tags ([ff0ca14](https://github.com/newrelic/gatsby-theme-newrelic/commit/ff0ca143c49a3a4a4cadcdded2ee4811a4accf06))
* only import `getGtmConfig` once ([9a1b9ca](https://github.com/newrelic/gatsby-theme-newrelic/commit/9a1b9ca70a9fbf9b0a2a3b23ca240dec14e3a8b9))
* Only open the search modal if mounted to prevent weird layout issues for SSR rendering ([c59097d](https://github.com/newrelic/gatsby-theme-newrelic/commit/c59097d63a0ee06d8941ccffecf7be8a6d21e8ce))
* Optionally remove noreferrer from links to NR domain ([3461267](https://github.com/newrelic/gatsby-theme-newrelic/commit/3461267ea3cdd67c56cb76b61dd4931c8d19ec9b))
* Pass className to Overlay ([264f46d](https://github.com/newrelic/gatsby-theme-newrelic/commit/264f46dafa4aaca8707e34749f3a336fa5090fcf))
* passing the OneTrust ID in via props ([63a9c09](https://github.com/newrelic/gatsby-theme-newrelic/commit/63a9c09446b2ae487c6f9410f229ab70772f3aac))
* referrer field not being sent on sign up ([6c5fca5](https://github.com/newrelic/gatsby-theme-newrelic/commit/6c5fca597507e10c2d8f50a71e3ddc513d069b7a))
* remove margin pushing caret to the right ([cb22d99](https://github.com/newrelic/gatsby-theme-newrelic/commit/cb22d99cbbbe929c64acf8db441e0472edc68567))
* remove mocked storage and use built in option ([e45579a](https://github.com/newrelic/gatsby-theme-newrelic/commit/e45579a594c922db89cd15036bfc7af3ae75dc05))
* remove weighting on fields and use defaults set in swiftype UI ([4e9ae7d](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e9ae7da1577d44ec95ab8973b5a180567ae2468))
* removes utm source from theme ([38e661a](https://github.com/newrelic/gatsby-theme-newrelic/commit/38e661a808dda80a311d8febdd0ce01190a541b8))
* removespecific search fields altogether and use defaults ([9c67f8e](https://github.com/newrelic/gatsby-theme-newrelic/commit/9c67f8e0281bddc0957d478fc730acda0f6fcd3f))
* update checks for tessen before trying to get version ([3d616ce](https://github.com/newrelic/gatsby-theme-newrelic/commit/3d616ce1859d4e8af7ea632bab787b940f5c9159))
* update webpack config to include polyfills ([71c7f38](https://github.com/newrelic/gatsby-theme-newrelic/commit/71c7f38e8b0ce343074a7b8a4893d1f34fc5a51d))
* updating links to allow for dangerouslySetInnerHTML ([3e95145](https://github.com/newrelic/gatsby-theme-newrelic/commit/3e95145a72bac9f6770d2cf7d45fda8a8bbdb5da))
* **CreateIssueButton:** Remove duplicate doc information heading ([cf9d8a9](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf9d8a9a4c356979097b2d445cd3d68b8dcae47f))
* **global-search:** now when cancelling a search the search input is cleared ([66abfc9](https://github.com/newrelic/gatsby-theme-newrelic/commit/66abfc97e7c05d645ec4c6a65d061c8ee50e3059))
* **GlobalHeader:** ensure site links are full header width ([c65d5bf](https://github.com/newrelic/gatsby-theme-newrelic/commit/c65d5bfc2052a8cc5049945ebb0fd1fbcaf1e4ca))
* **GlobalNavLink:** make the background a bit lighter to remove the low contrast ([25af6b5](https://github.com/newrelic/gatsby-theme-newrelic/commit/25af6b5c9c7b701df6f644d54e44c57c638599c7))
* **GlobalStyles:** add figcaption styles ([284f3c3](https://github.com/newrelic/gatsby-theme-newrelic/commit/284f3c35d26624e266b0bc62176584c9928d21a8))
* **GlobalStyles:** links now use text decoration ([d0cd6a5](https://github.com/newrelic/gatsby-theme-newrelic/commit/d0cd6a50f116dbd7f65c634e5723274201a2b908))
* **Link:** Ensure className gets forwarded to the underlying link components ([fc36339](https://github.com/newrelic/gatsby-theme-newrelic/commit/fc363395e63a6ca8ba396cffab2f639a81528f61))
* **Link:** Ensure sign up links add the utm_source ([d4bc1d2](https://github.com/newrelic/gatsby-theme-newrelic/commit/d4bc1d2960b4a3040ac75a0569c5876e3b518f75))
* **Link:** Proxy the event through to the onClick handler when the event is instrumented via tessen. ([cd9961b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cd9961b020d69cf5da430dc754c445a1d4d89a39))
* **markdown:** last li>p element should not have a bottom margin ([309c561](https://github.com/newrelic/gatsby-theme-newrelic/commit/309c56127f00526e3f7108bd8f596565ed2c85d9))
* **nav:** on search the item collapse should work ([bdb50eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/bdb50ebe0df82713bbb07b9f311b898f0ca8e08f))
* **sitemap:** update sitemap plugin version and explicitly set output path ([5882f6c](https://github.com/newrelic/gatsby-theme-newrelic/commit/5882f6ca3fed8bacf4353c3f8f15b051367f08a4))
* add a fileRelativePath field to MarkdownRemark nodes ([4805646](https://github.com/newrelic/gatsby-theme-newrelic/commit/4805646fd2262f8bbbc66b7294582f4c4a3dd3aa))
* add leading slash to localized links if it is missing ([fc46b9c](https://github.com/newrelic/gatsby-theme-newrelic/commit/fc46b9cc92067fe46febbee0fd2d15ae635c0207))
* add support for yaml syntax highlighting ([3596258](https://github.com/newrelic/gatsby-theme-newrelic/commit/3596258f8ddb9c1758570919f835dccb4b758702))
* add tessen library and load it in head ([d6b3e6f](https://github.com/newrelic/gatsby-theme-newrelic/commit/d6b3e6ff57505a8f59bed4d05c55c0523a56ef9d))
* add the ability to resolve the environment name via config. ([cff9b3e](https://github.com/newrelic/gatsby-theme-newrelic/commit/cff9b3ef7ae0b06185ebeb881f921c9cd9a2107f))
* copy tessen library to static folder of site when bootstrapping the site ([9fbe124](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fbe12449adb2e535ba8947d275293198c591b9b))
* Ensure createPage is not called again when creating additional pages for each locale if it already exists ([499d427](https://github.com/newrelic/gatsby-theme-newrelic/commit/499d427f1fe61e3804aa71bb59e1ef676c2a13c2))
* fix deprecated icon warning ([677c29a](https://github.com/newrelic/gatsby-theme-newrelic/commit/677c29a421fffd8a1711fc88b5def222a33e59c3))
* global header renders search modal on focus ([2ad63e5](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ad63e552d06c341be56f648cd8597d165984e54))
* load tessen as external so you can import it like a module via 'tessen' ([97dc03a](https://github.com/newrelic/gatsby-theme-newrelic/commit/97dc03a4b13715ca0264e068d3a43fd4475a10b2))
* make link color a shade lighter in light mode ([3ce3a23](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ce3a23cd8b31eabd44013dc6bc3e5c13ddf2b66))
* upgrade @wry/equality from 0.3.4 to 0.4.0 ([c85809c](https://github.com/newrelic/gatsby-theme-newrelic/commit/c85809c5f0eafedb89d98d72cf1312ae6b0a827b))
* **Callout:** add className support ([a4bbf87](https://github.com/newrelic/gatsby-theme-newrelic/commit/a4bbf87ff731b0681e92aa94b1e192275c6f7a9f))
* **Callout:** Remove spacing around element. Use MDXCallout instead ([f30e895](https://github.com/newrelic/gatsby-theme-newrelic/commit/f30e895fb2594d1dd4ec9ac793aa36dfd8d9154a))
* **CodeBlock:** add embedded var/mark styles ([7aa8d3c](https://github.com/newrelic/gatsby-theme-newrelic/commit/7aa8d3c92b139e5b2ffab997a5fc696be874a416))
* **CodeBlock:** ensure anchor tags copy over the href ([1c920c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c920c90cd652ed050c27f3ed140190cacf39c1d))
* **CodeBlock:** ensure copied text does not contain var, mark, or anchor tags ([2ffaebf](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ffaebf81aadd23f5e6c8d953228d1fc068d1fda))
* **CodeBlock:** remove table display causing weird issues with inline-block elements ([eea664f](https://github.com/newrelic/gatsby-theme-newrelic/commit/eea664f0086590334bf22cc2f250bd570e8b717f))
* **Collapser:** Show a link icon to make it easier to deep link to the collapser ([650fc0e](https://github.com/newrelic/gatsby-theme-newrelic/commit/650fc0e0ac073c9120272ba1c56eef05071c213e))
* **CollapserGroup:** add className support ([5c63fd6](https://github.com/newrelic/gatsby-theme-newrelic/commit/5c63fd628560a553ec9f2b1ff4ee2eb6db3daa09))
* **ContributingGuidelines:** Add an issueLabels prop to forward to CreateIssueButton ([4352335](https://github.com/newrelic/gatsby-theme-newrelic/commit/43523353894f45d4ad4fc67a8c15c85ac02b5187))
* **Dropdown.Toggle:** fix prop type warning ([d05dde0](https://github.com/newrelic/gatsby-theme-newrelic/commit/d05dde04e02dceee966180f406777e190c93dbf9))
* **GlobalFooter:** Hide the GitHub buttons if a repository is not configured ([1372f4e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1372f4e1b9ee4204c5e14ab58211afb5771b4bd3))
* **GlobalStyles:** Add --paragraph-spacing CSS var ([ec68df3](https://github.com/newrelic/gatsby-theme-newrelic/commit/ec68df3ee318ba57c3bd24a45fae870e832da810))
* **GlobalStyles:** add layout max width and content padding as CSS variables ([3c7a469](https://github.com/newrelic/gatsby-theme-newrelic/commit/3c7a469fa86f0dd0c303a7054aa4dc68265e936f))
* **GlobalStyles:** add scroll-margin-top for all headings ([f753bcb](https://github.com/newrelic/gatsby-theme-newrelic/commit/f753bcb9fd424390e81b8e4203cc50c4e5db9332))
* **GlobalStyles:** add styles for anchor icon next to autolinked headers ([5a20f44](https://github.com/newrelic/gatsby-theme-newrelic/commit/5a20f447e82eac4f84f5a77cfc08f25ef315a248))
* **GlobalStyles:** add var and mark styles ([1396f8e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1396f8e00fcd2cb6f73da437967fe987e994bb12))
* **GlobalStyles:** adjust line height and spacing on paragraphs for better readability ([8feab22](https://github.com/newrelic/gatsby-theme-newrelic/commit/8feab22ccb3de2c394d286f829cce78b089eb38c))
* **GlobalStyles:** adjust line height on large headings for readability ([695e402](https://github.com/newrelic/gatsby-theme-newrelic/commit/695e4025f29b8d972006b2931b84fc805ba8c56f))
* **GlobalStyles:** adjust spacing and font weights for all headings ([8d5f8ac](https://github.com/newrelic/gatsby-theme-newrelic/commit/8d5f8acb7c3794e327bef187ba646a17079b4276))
* **GlobalStyles:** adjust spacing for lists ([9c2f91e](https://github.com/newrelic/gatsby-theme-newrelic/commit/9c2f91e8400ab9010a05be475b2b8cc2ae4bd276))
* **GlobalStyles:** change the list item marker color ([7383534](https://github.com/newrelic/gatsby-theme-newrelic/commit/7383534eedb69978a1c91729597f720b60a5177a))
* **GlobalStyles:** fix placeholder styles for light/dark modes ([267459d](https://github.com/newrelic/gatsby-theme-newrelic/commit/267459da18c56974a39a619de0b274c802a7e3aa))
* **GlobalStyles:** maintain the same font size on inline code elements in a header ([3395db4](https://github.com/newrelic/gatsby-theme-newrelic/commit/3395db46770089ed1b8a90c21fa1cafb76fcb00d))
* **GlobalStyles:** make var and mark tags inline elements ([a9af5fe](https://github.com/newrelic/gatsby-theme-newrelic/commit/a9af5fe53f5edf04dace29ab91d44f6723b60552))
* **GlobalStyles:** Tweak blockquote styles ([9388ce6](https://github.com/newrelic/gatsby-theme-newrelic/commit/9388ce6fe74329a31176a6755b4f35ca7d5880e0))
* **Link:** Ensure links to locations with extensions do not add trailing slash ([225540f](https://github.com/newrelic/gatsby-theme-newrelic/commit/225540fb306f49a7f326e74ffc2a8657cc2cb70a))
* **Link:** make GatsbyLink the default case ([f1e31b9](https://github.com/newrelic/gatsby-theme-newrelic/commit/f1e31b9c9950ccd195a9bbd7338441a8f956dfbc))
* **MDXCodeBlock:** add bottom margin ([b99f88d](https://github.com/newrelic/gatsby-theme-newrelic/commit/b99f88d77ee67fdfd36645750926302f897726bd))
* **search:** bad css ([3a969fb](https://github.com/newrelic/gatsby-theme-newrelic/commit/3a969fba9edb02dc366e7bf8ffd059dc14195dfa))
* **SearchInput:** allow a focus hotkey to be specified to focus the input ([8075efd](https://github.com/newrelic/gatsby-theme-newrelic/commit/8075efda5217918d7bd66cd05e8ab4a6e64aac43))
* **SearchInput:** ensure clear button has dark theme styles ([e5478c5](https://github.com/newrelic/gatsby-theme-newrelic/commit/e5478c55c0043bb6df2a9337475ff424bb256c15))
* **SearchInput:** fix emotion warning about stringified function ([7ec637b](https://github.com/newrelic/gatsby-theme-newrelic/commit/7ec637ba2eb3e4ffe50c93f79740a676807b1efd))
* **SEO:** fix linting errors ([bd54295](https://github.com/newrelic/gatsby-theme-newrelic/commit/bd542957609e1b31f11af9fec5b7277c2b8818d0))
* **SEO:** Set the lang on the html, set a canonical link, and fix the hrefLang for Japanese ([355c574](https://github.com/newrelic/gatsby-theme-newrelic/commit/355c574cd2d64d1e37ff9467378973f6d6b8ceec))
* **Table:** add className support ([3f01aae](https://github.com/newrelic/gatsby-theme-newrelic/commit/3f01aaeec25ea7d84cae0651cf6d74a30b5172fb))
* **Table:** add className to outer wrapper ([eee903f](https://github.com/newrelic/gatsby-theme-newrelic/commit/eee903f6a4bfcad08814c258eb9a5b34abea9e25))
* **Table:** add min-width to table cells and ensure the table can scroll horizontally ([78718f2](https://github.com/newrelic/gatsby-theme-newrelic/commit/78718f2293bd45bcf8b7a12695f05355eb2c611d))
* **Terminal:** add className support ([64bd0a7](https://github.com/newrelic/gatsby-theme-newrelic/commit/64bd0a7ada366388d1e5acac8e746676ce4d66bf))
* **tessen:** enable all segment integrations via tessen ([3130532](https://github.com/newrelic/gatsby-theme-newrelic/commit/31305329175ee01e7021f5c1b6a6b9eca17bc424))
* **useKeyPress:** add matching on modifier keys ([8fccbe2](https://github.com/newrelic/gatsby-theme-newrelic/commit/8fccbe2402520161d2ed328492dd95947aead554))
* **useKeyPress:** By default, do not trigger handler when typing in an input ([8d0a712](https://github.com/newrelic/gatsby-theme-newrelic/commit/8d0a7125959f9115d6afa0ef10239019a4e30e4e))
* **usePrevious:** Add option to initialize with the value ([c45271d](https://github.com/newrelic/gatsby-theme-newrelic/commit/c45271d08fe63e4282819c5a6e5b5f263dd5108f))
* **useQueryParams:** add deleteQueryParam helper ([d1c6b44](https://github.com/newrelic/gatsby-theme-newrelic/commit/d1c6b4448e07f1dd4b020abb8a2a97159c2f3f03))
* add android icon ([26e3482](https://github.com/newrelic/gatsby-theme-newrelic/commit/26e34820f57c3ae22e86be62e9df82d22398268a))
* add apple logo ([8ab0352](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ab0352e301f03495e319aa124bb8e64782b7107))
* add chevron-down icon ([9fcecc1](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fcecc19d816159fc639f3820b832d4d88e44912))
* add contributingUrl to siteMetadata ([0a8555a](https://github.com/newrelic/gatsby-theme-newrelic/commit/0a8555abb96811b114e014f27b569c8fb09fb06f))
* add global header height as a global css variable ([6627544](https://github.com/newrelic/gatsby-theme-newrelic/commit/662754458cf327ae32c904578522721a02b00d74))
* add localizedPath to Locale nodes ([089e59a](https://github.com/newrelic/gatsby-theme-newrelic/commit/089e59ac76279a528e503e9b7ae21de862b095ad))
* add the ability to disable sitemaps ([aa9a05c](https://github.com/newrelic/gatsby-theme-newrelic/commit/aa9a05c7f2a8fd384b49a6cfecb27bf25b6a4f71))
* added career link to footer ([91ac835](https://github.com/newrelic/gatsby-theme-newrelic/commit/91ac835feb31e82833a4e39d2d04a9731cda5630))
* adding missing helper function ([417eaf0](https://github.com/newrelic/gatsby-theme-newrelic/commit/417eaf089021ecd39d8bea3aa2ebe5e55d7b4435))
* adding missing imports ([a5e69bd](https://github.com/newrelic/gatsby-theme-newrelic/commit/a5e69bd9e9c9833ffa8668445108092f1702ce65))
* apply translations for all components ([408657e](https://github.com/newrelic/gatsby-theme-newrelic/commit/408657e0986427d7fa0373b3e6d83968156149a3))
* bump gatsby-plugin-newrelic ([ade95db](https://github.com/newrelic/gatsby-theme-newrelic/commit/ade95db49a008d23d15b4ca47985f0c15210d6a3))
* changes for cookie component ([48ee639](https://github.com/newrelic/gatsby-theme-newrelic/commit/48ee639ad0b526c99a4aa3aed5093cc64d135d1a))
* do not automatically create pages for additional locales ([de88460](https://github.com/newrelic/gatsby-theme-newrelic/commit/de88460a7e4efee4f36a27087df947dd97faaf12))
* ensure anchor links are treated the same as relative links ([815d31e](https://github.com/newrelic/gatsby-theme-newrelic/commit/815d31e136801e80c476e6a231c3b47b9c9d02dd))
* ensure mdx code block tests if language is a shell language ([8faf181](https://github.com/newrelic/gatsby-theme-newrelic/commit/8faf1816d64764b3f2e5cf29011342753e50fe03))
* ensure the repository field is always available in the site metadata type ([0ce7fa7](https://github.com/newrelic/gatsby-theme-newrelic/commit/0ce7fa715d93d93cda686dc71860dca3a320eda5))
* ensure title and titleTemplate fields are defined on SiteSiteMetadata type ([cebffa0](https://github.com/newrelic/gatsby-theme-newrelic/commit/cebffa00fe14f872cc1a1b4a23339d6afcfb6599))
* fallback for btoa so that sites can build ([7bbfec0](https://github.com/newrelic/gatsby-theme-newrelic/commit/7bbfec0fe7e0d03549a3c172d1b857c6f89f102b))
* filter out menu pages for docs results ([c5ca83b](https://github.com/newrelic/gatsby-theme-newrelic/commit/c5ca83ba887a2ad22f6067af0287193be4b43b3a))
* fix missing key warning on head element ([fdd4aed](https://github.com/newrelic/gatsby-theme-newrelic/commit/fdd4aedfb9347f8708f1df6cc362e0dd6cf46097))
* grammar haha ([d27de1b](https://github.com/newrelic/gatsby-theme-newrelic/commit/d27de1bd768d5a0964a96a7a6bb451c407c9ea0a))
* identify banners by slug and date, rather than ID ([282a120](https://github.com/newrelic/gatsby-theme-newrelic/commit/282a12059be0016dbd8d7f142304d1cdd6b0c7b6))
* let the browser navigate to relative links on the page ([09781d2](https://github.com/newrelic/gatsby-theme-newrelic/commit/09781d20b225a6fdb4829105a3f1c7e68001009f))
* Link will automatically localize paths ([b35e344](https://github.com/newrelic/gatsby-theme-newrelic/commit/b35e3442e5834cfc151d732b49f14c645e506200))
* make callout colors more subtle ([1893b77](https://github.com/newrelic/gatsby-theme-newrelic/commit/1893b77bcc1422153c13f7799425566c7920847e))
* make gatsby-plugin-mdx a peer dependency ([6eaa1b2](https://github.com/newrelic/gatsby-theme-newrelic/commit/6eaa1b273008c09028397d60d82ca765f75b1efd))
* make hreflang tag off siteUrl metadata ([334e658](https://github.com/newrelic/gatsby-theme-newrelic/commit/334e658fc9e0c3699683610cae3bce5e418379a2))
* moved wrapRootElement to each file ([10a0691](https://github.com/newrelic/gatsby-theme-newrelic/commit/10a0691026b0a7341938df73b2280a7c8ba06dcd))
* only create nodes if we have access to the correct functions ([0b4d596](https://github.com/newrelic/gatsby-theme-newrelic/commit/0b4d596e1bce256ed456994eb0e17290adc10818))
* remove double declared createNodeByType and add titleTemplate to SEO component ([567c4e5](https://github.com/newrelic/gatsby-theme-newrelic/commit/567c4e55a023784380ba58f69303c34e17dc415c))
* update options variables for consistency ([6ddebba](https://github.com/newrelic/gatsby-theme-newrelic/commit/6ddebba070be1d912817191f932729db36cb2ab7))
* use initialization variable ([2ff63de](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ff63de576e93247ec48bcf37566f2a01e4bd52c))
* use proper casing on hrefLang prop ([ffdacb2](https://github.com/newrelic/gatsby-theme-newrelic/commit/ffdacb29804ffbe88bb6ffc0ac91bee4912208e2))
* uses link from theme rather than gatsby ([e989335](https://github.com/newrelic/gatsby-theme-newrelic/commit/e989335a092075c8253920f0fd2f22109aeaf641))
* **Callout:** allow the user to disable the title completely ([0eba6db](https://github.com/newrelic/gatsby-theme-newrelic/commit/0eba6db21168c2404868a97a4aee34141d74a45c))
* **Callout:** ensure there is no title padding inside callout. Adjust spacing ([2e0bbf3](https://github.com/newrelic/gatsby-theme-newrelic/commit/2e0bbf35f127b8531b11b5d07d2babc8a5d6f784))
* **CodeBlock:** Instrument copy button clicks ([c30d11c](https://github.com/newrelic/gatsby-theme-newrelic/commit/c30d11c9db67156f0152f6670dd5f6bcdc198ac9))
* **CodeBlock:** lighten line highlight color and dont cover line numbers ([7a1e12f](https://github.com/newrelic/gatsby-theme-newrelic/commit/7a1e12f2e53a9c05369ff4a0f87a3a8abd9debbe))
* **CodeBlock:** set the language as jsx for all javascript code blocks ([6452e36](https://github.com/newrelic/gatsby-theme-newrelic/commit/6452e3641cd0e37f2c4109bb1d5d0155744708ef))
* **CodeBlock:** use translated strings for the copy button ([860f305](https://github.com/newrelic/gatsby-theme-newrelic/commit/860f3056ebc7116abcedddceeb762fd455a56025))
* **Collapser:** Open the collapser if navigating to it via a hash link ([d3bc0fb](https://github.com/newrelic/gatsby-theme-newrelic/commit/d3bc0fbc5f8c00fcc71d31680146980d3c3aec4d))
* **CookieConsentDialog:** Don't show cookie consent until the client has rendered ([fabf8e8](https://github.com/newrelic/gatsby-theme-newrelic/commit/fabf8e8018629f2da81c27944837fc02796f41f7))
* Add arrow-down, arrow-up, and arrow-right icons ([3239b22](https://github.com/newrelic/gatsby-theme-newrelic/commit/3239b2240ded1cf009ac1b2045d6645e7c8a42fb))
* add fe-corner-down-left icon ([8fc5135](https://github.com/newrelic/gatsby-theme-newrelic/commit/8fc51359a3ff262b20de1a67795bc54d57f4a334))
* Standardize issue button template with yes/no template ([b969984](https://github.com/newrelic/gatsby-theme-newrelic/commit/b96998442eb016850ef109d4eed6b5dbe1bbda3b))
* **ContributingGuidelines:** Update design treatment ([3a2ab5c](https://github.com/newrelic/gatsby-theme-newrelic/commit/3a2ab5cd26ab4e3d154c9169bd64897701751370))
* **Dropdown:** Add className support ([a64d250](https://github.com/newrelic/gatsby-theme-newrelic/commit/a64d2507a096d22e67daab464e0fdf811e9a8fd0))
* **GlobalFooter:** ensure width honors the layout max width ([57ddd54](https://github.com/newrelic/gatsby-theme-newrelic/commit/57ddd54672ef3ab0facf11b701fa224fda1ad7b5))
* **GlobalFooter:** set logo width and add responsive styles ([84e8030](https://github.com/newrelic/gatsby-theme-newrelic/commit/84e8030bf772f9d733f3c46e2d47bb951da492fc))
* **GlobalFooter:** Swap order of GitHub buttons to match contributing guidelines ([72df860](https://github.com/newrelic/gatsby-theme-newrelic/commit/72df86088958c2a1167e7c928d010f7f17c15427))
* **GlobalHeader:** remove flash of unstyled content by using media queries instead of JS for search box ([cc333a1](https://github.com/newrelic/gatsby-theme-newrelic/commit/cc333a18402e488d59c0fb730c590c30b721a00a))
* **GlobalStyles:** lighten mark background in dark mode and darken links inside marks ([bd6bf10](https://github.com/newrelic/gatsby-theme-newrelic/commit/bd6bf103fd07e3c6cc6c51a7b2e41078026013d7))
* **GlobalStyles:** make var more like a code tag ([1614ad4](https://github.com/newrelic/gatsby-theme-newrelic/commit/1614ad46850a7aafb228de0822c26ea42fb3f6c8))
* **Icon:** add ability to specify defs for an icon ([99e40cb](https://github.com/newrelic/gatsby-theme-newrelic/commit/99e40cbcdf40418d924f86b94e8a8fb597f8e6b7))
* **Icon:** add arrow-left feather icon ([fac2552](https://github.com/newrelic/gatsby-theme-newrelic/commit/fac2552950bcfb7c1813f7138890965711fcab8d))
* **MenuItem:** add support for as prop ([cdca5ad](https://github.com/newrelic/gatsby-theme-newrelic/commit/cdca5adcde4b3356c1d86baa6360d0123da4f95d))
* **NavItem:** Ensure children are matched against the localized URL ([f80e5a2](https://github.com/newrelic/gatsby-theme-newrelic/commit/f80e5a2122fe8e8fe45fc7e1023aa2762fb6dc76))
* **NavItem:** match on trailing slash and localized links ([08e7f28](https://github.com/newrelic/gatsby-theme-newrelic/commit/08e7f28247fb56d6c32c37531cb0189625f19670))
* **Table:** Vertically align the text in cells to the top of the cell instead of the center ([b7fd46f](https://github.com/newrelic/gatsby-theme-newrelic/commit/b7fd46fc0c0e5e6321f2ff1e03658303aa840b73))
* Add support for Japanese and add translation strings ([f68bb53](https://github.com/newrelic/gatsby-theme-newrelic/commit/f68bb534454651a2c1715c3e1ec079208b7fee93))
* more correct with initial state ([df304c4](https://github.com/newrelic/gatsby-theme-newrelic/commit/df304c4a58666238910305f5adb101fb92a75482))
* prefix all icons depending on the library it comes from ([bc109a8](https://github.com/newrelic/gatsby-theme-newrelic/commit/bc109a8deaf03c0d0f2f95581875c2b1d03d8e67))
* proper casing on search input placeholder ([66eca33](https://github.com/newrelic/gatsby-theme-newrelic/commit/66eca33a2c47efdeae72b854e5a262d3a1adb1e8))
* remove mdx config from theme ([112f4cf](https://github.com/newrelic/gatsby-theme-newrelic/commit/112f4cf5103a74b19ef2ea1c06924117a6138a00))
* remove translation on button hover styles ([b62a52a](https://github.com/newrelic/gatsby-theme-newrelic/commit/b62a52ae9eb97d0a89ce0f8f01215d85657117d4))
* source locales as nodes instead of via resolvers ([ce523e6](https://github.com/newrelic/gatsby-theme-newrelic/commit/ce523e6460cd242c0b7787959be131e77ac4d8bc))
* Update Japanese translation for sign up button ([b52a60f](https://github.com/newrelic/gatsby-theme-newrelic/commit/b52a60f9aa2fc18a9bc3fe200927bd0e4e704938))
* **404:** Instrument hits to the 404 page ([6a8f6bf](https://github.com/newrelic/gatsby-theme-newrelic/commit/6a8f6bf98c82d622c9dfeb509a48f824b1be8b9c))
* **CreateIssueButton:** Instrument the click action ([1aa0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/1aa0e76639c241fc6dcf6b28320f5ff4f5ee45f2))
* **Dropdown:** Add ability to disable chevron and add className support to Dropdown.Toggle ([2cccfac](https://github.com/newrelic/gatsby-theme-newrelic/commit/2cccfac172091d536e6feb1f6cff89d486b16e27))
* **ExternalLink:** Instrument clicks ([e5f01a8](https://github.com/newrelic/gatsby-theme-newrelic/commit/e5f01a8fb79d205222f67043b701360c1d02ccdc))
* **GlobalHeader:** Better mobile styles ([c99a851](https://github.com/newrelic/gatsby-theme-newrelic/commit/c99a85150ee7ed5001aaa6a00232afbb53cf48d5))
* **GlobalStyles:** tighten up spacing on headers and add some spacing between headers on pages ([67465cc](https://github.com/newrelic/gatsby-theme-newrelic/commit/67465cc53987e1612d50f9dbdaa10b9570e988ef))
* **HamburgerMenu:** add active styles when the button is pressed ([a6fdc08](https://github.com/newrelic/gatsby-theme-newrelic/commit/a6fdc08957a6ff8266342e481fc44397f5690784))
* **HamburgerMenu:** update design ([5f6999a](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f6999a40d4f3fe2b39417ffbf3dabad7f9522d7))
* **Link:** Forward ref to the underlying link component ([d28b3de](https://github.com/newrelic/gatsby-theme-newrelic/commit/d28b3dea70fdda0f51191f05c1a3aa7284928eec))
* **Link:** Instrument clicks ([6ddd4a6](https://github.com/newrelic/gatsby-theme-newrelic/commit/6ddd4a6a16d29e0654313b9ee04752b5d269dd10))
* **MarkdownContainer:** add figcaption styles ([4e718c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e718c9a7a3fb900f74b577198dbc61b22f1b8bf))
* **NavItem:** Add mobile styles ([3ad70fa](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ad70fa840fc062d48474959e5683d9bc521b0b0))
* **NavLink:** Properly horizontal align the external link and chevron icons in the nav ([3df02e0](https://github.com/newrelic/gatsby-theme-newrelic/commit/3df02e0a0f3945790d8f9666ad02807045bdebf3))
* **TableOfContents:** Add Japanese translation for title ([4061bd4](https://github.com/newrelic/gatsby-theme-newrelic/commit/4061bd423dba5a0cccf7beb25ea07ec113d39fbd))
* Add log-in feather icon ([be18586](https://github.com/newrelic/gatsby-theme-newrelic/commit/be18586a813f9fde15d86162efb021d4e34c5731))
* **PageTools:** remove layout-specific styles ([b998aa0](https://github.com/newrelic/gatsby-theme-newrelic/commit/b998aa0c82ec0396706ae8890c7b9fceff5cf908))
* **ResultView:** Instrument clicks on links ([79554e5](https://github.com/newrelic/gatsby-theme-newrelic/commit/79554e539c426a34e16526d0798c6f47917b9165))
* **TableOfContents:** Instrument clicks on headings ([3ac7a9e](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ac7a9e3407447283133b262cb5c1b9c38bbf20a))
* **Terminal:** use translated strings for the copy button ([af335ec](https://github.com/newrelic/gatsby-theme-newrelic/commit/af335ecdce54ae5855b2e4c08b9b0e6609687c48))
* **useKeyPress:** Maintain casing when checking against pressed keys since casing does matter on some keys (i.e. `ArrowUp` and `ArrowDown`) ([79110de](https://github.com/newrelic/gatsby-theme-newrelic/commit/79110de59e5da0b0c138ea5ef70ba029fe75be76))
* add mobileBreakpoint to layout configuration ([2abd0b5](https://github.com/newrelic/gatsby-theme-newrelic/commit/2abd0b5373886897546a697745bfce10722ff787))
* Fix reference to undefined variable ([30e0347](https://github.com/newrelic/gatsby-theme-newrelic/commit/30e03474416ecf8e098bed28044ea01be3a489f5))
* Minor style updates for search to reduce spacing ([fad4035](https://github.com/newrelic/gatsby-theme-newrelic/commit/fad40356d6d63712ebca30e1b1af57d9663443e2))
* **SimpleFeedback:** Instrument clicks for feedback buttons ([d69915f](https://github.com/newrelic/gatsby-theme-newrelic/commit/d69915f38bd58f8b7eb0cbdecf8b1f50eed3e6bb))
* **SwiftypeSearch:** Instrument searches ([7f69177](https://github.com/newrelic/gatsby-theme-newrelic/commit/7f6917792ba5b7f687c4e7d6968f98784a1acbbb))
* add newrelic logo to logo icons ([9f5b21e](https://github.com/newrelic/gatsby-theme-newrelic/commit/9f5b21eaf010cdc8aa906671cc5c954ebc035cfe))
* allow className on RelatedResources component ([d4e421b](https://github.com/newrelic/gatsby-theme-newrelic/commit/d4e421b18aa573a2fd3f21b99eedef79212fe483))
* remove Feedback component that is not used nor should be used. Use SimpleFeedback instead ([5e4082b](https://github.com/newrelic/gatsby-theme-newrelic/commit/5e4082be0b7e0e374899b3c11e875a6f170522c2))
* update HamburgerMenu design ([0a12364](https://github.com/newrelic/gatsby-theme-newrelic/commit/0a12364b8e32f3aedad62edc5f6d4bcbfc405677))
* update tests to include LocationProvider to fix test failures ([5c601e6](https://github.com/newrelic/gatsby-theme-newrelic/commit/5c601e6bf47fc6b3864e96dc17eab7236020c3b4))
* upgrade @wry/equality from 0.2.0 to 0.3.0 ([7ba00f3](https://github.com/newrelic/gatsby-theme-newrelic/commit/7ba00f33ad4b48011104d61ad05950e18b78df22))
* upgrade gatsby-plugin-newrelic ([adeebe4](https://github.com/newrelic/gatsby-theme-newrelic/commit/adeebe43133deb8145d061729925e8f0a21b089f))
* **NavItem:** Filter nav items based on search term ([ce64f3d](https://github.com/newrelic/gatsby-theme-newrelic/commit/ce64f3d594ea43b9d6fb66ff7b025256d1ab4255))
* **SearchInput:** Horizontal spacing adjustments for small search inputs ([2e88011](https://github.com/newrelic/gatsby-theme-newrelic/commit/2e88011ec2423eb7a8499e19bdf625c0bad69109))
* **SimpleFeedback:** Update design treatment ([c3d8083](https://github.com/newrelic/gatsby-theme-newrelic/commit/c3d8083600f40370b96c9436860c6b2b68b5cfb2))
* make a minor change to the contributing guide verbiage ([9f1c3e2](https://github.com/newrelic/gatsby-theme-newrelic/commit/9f1c3e2ff5e0f143f5f50274ace9252aba049032))
* Use terser language on GitHub buttons ([0a53b66](https://github.com/newrelic/gatsby-theme-newrelic/commit/0a53b661e5902df05b2851f8c03be68c72352811))
* use the New Relic logo as the default Logo implementation ([deeb226](https://github.com/newrelic/gatsby-theme-newrelic/commit/deeb2265ef73e7a4400c45796b574d1d5f80f031))


### Features

* **tessen:** enable sites to optionally update to latest tessen ([85f9d2d](https://github.com/newrelic/gatsby-theme-newrelic/commit/85f9d2dcff32be7fd2ac769ea7185ec90bcf984f))
* add a Collapser component ([1f5de9d](https://github.com/newrelic/gatsby-theme-newrelic/commit/1f5de9de927f2f8b84db012c54a76d28464f307c))
* add a ContributingGuidelines component to use with the PageTools component ([5ec5689](https://github.com/newrelic/gatsby-theme-newrelic/commit/5ec5689c546d83dacc4d2275aeabe0fed1e900d5))
* Add course to callout variants ([116c9ad](https://github.com/newrelic/gatsby-theme-newrelic/commit/116c9adaf6f71c04c53b83c9425c572f77578fa1))
* add OneTrust snippet only if set ([2e5c6d8](https://github.com/newrelic/gatsby-theme-newrelic/commit/2e5c6d8a8eb89698a81ec66777c568f82eef2ba9))
* add plus icon for IO ([fd79f03](https://github.com/newrelic/gatsby-theme-newrelic/commit/fd79f039802e6cc2e2000853a18dfadb339411a8))
* add quick_starts to SwiftType filtering in SearchModal ([12185b6](https://github.com/newrelic/gatsby-theme-newrelic/commit/12185b6e5f34a479f55242799ac9c791fa406496))
* adding the ability to set the currently active site ([c9e80a6](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9e80a638c388a9fdaa5e47a5fb2073648aa28a2))
* cut 2.0 release ([b8dd06f](https://github.com/newrelic/gatsby-theme-newrelic/commit/b8dd06fa230addb6e49449fe89e1a3d84fd12942))
* explicitly track previous route as referrer in tessen ([1423aeb](https://github.com/newrelic/gatsby-theme-newrelic/commit/1423aebe7e880e92d89a25a6034f65ca8a321cbc))
* Update feedback component functionality and tracking ([6f9b862](https://github.com/newrelic/gatsby-theme-newrelic/commit/6f9b8625f84c3558f5154354cea4fb234be11b1e))
* **analytics:** add google tracking manually if not using tessen ([66a4995](https://github.com/newrelic/gatsby-theme-newrelic/commit/66a49952aba173f8832f9858de4f16fcabfa1ca8))
* **analytics:** track when users agree to cookie usage ([ea27927](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea27927d38a6139b1271d249126ff03af7b3e04e))
* **Link:** Honor forceTrailingSlashes config and append a trailing slash when needed ([e330a33](https://github.com/newrelic/gatsby-theme-newrelic/commit/e330a3301fc3beb1f64e3e572e66ace7cbaa715d))
* **search:** only search for pages in current locale's language ([824b4ae](https://github.com/newrelic/gatsby-theme-newrelic/commit/824b4ae123f6c0ec1a41b059ddf0ca2ae3438a4d))
* **search:** support searching docs jp content ([d975db6](https://github.com/newrelic/gatsby-theme-newrelic/commit/d975db6638147b9c0769efaf96545f66d7fc0722))
* **SEO:** add swiftype type field for nr subdomain sites and their locales ([3285f88](https://github.com/newrelic/gatsby-theme-newrelic/commit/3285f88916927fe8bab44c12dca83c1b913a9020))
* **SplitColorButton:** add split button to header ([f8ef271](https://github.com/newrelic/gatsby-theme-newrelic/commit/f8ef271fb69d85a073c46b50d1ab2828d985d565))
* **tessen:** add customer id via segment cookie with all tessen calls ([f38cd08](https://github.com/newrelic/gatsby-theme-newrelic/commit/f38cd08b120aae832dbf7f39180ef333fbd5d9de))
* add a default 404 page ([bffc8a9](https://github.com/newrelic/gatsby-theme-newrelic/commit/bffc8a9a7208be3fc0a63ddc2617e0cafccb16a9))
* Add a Layout component + subcomponents to easily create layouts ([da12b3d](https://github.com/newrelic/gatsby-theme-newrelic/commit/da12b3d4ba274f87eabee6fdad734b2fbe82121a))
* add a Link component that acts as a smart link for ([8a17930](https://github.com/newrelic/gatsby-theme-newrelic/commit/8a17930454f82c9c915f28b441cf976211014704))
* add a NavItem component ([5c6cb80](https://github.com/newrelic/gatsby-theme-newrelic/commit/5c6cb80047c7f2df51cb7ac868737e8d1519c5c7))
* add a NewRelicThemeConfig field to the GraphQL schema ([4e6ba5b](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e6ba5b6fbba548b2731bad7b9e71b054223b290))
* add a Spinner component ([835a0cb](https://github.com/newrelic/gatsby-theme-newrelic/commit/835a0cb14acd59fbd6d03a2df728a27cafcfb8e4))
* Add a Terminal component that can be used to display shell output ([d21b3df](https://github.com/newrelic/gatsby-theme-newrelic/commit/d21b3df2516faaede4d6be325029233d31419eae))
* add a useActiveHash hook ([b97d09f](https://github.com/newrelic/gatsby-theme-newrelic/commit/b97d09f471e603b4e0dcc227be4c417e5d5db173))
* add a useInstrumentedData hook ([707e789](https://github.com/newrelic/gatsby-theme-newrelic/commit/707e78933b4fe2d82f168a1a24eb0e55ca231a2a))
* add a useInstrumentedHandler hook to easily instrument a handler with New Relic browser ([3e27459](https://github.com/newrelic/gatsby-theme-newrelic/commit/3e27459540e96e45790a9f3fdaa6f9a2c3359970))
* add a useLocale hook ([7d4ceb6](https://github.com/newrelic/gatsby-theme-newrelic/commit/7d4ceb68e96d6a33a411780680c0bb5a994ba858))
* add a useScrollFreeze hook ([de064cc](https://github.com/newrelic/gatsby-theme-newrelic/commit/de064cce3737a7d543d93a22da708d0bf2af7371))
* add a useTessen hook to track tessen actions ([2c93396](https://github.com/newrelic/gatsby-theme-newrelic/commit/2c93396f89a3e87c83bec8957c945173cc14fc93))
* add a useWarning hook ([c59bd74](https://github.com/newrelic/gatsby-theme-newrelic/commit/c59bd74cbf24d38140b6cc49ef04cc396f0d8c96))
* add ability to auto track page views via tessen on route updates ([635fe8f](https://github.com/newrelic/gatsby-theme-newrelic/commit/635fe8f9b9d13e777dcbdc63b241de1359c32ebd))
* add an MDXCallout component ([5829c84](https://github.com/newrelic/gatsby-theme-newrelic/commit/5829c847ef15aa2439a7f5e77b111822bc7949d7))
* add locale configuration to GraphQL ([2ed004b](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ed004b408068af01db99c8ff5e906625914b7bc))
* add newrelic icon set with tdp, fso, and ai icons ([bab4b8a](https://github.com/newrelic/gatsby-theme-newrelic/commit/bab4b8ad4d48fd3a2e398d175b52b93f83d9dda8))
* add option to force trailing slashes ([4c05933](https://github.com/newrelic/gatsby-theme-newrelic/commit/4c0593359bc4c0b62b9c30be5bd3dc2dd73f9129))
* add optional prop to specify icon ([e2be8a7](https://github.com/newrelic/gatsby-theme-newrelic/commit/e2be8a797ce6a4e251970e1173fa2d3d55ec2e85))
* add sass syntax highlighting support ([3cea9d8](https://github.com/newrelic/gatsby-theme-newrelic/commit/3cea9d8138e65e9ae91af743e7c4dd4556b230c1))
* add scss syntax highlighting support ([9122320](https://github.com/newrelic/gatsby-theme-newrelic/commit/912232031473529007f2360269907834eebc6b92))
* add SearchModal component ([048811d](https://github.com/newrelic/gatsby-theme-newrelic/commit/048811da781d5c9de56b873ae4062fc6b0dfb449))
* added a footer component ([4b0c0a1](https://github.com/newrelic/gatsby-theme-newrelic/commit/4b0c0a13aafdcd788213f8fc7173691179627c33))
* added a logo that can be extended ([0222147](https://github.com/newrelic/gatsby-theme-newrelic/commit/0222147c95e8fd9da2282b8d2f454b19c146d8ba))
* added Backdrop component ([9667fc0](https://github.com/newrelic/gatsby-theme-newrelic/commit/9667fc0e13538ef2895a7b532b28832438723cbe))
* added documentation for Cookie Consent Dialog ([20a8273](https://github.com/newrelic/gatsby-theme-newrelic/commit/20a827330721b70c7a576d135898bd937aa02c24))
* added signup button logic ([6c4ed43](https://github.com/newrelic/gatsby-theme-newrelic/commit/6c4ed43b37ab1e3b350f06de2dbe817b91881f65))
* added SimpleFeedback component ([2ea622b](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ea622b53bdc56c398fbee70f80e5836fb82c0c7))
* adding the ability to specify swiftype options ([024a55b](https://github.com/newrelic/gatsby-theme-newrelic/commit/024a55b51b07fc51146b1b85135a5058c62cb765))
* adds cookie consent dialog box and gdpr plugin to theme ([09057ca](https://github.com/newrelic/gatsby-theme-newrelic/commit/09057ca1667360d407b8a0ba2d299f6c8d8c23c2))
* adds custom attribute to components ([20f1fbb](https://github.com/newrelic/gatsby-theme-newrelic/commit/20f1fbb1311a01f1aacb544b9241100442ff95c4))
* allow layout component to be configured to automatically configure gatsby-plugin-layout ([39141e2](https://github.com/newrelic/gatsby-theme-newrelic/commit/39141e2c7b5423a9698671a7d9f57a3dfb740b7c))
* Always allow related resources from frontmatter. Add ability to selectively fetch related resources from swiftype ([f6d93be](https://github.com/newrelic/gatsby-theme-newrelic/commit/f6d93be832c99bfa8c3b0259fd2832a8335d90a7))
* automatically create translation files for each supported language and namespace ([e82fbfb](https://github.com/newrelic/gatsby-theme-newrelic/commit/e82fbfb49643a5458aedc3acb60d4d0397be09fd))
* automatically filter out frontmatter resources and redirects in swiftype query ([840ac82](https://github.com/newrelic/gatsby-theme-newrelic/commit/840ac82c594baa29a9d966a6b534ffe1eec8a70b))
* builds pages based on file relative path ([517df7c](https://github.com/newrelic/gatsby-theme-newrelic/commit/517df7c581047032e80cedc48fdd991d427686b9))
* calls to swiftype with usequery ([e72867d](https://github.com/newrelic/gatsby-theme-newrelic/commit/e72867db088a8c58a4473dc93ff52c657130604b))
* can navigate between results ([891cc11](https://github.com/newrelic/gatsby-theme-newrelic/commit/891cc111f14b6e9d6af550aea83ac5203e5cfc85))
* create a CollapserGroup component ([e2704c6](https://github.com/newrelic/gatsby-theme-newrelic/commit/e2704c6d8e633a0586aaad44d8695cc36187f576))
* Create a CreateIssue button ([55e6a90](https://github.com/newrelic/gatsby-theme-newrelic/commit/55e6a90cb62e629d8e20a6eeedf943ab64f94806))
* create a Dropdown component ([9fcb802](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fcb8029a3aafd966fc09fb9ede2955e41916f32))
* create a GitHubIssue button component to make it easy to create a new GitHub issue with params ([848a1d3](https://github.com/newrelic/gatsby-theme-newrelic/commit/848a1d36b55fd0d8f40aba71a02e1ce9a586b5d2))
* Create a MarkdownContainer to wrap markdown content ([baa01b4](https://github.com/newrelic/gatsby-theme-newrelic/commit/baa01b44b5bbf41ce6cbfc9acf3615922f32f925))
* Create a MobileHeader component ([525989c](https://github.com/newrelic/gatsby-theme-newrelic/commit/525989c329229a7bbd7eba5619f676fe3e1d4c9d))
* create a MobileNavigation component ([cfe9953](https://github.com/newrelic/gatsby-theme-newrelic/commit/cfe9953a70ac24d16dc52af01015c710ce608606))
* create a PageTools component that can be used to display page-specific UI ([d8f8f38](https://github.com/newrelic/gatsby-theme-newrelic/commit/d8f8f38a3b9c5c467b88a651aadc881ffe7b1847))
* Create a RelatedResources comnponent to use with PageTools ([4c73365](https://github.com/newrelic/gatsby-theme-newrelic/commit/4c73365a4e369bdd522e2eab69a1bffa8a899e6a))
* Create a TableOfContents component ([9c18c32](https://github.com/newrelic/gatsby-theme-newrelic/commit/9c18c3252cc46d7e449860d55d6628fa7555dc26))
* Create a TextHighlight component ([8740878](https://github.com/newrelic/gatsby-theme-newrelic/commit/87408784605c24cb54f9c3efa3742145b3a4027a))
* Create an EditPageButton component ([3aafd45](https://github.com/newrelic/gatsby-theme-newrelic/commit/3aafd45f3a5138033d00e9b4ae9bea84ed667497))
* Create an InlineCode component ([ab07ab3](https://github.com/newrelic/gatsby-theme-newrelic/commit/ab07ab3ada18216459ed16f209afae110698fa7e))
* Create an MDX component to render MDX content with default mapped components ([210f5bd](https://github.com/newrelic/gatsby-theme-newrelic/commit/210f5bdb9144d06c3c6d0b81bf9cc2911d5c98f3))
* Create an MDXCollapserGroup component ([6dde701](https://github.com/newrelic/gatsby-theme-newrelic/commit/6dde701682d48d65e764a0ae2df0b353f82f4c85))
* Create an MDXLink component ([f7b0ea7](https://github.com/newrelic/gatsby-theme-newrelic/commit/f7b0ea7a53e621edeaaffe20b453730e34b6f8ab))
* create an MDXTable component ([3bc0778](https://github.com/newrelic/gatsby-theme-newrelic/commit/3bc0778645b004ac78c126f8ad2518d9d15e7d38))
* Create an MDXVideo component that wraps a Video for MDX content ([a46d4cb](https://github.com/newrelic/gatsby-theme-newrelic/commit/a46d4cb8bdb22324d77101a0d53638aa2f194415))
* create localized routes for pages in src/pages ([da7b7d4](https://github.com/newrelic/gatsby-theme-newrelic/commit/da7b7d4a23c4a27824af605b0b2425972200a841))
* create new Navigation component ([5aba671](https://github.com/newrelic/gatsby-theme-newrelic/commit/5aba671fb7f2295c6b96c38b7a05ee36186389d2))
* documentation for usePrevious hook ([38c5c1e](https://github.com/newrelic/gatsby-theme-newrelic/commit/38c5c1e6c385e9efdacce32c79b6b668e40d6e14))
* export FeatherSVG to use for shadowing ([f3b6ba0](https://github.com/newrelic/gatsby-theme-newrelic/commit/f3b6ba058a15c02c92c800abecdf23532197fb5e))
* filtering available with search and no results message ([81da39a](https://github.com/newrelic/gatsby-theme-newrelic/commit/81da39a8359876717c1bab4e72c160e8e8e3d793))
* localizes paths for newrelic.com ([32f488e](https://github.com/newrelic/gatsby-theme-newrelic/commit/32f488e37859874871ffee7747ee84c904675d4e))
* re-export all modules from react-i18next ([448a4bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/448a4bc20603df425a338fdb4aa3fb21d210198f))
* renders content from swiftype ([ab042bf](https://github.com/newrelic/gatsby-theme-newrelic/commit/ab042bf3ab05d5f5819629b2b38ec7acbf0b8a14))
* renders content on the right side ([9a539db](https://github.com/newrelic/gatsby-theme-newrelic/commit/9a539db4348f148c3142d0afa6b37e895758042e))
* resolved feedback ([c21a9ab](https://github.com/newrelic/gatsby-theme-newrelic/commit/c21a9abe032ec0aef7c8654233696e60cacd21de))
* Revamp the locale data. Remove localePath and rely on locale directly. ([c79b2aa](https://github.com/newrelic/gatsby-theme-newrelic/commit/c79b2aaf3066f9e77ce2ddd1163b2f3651771581))
* SEO component added to theme and adds hreflang tags ([b210d7d](https://github.com/newrelic/gatsby-theme-newrelic/commit/b210d7d1530eece5eb38187ae05cc41a715749f8))
* set locale in page context if its not already set ([3baa726](https://github.com/newrelic/gatsby-theme-newrelic/commit/3baa7264044ba13ab4899e4242e3d7b190b517b1))
* shows on this page in the result preview ([d478b4a](https://github.com/newrelic/gatsby-theme-newrelic/commit/d478b4a35452e93ae30b2f91b03d3135ae010531))
* support opening collapsers by default via query param ([3017a82](https://github.com/newrelic/gatsby-theme-newrelic/commit/3017a82a1e32e7f17c94c161121b0b1e69d7a742))
* table component added to the theme ([02a23b9](https://github.com/newrelic/gatsby-theme-newrelic/commit/02a23b90494367c7af9969be8834d7d9d0019b66))
* tracks tessen for sign up links and allows to specify component ([9360241](https://github.com/newrelic/gatsby-theme-newrelic/commit/9360241483445b83ac09d390fe50b8d6c6b289b1))
* update cookie consent to disable tessen until consent is given ([c7682d1](https://github.com/newrelic/gatsby-theme-newrelic/commit/c7682d1040caf50318f898af88508f7dbe36d4b1))
* update gatsby and related deps ([3cb3ef4](https://github.com/newrelic/gatsby-theme-newrelic/commit/3cb3ef45d75760ac2f47f692cf90091444ac6418))
* update GlobalHeader to show available locales ([13ac4c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/13ac4c9a9d5d1ec142e6bd249e4eaac2115b9266))
* Upgrade to Gatsby 3 ([df4fd2c](https://github.com/newrelic/gatsby-theme-newrelic/commit/df4fd2cffb9f332660caf8e954237d2a4f93c2c6))
* wrap page element with initialized i18n instance and provider ([d4c2aba](https://github.com/newrelic/gatsby-theme-newrelic/commit/d4c2abab29a56134ef68c539fe4d742ed204793e))
* **AnnouncementBanner:** add Icon and link styles ([9184766](https://github.com/newrelic/gatsby-theme-newrelic/commit/91847663f78debe9f9a419336ae2132d93b04d9e))
* **Button:** add a plain variant ([8aa5e75](https://github.com/newrelic/gatsby-theme-newrelic/commit/8aa5e75c76403be0eda3abfee68c38a256232a5d))
* **CodeBlock:** add the ability to disable auto formatting ([429cc2a](https://github.com/newrelic/gatsby-theme-newrelic/commit/429cc2ac2c38d7cebf959b9106b730657095e4ed))
* **CodeBlock:** allow var, mark, and anchor tags within code blocks ([a916fbb](https://github.com/newrelic/gatsby-theme-newrelic/commit/a916fbb0982a33067308f5b81d7db30df16f6baf))
* **CodeBlock:** enable auto formatting for particular languages if not supplied ([8b844bb](https://github.com/newrelic/gatsby-theme-newrelic/commit/8b844bb8f90ce3afd3387b30031d0371cab3a4f0))
* **formatCode:** auto detect parser based on the language ([1653fca](https://github.com/newrelic/gatsby-theme-newrelic/commit/1653fcaa6bd1c45444edbc838882159574cdc760))
* **formatCode:** support code formatting for more languages ([dac0370](https://github.com/newrelic/gatsby-theme-newrelic/commit/dac0370abdbe809e5644d4a4a0c55568f983dc65))
* **GlobalHeader:** Remove split treatment and tracking. Remove old GitHub links. ([6826de7](https://github.com/newrelic/gatsby-theme-newrelic/commit/6826de71190512b84c9a19a790ff909ab9e8417e))
* **search:** change placeholder text of global search ([fca54aa](https://github.com/newrelic/gatsby-theme-newrelic/commit/fca54aade95e1f93f10310a2527669b1c0374aa6))
* **search:** change placeholder value for new search bar ([a39a2ee](https://github.com/newrelic/gatsby-theme-newrelic/commit/a39a2ee7c0beea2938633f2d247f25aa5fe30cc1))
* automatically add fileRelativePath to mdx nodes and pages ([6e91cd6](https://github.com/newrelic/gatsby-theme-newrelic/commit/6e91cd680fb6b33af1ccff0546e183a3741350ea))
* put the utm source in graphql and allow it to be overridden in siteMetadata ([f2c4baa](https://github.com/newrelic/gatsby-theme-newrelic/commit/f2c4baac467f675d0984153f10e110a2ae96b605))
* **GlobalHeader:** replace the search icon with a search input on larger screens ([6fb11a9](https://github.com/newrelic/gatsby-theme-newrelic/commit/6fb11a9057fa68d10159e12a6b48adc9c6711b24))
* **GlobalStyles:** Define box shadows ([d86cf31](https://github.com/newrelic/gatsby-theme-newrelic/commit/d86cf31def1bf4d9b793fc20bb65fec2f3480e39))
* **MDXCodeBlock:** automatically render a Terminal component if the language is a shell language ([ac24e4f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac24e4ffb8ffc2bceeb6e6df83b6c65805d9ed1e))
* **search:** add facet components for filtering by site source ([0628f75](https://github.com/newrelic/gatsby-theme-newrelic/commit/0628f7553abf85aa56a47b3a1e08aa877c97a343))
* **search:** filter results to 3 specific sites and allow user to change filter ([b152665](https://github.com/newrelic/gatsby-theme-newrelic/commit/b152665dbe39304c25dc4caad2f40203717bdbd2))
* **search:** focus search input when search overlay opens ([3f1b69a](https://github.com/newrelic/gatsby-theme-newrelic/commit/3f1b69ac0518930648c62f52ad83a5d932e34e67))
* **SearchInput:** add a small size ([a31692b](https://github.com/newrelic/gatsby-theme-newrelic/commit/a31692bde9f95e5a88a86e6246fe3038ad628c12))
* **SearchInput:** allow refs to be attached ([75e1d88](https://github.com/newrelic/gatsby-theme-newrelic/commit/75e1d8898e8875ce49eaff4caf184e06ccad5057))
* **SearchInput:** make it easier to detect when user has submitted search ([8c53c02](https://github.com/newrelic/gatsby-theme-newrelic/commit/8c53c02bfc2d22f652b27bffcbbeecf132142e22))
* **useKeyPress:** Allow multiple key combinations to be specified ([bce720d](https://github.com/newrelic/gatsby-theme-newrelic/commit/bce720decd603d44c854a301b90e0f5ded343b6d))
* Add a callout component ([7edef05](https://github.com/newrelic/gatsby-theme-newrelic/commit/7edef0553c5a3052395ddcae124bb4ca246a81b5))
* add ability to specify mdx configuration for gatsby-plugin-mdx ([c450f5d](https://github.com/newrelic/gatsby-theme-newrelic/commit/c450f5d67b27115ea6094e772d2499789063fd0b))
* add login link to the global header ([d324fcc](https://github.com/newrelic/gatsby-theme-newrelic/commit/d324fcc5590d130340eb5095d9d6d4704c2e7109))
* add the announcement banner to the global header ([a7505c8](https://github.com/newrelic/gatsby-theme-newrelic/commit/a7505c8a3229e29a0834171a94b7b8c7dd1c6f4c))
* create an AnnouncementBanner component that composes the Banner ([a9819ce](https://github.com/newrelic/gatsby-theme-newrelic/commit/a9819ceb2292c45bbe37d93076279cf97542c285))
* dismisses banner persists ([8ad855f](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ad855f8f9ce455947f369e405b225a88f05e728))
* get announcement via mdx file in place ([4da7bf8](https://github.com/newrelic/gatsby-theme-newrelic/commit/4da7bf8645d681b9e00cd4990e0f6e5bb8e52263))
* update AnnouncementBanner to handle sourcing announcements ([e69fb4c](https://github.com/newrelic/gatsby-theme-newrelic/commit/e69fb4c00ee5edc113e3915e679d7f811e448345))
* wrap root element with layout context with layout options from config. Add useLayout hook ([eee0b2d](https://github.com/newrelic/gatsby-theme-newrelic/commit/eee0b2da3958a402358b59789b4baa2acb5caba3))


### Performance Improvements

* extract result list into own component and wrap in memo to help typing performance ([c538a72](https://github.com/newrelic/gatsby-theme-newrelic/commit/c538a72c221935a332a16e6242d4170e6bbb3475))


### Reverts

* Revert "chore: using `first-of-type` to suppress warnings" ([9b19caa](https://github.com/newrelic/gatsby-theme-newrelic/commit/9b19caa701dbf4e169de5701a77d1d2e3e290d2c))


### BREAKING CHANGES

* Update peer dependencies to Gatsby 3
* peer dependencies have all been updated to work with
Gatsby 3.



## 1.8.2 (2020-09-03)


### Bug Fixes

* **Button:** ensure all buttons are the same size regardless of border ([efeb5fe](https://github.com/newrelic/gatsby-theme-newrelic/commit/efeb5fec31344dd0ef0c6539ffd238b21947466c))
* track clicks to all actions in the global header under a common event ([314c365](https://github.com/newrelic/gatsby-theme-newrelic/commit/314c365877c1ad1ae615dd5be870041b40c9214a))


### Features

* marketing banner component ([e9e2457](https://github.com/newrelic/gatsby-theme-newrelic/commit/e9e2457ea12b5831346962f2bc1b7ddc4f700f13))



## 1.8.1 (2020-09-03)


### Bug Fixes

* do not fall back to development settings when resolving env options ([1778665](https://github.com/newrelic/gatsby-theme-newrelic/commit/1778665b8bc3c528534eec3fcf27b8118f7aafbc))



# 1.8.0 (2020-09-02)


### Bug Fixes

* always enable search ([f43f226](https://github.com/newrelic/gatsby-theme-newrelic/commit/f43f2266409fd1c4d81d72c62ea2814faf799d7f))
* small tweak to button transition ([5fba04a](https://github.com/newrelic/gatsby-theme-newrelic/commit/5fba04a31ae63d5efe3594bfc4cb00281d13ee0a))
* track clicks to the global header links ([de5a52c](https://github.com/newrelic/gatsby-theme-newrelic/commit/de5a52c5a6a2536f5529223b26d492eb59ed1be4))


### Features

* **Button:** add a new outline variant ([da8fdbd](https://github.com/newrelic/gatsby-theme-newrelic/commit/da8fdbdc18c4b2019e89f577aa8e6643bc06a839))
* add a useSplitTreatment hook to make getting a treatment easier ([4293736](https://github.com/newrelic/gatsby-theme-newrelic/commit/4293736f0b7d9bb7aa7883e7f43d98dfa7dc22ca))
* add a useUserId hook to generate a unique ID for the browser ([d1f4f79](https://github.com/newrelic/gatsby-theme-newrelic/commit/d1f4f792f84cbcd9331b6499601d1fdb531838d4))
* add a utility for generating UUIDs ([cb23131](https://github.com/newrelic/gatsby-theme-newrelic/commit/cb23131f05d588ed43a2edf6aeba5b39b2844395))
* add back github buttons using split treatment ([b06a841](https://github.com/newrelic/gatsby-theme-newrelic/commit/b06a841ffcec675b9026d0376b288f7b27317d23))
* create a SplitIOProvider component to wrap the site ([ea76dda](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea76ddae2372e5cf4df4664e86c8096625a1038a))
* wrap the root element with splitio config if splitio config is defined ([e237db1](https://github.com/newrelic/gatsby-theme-newrelic/commit/e237db1f374e8817c706b2848eaa6b494fcf2191))



## 1.7.3 (2020-08-21)


### Bug Fixes

* use divider color for hr tags ([6808140](https://github.com/newrelic/gatsby-theme-newrelic/commit/68081401583b804c1cac1281483ed10bb960ae4d))



## 1.7.2 (2020-08-20)


### Bug Fixes

* **Overlay:** bump the z-index to ensure it sits on top of everything ([b6be442](https://github.com/newrelic/gatsby-theme-newrelic/commit/b6be442f6c2f36188596f072ce5bbe6d204d1631)), closes [/github.com/newrelic/opensource-website/pull/608#issuecomment-676723812](https://github.com//github.com/newrelic/opensource-website/pull/608/issues/issuecomment-676723812)



## 1.7.1 (2020-08-18)


### Bug Fixes

* make spacing between sign up and dark mode uniform ([487abbe](https://github.com/newrelic/gatsby-theme-newrelic/commit/487abbe4ce293c9d053ce7c13250b56bbacabd5e))
* remove cloud icon from sign up button ([b17528c](https://github.com/newrelic/gatsby-theme-newrelic/commit/b17528cc3182bcb1426e69c759057c45a9298ccc))
* remove keyframes for CSS that is not included in search experience ([e207f43](https://github.com/newrelic/gatsby-theme-newrelic/commit/e207f43eb0dca9706bfe7e74b729e1f26003e536))



# 1.7.0 (2020-08-17)


### Bug Fixes

* add cloud icon ([37a936a](https://github.com/newrelic/gatsby-theme-newrelic/commit/37a936aa86e2f8e8bd74548a1f5bcd4ab031957a))
* add global link hover styles ([2253092](https://github.com/newrelic/gatsby-theme-newrelic/commit/22530928a825b40b26e676515f1b973e1e9e31e6))
* better responsive styles for global header ([8090f12](https://github.com/newrelic/gatsby-theme-newrelic/commit/8090f12e1b55fb19a27428b02a24584a87d71a68))
* change the height of the global nav to 36px ([de28d3c](https://github.com/newrelic/gatsby-theme-newrelic/commit/de28d3cdfa16e9e8b3a917d873754eaf34d01b04))
* dont trigger overlay when using / if typing in an input or textarea ([c0d3d98](https://github.com/newrelic/gatsby-theme-newrelic/commit/c0d3d98e0f96fdf561312d5150cb9abcf7a8ad0d))
* make overlay content the same size as the underlying content ([0ff3125](https://github.com/newrelic/gatsby-theme-newrelic/commit/0ff31253ccd8c46d9870dd1c44b3094438023c97))
* more reliable escape listener ([4d69c9b](https://github.com/newrelic/gatsby-theme-newrelic/commit/4d69c9b3a0e5fe1a138300eb5711242b90c46b3b))
* prop type issue on Surface ([edca881](https://github.com/newrelic/gatsby-theme-newrelic/commit/edca88178d460d520a36edb48ed2ea6877b1eb03))


### Features

* **Button:** Deprecate plain button in favor of link button ([9d48498](https://github.com/newrelic/gatsby-theme-newrelic/commit/9d48498bd6a6b5d6a5eb3c642be22cef14ce35cf))
* add ability to summon search with / key ([4f05ff6](https://github.com/newrelic/gatsby-theme-newrelic/commit/4f05ff6e478fe0beb312602cd41a5a0f4200eeb6))
* add sign up button to header ([aac6ac0](https://github.com/newrelic/gatsby-theme-newrelic/commit/aac6ac059986c24e82a354e2cd25902f22918a3c))
* add sign up link to the global header ([69a412e](https://github.com/newrelic/gatsby-theme-newrelic/commit/69a412e7fb01fa58103a93c5825b251297ba21ee))
* export useKeyPress ([ef9e564](https://github.com/newrelic/gatsby-theme-newrelic/commit/ef9e5643c80cdfbb1b0c2c67642ae161c5db7847))
* update global brand colors ([d94717f](https://github.com/newrelic/gatsby-theme-newrelic/commit/d94717f9ab17f90e5c217594a5c3cd3bfaf8b03b))



# 1.6.0 (2020-08-07)


### Bug Fixes

* fix double scroll for search results overlay ([8ab69c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ab69c99f43dbafd19aaac40f55ebbab8bef0fba))
* fix enter key by using the query params to drive open/closed state ([215c068](https://github.com/newrelic/gatsby-theme-newrelic/commit/215c068bbd787241e213fa4f68e032db2031912b))


### Features

* add a new useQueryParams hook ([a3d66dd](https://github.com/newrelic/gatsby-theme-newrelic/commit/a3d66dd167a5137f359010c6a2dd9fe455422239))



## 1.5.1 (2020-08-06)


### Bug Fixes

* dont render overlay if not search capable ([0401bf3](https://github.com/newrelic/gatsby-theme-newrelic/commit/0401bf3fe820463d75d5b456c7177bd661eafa39))
* fix document undefined error when building the gatsby site ([24fcc75](https://github.com/newrelic/gatsby-theme-newrelic/commit/24fcc753b69a24d86b5d8c9e8bb49b16a5c37b3d))
* lint warning in GlobalHeader component ([45c5e23](https://github.com/newrelic/gatsby-theme-newrelic/commit/45c5e23a8abe0d23dfd1097de521baad77787b3c))
* use pointer cursor on all header icons ([bbaa53c](https://github.com/newrelic/gatsby-theme-newrelic/commit/bbaa53c2a1f4aa6081d59d2c4c3560a724962257))



# 1.5.0 (2020-08-06)


### Features

* updates URL when in overlay ([607a5a3](https://github.com/newrelic/gatsby-theme-newrelic/commit/607a5a37c21e2c07046f5cfce55324ac330e28bf))



# 1.4.0 (2020-08-03)


### Features

* external icon added to feather icon component ([b7c4ba8](https://github.com/newrelic/gatsby-theme-newrelic/commit/b7c4ba83444245d885996057e126ad54c323928e))
* overlay closes when pressing escape ([1d61aa5](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d61aa514eeaed664051d44c299d8fb56e013477))



# 1.3.0 (2020-08-03)


### Features

* create a Tag component ([e8e742e](https://github.com/newrelic/gatsby-theme-newrelic/commit/e8e742ecd5f9c1aac7f51d025e19cd692a5f6a97))
* create a TagList component ([86afd0f](https://github.com/newrelic/gatsby-theme-newrelic/commit/86afd0f6ac7d0beac814badf1724581d8f8f0ebd))



## 1.2.4 (2020-07-31)


### Bug Fixes

* Adjust styling on overlay to prevent bugs ([9fb53e1](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fb53e1903427767db5ad3e5294bf2fade33a508))
* dont index the header content in swiftype ([bdcd376](https://github.com/newrelic/gatsby-theme-newrelic/commit/bdcd3765e268679e7e1771228b30756d892242bb))


### Features

* add to demo site ([a7019f2](https://github.com/newrelic/gatsby-theme-newrelic/commit/a7019f2741619a6206b3157df3a3e330ca96ac62))
* overlay component and search in global nav ([c68a684](https://github.com/newrelic/gatsby-theme-newrelic/commit/c68a68476bcd16c99427b2b19b57b0111dd61bbc))
* portal component and animations on overlay ([192fb7d](https://github.com/newrelic/gatsby-theme-newrelic/commit/192fb7dad444d428dcbe63df2f13ef66055995a6))



## 1.2.3 (2020-07-28)


### Bug Fixes

* **Surface:** add dark mode box shadow ([4d2a207](https://github.com/newrelic/gatsby-theme-newrelic/commit/4d2a207c7f4e61d35d5b5d847874d6030538adf7))


### Features

* Add SwiftType site search ([4e23c07](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e23c07c594f349fbdf7631a58a4ec0a78322769))



## 1.2.2 (2020-07-28)


### Bug Fixes

* **Surface:** add prop type for interactive prop ([a7735cf](https://github.com/newrelic/gatsby-theme-newrelic/commit/a7735cfab39d8c71c83702efb20e36d72f54629c))



## 1.2.1 (2020-07-28)



# 1.2.0 (2020-07-28)


### Bug Fixes

* border-radius for code block in light mode ([395a2e7](https://github.com/newrelic/gatsby-theme-newrelic/commit/395a2e7d567f7c3f4b0dbb1e291473d6f7dda8ca))


### Features

* **gatsby-theme-newrelic:** add a Video component that handles wistia and youtube videos ([2bf61f6](https://github.com/newrelic/gatsby-theme-newrelic/commit/2bf61f675606c38c57a69e903060b5bcfd22dcb1))
* add a CodeBlock component ([3ed2ef7](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ed2ef70d7d3081ddde6d1c21209b6e3cd76be0f))
* add a formatCode helper that uses prettier to format the code ([0362e02](https://github.com/newrelic/gatsby-theme-newrelic/commit/0362e02ef65408e2435bc034a78fdf3f3be3e204))
* add a useClipboard hook ([5f70b1d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f70b1d8f4a29e25bf549300220d4ecd06e61da6))
* add a useFormattedCode hook ([1c831bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c831bce1a383f1104c191f6ffd9241055c1e627))
* add a useTimeout hook ([ea19dc4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea19dc40fc8e3748021a4a2ee9f932e6e9cc4002))
* add ability to specify custom className on CodeBlock ([ac690d9](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac690d91b9a448fc007428e383d7c180090026dc))
* add an MDXCodeBlock component for use within MDX ([38f08c1](https://github.com/newrelic/gatsby-theme-newrelic/commit/38f08c1005605106f3e458f0589d6130ab767486))
* add copy icon ([c9ee0eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9ee0ebb8ec8686034ce94f4716d49a4555f783d))
* add range and partition helpers for code highlighting ([1d1d42e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d1d42edeb7bd722ad988a56d585ba425dc0a7ee))
* Add search bar component ([ded596f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ded596f7f6e9862dde70256faca7832cba4f83d3))
* configure default languages and accept language config for prism plugin ([abc0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/abc0e76ef73dd323206d9d5f4da598134dad6cb4))
* create a Surface component for the basis of cards ([c8b803f](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8b803f8beaa2fa5736d2091b6f1c94c7f904b1c))
* documentation for API and configuration ([cf26e0b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf26e0b5a672008e2f817edaf44f329241ebc6d0))
* hamburger menu component ([c477ae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/c477ae5f5909ae4b839be9566cb32159cf906bb3))



## 1.1.10 (2020-07-21)



## 1.1.9 (2020-07-21)


### Bug Fixes

* **DarkModeToggle:** put in proper location ([ee64d95](https://github.com/newrelic/gatsby-theme-newrelic/commit/ee64d95ea21e167e69393574d8c45b2642a8df4d))
* **GlobalNavLink:** ensure current site is highlighted ([529426f](https://github.com/newrelic/gatsby-theme-newrelic/commit/529426f0014f9ae86b6cd2d0c1b1a2e2e27b75eb))
* **utils:** ensure constantize replaces global ([0e31e0e](https://github.com/newrelic/gatsby-theme-newrelic/commit/0e31e0e8d38bdcc7f225747185283675f866305c))
* adding react ([ebe1163](https://github.com/newrelic/gatsby-theme-newrelic/commit/ebe1163318c5778b97cbe4e8f1fd8c0acb55eac6))
* cache dependencies via yarn ([e1565a2](https://github.com/newrelic/gatsby-theme-newrelic/commit/e1565a289e277fd485bc15a6406d4b83fa89efc4))
* changed order of package json and fixed versioining ([e1b0aad](https://github.com/newrelic/gatsby-theme-newrelic/commit/e1b0aad1fcdeaa4448ee19f008af049bcab441de))
* load font families in head ([50b37ec](https://github.com/newrelic/gatsby-theme-newrelic/commit/50b37ec0696517e5c07a3abd2509bbec41448d8b))
* moved configuration files ([9b5ccfe](https://github.com/newrelic/gatsby-theme-newrelic/commit/9b5ccfe233e313885490e710b15393fc5b7a02d7))
* updated actions on definition ([c8fb91c](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8fb91cfd889f87876d739b17a6929374fc3614b))
* updated lerna versioning ([646a07d](https://github.com/newrelic/gatsby-theme-newrelic/commit/646a07d6fbcf71f353f765197be8edefa8008344))
* updating imports ([9329fda](https://github.com/newrelic/gatsby-theme-newrelic/commit/9329fdad0051990f2b9bd04e1905cfa526ed78c9))
* use absolute URL for registry ([bc9c0d4](https://github.com/newrelic/gatsby-theme-newrelic/commit/bc9c0d4e442f55494712092c28c19fc6aed4e6c4))


### Features

* **Button:** Adds button to gatsby theme ([1cd7a06](https://github.com/newrelic/gatsby-theme-newrelic/commit/1cd7a06a7f83c4a76ef75eb1ce8be12084206279))
* **DarkModeToggle:** add a DarkModeToggle component ([8a116f0](https://github.com/newrelic/gatsby-theme-newrelic/commit/8a116f06c414006c3c7240427a9269657479121c))
* **ExternalLink:** add an external link component ([8ff9ddb](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ff9ddbbfcf61423272691ffcc3a8ff69cbf38f7))
* **GlobalHeader:** add a GlobalHeader component ([203da7f](https://github.com/newrelic/gatsby-theme-newrelic/commit/203da7f436cf51246829846a586c422d84fb3734))
* **GlobalHeader:** add mobile breakpoints to hide various parts of the header ([247ce3b](https://github.com/newrelic/gatsby-theme-newrelic/commit/247ce3b85b83293839c0e55605fefd7352ae1a7b))
* **GlobalHeader:** use contentPadding ([e22be79](https://github.com/newrelic/gatsby-theme-newrelic/commit/e22be7903fb8ad30d37b1d398b4524873d8c66df))
* **GlobalHeader:** use maxWidth from GraphQL schema ([5faf594](https://github.com/newrelic/gatsby-theme-newrelic/commit/5faf5946d5f7eb4258dbc4535cd0081b0d554337))
* **NewRelicLogo:** add ability to omit text from New Relic logo ([c8a96db](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8a96dba60fe207f2d4c46b26185067f853f4a94))
* add ability to configure layout width ([d047369](https://github.com/newrelic/gatsby-theme-newrelic/commit/d0473699be49e7b71670f9a2586e5757f381d964))
* add contentPadding config for layout ([f7a4a69](https://github.com/newrelic/gatsby-theme-newrelic/commit/f7a4a69b7de8da397d2fd6899323d52737acfe05))
* **Icon:** add an Icon component ([80cdcad](https://github.com/newrelic/gatsby-theme-newrelic/commit/80cdcadaad9826113f7300930d1e93e6c5b4001d))
* **Icon:** add moon and sun icons ([da123ce](https://github.com/newrelic/gatsby-theme-newrelic/commit/da123ce4bd534cb16945ec8f404ba02df2eff966))
* add base gatsby config ([0956663](https://github.com/newrelic/gatsby-theme-newrelic/commit/09566638cfd64f32c1ebcb22263a43d3525c810b))
* add NewRelicLogo component ([2ff3335](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ff3335c34d0032b92be1c7d53429f9097a7b7c9))
* added eslint configuration ([c841a48](https://github.com/newrelic/gatsby-theme-newrelic/commit/c841a4866c929e83bf38749551dfe75d0deef4a0))
* added prettier to project ([c5d4f93](https://github.com/newrelic/gatsby-theme-newrelic/commit/c5d4f9389a73192f6cc1231510c0bb7124dacb22))
* configure lerna ([c7f23b2](https://github.com/newrelic/gatsby-theme-newrelic/commit/c7f23b287d7fc751ca4d19f642843e770cff3bf4))





## [1.8.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.8.1...v1.8.2) (2020-09-03)


### Bug Fixes

* **Button:** ensure all buttons are the same size regardless of border ([efeb5fe](https://github.com/newrelic/gatsby-theme-newrelic/commit/efeb5fec31344dd0ef0c6539ffd238b21947466c))
* track clicks to all actions in the global header under a common event ([314c365](https://github.com/newrelic/gatsby-theme-newrelic/commit/314c365877c1ad1ae615dd5be870041b40c9214a))





## [1.8.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.8.0...v1.8.1) (2020-09-03)


### Bug Fixes

* do not fall back to development settings when resolving env options ([1778665](https://github.com/newrelic/gatsby-theme-newrelic/commit/1778665b8bc3c528534eec3fcf27b8118f7aafbc))





# [1.8.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.7.3...v1.8.0) (2020-09-02)


### Bug Fixes

* always enable search ([f43f226](https://github.com/newrelic/gatsby-theme-newrelic/commit/f43f2266409fd1c4d81d72c62ea2814faf799d7f))
* small tweak to button transition ([5fba04a](https://github.com/newrelic/gatsby-theme-newrelic/commit/5fba04a31ae63d5efe3594bfc4cb00281d13ee0a))
* track clicks to the global header links ([de5a52c](https://github.com/newrelic/gatsby-theme-newrelic/commit/de5a52c5a6a2536f5529223b26d492eb59ed1be4))


### Features

* **Button:** add a new outline variant ([da8fdbd](https://github.com/newrelic/gatsby-theme-newrelic/commit/da8fdbdc18c4b2019e89f577aa8e6643bc06a839))
* add a useSplitTreatment hook to make getting a treatment easier ([4293736](https://github.com/newrelic/gatsby-theme-newrelic/commit/4293736f0b7d9bb7aa7883e7f43d98dfa7dc22ca))
* add a useUserId hook to generate a unique ID for the browser ([d1f4f79](https://github.com/newrelic/gatsby-theme-newrelic/commit/d1f4f792f84cbcd9331b6499601d1fdb531838d4))
* add a utility for generating UUIDs ([cb23131](https://github.com/newrelic/gatsby-theme-newrelic/commit/cb23131f05d588ed43a2edf6aeba5b39b2844395))
* add back github buttons using split treatment ([b06a841](https://github.com/newrelic/gatsby-theme-newrelic/commit/b06a841ffcec675b9026d0376b288f7b27317d23))
* create a SplitIOProvider component to wrap the site ([ea76dda](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea76ddae2372e5cf4df4664e86c8096625a1038a))
* wrap the root element with splitio config if splitio config is defined ([e237db1](https://github.com/newrelic/gatsby-theme-newrelic/commit/e237db1f374e8817c706b2848eaa6b494fcf2191))





## [1.7.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.7.2...v1.7.3) (2020-08-21)


### Bug Fixes

* use divider color for hr tags ([6808140](https://github.com/newrelic/gatsby-theme-newrelic/commit/68081401583b804c1cac1281483ed10bb960ae4d))





## [1.7.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.7.1...v1.7.2) (2020-08-20)


### Bug Fixes

* **Overlay:** bump the z-index to ensure it sits on top of everything ([b6be442](https://github.com/newrelic/gatsby-theme-newrelic/commit/b6be442f6c2f36188596f072ce5bbe6d204d1631)), closes [/github.com/newrelic/opensource-website/pull/608#issuecomment-676723812](https://github.com//github.com/newrelic/opensource-website/pull/608/issues/issuecomment-676723812)





## [1.7.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.7.0...v1.7.1) (2020-08-18)


### Bug Fixes

* make spacing between sign up and dark mode uniform ([487abbe](https://github.com/newrelic/gatsby-theme-newrelic/commit/487abbe4ce293c9d053ce7c13250b56bbacabd5e))
* remove cloud icon from sign up button ([b17528c](https://github.com/newrelic/gatsby-theme-newrelic/commit/b17528cc3182bcb1426e69c759057c45a9298ccc))
* remove keyframes for CSS that is not included in search experience ([e207f43](https://github.com/newrelic/gatsby-theme-newrelic/commit/e207f43eb0dca9706bfe7e74b729e1f26003e536))





# [1.7.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.6.0...v1.7.0) (2020-08-17)


### Bug Fixes

* add cloud icon ([37a936a](https://github.com/newrelic/gatsby-theme-newrelic/commit/37a936aa86e2f8e8bd74548a1f5bcd4ab031957a))
* add global link hover styles ([2253092](https://github.com/newrelic/gatsby-theme-newrelic/commit/22530928a825b40b26e676515f1b973e1e9e31e6))
* better responsive styles for global header ([8090f12](https://github.com/newrelic/gatsby-theme-newrelic/commit/8090f12e1b55fb19a27428b02a24584a87d71a68))
* change the height of the global nav to 36px ([de28d3c](https://github.com/newrelic/gatsby-theme-newrelic/commit/de28d3cdfa16e9e8b3a917d873754eaf34d01b04))
* dont trigger overlay when using / if typing in an input or textarea ([c0d3d98](https://github.com/newrelic/gatsby-theme-newrelic/commit/c0d3d98e0f96fdf561312d5150cb9abcf7a8ad0d))
* make overlay content the same size as the underlying content ([0ff3125](https://github.com/newrelic/gatsby-theme-newrelic/commit/0ff31253ccd8c46d9870dd1c44b3094438023c97))
* more reliable escape listener ([4d69c9b](https://github.com/newrelic/gatsby-theme-newrelic/commit/4d69c9b3a0e5fe1a138300eb5711242b90c46b3b))
* prop type issue on Surface ([edca881](https://github.com/newrelic/gatsby-theme-newrelic/commit/edca88178d460d520a36edb48ed2ea6877b1eb03))


### Features

* **Button:** Deprecate plain button in favor of link button ([9d48498](https://github.com/newrelic/gatsby-theme-newrelic/commit/9d48498bd6a6b5d6a5eb3c642be22cef14ce35cf))
* add ability to summon search with / key ([4f05ff6](https://github.com/newrelic/gatsby-theme-newrelic/commit/4f05ff6e478fe0beb312602cd41a5a0f4200eeb6))
* add sign up button to header ([aac6ac0](https://github.com/newrelic/gatsby-theme-newrelic/commit/aac6ac059986c24e82a354e2cd25902f22918a3c))
* add sign up link to the global header ([69a412e](https://github.com/newrelic/gatsby-theme-newrelic/commit/69a412e7fb01fa58103a93c5825b251297ba21ee))
* export useKeyPress ([ef9e564](https://github.com/newrelic/gatsby-theme-newrelic/commit/ef9e5643c80cdfbb1b0c2c67642ae161c5db7847))
* update global brand colors ([d94717f](https://github.com/newrelic/gatsby-theme-newrelic/commit/d94717f9ab17f90e5c217594a5c3cd3bfaf8b03b))





# [1.6.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.5.1...v1.6.0) (2020-08-07)


### Bug Fixes

* fix double scroll for search results overlay ([8ab69c9](https://github.com/newrelic/gatsby-theme-newrelic/commit/8ab69c99f43dbafd19aaac40f55ebbab8bef0fba))
* fix enter key by using the query params to drive open/closed state ([215c068](https://github.com/newrelic/gatsby-theme-newrelic/commit/215c068bbd787241e213fa4f68e032db2031912b))


### Features

* add a new useQueryParams hook ([a3d66dd](https://github.com/newrelic/gatsby-theme-newrelic/commit/a3d66dd167a5137f359010c6a2dd9fe455422239))





## [1.5.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.5.0...v1.5.1) (2020-08-06)


### Bug Fixes

* dont render overlay if not search capable ([0401bf3](https://github.com/newrelic/gatsby-theme-newrelic/commit/0401bf3fe820463d75d5b456c7177bd661eafa39))
* fix document undefined error when building the gatsby site ([24fcc75](https://github.com/newrelic/gatsby-theme-newrelic/commit/24fcc753b69a24d86b5d8c9e8bb49b16a5c37b3d))
* lint warning in GlobalHeader component ([45c5e23](https://github.com/newrelic/gatsby-theme-newrelic/commit/45c5e23a8abe0d23dfd1097de521baad77787b3c))
* use pointer cursor on all header icons ([bbaa53c](https://github.com/newrelic/gatsby-theme-newrelic/commit/bbaa53c2a1f4aa6081d59d2c4c3560a724962257))





# [1.5.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.4.0...v1.5.0) (2020-08-06)


### Bug Fixes

* Adjust styling on overlay to prevent bugs ([9fb53e1](https://github.com/newrelic/gatsby-theme-newrelic/commit/9fb53e1903427767db5ad3e5294bf2fade33a508))


### Features

* Add SwiftType site search ([4e23c07](https://github.com/newrelic/gatsby-theme-newrelic/commit/4e23c07c594f349fbdf7631a58a4ec0a78322769))
* add to demo site ([a7019f2](https://github.com/newrelic/gatsby-theme-newrelic/commit/a7019f2741619a6206b3157df3a3e330ca96ac62))
* overlay closes when pressing escape ([1d61aa5](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d61aa514eeaed664051d44c299d8fb56e013477))
* overlay component and search in global nav ([c68a684](https://github.com/newrelic/gatsby-theme-newrelic/commit/c68a68476bcd16c99427b2b19b57b0111dd61bbc))
* portal component and animations on overlay ([192fb7d](https://github.com/newrelic/gatsby-theme-newrelic/commit/192fb7dad444d428dcbe63df2f13ef66055995a6))
* updates URL when in overlay ([607a5a3](https://github.com/newrelic/gatsby-theme-newrelic/commit/607a5a37c21e2c07046f5cfce55324ac330e28bf))





# [1.4.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.3.0...v1.4.0) (2020-08-03)


### Features

* external icon added to feather icon component ([b7c4ba8](https://github.com/newrelic/gatsby-theme-newrelic/commit/b7c4ba83444245d885996057e126ad54c323928e))





# [1.3.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.4...v1.3.0) (2020-08-03)


### Features

* create a Tag component ([e8e742e](https://github.com/newrelic/gatsby-theme-newrelic/commit/e8e742ecd5f9c1aac7f51d025e19cd692a5f6a97))
* create a TagList component ([86afd0f](https://github.com/newrelic/gatsby-theme-newrelic/commit/86afd0f6ac7d0beac814badf1724581d8f8f0ebd))





## [1.2.4](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.3...v1.2.4) (2020-07-31)


### Bug Fixes

* dont index the header content in swiftype ([bdcd376](https://github.com/newrelic/gatsby-theme-newrelic/commit/bdcd3765e268679e7e1771228b30756d892242bb))





## [1.2.3](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.2...v1.2.3) (2020-07-28)


### Bug Fixes

* **Surface:** add dark mode box shadow ([4d2a207](https://github.com/newrelic/gatsby-theme-newrelic/commit/4d2a207c7f4e61d35d5b5d847874d6030538adf7))





## [1.2.2](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.1...v1.2.2) (2020-07-28)


### Bug Fixes

* **Surface:** add prop type for interactive prop ([a7735cf](https://github.com/newrelic/gatsby-theme-newrelic/commit/a7735cfab39d8c71c83702efb20e36d72f54629c))





## [1.2.1](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.2.0...v1.2.1) (2020-07-28)

**Note:** Version bump only for package gatsby-theme-newrelic





# [1.2.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.1.10...v1.2.0) (2020-07-28)


### Bug Fixes

* border-radius for code block in light mode ([395a2e7](https://github.com/newrelic/gatsby-theme-newrelic/commit/395a2e7d567f7c3f4b0dbb1e291473d6f7dda8ca))


### Features

* **gatsby-theme-newrelic:** add a Video component that handles wistia and youtube videos ([2bf61f6](https://github.com/newrelic/gatsby-theme-newrelic/commit/2bf61f675606c38c57a69e903060b5bcfd22dcb1))
* add a CodeBlock component ([3ed2ef7](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ed2ef70d7d3081ddde6d1c21209b6e3cd76be0f))
* add a formatCode helper that uses prettier to format the code ([0362e02](https://github.com/newrelic/gatsby-theme-newrelic/commit/0362e02ef65408e2435bc034a78fdf3f3be3e204))
* add a useClipboard hook ([5f70b1d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f70b1d8f4a29e25bf549300220d4ecd06e61da6))
* add a useFormattedCode hook ([1c831bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c831bce1a383f1104c191f6ffd9241055c1e627))
* add a useTimeout hook ([ea19dc4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea19dc40fc8e3748021a4a2ee9f932e6e9cc4002))
* add ability to specify custom className on CodeBlock ([ac690d9](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac690d91b9a448fc007428e383d7c180090026dc))
* add an MDXCodeBlock component for use within MDX ([38f08c1](https://github.com/newrelic/gatsby-theme-newrelic/commit/38f08c1005605106f3e458f0589d6130ab767486))
* add copy icon ([c9ee0eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9ee0ebb8ec8686034ce94f4716d49a4555f783d))
* add range and partition helpers for code highlighting ([1d1d42e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d1d42edeb7bd722ad988a56d585ba425dc0a7ee))
* Add search bar component ([ded596f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ded596f7f6e9862dde70256faca7832cba4f83d3))
* configure default languages and accept language config for prism plugin ([abc0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/abc0e76ef73dd323206d9d5f4da598134dad6cb4))
* create a Surface component for the basis of cards ([c8b803f](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8b803f8beaa2fa5736d2091b6f1c94c7f904b1c))
* documentation for API and configuration ([cf26e0b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf26e0b5a672008e2f817edaf44f329241ebc6d0))
* hamburger menu component ([c477ae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/c477ae5f5909ae4b839be9566cb32159cf906bb3))





# [1.3.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.1.10...v1.3.0) (2020-07-28)


### Bug Fixes

* border-radius for code block in light mode ([395a2e7](https://github.com/newrelic/gatsby-theme-newrelic/commit/395a2e7d567f7c3f4b0dbb1e291473d6f7dda8ca))


### Features

* **gatsby-theme-newrelic:** add a Video component that handles wistia and youtube videos ([2bf61f6](https://github.com/newrelic/gatsby-theme-newrelic/commit/2bf61f675606c38c57a69e903060b5bcfd22dcb1))
* add a CodeBlock component ([3ed2ef7](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ed2ef70d7d3081ddde6d1c21209b6e3cd76be0f))
* add a formatCode helper that uses prettier to format the code ([0362e02](https://github.com/newrelic/gatsby-theme-newrelic/commit/0362e02ef65408e2435bc034a78fdf3f3be3e204))
* add a useClipboard hook ([5f70b1d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f70b1d8f4a29e25bf549300220d4ecd06e61da6))
* add a useFormattedCode hook ([1c831bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c831bce1a383f1104c191f6ffd9241055c1e627))
* add a useTimeout hook ([ea19dc4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea19dc40fc8e3748021a4a2ee9f932e6e9cc4002))
* add ability to specify custom className on CodeBlock ([ac690d9](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac690d91b9a448fc007428e383d7c180090026dc))
* add an MDXCodeBlock component for use within MDX ([38f08c1](https://github.com/newrelic/gatsby-theme-newrelic/commit/38f08c1005605106f3e458f0589d6130ab767486))
* add copy icon ([c9ee0eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9ee0ebb8ec8686034ce94f4716d49a4555f783d))
* add range and partition helpers for code highlighting ([1d1d42e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d1d42edeb7bd722ad988a56d585ba425dc0a7ee))
* Add search bar component ([ded596f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ded596f7f6e9862dde70256faca7832cba4f83d3))
* configure default languages and accept language config for prism plugin ([abc0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/abc0e76ef73dd323206d9d5f4da598134dad6cb4))
* create a Surface component for the basis of cards ([c8b803f](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8b803f8beaa2fa5736d2091b6f1c94c7f904b1c))
* documentation for API and configuration ([cf26e0b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf26e0b5a672008e2f817edaf44f329241ebc6d0))
* hamburger menu component ([c477ae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/c477ae5f5909ae4b839be9566cb32159cf906bb3))





# [1.2.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/v1.1.10...v1.2.0) (2020-07-28)


### Bug Fixes

* border-radius for code block in light mode ([395a2e7](https://github.com/newrelic/gatsby-theme-newrelic/commit/395a2e7d567f7c3f4b0dbb1e291473d6f7dda8ca))


### Features

* **gatsby-theme-newrelic:** add a Video component that handles wistia and youtube videos ([2bf61f6](https://github.com/newrelic/gatsby-theme-newrelic/commit/2bf61f675606c38c57a69e903060b5bcfd22dcb1))
* add a CodeBlock component ([3ed2ef7](https://github.com/newrelic/gatsby-theme-newrelic/commit/3ed2ef70d7d3081ddde6d1c21209b6e3cd76be0f))
* add a formatCode helper that uses prettier to format the code ([0362e02](https://github.com/newrelic/gatsby-theme-newrelic/commit/0362e02ef65408e2435bc034a78fdf3f3be3e204))
* add a useClipboard hook ([5f70b1d](https://github.com/newrelic/gatsby-theme-newrelic/commit/5f70b1d8f4a29e25bf549300220d4ecd06e61da6))
* add a useFormattedCode hook ([1c831bc](https://github.com/newrelic/gatsby-theme-newrelic/commit/1c831bce1a383f1104c191f6ffd9241055c1e627))
* add a useTimeout hook ([ea19dc4](https://github.com/newrelic/gatsby-theme-newrelic/commit/ea19dc40fc8e3748021a4a2ee9f932e6e9cc4002))
* add ability to specify custom className on CodeBlock ([ac690d9](https://github.com/newrelic/gatsby-theme-newrelic/commit/ac690d91b9a448fc007428e383d7c180090026dc))
* add an MDXCodeBlock component for use within MDX ([38f08c1](https://github.com/newrelic/gatsby-theme-newrelic/commit/38f08c1005605106f3e458f0589d6130ab767486))
* add copy icon ([c9ee0eb](https://github.com/newrelic/gatsby-theme-newrelic/commit/c9ee0ebb8ec8686034ce94f4716d49a4555f783d))
* add range and partition helpers for code highlighting ([1d1d42e](https://github.com/newrelic/gatsby-theme-newrelic/commit/1d1d42edeb7bd722ad988a56d585ba425dc0a7ee))
* Add search bar component ([ded596f](https://github.com/newrelic/gatsby-theme-newrelic/commit/ded596f7f6e9862dde70256faca7832cba4f83d3))
* configure default languages and accept language config for prism plugin ([abc0e76](https://github.com/newrelic/gatsby-theme-newrelic/commit/abc0e76ef73dd323206d9d5f4da598134dad6cb4))
* create a Surface component for the basis of cards ([c8b803f](https://github.com/newrelic/gatsby-theme-newrelic/commit/c8b803f8beaa2fa5736d2091b6f1c94c7f904b1c))
* documentation for API and configuration ([cf26e0b](https://github.com/newrelic/gatsby-theme-newrelic/commit/cf26e0b5a672008e2f817edaf44f329241ebc6d0))
* hamburger menu component ([c477ae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/c477ae5f5909ae4b839be9566cb32159cf906bb3))





## 1.1.10 (2020-07-21)

**Note:** Version bump only for package gatsby-theme-newrelic





## 1.1.9 (2020-07-21)

**Note:** Version bump only for package gatsby-theme-newrelic
