module.exports = ({
  createNode,
  createNodeId,
  createContentDigest,
  resource: { title, url },
  parent,
}) => {
  const data = { title, url };

  const node = {
    ...data,
    id: createNodeId(`RelatedResource-${url}`),
    parent,
    children: [],
    plugin: '@newrelic/gatsby-theme-newrelic',
    internal: {
      type: 'RelatedResource',
      content: JSON.stringify(data),
      contentDigest: createContentDigest(data),
    },
  };

  createNode(node);

  return node;
};
