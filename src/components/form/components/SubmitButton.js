import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";
import { node, string, func } from "prop-types";

const SubmitButton = ( { children, dispatch, form } ) => (
    <button type="button" className="button is-primary" onClick={ () => dispatch( submit( form ) ) }>{ children }</button>
);

SubmitButton.defaultProps = {
    children: null,
};

SubmitButton.propTypes = {
    children: node,
    dispatch: func.isRequired,
    form: string.isRequired,
};

export default connect()( SubmitButton );
