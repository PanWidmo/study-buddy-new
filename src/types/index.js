import PropTypes from 'prop-types';

export const UserShape = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string,
  average: PropTypes.number,
};
