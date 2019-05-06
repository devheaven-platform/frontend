import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const Milestone = ( {
    name,
    description,
    date,
    remove,
} ) => (
    <div className="list-item">
        <span>
            <b>{ `${ name } ` }</b>
            { moment( date ).format( "DD-MM-YYYY" ) }
        </span>
        <button className="button is-small is-pulled-right is-danger" type="button" onClick={ remove }>
            <i className="fas fa-trash" />
        </button>
        <p>
            { description }
        </p>
    </div>
);

Milestone.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
};

Milestone.defaultProps = {
    description: "",
};

export default Milestone;
