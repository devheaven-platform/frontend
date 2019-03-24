import React from "react";
import { reduxForm } from "redux-form";
import {
    string,
    func,
    node,
    bool,
} from "prop-types";

import SubmitButton from "./components/SubmitButton";
import ResetButton from "./components/ResetButton";

const Form = ( {
    form,
    onSubmit,
    children,
    enableSubmitButton,
    enableResetButton,
} ) => (
    <form onSubmit={ onSubmit }>
        { children }
        { enableSubmitButton && <SubmitButton form={ form }>Submit</SubmitButton> }
        { enableResetButton && <ResetButton form={ form }>Reset</ResetButton> }
    </form>
);

Form.defaultProps = {
    children: null,
    enableSubmitButton: false,
    enableResetButton: false,
};

Form.propTypes = {
    form: string.isRequired,
    onSubmit: func.isRequired,
    children: node,
    enableSubmitButton: bool,
    enableResetButton: bool,
};

export default reduxForm()( Form );
