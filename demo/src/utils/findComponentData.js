const findComponentData = (componentName, gqlData) => {
  const result = gqlData.find((obj) => obj.node.displayName === componentName);
  return result.node;
};

export default findComponentData;
