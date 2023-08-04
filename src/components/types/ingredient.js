import PropTypes from 'prop-types';

export const ingredientPropTypes = PropTypes.shape({
    calories      : PropTypes.number.isRequired,
    carbohydrates : PropTypes.number.isRequired,
    fat           : PropTypes.number.isRequired,
    image         : PropTypes.string.isRequired,
    image_large   : PropTypes.string,
    image_mobile  : PropTypes.string.isRequired,
    name          : PropTypes.string.isRequired,
    price         : PropTypes.number.isRequired,
    proteins      : PropTypes.number.isRequired,
    type          : PropTypes.string.isRequired,
});