const defaultFilters = [
  { name: 'docs', isSelected: false },
  { name: 'developer', isSelected: false },
  { name: 'opensource', isSelected: false },
  { name: 'quickstarts', isSelected: false },
];

const defaultSearchByFilters = [
  { name: 'title', isSelected: false },
  { name: 'body', isSelected: false },
];

export const DEFAULT_FILTER_TYPES = [
  { type: 'source', defaultFilters: defaultFilters },
  { type: 'searchBy', defaultFilters: defaultSearchByFilters },
];

export { default } from './SearchDropdown';
