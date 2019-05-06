import React from "react";
import PropTypes from "prop-types";

const Member = ( {
    firstname,
    lastname,
    remove,
} ) => (
    <div className="list-item">
        <span>
            <b>{ `${ firstname } ${ lastname }` }</b>
        </span>
        <button className="button is-small is-pulled-right is-danger" type="button" onClick={ remove }>
            <i className="fas fa-trash" />
        </button>
    </div>
);

Member.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
};

export default Member;
