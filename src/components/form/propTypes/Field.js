import PropTypes from "prop-types";

const Field = PropTypes.shape( {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    default: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.arrayOf( PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ) ),
    ] ),
    options: PropTypes.arrayOf( PropTypes.shape( {
        value: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ).isRequired,
        label: PropTypes.oneOfType( [
            PropTypes.string,
            PropTypes.number,
        ] ).isRequired,
    } ) ),
    validations: PropTypes.arrayOf( PropTypes.func ),
} );

export default Field;
