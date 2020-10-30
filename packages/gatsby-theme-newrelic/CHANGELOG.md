# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





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
* hamburger menu component ([c477ae5](https://github.com/newrelic/gatsby-theme-newrelic/commit/c477ae5f5909ae4b839be9566cb32159cf906bb3))





## 1.1.10 (2020-07-21)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





## 1.1.9 (2020-07-21)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





## 0.1.8 (2020-07-20)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





## 0.1.7 (2020-07-20)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





## 0.1.6 (2020-07-20)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





## 0.1.5 (2020-07-20)


### Bug Fixes

* use absolute URL for registry ([bc9c0d4](https://github.com/newrelic/gatsby-theme-newrelic/commit/bc9c0d4e442f55494712092c28c19fc6aed4e6c4))





## 0.1.4 (2020-07-20)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





## 0.1.3 (2020-07-20)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





## 0.1.2 (2020-07-20)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





## 0.1.1 (2020-07-20)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic





# [0.1.0](https://github.com/newrelic/gatsby-theme-newrelic/compare/@newrelic/gatsby-theme-newrelic@1.0.1...@newrelic/gatsby-theme-newrelic@0.1.0) (2020-07-20)


### Bug Fixes

* adding react ([ebe1163](https://github.com/newrelic/gatsby-theme-newrelic/commit/ebe1163318c5778b97cbe4e8f1fd8c0acb55eac6))
* load font families in head ([50b37ec](https://github.com/newrelic/gatsby-theme-newrelic/commit/50b37ec0696517e5c07a3abd2509bbec41448d8b))
* moved configuration files ([9b5ccfe](https://github.com/newrelic/gatsby-theme-newrelic/commit/9b5ccfe233e313885490e710b15393fc5b7a02d7))
* updating imports ([9329fda](https://github.com/newrelic/gatsby-theme-newrelic/commit/9329fdad0051990f2b9bd04e1905cfa526ed78c9))


### Features

* add NewRelicLogo component ([2ff3335](https://github.com/newrelic/gatsby-theme-newrelic/commit/2ff3335c34d0032b92be1c7d53429f9097a7b7c9))
* **Button:** Adds button to gatsby theme ([1cd7a06](https://github.com/newrelic/gatsby-theme-newrelic/commit/1cd7a06a7f83c4a76ef75eb1ce8be12084206279))
* add base gatsby config ([0956663](https://github.com/newrelic/gatsby-theme-newrelic/commit/09566638cfd64f32c1ebcb22263a43d3525c810b))





## 1.0.1 (2020-07-15)

**Note:** Version bump only for package @newrelic/gatsby-theme-newrelic
