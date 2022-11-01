const fs = require('fs');

const reformatted_data = JSON.parse(
  fs.readFileSync('./demo/docgen_output.json')
);
const docgen_values = Object.values(reformatted_data);

const docgenUpdatedProps = docgen_values.map((item) => {
  if (item.props) {
    const newProps = item.props;
    const reduceProps = Object.entries(newProps).reduce((acc, val) => {
      acc = [
        ...acc,
        {
          name: val[0],
          type: val[1].type.name,
          required: val[1].required,
          description: val[1].description,
        },
      ];
      return acc;
    }, []);
    item.props = reduceProps;
    return item;
  } else {
    return item;
  }
});

fs.writeFileSync(
  './demo/src/docs/documentation.json',
  JSON.stringify(docgenUpdatedProps)
);
