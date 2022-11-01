const fs = require('fs');

const reformatted_data = JSON.parse(fs.readFileSync('./demo/docgen_output.json'));
const docgen_values = Object.values(reformatted_data);

console.log(docgen_values[31].props);


// PROPS BEFORE : {
//   children: { type: { name: 'node' }, required: false, description: '' },
//   whatever: { type: { name: 'node' }, required: false, description: '' }
// }


// PROPS AFTER : 
// [
//     { name: 'children', type: 'node', required: false, description: '' },
//     { name: 'whatever', type: 'node', required: false, description: '' }
// ]

