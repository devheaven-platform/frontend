import PropTypes from "prop-types";

const Column = PropTypes.shape( {
    label: PropTypes.string,
    key: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    filter: PropTypes.string,
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
    icon: PropTypes.string,
    link: PropTypes.shape( {
        to: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    } ),
    actions: PropTypes.arrayOf( PropTypes.shape( {
        label: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    } ) ),
} );

export default Column;
