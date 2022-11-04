const SCHEMA_CUSTOMIZATION_TYPES = `
  type SiteLayout @dontInfer {
    contentPadding: String
    maxWidth: String
    mobileBreakpoint: String
  }

  type MdxFrontmatter @infer {
    startDate: Date @dateformat(formatString: "YYYY-MM-DD")
    endDate: Date @dateformat(formatString: "YYYY-MM-DD")
  }

  type SiteSiteMetadata {
    repository: String
    branch: String!
    contributingUrl: String
    title: String
    titleTemplate: String
  }

  type Locale implements Node @dontInfer {
    name: String!
    localName: String!
    locale: String!
    hrefLang: String!
    isDefault: Boolean!
  }

  type RelatedResource implements Node {
    id: ID!
    title: String!
    url: String!
  }

  type NewRelicThemeConfig implements Node {
    env: String!
    relatedResources: NewRelicThemeRelatedResourceConfig!
    tessen: NewRelicThemeTessenConfig
    signup: NewRelicThemeSignupConfig
    shouldUpdateScroll: RoutesAllowingScroll
    feedback: NewRelicThemeFeedbackConfig
  }

  type NewRelicThemeRelatedResourceConfig {
    labels: [RelatedResourceLabel!]!
  }

  type RelatedResourceLabel {
    baseUrl: String!
    label: String!
  }

  type NewRelicThemeTessenConfig {
    product: String
    subproduct: String
  }

  type NewRelicThemeSignupConfig {
    environment: String!
    reCaptchaToken: String!
    signupURL: String! 
  }

  type NewRelicThemeFeedbackConfig {
    environment: String!
    reCaptchaToken: String!
  }

  type RoutesAllowingScroll {
    routes: [String!]
  }
`;

module.exports = { SCHEMA_CUSTOMIZATION_TYPES };
