import React from "react";
import { connect } from "react-redux";
import { reset } from "redux-form";
import { node, string, func } from "prop-types";

const ResetButton = ( { children, dispatch, form } ) => (
    <button type="button" className="button is-secondary has-margin-left-1" onClick={ () => dispatch( reset( form ) ) }>{ children }</button>
);

ResetButton.defaultProps = {
    children: null,
};

ResetButton.propTypes = {
    children: node,
    dispatch: func.isRequired,
    form: string.isRequired,
};

export default connect()( ResetButton );
