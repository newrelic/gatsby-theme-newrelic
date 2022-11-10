import PropTypes from 'prop-types';

export const docgenJson = PropTypes.shape({
  allJson: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          description: PropTypes.string,
          displayName: PropTypes.string,
          props: PropTypes.arrayOf(
            PropTypes.shape({
              description: PropTypes.string,
              name: PropTypes.string,
              required: PropTypes.bool,
              type: PropTypes.string,
            })
          ),
        }),
      })
    ),
  }),
});
